/** @jsxRuntime classic */
/** @jsx jsx */
/* eslint-disable import/no-webpack-loader-syntax */
import Report from '!babel-loader!@mdx-js/loader!./Report.mdx';
import Container from '../components/Container';

import { jsx } from 'theme-ui';

function PageData() {
  return (
    <Container>
        <Report />
    </Container>
  );
}

export default PageData;