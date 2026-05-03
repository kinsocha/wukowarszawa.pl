import React from 'react';
import { MapPin, Phone, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { districts } from '../data/districts';

const Locations: React.FC = () => {
  // Podział na dzielnice z osobnymi podstronami i pozostałe
  const districtsWithPages = districts.map((d) => d.name);
  const districtsWithoutPages = siteConfig.allDistricts.filter(
    (d) => !districtsWithPages.includes(d)
  );

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-sky-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sky-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Obsługujemy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Cała Warszawa i okolice
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Dojeżdżamy m.in. na Pragę, Bielany, Mokotów, Ursynów, Wolę, Bemowo, Białołękę, Targówek,
            Rembertów i okoliczne gminy. Najlepiej zadzwonić i podać dokładny adres – szybko powiemy,
            czy jesteśmy w stanie dojechać danego dnia oraz zaproponujemy orientacyjny koszt.
          </p>
        </div>

        {/* Dzielnice z osobnymi stronami SEO */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center flex items-center justify-center gap-2">
            <Star className="w-5 h-5 text-amber-500" />
            Dzielnice z osobnymi stronami
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {districts.map((district) => (
              <Link
                key={district.slug}
                to={`/${district.slug}`}
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-100 rounded-lg group-hover:bg-sky-500 transition-colors">
                      <MapPin className="w-5 h-5 text-sky-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                        Wuko {district.name}
                      </div>
                      <div className="text-sm text-slate-500">Sprawdź szczegóły →</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pozostałe dzielnice - dojazd, ale bez osobnej strony */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Dojeżdżamy także do innych dzielnic
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {districtsWithoutPages.map((district) => (
              <span
                key={district}
                className="px-4 py-2 bg-white text-slate-700 rounded-full border border-slate-200 text-sm"
              >
                {district}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white rounded-full px-6 py-4 shadow-sm">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-center gap-2 text-slate-700 hover:text-sky-600 transition-colors"
            >
              <Phone className="w-5 h-5 text-sky-500" />
              <span className="font-semibold">Zadzwoń: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
