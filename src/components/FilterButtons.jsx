import React from 'react';

const FilterButtons = ({ onCategorySelect }) => {
  return (
    <div className="filter-buttons">
        <button onClick={() => onCategorySelect('nature')}>Nature</button>
        <button onClick={() => onCategorySelect('city')}>City</button>
        <button onClick={() => onCategorySelect('people')}>People</button>
        <button onClick={() => onCategorySelect('animals')}>Animals</button>
        <button onClick={() => onCategorySelect('food')}>Food</button>
        <button onClick={() => onCategorySelect('travel')}>Travel</button>
        <button onClick={() => onCategorySelect('fashion')}>Fashion</button>
        <button onClick={() => onCategorySelect('architecture')}>Architecture</button>
        <button onClick={() => onCategorySelect('technology')}>Technology</button>
        <button onChange={() => onCategorySelect('bird')}>Birds</button>
        {/* Add more buttons for other categories */}
        
        {/* Orientation Filters */}
        <button onClick={() => onCategorySelect('landscape')}>Landscape</button>
        <button onClick={() => onCategorySelect('portrait')}>Portrait</button>
        
        {/* Content Type Filters */}
        <button onClick={() => onCategorySelect('photo')}>Photo</button>
        <button onClick={() => onCategorySelect('illustration')}>Illustration</button>
        <button onClick={() => onCategorySelect('vector')}>Vector</button>
        {/* Add more buttons for other content types */}
      </div>
  );
};

export default FilterButtons;
