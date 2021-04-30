import React from 'react';
/* eslint-disable import/no-webpack-loader-syntax */
import Report from '!babel-loader!@mdx-js/loader!./Report.mdx';
import Container from '../components/Container';

function PageData() {
  return (
    <Container>
      {<img src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" style={{position: 'relative', top: "500px", left: "100px", width: '40px', height: '40px', objectFit: 'cover', borderRadius: "20px"}}/>}
      <Report />
    </Container>
  );
};

export default PageData;