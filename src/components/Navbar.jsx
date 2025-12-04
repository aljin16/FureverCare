import PillNav from './reactbits/PillNav';
import logoBrandImg from '../assets/logobrand.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Logo', href: '#logo' },
  { label: 'Events', href: '#events' }
];

export default function Navbar() {
  return (
    <div className="flex justify-center">
      {/* Brand Logo & Text - Top Left */}
      <a 
        href="#home" 
        className="absolute top-5 left-8 z-50 hidden md:flex items-center gap-3 transition-transform hover:scale-105 no-underline"
      >
        <img src={logoBrandImg} alt="FureverCare" className="w-12 h-12 object-contain" />
        <span className="font-display font-bold text-xl tracking-wide text-[#206a9f]">
          FUREVER CARE
        </span>
      </a>

      <PillNav
        logo={logoBrandImg}
        logoAlt="FureverCare Logo"
        items={navItems}
        activeHref="#home"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#fffdf5"
        pillColor="#ffedd5"
        hoveredPillTextColor="#206a9f"
        pillTextColor="#206a9f"
      />
    </div>
  );
}
