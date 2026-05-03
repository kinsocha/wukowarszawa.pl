import React from 'react';
import { Phone, Search, Wrench, ClipboardCheck } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Zgłoszenie i wycena',
      description:
        'Zadzwoń i krótko opisz problem. Podamy orientacyjny koszt usługi i zaproponujemy szybki termin realizacji.',
    },
    {
      icon: Search,
      title: 'Diagnostyka na miejscu',
      description:
        'Oglądamy instalację i wybieramy metodę – Wuko, sprężyna elektryczna albo kamera. Omawiamy zakres prac.',
    },
    {
      icon: Wrench,
      title: 'Realizacja',
      description:
        'Wykonujemy czyszczenie i sprawdzamy przepływ. Pracujemy bez agresywnej chemii i bez ryzyka dla instalacji.',
    },
    {
      icon: ClipboardCheck,
      title: 'Odbiór i wskazówki',
      description:
        'Po zakończeniu zostawiamy porządek. Przekazujemy wskazówki na przyszłość i tłumaczymy, gdzie był problem.',
    },
  ];

  return (
    <section id="proces" className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sky-400 font-semibold text-sm tracking-wider uppercase mb-4">
            Jak działamy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Prostym językiem: 4 kroki
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Bez ściany powtarzanych fraz – po prostu to, co faktycznie robimy u klientów.
            Od pierwszego telefonu do zakończenia prac.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-sky-500 to-cyan-500" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-sky-500/30">
                    {index + 1}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:pt-16 hover:bg-white/15 transition-all h-full">
                  <div className="lg:hidden flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-sky-500/50 to-transparent" />
                  </div>

                  <div className="p-3 bg-sky-500/20 rounded-xl w-fit mb-4">
                    <step.icon className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
