import PillNav from './reactbits/PillNav';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Logo', href: '#logo' },
  { label: 'Events', href: '#events' }
];

export default function Navbar() {
  // Create a simple SVG logo
  const logoSvg = `data:image/svg+xml,${encodeURIComponent(`
    <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#206a9f"/>
      <text x="18" y="24" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white" text-anchor="middle">F</text>
    </svg>
  `)}`;

  return (
    <div className="flex justify-center">
      <PillNav
        logo={logoSvg}
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
