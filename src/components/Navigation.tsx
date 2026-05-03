import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Droplets, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { districts } from '../data/districts';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDistrictsOpen, setIsDistrictsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Na podstronach tło jasne (nie ma ciemnego hero)
  const useDarkBg = isScrolled || !isHomePage;

  const navLinks = [
    { href: '#uslugi', label: 'Usługi' },
    { href: '#dlaczego-my', label: 'Dlaczego my' },
    { href: '#proces', label: 'Proces' },
    { href: '#cennik', label: 'Cennik' },
    { href: '#opinie', label: 'Opinie' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage) {
      window.location.href = '/' + href;
      return;
    }
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useDarkBg ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className={`p-2 rounded-xl transition-colors ${
                useDarkBg ? 'bg-sky-500' : 'bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Droplets className={`w-6 h-6 ${useDarkBg ? 'text-white' : 'text-sky-300'}`} />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl lg:text-2xl font-bold tracking-tight transition-colors ${
                  useDarkBg ? 'text-slate-900' : 'text-white'
                }`}
              >
                {siteConfig.shortName}
              </span>
              <span
                className={`text-xs font-medium tracking-wider transition-colors ${
                  useDarkBg ? 'text-sky-600' : 'text-sky-200'
                }`}
              >
                WARSZAWA
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`relative font-medium transition-colors hover:text-sky-500 ${
                  useDarkBg ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setIsDistrictsOpen(true)}
              onMouseLeave={() => setIsDistrictsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors hover:text-sky-500 ${
                  useDarkBg ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                Dzielnice
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDistrictsOpen && (
                <div className="absolute top-full right-0 pt-2 w-56">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                    {districts.map((d) => (
                      <Link
                        key={d.slug}
                        to={`/${d.slug}`}
                        className="block px-4 py-2 text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                      >
                        Wuko {d.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              useDarkBg ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="block py-2 text-slate-700 font-medium hover:text-sky-500 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="border-t border-slate-200 pt-4">
            <p className="text-sm font-semibold text-slate-500 mb-2">Dzielnice:</p>
            {districts.map((d) => (
              <Link
                key={d.slug}
                to={`/${d.slug}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-slate-700 hover:text-sky-500 transition-colors"
              >
                Wuko {d.name}
              </Link>
            ))}
          </div>

          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-5 py-3 rounded-full font-semibold mt-4"
          >
            <Phone className="w-4 h-4" />
            <span>{siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
