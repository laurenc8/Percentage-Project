/** @jsxRuntime classic */
/** @jsx jsx */

import { useState } from 'react';
import { jsx } from 'theme-ui';
import { Scrollama, Step } from 'react-scrollama';
import { people } from '../constants/people';
import StoriesBars from '../components/StoriesBars';
import PersonCard from "../components/PersonCard";


const data = [
  {category: "my race", frequency: "0.1"},
  {category: "my ethnicity", frequency: "0.3"},
  {category: "my gender identity", frequency: "0.1"},
  {category: "my sexual orientation", frequency: "0.2"},
  {category: "my religious beliefs", frequency: "0.05"},
  {category: "being a first generation student", frequency: "0.05"},
  {category: "my income status", frequency: "0.2"},
];

// Feel free to change styles below
const styles = {
  outer: {
    display: 'flex',              // allows for two-column layout
  },
  sticky: {
    mt: 2,
    flex: 1,                      // will absorb the space not taken by scollText
    position: 'sticky',           // will remain on the top despite scolling
    top: 0,                       // describes absolute position
    maxHeight: '100vh',           // prevents top from scolling
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollText: {
    width: '50vw',                // 50% of the view width
  },
  step: {
    margin: '50vh 0',
    //border: '1px solid gray',
  }
}



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
          src={people[currentStepIndex].pic}
          alt={people[currentStepIndex].name}
          align="right"
          width="450px"
        />
      </div>
      <div style={styles.scrollText}>
        {/* In order to get rid of the dotted lines, delete "debug" */}
        <Scrollama onStepEnter={onStepEnter} offset={0.5}>
          {/* TODO: Read for context on map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
          {people.map((person, stepIndex) => ( 
            <Step data={stepIndex} key={stepIndex}>
              <div style={styles.step}>
                <PersonCard person = {person}/>
                <StoriesBars width="300" height="220" data={data}/>
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
    </div>
  );
};
export default PageStories;
