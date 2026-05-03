import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, Droplets, Wrench, Camera, CheckCircle, Quote } from 'lucide-react';
import { districts, getDistrictBySlug } from '../data/districts';
import { siteConfig } from '../config/site';

const DistrictPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const district = slug ? getDistrictBySlug(slug) : undefined;

  // Aktualizacja meta-tagów per dzielnica
  useEffect(() => {
    if (district) {
      document.title = district.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', district.metaDescription);
      }
    }
  }, [district]);

  // Jeśli slug nie istnieje, przekieruj na główną
  if (!district) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {/* Hero - lokalny dla dzielnicy */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link to="/" className="hover:text-sky-300 transition-colors">
              Strona główna
            </Link>
            <span>/</span>
            <span className="text-white">{district.fullName}</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-sky-300" />
              <span className="text-white/90 text-sm font-medium">Warszawa, dzielnica {district.name}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {district.fullName}
              <span className="block bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                udrażnianie kanalizacji
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mb-10 leading-relaxed">
              {district.heroIntro}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="group flex items-center gap-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-sky-500/40 transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Zadzwoń: {siteConfig.phone}</span>
              </a>
              <a
                href="#zakres-prac"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
              >
                Zobacz, w czym pomagamy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Opis usługi */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Czyszczenie kanalizacji w dzielnicy {district.name}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {district.description}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Przed przyjazdem prosimy o krótki opis objawów i rodzaju budynku. Ułatwia to dobór sprzętu (Wuko lub sprężyna mechaniczna) i pozwala lepiej oszacować zakres prac na miejscu.
            </p>
          </div>
        </div>
      </section>

      {/* Zakres prac */}
      <section id="zakres-prac" className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sky-600 font-semibold text-sm tracking-wider uppercase mb-4">
              Co robimy w {district.name}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Zakres prac
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Droplets,
                title: 'Hydrodynamiczne Wuko',
                desc: 'Czyszczenie rur wodą pod wysokim ciśnieniem (do 200 bar). Skuteczne przy osadach, tłuszczach i zalegających zanieczyszczeniach.',
              },
              {
                icon: Wrench,
                title: 'Sprężyna elektryczna',
                desc: 'Mechaniczne usuwanie zatorów w pionach, poziomach i przy zlewach, umywalkach, toaletach.',
              },
              {
                icon: Camera,
                title: 'Inspekcja kamerą TV',
                desc: 'Diagnostyka wnętrza rur kamerą o wysokiej rozdzielczości. Lokalizacja uszkodzeń, załamań, korzeni.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <div className="p-3 bg-sky-50 rounded-xl w-fit mb-4">
                  <item.icon className="w-7 h-7 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Obszar działania - osiedla i ulice */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sky-600 font-semibold text-sm tracking-wider uppercase mb-4">
              Obsługujemy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              {district.name} – obszar działania
            </h2>
          </div>

          {/* Osiedla / części dzielnicy */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-slate-700 mb-4">Osiedla i części dzielnicy:</h3>
            <div className="flex flex-wrap gap-3">
              {district.areas.map((area, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-sky-50 text-sky-700 rounded-full font-medium border border-sky-100"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Ulice */}
          <div>
            <h3 className="text-xl font-semibold text-slate-700 mb-4">Dojeżdżamy m.in. na ulice:</h3>
            <p className="text-slate-600 leading-relaxed">
              {district.streets.join(' • ')} i pozostałe ulice dzielnicy {district.name}.
            </p>
          </div>
        </div>
      </section>

      {/* Opinie lokalne */}
      {district.testimonials.length > 0 && (
        <section className="py-20 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-sky-600 font-semibold text-sm tracking-wider uppercase mb-4">
                Opinie z {district.name}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Co mówią klienci
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {district.testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                >
                  <Quote className="w-8 h-8 text-sky-300 mb-4" />
                  <p className="text-slate-700 leading-relaxed mb-4 italic">"{t.text}"</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="w-4 h-4" />
                    <span>{t.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dlaczego my (lokalna wersja) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Dlaczego warto wybrać nas w {district.name}
          </h2>
          <div className="space-y-4">
            {[
              `Doświadczenie od ${siteConfig.experienceSince} r. – praca z kanalizacją miejską (MPWiK Warszawa) i przydomową`,
              'Sprzęt dopasowany do bloków, kamienic i domów jednorodzinnych',
              'Jasne zasady rozliczeń i możliwość faktury VAT',
              'Skupienie na usunięciu przyczyny problemu, nie tylko jego skutków',
              'Dobry znajomość dzielnicy – szybki dojazd i sprawne wykonanie',
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-sky-500 flex-shrink-0 mt-0.5" />
                <p className="text-lg text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-sky-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Potrzebujesz Wuko w {district.name}?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Zadzwoń – ustalimy termin i orientacyjny koszt.
          </p>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex items-center gap-3 bg-white text-sky-600 px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            <span>{siteConfig.phone}</span>
          </a>
        </div>
      </section>

      {/* Inne dzielnice */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Działamy też w innych dzielnicach Warszawy
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.mainDistricts
              .filter((d) => d !== district.name)
              .map((d) => {
                const otherDistrict = districts.find((x) => x.name === d);
                if (!otherDistrict) return null;
                return (
                  <Link
                    key={d}
                    to={`/${otherDistrict.slug}`}
                    className="group flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all"
                  >
                    <MapPin className="w-4 h-4 text-sky-500" />
                    <span className="font-medium text-slate-700 group-hover:text-sky-600">
                      Wuko {d}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default DistrictPage;
