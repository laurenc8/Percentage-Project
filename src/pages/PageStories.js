/** @jsxRuntime classic */
/** @jsx jsx */

import { useState } from 'react';
import { jsx } from 'theme-ui';
import { Scrollama, Step } from 'react-scrollama';
import { features } from '../constants/features';
import { data } from '../constants/data';
import StoriesBars from '../components/StoriesBars';
import PersonCard from "../components/PersonCard";

// Feel free to change styles below
const styles = {
  outer: {
    display: 'flex',              // allows for two-column layout
  },
  sticky: {
    mt: 2,
    flex: 1,                      // will absorb the space not taken by scrollText
    position: 'sticky',           // will remain on the top despite scolling
    top: 0,                       // describes absolute position
    maxHeight: '100vh',           // prevents top from scolling
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    transform: 'translate3d(0,0,0)',
  },
  scrollText: {
    width: '50vw',                // 50% of the view width
    zIndex: 1,
    transform: 'translate3d(0,0,0)',
  },
  step: {
    margin: '50vh 0',
    //border: '1px solid gray',
  }
}

const ids = ["robin_robinson", "grace_tian"]

const PageStories = () => {
  // TODO: read https://reactjs.org/docs/hooks-overview.html for context
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  // const [offset, setOffset] = useState(0); //should this be 0.3?
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data, direction }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div style={styles.outer}>
      <div style={styles.sticky}>
        <img
          src={features[ids[currentStepIndex]].photostat}
          alt={features[ids[currentStepIndex]].name}
          align="right"
          width="450px"
        />
      </div>
      <div style={styles.scrollText}>
        {/* In order to get rid of the dotted lines, delete "debug" */}
        <Scrollama onStepEnter={onStepEnter} offset={0.5}>
          {/* TODO: Read for context on map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
          {ids.map((person, stepIndex) => (
            <Step data={stepIndex} key={stepIndex}>
              <div style={styles.step}>
                <PersonCard person = {features[person]}/>
                <div style={{width: '350px', margin: '20px'}} sx={{fontFamily: "label", color:"#727272"}}>
                  {data[features[person].bardata].question}
                  <StoriesBars width="400" height="220" data={data[features[person].bardata].stat}/>
                </div>
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
    </div>
  );
};
export default PageStories;
