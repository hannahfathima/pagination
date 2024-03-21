import React, { useState } from 'react';
import Pagination from './Pagination';
import './MyComponent.css'; // Import CSS file for styling

const MyComponent = () => {
  const [images, setImages] = useState([
    '/public/two-puppies-some-stone-steps.jpg',
    'pexels-tim-gouw-139764.jpg',
    'pexels-moose-photos-1037999.jpg',
    'pexels-mikhail-nilov-6834393.jpg',
    'pexels-cottonbro-studio-5077039.jpg',
    'graceful-long-haired-ginger-girl-looking-shoulder-laughing-pretty-woman-beret-enjoying-walk (1).jpg',
    'beautiful-vertical-shot-taj-mahal-building-agra-india-clear-sky.jpg.crdownload',
    'pexels-moose-photos-1037999.jpg',
    '/public/two-puppies-some-stone-steps.jpg',
    'pexels-tim-gouw-139764.jpg',
    'pexels-moose-photos-1037999.jpg',
    'pexels-mikhail-nilov-6834393.jpg',
    'pexels-cottonbro-studio-5077039.jpg',
    'graceful-long-haired-ginger-girl-looking-shoulder-laughing-pretty-woman-beret-enjoying-walk (1).jpg',
    'beautiful-vertical-shot-taj-mahal-building-agra-india-clear-sky.jpg.crdownload',
    'pexels-moose-photos-1037999.jpg'
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const renderProductCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return images.slice(startIndex, endIndex).map((image, index) => (
      <div key={index} className="product-card">
        <img src={image} alt={`Product ${index}`} className="product-image" />
        <div className="product-details">
          <h3 className="product-title">Product Title</h3>
          <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="product-button">Add to Cart</button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="product-container">
        {renderProductCards()}
      </div>
      <Pagination totalItems={images.length} itemsPerPage={itemsPerPage} onPageChange={onPageChange} />
    </div>
  );
};

export default MyComponent;
