import Header from './components/Header';
import VideoBanner from './components/VideoBanner';
import About from './components/About';
import BookingForm from './components/BookingForm';
import Reviews from './components/Reviews';
import Footer from '../src/components/footer';
import Services from "../src/components/service";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <VideoBanner />
      <About />
      <Services/>
      <BookingForm />
      <Reviews />
      <Footer/>
      {/* <Services/> */}
    </div>
  );
}

export default App;