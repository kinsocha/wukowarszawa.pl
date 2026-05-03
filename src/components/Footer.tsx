import React from 'react';
import { Droplets, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { districts } from '../data/districts';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const services = [
    'Hydrodynamiczne Wuko',
    'Sprężyna elektryczna',
    'Inspekcja kamerą TV',
    'Mieszkania i domy',
    'Wspólnoty mieszkaniowe',
    'Lokale usługowe',
  ];

  const quickLinks = [
    { label: 'Usługi', href: '#uslugi' },
    { label: 'Dlaczego my', href: '#dlaczego-my' },
    { label: 'Proces', href: '#proces' },
    { label: 'Cennik', href: '#cennik' },
    { label: 'Opinie', href: '#opinie' },
    { label: 'Kontakt', href: '#kontakt' },
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
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-sky-500 rounded-xl">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">{siteConfig.shortName}</span>
                <span className="text-xs font-medium tracking-wider text-sky-400">WARSZAWA</span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
              Ciśnieniowe udrażnianie i czyszczenie kanalizacji w Warszawie i okolicach.
              Doświadczenie od {siteConfig.experienceSince} r. – Wuko, sprężyna elektryczna,
              inspekcja kamerą TV.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 bg-slate-800 rounded-lg hover:bg-sky-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 bg-slate-800 rounded-lg hover:bg-sky-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Usługi</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#uslugi"
                    onClick={(e) => handleSmoothScroll(e, '#uslugi')}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Districts */}
          <div>
            <h3 className="text-lg font-bold mb-6">Dzielnice</h3>
            <ul className="space-y-3">
              {districts.map((d) => (
                <li key={d.slug}>
                  <Link
                    to={`/${d.slug}`}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                  >
                    Wuko {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-sky-500 flex-shrink-0" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.postalCode} {siteConfig.address.city}
                    <br />
                    <span className="text-slate-500 text-xs">({siteConfig.address.region})</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Firmowe dane */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="text-slate-500 text-xs leading-relaxed text-center">
            <p>
              <strong>{siteConfig.legalName}</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {currentYear} {siteConfig.name}. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <a href="#" className="text-slate-500 text-sm hover:text-sky-400 transition-colors">
                Polityka prywatności
              </a>
              <a href="#" className="text-slate-500 text-sm hover:text-sky-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
