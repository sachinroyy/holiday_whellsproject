

import React from 'react';
import './Slider.css'; // Import the CSS file

const TextSlider: React.FC = () => {
  // Example data to loop through
  const countries = [
    'India No. 1 Tourist Visa Provider --  ',
    'United States of America',
    'United Kingdom',
    'Canada',
    'Australia',
    'New Zealand',
    'Europe',
  ];

  return (
    <div className="relative w-full overflow-hidden py-2  p-2">
      <div className="text-slider">
        {/* Loop through countries and render each as part of the scrolling text */}
        <p className="text-2xl text-center uppercase bg-gradient-to-r from-blue-500 to-red-500 font-bold text-black rounded-[20px]">
          {countries.map((country, index) => (
            <span key={index} className="mr-8">
              {country}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default TextSlider;
