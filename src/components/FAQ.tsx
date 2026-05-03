import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { siteConfig } from '../config/site';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left hover:text-sky-600 transition-colors"
      >
        <span className="text-lg font-semibold text-slate-900 pr-4">{question}</span>
        <span
          className={`flex-shrink-0 p-2 rounded-full transition-colors ${
            isOpen ? 'bg-sky-100 text-sky-600' : 'bg-slate-100 text-slate-500'
          }`}
        >
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Pytania oparte na rzeczywistych treściach ze starej strony
  const faqs = [
    {
      question: 'Ile kosztuje udrażnianie kanalizacji?',
      answer:
        'Ceny zależą od rodzaju instalacji, dostępu do rur i skali problemu. Przepychanie zlewu lub WC zaczyna się od ok. 300 zł, hydrodynamiczne Wuko od ok. 450 zł, inspekcja kamerą TV od ok. 450 zł. Wycenę zawsze podajemy przed przyjazdem – wystarczy krótki opis problemu.',
    },
    {
      question: 'Czy zatkany zlew można udrożnić samemu?',
      answer:
        'Pierwszym krokiem nie musi być od razu telefon po Wuko. Bezpiecznym działaniem jest zdjęcie syfonu i jego dokładne wyczyszczenie oraz przelanie instalacji gorącą wodą (ale nie wrzątkiem do cienkich rur z tworzywa). Pomóc może też zwykła ręczna przepychaczka, używana spokojnymi, powtarzalnymi ruchami. Często powtarzane „patenty" z sodą i octem, colą czy proszkiem do pieczenia w praktyce nie rozwiązują zatoru – wtedy warto zadzwonić.',
    },
    {
      question: 'Jaka jest różnica między Wuko a sprężyną?',
      answer:
        'Wuko (czyszczenie hydrodynamiczne) to woda pod wysokim ciśnieniem – do 200 bar. Świetnie usuwa tłuszcz, osady mineralne i organiczne, kamień. Sprężyna elektryczna z kolei to mechaniczne rozbijanie zatoru – sprawdza się przy włosach, resztkach jedzenia, papierze, tekstyliach. Dobieramy metodę do problemu po obejrzeniu instalacji.',
    },
    {
      question: 'Czy metoda Wuko jest bezpieczna dla rur?',
      answer:
        'Tak. Hydrodynamiczne Wuko jest bezpieczne dla wszystkich typowych instalacji kanalizacyjnych – PVC, kamionka, żeliwo. Ciśnienie regulujemy do typu rury i średnicy. Metoda nie wymaga rozkuwania ścian i nie używamy agresywnej chemii.',
    },
    {
      question: 'Gdzie dokładnie działacie?',
      answer:
        'Cała Warszawa i okolice. Dojeżdżamy m.in. na Pragę, Bielany, Mokotów, Ursynów, Wolę, Bemowo, Białołękę, Targówek, Wawer, Ochotę, Ursus, Praga Południe, Rembertów i okoliczne gminy (Piaseczno i okolice). Najlepiej zadzwonić i podać dokładny adres – szybko powiemy, czy jesteśmy w stanie dojechać danego dnia.',
    },
    {
      question: 'Czy wystawiacie fakturę VAT?',
      answer:
        'Tak. Wystawiamy faktury VAT dla firm, wspólnot mieszkaniowych i klientów indywidualnych. Można umówić się na cyklicznie powtarzane prace – np. okresową konserwację pionów w budynku.',
    },
    {
      question: 'Co jeśli problem wróci?',
      answer:
        'Po pracy zostawiamy porządek i przekazujemy wskazówki na przyszłość – tłumaczymy, gdzie był problem i jak go uniknąć. Jeśli mimo to zator wraca, zwykle oznacza to głębsze problemy z instalacją (np. uszkodzenie, wrastające korzenie, zła geometria rur). Wtedy warto wykonać inspekcję kamerą TV.',
    },
    {
      question: 'Jak szybko możecie przyjechać?',
      answer:
        'Zawsze ustalamy termin przed przyjazdem. Często udaje się dojechać tego samego dnia, w pilnych sytuacjach (zalanie, awaria pionu) staramy się reagować priorytetowo. Zadzwoń: ' +
        siteConfig.phone +
        ' – krótko opiszemy sytuację i podamy najszybszy realny termin.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sky-600 font-semibold text-sm tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Najczęstsze pytania
          </h2>
          <p className="text-lg text-slate-600">
            Krótko i konkretnie. Jeśli nie znajdziesz odpowiedzi – po prostu zadzwoń.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
