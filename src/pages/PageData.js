import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { people } from '../constants/people';
import { article } from '../constants/article';
import BarGraph from '../components/bargraph'
import LineGraph2 from '../components/LineGraph3';
import Example from '../components/Dots';
import { jsx, Styled } from 'theme-ui';
import { letterFrequency } from '@visx/mock-data';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
/** @jsxRuntime classic */
/** @jsx jsx */
/* eslint-disable import/no-webpack-loader-syntax */
import Report from '!babel-loader!@mdx-js/loader!./Report.mdx';
import Container from '../components/Container';

const data = letterFrequency;

function PageData() {
  return (
    <Container>
        <Report />
    </Container>
  );
};

export default PageData;

/*
const styles = {
  outer: {
  },
  sticky: {
    position: 'sticky',           // will remain on the top despite scolling
    zIndex: -1,
    top: '10vh',                       // describes absolute position
    maxHeight: '100vh',           // prevents top from scolling
    width:'100vh',
    margin: 'auto'
  },
  scrollText: {
    width: '50vw',                // 50% of the view width
    margin: '0 auto',
  },
  step: {
    margin: '50vh 0',
    border: '1px solid gray', //how to add correct font
    background: 'white',
    paddingLeft: '20px',
    paddingRight: '20px',
    textAlign: 'center'

  }
}

const PageData = () => {
  // TODO: read https://reactjs.org/docs/hooks-overview.html for context
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return ( // can only return one tag
    <div style={styles.outer}>       
    <Example width={window.innerWidth} height={window.innerHeight/2}/>

      <div style={styles.sticky}>
//       {/* <BarGraph data={data} fill = "#fc2e1c"/> */
//       </div>
//       <div style={styles.scrollText}>
//         {/* In order to get rid of the dotted lines, delete "debug" */}
//         <Scrollama onStepEnter={onStepEnter} offset={0.5} debug>
//           {/* TODO: Read for context on map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
//           {article.map((paragraph, stepIndex) => ( 
//             <Step data={stepIndex} key={stepIndex}>
//               <div style={styles.step}>
//                 <p> {paragraph.text} </p>
//               </div>
//             </Step>
//           ))}
//         </Scrollama>
//       </div>
//     <LineGraph2 width={window.innerWidth} height={window.innerHeight/1.3} > </LineGraph2> 
//     </div>
// */