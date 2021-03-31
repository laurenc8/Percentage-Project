import React from 'react';
import { Group } from '@visx/group';
import { Pack, hierarchy } from '@visx/hierarchy';
import { scaleQuantize } from '@visx/scale';
import rawData, { Exoplanets as Datum } from '@visx/mock-data/lib/mocks/exoplanets';
import { people } from '../constants/people';
// import { View, Dimensions } from 'react-native'
import { withTooltip, Tooltip, defaultStyles } from '@visx/tooltip';
// let {width:W,height:H} = Dimensions.get("window");

const tooltipStyles = {
  ...defaultStyles,
  minWidth: 60,
  backgroundColor: 'rgba(0,0,0,0.9)',
  color: 'white',
};

let tooltipTimeout;

function extent(allData, value) {
  return [Math.min(...allData.map(value)), Math.max(...allData.map(value))];
}

const filteredPlanets = rawData.filter(d => d.distance !== 0 && d.distance != null);
const pack = { children: filteredPlanets, name: 'root', radius: 0, distance: 0 };

const colorScale = scaleQuantize({
  domain: extent(rawData, d => d.radius),
  range: ['#ffe108', '#ffc10e', '#fd6d6f', '#855af2', '#11d2f9', '#49f4e7'],
});

const root = hierarchy(pack)
  .sum(d => d.radius * d.radius)
  .sort(
    (a, b) =>
      // sort by hierarchy, then distance
      (a?.data ? 1 : -1) - (b?.data ? 1 : -1) ||
      (a.children ? 1 : -1) - (b.children ? 1 : -1) ||
      (a.data.distance == null ? -1 : 1) - (b.data.distance == null ? -1 : 1) ||
      a.data.distance - b.data.distance,
  );

const defaultMargin = { top: 10, left: 30, right: 40, bottom: 80 };

// export var PackProps = {
//   width: number;
//   height: number;
//   margin: { top; right; bottom; left };
// };

function addXY(person){
  person["x"] = Math.random();
  person["y"] = Math.random();
}
people.forEach(addXY);
console.log(people);

export default withTooltip(
  ({
    width,
    height,
    margin = defaultMargin,
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  }) => {

    return width < 10 ? null : (
      <div>
        <svg width={width} height={height}>
          <rect width={width} height={height} rx={14} fill="#ffffff" />

          <Pack root={root}>
            {packData => {
              const circles = people; //packData.descendants().slice(2); // skip outer hierarchies
              return (
                <Group top={height} left={width}>
                  {circles.map((circle, i) => (
                    <circle
                      key={`circle-${i}`}
                      r={15}
                      cx={(width*0.8)*circle.x - width*0.9}
                      cy={(height*0.8)*circle.y - height*0.9} //{circle.year === '2022' ? width : width*Math.random()} //pick random place in 1/4 of screen by year
                      fill={(circle.color)}
                      onMouseLeave={() => {
                        tooltipTimeout = window.setTimeout(() => {
                          hideTooltip();
                        }, 300);
                      }}
                      {...console.log(circle.x)}
                      onMouseMove={() => {
                        if (tooltipTimeout) clearTimeout(tooltipTimeout);
                        {console.log(circle.x)}
                        const top = circle.y*height*0.8 
                        const left = circle.x*width*0.8
                        showTooltip({
                          tooltipData: circle.name,
                          tooltipTop: top,
                          tooltipLeft: left,
                        });
                      }}
                    />
                  ))}
                </Group>
              );
            }}
          </Pack>
        </svg>
        {tooltipOpen && tooltipData && (
          <Tooltip top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
            {/* <div style={{ color: colorScale(tooltipData.key) }}>
              <strong>{tooltipData.key}</strong>
            </div> */}
            {console.log("tooltip", tooltipData)}
            <div>{tooltipData}</div>
            {/* <div>
              <small>{getCategory(tooltipData.bar.data)}</small>
            </div> */}
          </Tooltip>
        )}
      </div>
    );
  },
);