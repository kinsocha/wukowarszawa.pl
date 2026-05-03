import React from 'react';
import { Shield, Clock, Award, ArrowRight, Droplets, Phone } from 'lucide-react';
import { siteConfig } from '../config/site';

const Hero: React.FC = () => {
  const yearsOfExperience = new Date().getFullYear() - siteConfig.experienceSince;

  const trustBadges = [
    { icon: Clock, text: 'Szybki dojazd' },
    { icon: Shield, text: `Doświadczenie od ${siteConfig.experienceSince} r.` },
    { icon: Award, text: 'Wycena przed przyjazdem' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />

        <div className="absolute top-20 left-1/4 animate-bounce" style={{ animationDuration: '3s' }}>
          <Droplets className="w-8 h-8 text-sky-400/30" />
        </div>
        <div
          className="absolute top-40 right-1/3 animate-bounce"
          style={{ animationDuration: '4s', animationDelay: '0.5s' }}
        >
          <Droplets className="w-6 h-6 text-cyan-400/30" />
        </div>
        <div
          className="absolute bottom-32 left-1/3 animate-bounce"
          style={{ animationDuration: '3.5s', animationDelay: '1s' }}
        >
          <Droplets className="w-10 h-10 text-sky-300/20" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="text-white/90 text-sm font-medium">
              Ponad {yearsOfExperience} lat doświadczenia w udrażnianiu rur
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Wuko Warszawa
            <span className="block bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              ciśnieniowe udrażnianie
            </span>
            kanalizacji
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Pomagamy przy niedrożnych odpływach, zatorach w rurach, problemach z kanalizacją zewnętrzną i wewnętrzną.
            Wuko, sprężyna elektryczna, inspekcja kamerą TV.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="group flex items-center gap-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-sky-500/40 transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Zadzwoń: {siteConfig.phone}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#uslugi"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
            >
              Zobacz usługi
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <badge.icon className="w-5 h-5 text-sky-400" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
