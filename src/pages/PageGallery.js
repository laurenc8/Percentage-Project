/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui';
import Gallery from '../components/PhotoGallery';
import Container from '../components/Container'

export default function PageGallery() {
  return (
    <Container maxWidth = {"1500px"}> 
      <h1>Our Gallery</h1>
        <section>
          <Gallery />
        </section>
    </Container>
 );
}

