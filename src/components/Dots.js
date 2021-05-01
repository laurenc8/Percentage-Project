import React from 'react';
import { featureArray } from '../constants/features';
import { withTooltip, Tooltip, defaultStyles } from '@visx/tooltip';

const tooltipStyles = {
  ...defaultStyles,
  minWidth: 60,
  backgroundColor: 'rgba(0,0,0,0.9)',
  color: 'white',
};

let tooltipTimeout;

const defaultMargin = { top: 10, left: 30, right: 40, bottom: 80 };

function addXY(person){
  person["x"] = Math.random();
  person["y"] = Math.random();
}

featureArray.forEach(addXY);

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