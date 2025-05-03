import React, { useEffect } from "react";
import "../Styles/Gallery.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { galleryAnim } from "../Animations";
function Gallery() {
  useEffect(() => {
    galleryAnim();
  }, []);

  console.log(process.env.REACT_APP_CLOUDINARY_CLOUD_NAME)

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const images = [
  "gallery1.jpg",
  "gallery2.jpg",
  "gallery3.jpg",
  "gallery4.jpg",
  "gallery5.jpg",
  "gallery6.jpg",
  "gallery7.jpg",
  "gallery8.jpg",
  "gallery9.jpg",
  "gallery10.jpg",
];

const sortedImages = images.sort((a, b) => {
  const numA = parseInt(a.match(/\d+/));
  const numB = parseInt(b.match(/\d+/));
  return numB - numA; // Descending order
});

  return (
    <section id="gallery-section">
      <div className="gallery-wrapper container">
        <div className="gallery-top">
          <h3 className="sc-title">our work</h3>
          <h1 className="sc-subtitle">Transforming spaces in melbourne</h1>
        </div>
        <div className="gallery-bottom">
          <div className="images-wrapper">
            {sortedImages &&
              sortedImages.map((name, index) => (
                <Zoom>
                  <img
                    className="gallery-image"
                    key={index}
                    src={`https://res.cloudinary.com/${cloudName}/image/upload/${name}`}
                    alt={`Img ${index + 1}`}
                  />
                </Zoom>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
