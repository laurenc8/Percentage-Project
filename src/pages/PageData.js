import React from 'react';
/* eslint-disable import/no-webpack-loader-syntax */
import Report from '!babel-loader!@mdx-js/loader!./Report.mdx';
import Container from '../components/Container';

function PageData() {
  return (
    <Container>
      <Report />
    </Container>
  );
};

export default PageData;