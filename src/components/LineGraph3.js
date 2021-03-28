import {
  AnimatedAxis, Axis, numTicks, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  AnimatedAreaSeries,
  XYChart,
  Tooltip,
  renderHorizontally, yAxisOrientation, xAxisOrientation,
  lightTheme, darkTheme, buildChartTheme,
  stackOffset, animationTrajectory
} from '@visx/xychart';
import data_list from "../constants/concentration_data";
import CustomChartBackground from '../styles/CustomChartBackground';
// import { customTheme } from '../styles/CustomChartTheme';
import ResizeObserver from 'resize-observer-polyfill';
import React, { useState } from 'react';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { Group } from '@visx/group';

export default function LineGraph2({ width, height }) {
  const xScale = scaleLinear({
    domain: [2009,2020],
    nice: true
    /*
      range,
      round,
      domain,
      nice = false,
      clamp = false,
    */
  });
  
  const accessors = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
  };

  const customTheme = buildChartTheme({
    // colors
    // backgroundColor: '#f09ae9', // used by Tooltip, Annotation
    colors: ['rgba(0, 209, 66,0.4)','rgba(8, 222, 255, 0.4)','rgba(0, 146, 209,0.4)'], // categorical colors, mapped to series via `dataKey`s
  
    // labels
    svgLabelBig: { fill: '#1d1b38' },
    // svgLabelSmall?: SVGTextProps;
    // htmlLabel?: HTMLTextStyles;
  
    // lines
    // xAxisLineStyles?: LineStyles;
    // yAxisLineStyles?: LineStyles;
    // xTickLineStyles?: LineStyles;
    // yTickLineStyles?: LineStyles;
    tickLength: 2,
  
    // grid
    gridColor: '#336d88',
    gridColorDark: '#1d1b38', // used for axis baseline if x/yxAxisLineStyles not set
    // gridStyles?: CSSProperties;
  });
  
  const [xAxisOrientation, setXAxisOrientation] = useState('bottom');
  const [yAxisOrientation, setYAxisOrientation] = useState('left');
  const [renderHorizontally, setRenderHorizontally] = useState(false);
  
  // bounds
  
  xScale.rangeRound([0, 100]);
  const margin = { top: 10, right: 0, bottom: 40, left: 0 };
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  return (
    <div>
      <svg width={width} height={height}>
          <Group left={margin.left} top={margin.top}>
      <XYChart theme = {customTheme} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}
        width = {width}
        height = {height}>
      {/* <AnimatedAxis 
        label={
          stackOffset == null
            ? 'Temperature (°F)'
            : stackOffset === 'expand'
            ? 'Fraction of total temperature'
            : ''
        } 
        orientation={renderHorizontally ? yAxisOrientation : xAxisOrientation} /> */}
      <AnimatedGrid columns={false} numTicks={4} />
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
        numTicks={2}
        top={yMax}
        left={xMax/2}
      />
    {/* <AxisBottom
        // key={`time-axis-${animationTrajectory}-${true}`}
        orientation={'bottom'}
        xScale={xScale}
        // animationTrajectory={animationTrajectory}
      /> */}
    </Group>
  </svg>
    </div>
  );
}

// Tooltip doesn't work on the moving text :(((((((((
// so this graph would have to be not on the slidy stuff, or have a portion that is not slidy stuff so can 
// I also can't center this for some reason :( 
// and the axises don't show up