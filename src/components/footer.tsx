import { Plane } from 'lucide-react';

export default function Footer() {
  return (
    <footer className=" text-black py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
            <Plane className="h-[70px] w-[50px]" />
            <span className="text-4xl font-bold font-sans">Holiday Wheel</span>
          </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT US:</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-yellow-400 text-xl mr-2">📞</span>
              9910479071
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 text-xl mr-2">✉️</span>
              contact@holidaywheel.com
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 text-xl mr-2">📍</span>
              Nehru Place, Delhi, India 110019
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
