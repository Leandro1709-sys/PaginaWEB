import React, { useState, useEffect} from 'react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['img/concreto.jpg', 'img/concreto2.jpg', 'img/concreto6.jpg'];

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div style={{ backgroundImage: `url(${images[currentIndex]})`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageSlider;