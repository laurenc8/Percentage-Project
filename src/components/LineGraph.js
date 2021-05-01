import { AnimatedGrid, AnimatedAreaSeries, XYChart, Tooltip, buildChartTheme } from '@visx/xychart';
import data_list from "../constants/concentration_data";
import CustomChartBackground from '../styles/CustomChartBackground';
import ResizeObserver from 'resize-observer-polyfill';
import React from 'react';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { scaleLinear} from '@visx/scale';
import { Group } from '@visx/group';

const formatYear = (year) => String(year).replace(',', '');

export default function LineGraph({ width, height }) {
  const xScale = scaleLinear({
    domain: [2009, 2020],
    nice: true
  });

  console.log(data_list['y'])
  console.log(Math.max(data_list[0]))

  const yScale = scaleLinear({
    domain: [0, 358],
    nice: false
  });
  
  const accessors = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
  };

  const customTheme = buildChartTheme({
    // colors
    backgroundColor: '#F9F9F9', // used by Tooltip, Annotation
    colors: ['rgba(0, 209, 66,0.4)','rgba(8, 222, 255, 0.4)','rgba(0, 146, 209,0.4)'], // categorical colors, mapped to series via `dataKey`s
  
    // labels
    svgLabelBig: { fill: '#1d1b38' },
    tickLength: 2,
  
    // grid
    gridColor: '#336d88',
    gridColorDark: '#1d1b38', // used for axis baseline if x/yxAxisLineStyles not set
  });

  // bounds
  const margin = { top: 10, right: 0, bottom: 40, left: 0 };
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  xScale.rangeRound([0, xMax-2*76]);
  yScale.rangeRound([yMax,50]);

  return (
    <div>
      <svg width={width} height={height+15}>
        <Group left={margin.left} top={margin.top}>
          <XYChart theme = {customTheme} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}
            width = {width}
            height = {height}>
            <AnimatedGrid columns={false} numTicks={12} />
            <CustomChartBackground />
            <AnimatedAreaSeries dataKey="All CS Concentrators" data={data_list[0]} {...accessors} />
            <AnimatedAreaSeries dataKey="Female CS Concentrators" data={data_list[1]} {...accessors} />
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
          </XYChart>
          <AxisBottom
            scale={xScale}
            tickFormat={formatYear}
            numTicks={12}
            top={yMax}
            left={76}
            label={'Year'}
            stroke={'#727272'}
            labelProps={{
              fill: '#727272',
              fontFamily: 'Calibre, sans-serif',
              fontSize: 15,
              dy: '0.33em',
            }}
            tickLabelProps={() => ({
              fill: '#727272',
              fontFamily: 'Calibre, sans-serif',
              fontSize: 15,
              textAnchor: 'middle',
              dy: '0.33em',
            })}
          />
          <AxisLeft
            scale={yScale}
            numTicks={10}
            top={0}
            left={76}
            label={'Number'}
            stroke={'#727272'}
            labelProps={{
              fill: '#727272',
              fontFamily: 'Calibre, sans-serif',
              fontSize: 15,
              dy: '0.33em',
            }}
            tickLabelProps={() => ({
              fill: '#727272',
              fontFamily: 'Calibre, sans-serif',
              fontSize: 15,
              textAnchor: 'end',
              dy: '0.33em',
            })}
          />
        </Group>
      </svg>
    </div>
  );
}