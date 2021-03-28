import React from 'react';
import { Group } from '@visx/group';
import { Pack, hierarchy } from '@visx/hierarchy';
import { scaleQuantize } from '@visx/scale';
import rawData, { Exoplanets as Datum } from '@visx/mock-data/lib/mocks/exoplanets';
import { people } from '../constants/people';
// import { View, Dimensions } from 'react-native'
import { withTooltip, Tooltip, defaultStyles } from '@visx/tooltip';
// let {width:W,height:H} = Dimensions.get("window");


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

export default function Dots({ width, height, margin = defaultMargin }) {
  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect width={width} height={height} rx={14} fill="#ffffff" />

      <Pack root={root} size={[width * 2, height * 2]}>
        {packData => {
          const circles = people; //packData.descendants().slice(2); // skip outer hierarchies
          return (
            <Group top={-height - margin.bottom} left={-width / 2}>
              {circles.map((circle, i) => (
                <circle
                  key={`circle-${i}`}
                  r={15}
                  cx={width*Math.random() + width/2}
                  cy={height*Math.random()+height+margin.bottom} //{circle.year === '2022' ? width : width*Math.random()} //pick random place in 1/4 of screen by year
                  fill={(circle.color)}
                />
              ))}
            </Group>
          );
        }}
      </Pack>
      <Tooltip
        resizeObserverPolyfill={ResizeObserver}
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        renderTooltip={({ tooltipData, colorScale }) => (
          <div>
            <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
              {tooltipData.nearestDatum.key}
            </div>
            {accessors.xAccessor(tooltipData.nearestDatum.datum)}
            {', '}
            {accessors.yAccessor(tooltipData.nearestDatum.datum)}
          </div>
        )}
      />
    </svg>
  );
}
