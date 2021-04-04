import { useState } from 'react';
import "./PhotoGallery.css";
import { images } from '../constants/photos';

//MAIN APP COMPONENT
export default function Gallery() {
  return (
    <div className="Gallery">
      <h1>Our Gallery</h1>
      <section id="photos">
      <ImageGallery />
      </section>
    </div>
  );
}

//MAIN LIGHTBOX
//Holds Images Cards and Lightbox
//this is where all of our logic will live
function ImageGallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  
  //looping through our images array to create img elements
  const imageCards = images.map((image) => (
    <img className="image-card" onClick={() => showImage(image)} src={image} />
  ));

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
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

  return (
    <>
      <div> {imageCards} </div>
      
      {
        lightboxDisplay ? 
        <div id="lightbox" onClick={hideLightBox}>
          <a class="prev" onClick={showPrev}>&#10094;</a>
          <img id="lightbox-img" src={imageToShow}></img>
          <a class="next" onClick={showNext}>&#10095;</a>
        </div>
       : ""
      }
    </>
  );
}
