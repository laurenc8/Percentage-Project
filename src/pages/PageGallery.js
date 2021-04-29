/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui';
import Gallery from '../components/PhotoGallery';

export default function PageGallery() {
  return (
    <div>
      <h1>Our Gallery</h1>
        <section id="photos">
          <Gallery />
        </section>
    </div>
 );
}

