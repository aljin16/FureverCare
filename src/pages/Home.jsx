import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import LogoDesign from '../components/sections/LogoDesign';
import BrandPost from '../components/sections/BrandPost';
import EventPoster from '../components/sections/EventPoster';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <LogoDesign />
      <BrandPost />
      <EventPoster />
    </main>
  );
}
