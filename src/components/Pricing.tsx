import React from 'react';
import { Check, Phone, Info } from 'lucide-react';
import { siteConfig } from '../config/site';

const Pricing: React.FC = () => {
  // Prawdziwy cennik usługowy - "od X zł", bez abonamentów.
  // Cena finalna zależy od rodzaju instalacji, dostępu do rur i skali problemu.
  const services = [
    {
      name: 'Przepychanie zlewu / WC',
      from: 'od 300 zł',
      description: 'Typowe zatory w kuchni lub łazience, dojazd na terenie Warszawy.',
      features: [
        'Zlewy, umywalki, brodziki, wanny',
        'Sprężyna elektryczna lub mechaniczna',
        'Dobór metody do instalacji',
        'Wycena przed pracą',
      ],
      isPopular: false,
    },
    {
      name: 'Hydrodynamiczne Wuko',
      from: 'od 450 zł',
      description: 'Ciśnieniowe czyszczenie pionów, poziomów, przyłączy i studzienek.',
      features: [
        'Woda pod ciśnieniem do 200 bar',
        'Skuteczne na tłuszcz, osady, kamień',
        'Bez agresywnej chemii',
        'Bez rozkuwania',
        'Faktura VAT',
      ],
      isPopular: true,
    },
    {
      name: 'Inspekcja kamerą TV',
      from: 'od 450 zł',
      description: 'Diagnostyka kamerą do trudnych przypadków lub przed remontem.',
      features: [
        'Kamera o wysokiej rozdzielczości',
        'Lokalizacja uszkodzeń',
        'Wykrywanie korzeni i pęknięć',
        'Raport po inspekcji',
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="cennik" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sky-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Cennik
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Orientacyjne ceny usług
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ceny zależą od rodzaju instalacji, dostępu do rur i skali problemu.
            Poniżej przykładowe kwoty, które pomagają zorientować się w kosztach.
            <strong className="block mt-2 text-slate-700">
              Wycenę zawsze podajemy przed przyjazdem.
            </strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-sm border transition-all hover:shadow-xl hover:-translate-y-1 ${
                service.isPopular
                  ? 'border-sky-500 ring-4 ring-sky-500/10 lg:scale-105'
                  : 'border-slate-200 hover:border-sky-200'
              }`}
            >
              {service.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Najczęściej wybierane
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-slate-500 text-sm">{service.description}</p>
              </div>

              <div className="text-center mb-8">
                <div className="text-4xl lg:text-5xl font-bold text-slate-900">
                  {service.from}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${siteConfig.phoneTel}`}
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-center font-semibold transition-all ${
                  service.isPopular
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-sky-500/30 hover:scale-[1.02]'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Zapytaj o wycenę</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
          <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-slate-700 leading-relaxed">
              <strong>Skomplikowane przypadki</strong> (zatory w pionach wielorodzinnych, awarie przyłączy,
              prace nocne, dojazdy do okolicznych gmin) wyceniamy indywidualnie. Zadzwoń –{' '}
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="text-sky-600 font-semibold hover:underline"
              >
                {siteConfig.phone}
              </a>
              {' '}– i krótko opisz sytuację.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
