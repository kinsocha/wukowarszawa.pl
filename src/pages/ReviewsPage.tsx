import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { siteConfig } from '../config/site';

interface Review {
  text: string;
  rating: number;
  location?: string;
  service?: string;
}

// Opinie klientów - zachowane ze starej strony reviews.html plus z podstron dzielnic
const reviews: Review[] = [
  {
    text: 'Bardzo skuteczne czyszczenie. Rury od studzienki były mocno zanieczyszczone, ale ciśnienie wody poradziło sobie z piaskiem, osadami i tłuszczem. Woda spływa lepiej niż kiedykolwiek wcześniej. Polecam.',
    rating: 5,
    service: 'Hydrodynamiczne Wuko',
  },
  {
    text: 'Pan przyjechał jeszcze tego samego dnia. Wszystko poszło sprawnie, a do tego sympatyczny człowiek. Bardzo polecam.',
    rating: 5,
  },
  {
    text: 'Przepchany odpływ w łazience, szybko i bez bałaganu. Jestem zadowolony.',
    rating: 5,
  },
  {
    text: 'Bardzo szybka interwencja i profesjonalne podejście. Zator w kuchni usunięty w 30 minut, a przyjechali na Tarchomin w ciągu godziny od zgłoszenia. Polecam bez wahania.',
    rating: 5,
    location: 'Tarchomin',
  },
  {
    text: 'Pan zjawił się o umówionej godzinie i miał profesjonalny sprzęt. Kilka minut i kanalizacja znów działa, a problem ciągnął się tygodniami.',
    rating: 5,
    location: 'Anin (Wawer)',
  },
  {
    text: 'Po płukaniu Wuko odpływ działa normalnie, a w pionie przestało bulgotać. Cena zgodna z ustaleniami. Porządek po pracy.',
    rating: 5,
    location: 'Praga Południe',
  },
  {
    text: 'Profesjonalizm, punktualność i uczciwe podejście do klienta. Cena zgodna z ustaleniami. Udrażnianie pionu kanalizacyjnego wykonane wzorowo.',
    rating: 5,
    location: 'Choszczówka (Białołęka)',
  },
  {
    text: 'Pan był przygotowany, cierpliwy i dokładny. Wytłumaczył, gdzie leżał problem, i zasugerował, jak uniknąć podobnych sytuacji w przyszłości. Bardzo cenię takie podejście.',
    rating: 5,
    location: 'Ursus',
  },
  {
    text: 'Hydraulik przepchał rury ciśnieniem wody. Doceniam, że po udrażnianiu sprawdził kamerą, czy rura jest naprawdę czysta. Od tamtej pory cisza – żadnych cofek i bulgotania.',
    rating: 5,
    location: 'Bródno',
  },
  {
    text: 'Zator wracał co pół roku. Tym razem zrobione porządnie: płukanie, czyszczenie, kamerowanie i wytłumaczenie, skąd bierze się problem.',
    rating: 5,
    location: 'Bródno',
  },
  {
    text: 'Świetny kontakt, szybka realizacja i pełna kultura. Przyjechali na Białołękę Nową i poradzili sobie z problemem, z którym inni sobie nie radzili.',
    rating: 5,
    location: 'Białołęka Nowa',
  },
  {
    text: 'Sprawnie i bez bałaganu. Kamienica na Filtrach – problem rozwiązany od ręki.',
    rating: 5,
    location: 'Filtry (Ochota)',
  },
];

const ReviewsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Opinie klientów – Wuko Warszawa';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Opinie klientów o usługach Wuko Warszawa: udrażnianie kanalizacji, sprężyna elektryczna, Wuko, inspekcja kamerą TV. Zobacz, jak oceniają nas mieszkańcy Warszawy i okolic.'
      );
    }
  }, []);

  // Średnia ocena
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 overflow-hidden">
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
            <Link to="/" className="hover:text-sky-300 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Strona główna
            </Link>
            <span>/</span>
            <span className="text-white">Opinie</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Opinie klientów
            </h1>

            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-2xl font-bold text-white ml-2">{avgRating.toFixed(1)}/5</span>
            </div>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              Tu znajdziesz oceny i komentarze osób, którym pomagaliśmy przy udrażnianiu kanalizacji
              w Warszawie i okolicach.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-6 border border-sky-100"
              >
                <Quote className="w-8 h-8 text-sky-300 mb-4" />

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-4 italic">"{review.text}"</p>

                <div className="space-y-1 text-sm text-slate-500 border-t border-sky-200/50 pt-3">
                  {review.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{review.location}</span>
                    </div>
                  )}
                  {review.service && (
                    <div className="text-sky-600 font-medium">{review.service}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-sky-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Dołącz do zadowolonych klientów
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Zadzwoń – ustalimy termin i orientacyjny koszt usługi.
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
    </>
  );
};

export default ReviewsPage;
