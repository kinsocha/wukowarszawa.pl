import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Autentyczne opinie ze starej strony (z podstron dzielnicowych).
  const testimonials: Testimonial[] = [
    {
      name: 'Klient z Tarchomina',
      location: 'Białołęka',
      content:
        'Bardzo szybka interwencja i profesjonalne podejście. Zator w kuchni usunięty w 30 minut, a przyjechali w ciągu godziny od zgłoszenia. Polecam bez wahania.',
      rating: 5,
    },
    {
      name: 'Klientka z Wawra',
      location: 'Wawer',
      content:
        'Pan zjawił się o umówionej godzinie i miał profesjonalny sprzęt. Kilka minut i kanalizacja znów działa bez zarzutu, a wcześniej problem ciągnął się tygodniami. Cieszę się, że trafiłam na kogoś konkretnego.',
      rating: 5,
    },
    {
      name: 'Klient z Pragi Południe',
      location: 'Praga Południe',
      content:
        'Po płukaniu Wuko odpływ działa normalnie, a w pionie przestało bulgotać. Cena zgodna z ustaleniami. Zjawili się o umówionej godzinie, zrobili diagnostykę i przepłukali przewód. Porządek po pracy.',
      rating: 5,
    },
    {
      name: 'Klient z Choszczówki',
      location: 'Białołęka',
      content:
        'Profesjonalizm, punktualność i uczciwe podejście do klienta. Cena zgodna z ustaleniami. Udrażnianie pionu kanalizacyjnego wykonane wzorowo.',
      rating: 5,
    },
    {
      name: 'Klient z Ursusa',
      location: 'Ursus',
      content:
        'Pan był przygotowany, cierpliwy i dokładny. Wytłumaczył, gdzie leżał problem, i zasugerował, jak uniknąć podobnych sytuacji w przyszłości. Bardzo cenię takie podejście – nie tylko wykonanie, ale też edukacja klienta.',
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToIndex = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="opinie" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sky-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Opinie
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Co mówią klienci
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Opinie z różnych dzielnic Warszawy – mieszkania, domy, lokale usługowe.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-3xl p-8 lg:p-12 relative">
            <Quote className="w-16 h-16 text-sky-200 mb-6" />

            <div className="flex items-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-xl lg:text-2xl text-slate-800 leading-relaxed mb-8 font-medium">
              "{currentTestimonial.content}"
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-bold text-slate-900">{currentTestimonial.name}</div>
                <div className="text-slate-500 text-sm">Warszawa, {currentTestimonial.location}</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPrev}
                  aria-label="Poprzednia opinia"
                  className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-700" />
                </button>
                <button
                  onClick={goToNext}
                  aria-label="Następna opinia"
                  className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <ChevronRight className="w-5 h-5 text-slate-700" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                aria-label={`Przejdź do opinii ${index + 1}`}
                className={`transition-all rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-sky-500'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
