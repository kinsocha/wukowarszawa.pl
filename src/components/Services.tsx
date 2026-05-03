import React from 'react';
import { Droplets, Wrench, Camera, Home, Building2, Briefcase, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300">
      <div className="p-4 bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-sky-600" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-slate-600">
            <svg
              className="w-4 h-4 text-sky-500 mr-2 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a href="#kontakt" className="inline-flex items-center text-sky-600 font-semibold group-hover:text-sky-700">
        Zapytaj o szczegóły
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: Droplets,
      title: 'Hydrodynamiczne Wuko',
      description:
        'Czyszczenie rur wodą pod wysokim ciśnieniem (do 200 bar). Skuteczne przy osadach, tłuszczach i zalegających zanieczyszczeniach w kanalizacji.',
      features: ['Bez agresywnej chemii', 'Bezpieczne dla rur', 'Najszybsza metoda przy osadach'],
    },
    {
      icon: Wrench,
      title: 'Sprężyna elektryczna',
      description:
        'Mechaniczne usuwanie zatorów w pionach, poziomach oraz przy przyborach sanitarnych: zlewy, umywalki, toalety, brodziki.',
      features: ['Skuteczne przy włosach i resztkach', 'Wybór końcówek do typu zatoru', 'Bez rozkuwania'],
    },
    {
      icon: Camera,
      title: 'Inspekcja kamerą TV',
      description:
        'Diagnostyka wnętrza rur kamerą o wysokiej rozdzielczości. Pozwala precyzyjnie zlokalizować uszkodzenia, załamania, czy wrastające korzenie.',
      features: ['Diagnoza przed naprawą', 'Lokalizacja uszkodzeń', 'Przegląd techniczny'],
    },
    {
      icon: Home,
      title: 'Mieszkania i domy',
      description:
        'Zatkany zlew, prysznic, toaleta czy rura od szamba – przyjeżdżamy z odpowiednim sprzętem do mieszkań, domów jednorodzinnych i segmentów.',
      features: ['Kuchnia, łazienka, WC', 'Podejścia kanalizacyjne', 'Dobór metody do instalacji'],
    },
    {
      icon: Building2,
      title: 'Wspólnoty i administracja',
      description:
        'Konserwacja pionów, usuwanie zatorów w częściach wspólnych, czyszczenie studzienek i przyłączy przy budynkach wielorodzinnych.',
      features: ['Praca z administracją', 'Faktura VAT', 'Profilaktyka pionów'],
    },
    {
      icon: Briefcase,
      title: 'Lokale usługowe i biurowce',
      description:
        'Lokale gastronomiczne, biurowce, obiekty użyteczności publicznej. Dostosowujemy termin prac, aby jak najmniej utrudniać funkcjonowanie obiektu.',
      features: ['Praca poza godzinami pracy', 'Umowy serwisowe', 'Rozliczenia VAT'],
    },
  ];

  return (
    <section id="uslugi" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sky-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Co robimy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Trzy metody i wszystkie typy obiektów
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dobieramy metodę do konkretnego problemu i instalacji. Pracujemy zarówno w mieszkaniach
            i domach, jak i w budynkach wielorodzinnych oraz obiektach usługowych.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
