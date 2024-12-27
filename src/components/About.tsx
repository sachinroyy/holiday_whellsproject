import { Award, Users, Clock, Globe } from 'lucide-react';
import travelVideo from '../assets/treavel.mp4';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
       <div className="container mx-auto px-4 mb-12">
    <div className="flex flex-col md:flex-row items-center justify-between">
      {/* Text Content */}
      <div className="w-full md:w-3/5"> {/* 60% width */}
        <h2 className="text-6xl font-bold mb-4 flex justify-end pt-6">About Us!</h2>
        <h3 className="text-2xl font-semibold text-blue-600 mb-4 pt-4">
          Tour & Travel Groups Around the World – Holiday Wheel
        </h3>
        <p className="text-gray-700 font-serif text-2xl pt-4">
          At Holiday Wheel, we make group travel easy, offering well-organized trips that cater
          to a wide range of interests and budgets. Whether you’re looking for an adventurous
          safari, a relaxing beach getaway, or a world tour, our global tours have something for
          everyone.
        </p>
      </div>

      {/* Video */}
      <div className="w-full md:w-2/5 flex justify-center "> {/* 40% width */}
        <video
          src={travelVideo}
          autoPlay
          muted
          loop
          className="rounded-lg w-full h-auto"  
        />
      </div>
    </div>
  </div>

      {/* Why Choose Holiday Wheel Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 pt-9">Why Choose Holiday Wheel?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg">
            <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-600">Professional travel experts with years of experience</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
            <p className="text-gray-600">Customized travel plans tailored to your needs</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg">
            <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock assistance throughout your journey</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg">
            <Globe className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
            <p className="text-gray-600">Access to destinations worldwide</p>
          </div>
        </div>
      </div>
  </section> 
  );
}
