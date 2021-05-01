import React from 'react';
import { Group } from '@visx/group';
import { Pack, hierarchy } from '@visx/hierarchy';
import rawData from '@visx/mock-data/lib/mocks/exoplanets';
import { featureArray } from '../constants/features';
import { withTooltip, Tooltip, defaultStyles } from '@visx/tooltip';

const tooltipStyles = {
  ...defaultStyles,
  minWidth: 60,
  backgroundColor: 'rgba(0,0,0,0.9)',
  color: 'white',
};

let tooltipTimeout;

// function extent(allData, value) {
//   return [Math.min(...allData.map(value)), Math.max(...allData.map(value))];
// }

// const filteredPlanets = rawData.filter(d => d.distance !== 0 && d.distance != null);
// const pack = { children: filteredPlanets, name: 'root', radius: 0, distance: 0 };

// const root = hierarchy(pack)
//   .sum(d => d.radius * d.radius)
//   .sort(
//     (a, b) =>
//       // sort by hierarchy, then distance
//       (a?.data ? 1 : -1) - (b?.data ? 1 : -1) ||
//       (a.children ? 1 : -1) - (b.children ? 1 : -1) ||
//       (a.data.distance == null ? -1 : 1) - (b.data.distance == null ? -1 : 1) ||
//       a.data.distance - b.data.distance,
//   );

const defaultMargin = { top: 10, left: 30, right: 40, bottom: 80 };

function addXY(person){
  person["x"] = Math.random();
  person["y"] = Math.random();
}
// function each(obj, fn) { Object.keys(obj).forEach(key => fn(obj[key])); }
// each(features, addXY_fromAry)
featureArray.forEach(addXY);
// Object.prototype.map = function(f) { return Object.keys(this).map(key => f(this[key], key)); }

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
          {/* <Pack root={root}>
            {packData => {
              const circles = featureArray; //packData.descendants().slice(2); // skip outer hierarchies
              return (
                <Group top={height} left={width}>
                  {circles.map((circle, i) => (
                    <circle
                      key={`circle-${i}`}
                      r={20}
                      cx={(width*0.8)*circle.x - width*0.9}
                      cy={(height*0.8)*circle.y - height*0.9} //{circle.year === '2022' ? width : width*Math.random()} //pick random place in 1/4 of screen by year
                      fill={circle.color}
                    />
                  ))}
                </Group>
              );
            }}
          </Pack> */}
        </svg>
        {featureArray.map((person, i) => (person.hasOwnProperty('photoraw') ?
          <img src={person["photoraw"]} alt=""
            style={{position: 'absolute', top: height*0.8*person['y']+height*0.04, left: width*0.8*person['x']+0.07*width,
              width: '40px', height: '40px', objectFit: 'cover', borderRadius: "20px"}}
            onMouseLeave={() => {
              tooltipTimeout = window.setTimeout(() => {
                hideTooltip();
              }, 300);
            }}
            onMouseMove={() => {
              if (tooltipTimeout) clearTimeout(tooltipTimeout);
              const top = person.y*height*0.8 - 20
              const left = person.x*width*0.8
              showTooltip({
                tooltipData: person,
                tooltipTop: top,
                tooltipLeft: left,
              });
            }}
          />
        : null))}
        {tooltipOpen && tooltipData && (
          <Tooltip top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
            <div>{tooltipData["name"]}</div>
          </Tooltip>
        )}
      </div>
    );
  },
);