// Dane wszystkich podstron dzielnic.
// Każda dzielnica = osobny URL = osobna podstrona.
// Dane oparte na treści ze starej strony wukowarszawa.pl

export interface DistrictData {
  slug: string; // URL np. "wukowawer" → /wukowawer
  name: string; // "Wawer"
  fullName: string; // "Wuko Wawer"
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  areas: string[]; // części dzielnicy / osiedla
  streets: string[]; // ulice obsługiwane
  description: string; // dłuższy opis (akapit)
  testimonials: Array<{
    text: string;
    location: string;
  }>;
}

export const districts: DistrictData[] = [
  {
    slug: 'wukotargowek',
    name: 'Targówek',
    fullName: 'Wuko Targówek',
    metaTitle: 'Wuko Targówek – udrażnianie kanalizacji | Wuko Warszawa',
    metaDescription:
      'Superskuteczne Wuko Targówek – szybkie i profesjonalne udrażnianie rur w dzielnicy Targówek. Ciśnieniowe udrażnianie rur, kamerowanie kanalizacji. Tel. 888 806 921.',
    heroIntro:
      'Dojeżdżamy na Targówek przy zatorach w mieszkaniach, blokach i lokalach usługowych. Mamy duże doświadczenie w przepychaniu rur w domach i firmach.',
    areas: ['Bródno', 'Targówek Mieszkaniowy', 'Targówek Fabryczny', 'Zacisze', 'Elsnerów'],
    streets: [
      'Św. Wincentego',
      'Radzymińska',
      'Trocka',
      'Kondratowicza',
      'Łabiszyńska',
      'Suwalska',
      'Wysockiego',
      'Matki Teresy z Kalkuty',
      'Krasiczyńska',
      'Handlowa',
      'Ossowskiego',
      'Łojewska',
      'Rembielińska',
    ],
    description:
      'Profesjonalne Wuko Targówek to szybkie i skuteczne udrażnianie rur ciśnieniowo, kamerowanie kanalizacji oraz mechaniczne usuwanie zatorów. Pracujemy w blokach, kamienicach, domach jednorodzinnych i lokalach usługowych. Dobieramy metodę – Wuko, sprężynę elektryczną lub kamerę – do typu instalacji i rodzaju zatoru.',
    testimonials: [
      {
        text: 'Szybka reakcja, na Bródnie zator usunięty w godzinę. Polecam.',
        location: 'Bródno',
      },
      {
        text: 'Profesjonalne podejście i porządek po pracy. Wytłumaczono, gdzie był problem.',
        location: 'Targówek Mieszkaniowy',
      },
    ],
  },
  {
    slug: 'wukobialoleka',
    name: 'Białołęka',
    fullName: 'Wuko Białołęka',
    metaTitle: 'Wuko Białołęka – udrażnianie kanalizacji | Wuko Warszawa',
    metaDescription:
      'Ciśnieniowe udrażnianie rur Wuko na Białołęce. Monitoring kanalizacji, sprężyna elektryczna. Tel. 888 806 921.',
    heroIntro:
      'Świadczymy usługi czyszczenia i udrażniania kanalizacji ciśnieniowo na terenie całej dzielnicy Białołęka. Szybki dojazd, nowoczesny sprzęt, skuteczna pomoc w nagłych przypadkach.',
    areas: ['Tarchomin', 'Choszczówka', 'Białołęka Dworska', 'Brzeziny', 'Henryków', 'Kobiałka', 'Nowodwory'],
    streets: [
      'Modlińska',
      'Ostródzka',
      'Mehoffera',
      'Głębocka',
      'Płochocińska',
      'Świderska',
      'Skarbka z Gór',
      'Marywilska',
      'Białołęcka',
      'Zdziarska',
      'Mochtyńska',
      'Juranda ze Spychowa',
      'Berensona',
      'Aluzyjna',
      'Kąty Grodziskie',
      'Sprawna',
      'Kartograficzna',
      'Ćmielowska',
      'Oknicka',
      'Hemara',
      'Książkowa',
      'Prząśniczek',
      'Sieczna',
      'Krokwi',
      'Ceramiczna',
      'Krzyżówki',
      'Zaułek',
      'Ornecka',
      'Warzelnicza',
      'Szamocin',
    ],
    description:
      'Hydrodynamiczne czyszczenie kanalizacji Wuko to obecnie najskuteczniejsza metoda przywracania pełnej drożności rur. Wysokociśnieniowa woda – nawet do 200 barów – usuwa złogi tłuszczu, osadów organicznych i mineralnych, piasku, resztek betonu i innych przeszkód, które w tradycyjnych metodach pozostają nietknięte. Bez rozkuwania ścian i bez agresywnej chemii.',
    testimonials: [
      {
        text: 'Bardzo szybka interwencja. Zator w kuchni usunięty w 30 minut, na Tarchomin przyjechali w godzinę od zgłoszenia.',
        location: 'Tarchomin',
      },
      {
        text: 'Świetny kontakt, poradzili sobie z problemem na Białołęce Nowej, z którym inni sobie nie radzili.',
        location: 'Białołęka Nowa',
      },
      {
        text: 'Profesjonalizm i punktualność. Udrażnianie pionu kanalizacyjnego wykonane wzorowo. Cena zgodna z ustaleniami.',
        location: 'Choszczówka',
      },
    ],
  },
  {
    slug: 'wukowawer',
    name: 'Wawer',
    fullName: 'Wuko Wawer',
    metaTitle: 'Wuko Wawer – udrażnianie kanalizacji | Wuko Warszawa',
    metaDescription:
      'Profesjonalne udrażnianie i czyszczenie kanalizacji metodą Wuko w dzielnicy Wawer. Skutecznie, bezpiecznie, bez chemii. Tel. 888 806 921.',
    heroIntro:
      'Skuteczne, bezpieczne i szybkie czyszczenie kanalizacji w Wawrze z wykorzystaniem strumienia wody pod wysokim ciśnieniem. Usuwamy tłuszcz, osady i kamień bez agresywnej chemii i z dbałością o instalację.',
    areas: ['Anin', 'Falenica', 'Marysin Wawerski', 'Międzylesie', 'Miedzeszyn', 'Radość', 'Sadul', 'Zerzeń'],
    streets: [
      'Patriotów',
      'Trakt Lubelski',
      'Wał Miedzeszyński',
      'Żegańska',
      'Mrówcza',
      'Lucerny',
      'Zwoleńska',
      'Kadetów',
      'Izbicka',
      'Bysławska',
      'Hafciarska',
      'Mydlarska',
      'Mozaikowa',
      'Korkowa',
      'Kościuszkowców',
      'Króla Maciusia',
      'Borowiecka',
      'Cylichowska',
      'Strzygłowska',
      'Poprawna',
      'Płowiecka',
      'Bronisława Czecha',
      'Widoczna',
      'Przewodowa',
    ],
    description:
      'Zatory w rurach potrafią sparaliżować codzienne funkcjonowanie domu lub firmy. Stosujemy metodę hydrodynamiczną, która pozwala skutecznie usunąć nawet trudne zanieczyszczenia – bez rozkuwania, bez ryzyka dla instalacji. Przyjeżdżamy z profesjonalnym sprzętem, dobieramy ciśnienie do rodzaju instalacji i działamy szybko.',
    testimonials: [
      {
        text: 'Pan zjawił się o umówionej godzinie i miał profesjonalny sprzęt. Kilka minut i kanalizacja znów działa, a problem ciągnął się tygodniami.',
        location: 'Anin',
      },
      {
        text: 'Fachowiec zrobił swoje, po sobie zostawił porządek. Na pewno jeszcze kiedyś skorzystam.',
        location: 'Międzylesie',
      },
      {
        text: 'Pan udrożnił rurę sprężyną elektryczną i wytłumaczył, gdzie leżał problem. Sugerował, jak uniknąć podobnych sytuacji w przyszłości.',
        location: 'Wawer',
      },
    ],
  },
  {
    slug: 'wukoochota',
    name: 'Ochota',
    fullName: 'Wuko Ochota',
    metaTitle: 'Wuko Ochota – udrażnianie kanalizacji | Wuko Warszawa',
    metaDescription:
      'Udrażnianie kanalizacji i czyszczenie rur metodą Wuko na warszawskiej Ochocie. Zatory w zlewie, toalecie, pionach i rurach zewnętrznych. Telefon: 888 806 921.',
    heroIntro:
      'Dojeżdżamy na Ochotę, gdy kanalizacja zaczyna sprawiać problemy – woda wolno spływa, odpływ bulgocze, toaleta się przelewa albo z kratki pojawia się nieprzyjemny zapach. Korzystamy z Wuko i sprężyny mechanicznej.',
    areas: ['Stara Ochota', 'Filtry', 'Rakowiec', 'Szczęśliwice', 'okolice Grójeckiej'],
    streets: [
      'Grójecka',
      'Wawelska',
      'Banacha',
      'Pawińskiego',
      'Bitwy Warszawskiej 1920 r.',
      'Opaczewska',
      'Białobrzeska',
      'Dickensa',
      'Joteyki',
      'Filtrowa',
      'Raszyńska',
      'Mochnackiego',
      'Kopińska',
      'Częstochowska',
    ],
    description:
      'Ochota łączy zabudowę przedwojenną, powojenne bloki i nowsze osiedla. Pracujemy w kamienicach, blokach i domach jednorodzinnych. Udrażnianie zlewów, umywalek, brodzików i wanien. Usuwamy tłuszcz, resztki jedzenia i osady z detergentów odkładające się w rurach. Czyszczenie przyłączy, rur od szamba lub studzienek przy użyciu wody pod wysokim ciśnieniem.',
    testimonials: [
      {
        text: 'Sprawnie i bez bałaganu. Kamienica na Filtrach – problem rozwiązany od ręki.',
        location: 'Filtry',
      },
      {
        text: 'Diagnostyka kamerą i wskazówki na przyszłość. Polecam.',
        location: 'Stara Ochota',
      },
    ],
  },
  {
    slug: 'wukoursus',
    name: 'Ursus',
    fullName: 'Wuko Ursus',
    metaTitle: 'Wuko Ursus – udrażnianie kanalizacji | Wuko Warszawa',
    metaDescription:
      'Profesjonalne Wuko Ursus – szybkie udrażnianie rur, ciśnieniowe czyszczenie kanalizacji, kamerowanie. Tel. 888 806 921.',
    heroIntro:
      'Sprawdzona usługa czyszczenia i udrażniania kanalizacji metodą ciśnieniową na terenie całej dzielnicy Ursus. Działamy szybko, skutecznie i bezinwazyjnie.',
    areas: ['Niedźwiadek', 'Czechowice', 'Skorosze', 'Gołąbki', 'Szamoty'],
    streets: [
      'Ryżowa',
      'Cierlicka',
      'Dzieci Warszawy',
      'Wojciechowskiego',
      'Sosnkowskiego',
      'Hennela',
      'Bohaterów Warszawy',
      'Plutonu Torpedy',
      'Walerego Sławka',
      'Posag 7 Panien',
      'Szamoty',
      'Traktorzystów',
      'Spisaka',
      'Keniga',
    ],
    description:
      'Jeśli mieszkasz w Ursusie i szukasz sprawdzonego sposobu na udrażnianie kanalizacji, skorzystaj z naszej usługi ciśnieniowego udrażniania rur. Stosujemy metodę hydrodynamiczną – skuteczną nawet przy trudnych zanieczyszczeniach – bez rozkuwania i bez ryzyka dla instalacji. Działamy lokalnie i dobrze znamy dzielnicę.',
    testimonials: [
      {
        text: 'Pan zjawił się o umówionej godzinie i od razu zabrał się do pracy. Kanalizacja znów działa bez zarzutu.',
        location: 'Niedźwiadek',
      },
      {
        text: 'Bez zbędnych rozmów i opóźnień. Fachowiec zrobił swoje, zostawił porządek.',
        location: 'Skorosze',
      },
      {
        text: 'Pan był przygotowany, cierpliwy i dokładny. Wytłumaczył, gdzie leżał problem.',
        location: 'Ursus',
      },
    ],
  },
  {
    slug: 'wukopragapoludnie',
    name: 'Praga Południe',
    fullName: 'Wuko Praga Południe',
    metaTitle: 'Wuko Praga Południe – udrażnianie kanalizacji | Wuko Warszawa',
    metaDescription:
      'Udrażnianie kanalizacji i czyszczenie rur metodą Wuko na Pradze Południe. Zatory w zlewie, toalecie, pionach i rurach zewnętrznych. Telefon: 888 806 921.',
    heroIntro:
      'Pomagamy mieszkańcom Pragi Południe, gdy kanalizacja przestaje działać prawidłowo – woda wolno spływa, odpływ bulgocze, toaleta się przelewa albo z kratki ściekowej czuć nieprzyjemny zapach.',
    areas: ['Grochów', 'Gocław', 'Saska Kępa', 'Kamionek', 'Rondo Wiatraczna'],
    streets: [
      'Grochowska',
      'Ostrobramska',
      'Fieldorfa „Nila"',
      'Bora-Komorowskiego',
      'Saskiej',
      'Francuska',
      'Afrykańska',
      'Międzynarodowa',
      'Waszyngtona',
      'Wiatraczna',
      'Grenadierów',
      'Terespolska',
      'Jubilerska',
      'Lubelska',
      'Kobielska',
      'Podskarbińska',
      'Szaserów',
      'Kickiego',
    ],
    description:
      'Korzystamy z Wuko i sprężyny mechanicznej, dobierając metodę do instalacji. Pracujemy w blokach, kamienicach, domach jednorodzinnych i lokalach usługowych. Udrażnianie zlewów, umywalek, brodzików i wanien. Czyszczenie przyłączy, rur odprowadzających ścieki, studzienek i kanalizacji deszczowej przy użyciu wody pod wysokim ciśnieniem.',
    testimonials: [
      {
        text: 'Po płukaniu Wuko odpływ działa normalnie, a w pionie przestało bulgotać. Cena zgodna z ustaleniami.',
        location: 'Grochów',
      },
      {
        text: 'Przyjechali o umówionej godzinie, zrobili diagnostykę i przepłukali przewód. Porządek po pracy.',
        location: 'Saska Kępa',
      },
    ],
  },
];

export function getDistrictBySlug(slug: string): DistrictData | undefined {
  return districts.find((d) => d.slug === slug);
}

export default districts;
