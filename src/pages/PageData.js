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