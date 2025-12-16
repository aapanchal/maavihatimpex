import Header from './components/Header';
import NewHero from './components/NewHero';
import NewAbout from './components/NewAbout';
import NewProcess from './components/NewProcess';
import NewServices from './components/NewServices';
import NewGallery from './components/NewGallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NewHero />
      <NewAbout />
      <NewProcess />
      <NewServices />
      <NewGallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
