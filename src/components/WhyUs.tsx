import React from 'react';
import { Clock, Award, TrendingUp, FileText, CheckCircle, Wrench } from 'lucide-react';
import { siteConfig } from '../config/site';

const WhyUs: React.FC = () => {
  const yearsOfExperience = new Date().getFullYear() - siteConfig.experienceSince;

  const features = [
    {
      icon: Award,
      title: `Doświadczenie od ${siteConfig.experienceSince} r.`,
      description: `${yearsOfExperience}+ lat pracy z kanalizacją – najpierw w MPWiK Warszawa, od ${siteConfig.ownCompanySince} r. własna firma. Znamy stare i nowe instalacje w stolicy.`,
    },
    {
      icon: Wrench,
      title: 'Trzy metody, jedno podejście',
      description:
        'Wuko, sprężyna elektryczna i kamera TV. Dobieramy narzędzie do problemu, nie odwrotnie. Skupiamy się na usunięciu przyczyny.',
    },
    {
      icon: Clock,
      title: 'Szybki dojazd na terenie Warszawy',
      description:
        'Dojeżdżamy na Pragę, Bielany, Mokotów, Ursynów, Wolę, Bemowo, Białołękę, Targówek, Rembertów i okoliczne gminy.',
    },
    {
      icon: FileText,
      title: 'Wycena przed przyjazdem',
      description:
        'Zawsze podajemy orientacyjny koszt usługi przed wyjazdem. Bez ukrytych opłat. Możliwa faktura VAT.',
    },
    {
      icon: CheckCircle,
      title: 'Bez rozkuwania, bez chemii',
      description:
        'Metoda hydrodynamiczna usuwa tłuszcz, osady i kamień bez agresywnej chemii i z dbałością o instalację.',
    },
    {
      icon: TrendingUp,
      title: 'Mieszkania, domy, firmy',
      description:
        'Pracujemy w blokach, kamienicach, domach jednorodzinnych, wspólnotach mieszkaniowych i lokalach usługowych.',
    },
  ];

  return (
    <section id="dlaczego-my" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sky-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Dlaczego my
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Doświadczenie, które pracuje na Twoją kanalizację
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Doświadczenie w udrażnianiu rur Wuko zdobywałem od {siteConfig.experienceSince} r., pracując
            w MPWiK w Warszawie. Od {siteConfig.ownCompanySince} r. prowadzę własną firmę i zajmuję się
            ciśnieniowym udrażnianiem kanalizacji na terenie Warszawy i okolic.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              <div className="p-4 bg-gradient-to-br from-sky-100 to-cyan-100 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
