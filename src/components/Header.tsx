import { Plane, Menu, X, Facebook, Instagram,} from 'lucide-react';  // Import the Telegram icon
import telegram from '../assets/telegram.jpg'
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to refresh the page
  const handleLogoClick = () => {
    window.location.reload();  // Refreshes the page
  };  

  return (
    <header className="text-black top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Logo that refreshes the page on click */}
            <Plane className="h-[70px] w-[50px] cursor-pointer" onClick={handleLogoClick} />
            <span className="text-4xl font-bold font-sans">Holiday Wheel</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-3xl font-sans gap-2">
            <a href="#home" className="hover:text-yellow-300 transition hover:underline">Home</a>
            <a href="#service" className="hover:text-yellow-300 transition hover:underline">Services</a>
            <a href="#booking" className="hover:text-yellow-300 transition hover:underline">Contact</a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/Holidaywheel" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-600 transition">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/Holidaywheel" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-pink-500 transition">
              <Instagram />
            </a>
            <a 
  href="https://t.me/Holidaywheel" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-3xl hover:text-blue-500 transition"
>
  <img 
    src={telegram} 
    alt="Telegram" 
    className="h-6 w-6 rounded-lg" 
  />
</a>

          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="hover:text-yellow-300 transition">Home</a>
              <a href="#about-us" className="hover:text-yellow-300 transition">Services</a>
              <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
