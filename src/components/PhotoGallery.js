import { useState } from 'react';
import { Grid, Image } from 'theme-ui';
import "./PhotoGallery.css";
import { features } from '../constants/features';

//MAIN APP COMPONENT
export default function Gallery() {
  return (
    <div>
      <ImageGallery />
    </div>
  );
}

//MAIN LIGHTBOX
//Holds Images Cards and Lightbox
//this is where all of our logic will live
function ImageGallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const images = Object.values(features).filter(person => person.photostat);
  console.log(images);

  //looping through our images array to create img elements
  const imageCards = images.map((image) => (
    <Image className="image-card" onClick={() => showImage(image)} src={image.photostat}alt="" />
  ));

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
    disableScroll();
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
    enableScroll();
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.querySelector('html').scrollTop = window.scrollY;
    }
    
  function enableScroll() {
    document.body.style.overflow = null;
    }

  return (
    <> 
      <Grid gap={2} columns={[2, null, 4]}> 
        {imageCards} 
      </Grid> 
      
      {
        lightboxDisplay &&
        <div id="lightbox" onClick={hideLightBox}>
          <a class="prev" onClick={showPrev}>&#10094;</a>
          <img id="lightbox-img" src={imageToShow.photostat} alt = ""></img>
          <a class="next" onClick={showNext}>&#10095;</a>
        </div>
      }
    </>
  );
}
