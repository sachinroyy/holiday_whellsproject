
import React from 'react';
import newvideo from '../assets/newviedoneww.mp4'; // Import your video file
import usaFlag from '../assets/usa flage.gif'; // Import your background image

const VideoBanner: React.FC = () => {
  return (
    <div className="relative w-full h-screen mx-auto overflow-hidden flex justify-center pt-[50px]    bg-white">
      {/* Background Image with Full Coverage */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: `url(${usaFlag})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',  // Ensures the image covers the area properly
          backgroundPosition: 'center',  // Keeps the image centered
        }}
      ></div>

      {/* Video Background */}
      <video 
        className="relative w-[85vw] h-[80vh] object-cover rounded-[80px]" 
        src={newvideo} 
        autoPlay 
        loop 
        muted 
        playsInline
      />

      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Explore The World</h1>
          <p className="text-xl md:text-2xl mb-8">Tourist Visa - Business Visa - Study Visa</p>
          <a 
            href="#booking" 
            className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
