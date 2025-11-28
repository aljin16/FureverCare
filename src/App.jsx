import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import LogoDesign from './components/sections/LogoDesign';
import BrandPost from './components/sections/BrandPost';
import EventPoster from './components/sections/EventPoster';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <LogoDesign />
        <BrandPost />
        <EventPoster />
      </main>
      <Footer />
    </div>
  );
}

export default App;
