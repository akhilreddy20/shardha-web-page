import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About Sharda',   href: '#about'      },
  { label: 'Programmes',     href: '#programs'   },
  { label: 'Global Tie-Ups', href: '#partners'   },
  { label: 'Highlights',     href: '#highlights' },
  { label: 'Admissions',     href: '#admissions' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300
      ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-8 h-[72px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-0">
          <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-1.5">

            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
                <rect width="36" height="36" rx="4" fill="#1a3a6b"/>
                <polygon points="18,4 22,13 32,13 24,19 27,29 18,23 9,29 12,19 4,13 14,13"
                  fill="#C9A84C"/>
                <polygon points="18,8 21,14 27,14 22,17 24,24 18,20 12,24 14,17 9,14 15,14"
                  fill="#1a3a6b"/>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-[#1a3a6b] font-black text-[13px] tracking-wide">SHARDA</span>
                <span className="text-[#1a3a6b] font-black text-[13px] tracking-wide">UNIVERSITY</span>
                <span className="text-[#8a9bb5] text-[7px] tracking-[2px]">Beyond Boundaries</span>
              </div>
            </div>
            <div className="w-px h-10 bg-gray-200 mx-2" />
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full border-[3px] border-[#1a3a6b]
                flex flex-col items-center justify-center bg-white">
                <span className="text-[#1a3a6b] font-black text-[7px] leading-none">NAAC</span>
                <span className="text-[#1a3a6b] font-black text-[11px] leading-none">A+</span>
              </div>
              <span className="text-[6px] text-gray-400 mt-0.5 tracking-wider uppercase">
                Accredited
              </span>
            </div>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}
                className="text-[13px] font-medium text-gray-600 px-4 py-2 rounded
                  hover:text-[#1a3a6b] transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden p-2">
          <span className="block w-5 h-0.5 bg-gray-600 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-600 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-600" />
        </button>
      </div>
    </nav>
  );
}

