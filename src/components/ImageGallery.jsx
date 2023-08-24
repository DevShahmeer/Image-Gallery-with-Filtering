import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterButtons from './FilterButtons';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    let apiUrl = 'https://api.unsplash.com/photos/';
    const accessKey = 'uOR7-Vy1_edxDc3bKjyt1OofnqUwJnPPsnIYzk4xW6U'; // Replace with your actual Unsplash access key

    if (selectedCategory) {
      apiUrl = `https://api.unsplash.com/search/photos/`;
    }

    const fetchData = async (page) => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
            client_id: accessKey,
            query: selectedCategory,
            page: page,
            per_page: 20 // You can adjust the number of images per page
          }
        });
  
        if (selectedCategory) {
          setImages(response.data.results);
        } else {
          setImages(response.data);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
  
    fetchData(1); // Fetch the first page of images
    
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


    