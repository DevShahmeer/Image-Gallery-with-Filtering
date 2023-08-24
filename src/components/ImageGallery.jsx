import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterButtons from './FilterButtons';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    
  }, []);



  return (
    <div>
      <FilterButtons onCategorySelect={setSelectedCategory} />
      <div className="image-grid">
        {images.map((image)=> (
          <img key={image.id} src={image.urls.small} alt={image.alt_description} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;


    