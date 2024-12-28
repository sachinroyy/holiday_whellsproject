// import viedo from '../assets/home.gif';

// export default function VideoBanner() {
//   return (
//     <div 
//       className="relative w-[85vw] h-[80vh] mx-auto overflow-hidden bg-cover bg-center rounded-[80px]" 
//       style={{ backgroundImage: `url(${viedo})` }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//         <div className="text-center text-white">
//           <h1 className="text-5xl md:text-7xl font-bold mb-4">Explore The World</h1>
//           <p className="text-xl md:text-2xl mb-8">Tourist Visa - Business Visa - Study Visa</p>
//           <a 
//             href="#booking" 
//             className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition"
//           >
//             Book Now
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React from 'react';
// import video from '../assets/building.webp';
import React from 'react';
import newvideo from '../assets/newviedoneww.mp4'; // Import your video file

const VideoBanner: React.FC = () => {
  return (
    <div className="relative w-[85vw] h-[80vh] mx-auto overflow-hidden rounded-[80px]">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
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
