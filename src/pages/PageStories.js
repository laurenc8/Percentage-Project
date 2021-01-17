/** @jsxRuntime classic */
/** @jsx jsx */

import { useState } from 'react';
import { jsx, Styled } from 'theme-ui';
import { Scrollama, Step } from 'react-scrollama';
import { people } from '../constants/people';

// Feel free to change styles below
const styles = {
  outer: {
    display: 'flex',              // allows for two-column layout
  },
  sticky: {
    flex: 1,                      // will absorb the space not taken by scollText
    position: 'sticky',           // will remain on the top despite scolling
    top: 0,                       // describes absolute position
    border: '3px solid orchid',   // temporary, for illustration purposes
    background: 'pink',           // temporary, for illustration purposes
    maxHeight: '100vh',           // prevents top from scolling
  },
  scrollText: {
    width: '50vw',                // 50% of the view width
  },
  step: {
    margin: '50vh 0',
    border: '1px solid gray', //how to add correct font
  }
}



const PageStories = () => {
  // TODO: read https://reactjs.org/docs/hooks-overview.html for context
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div style={styles.outer}>
      <div style={styles.sticky}>
        {/* TODO: Replace this with fixed images that change based on currentStepIndex */}
        {/*I'm sticky. The current triggered step index is: {currentStepIndex}*/}
        <img src={people[currentStepIndex].pic} width={600}/>
      </div>
      <div style={styles.scrollText}>
        {/* In order to get rid of the dotted lines, delete "debug" */}
        <Scrollama onStepEnter={onStepEnter} offset={0.5} debug>
          {/* TODO: Read for context on map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
          {people.map((person, stepIndex) => ( 
            <Step data={stepIndex} key={stepIndex}>
              <div style={styles.step}>
                <Styled.h1 style= {{color:person.color}}> {person.name}</Styled.h1> {/* why didn't this work with stepIndex :(((()))) */}
                <p> Harvard {person.year}, {person.concentration},  {person.pronouns} </p>
                <p> Quotes (just prints whole array rn): {person.quotes} </p>
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
    </div>
  );
};
export default PageStories;
