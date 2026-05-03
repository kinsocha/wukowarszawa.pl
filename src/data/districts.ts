// Dane wszystkich podstron dzielnic.
// Każda dzielnica = osobny URL = osobna podstrona.
// Treści pobrane z żywej strony wukowarszawa.pl - 6 podstron istniejących + 4 dorobione na podstawie wzorca strony.

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
      'Profesjonalne Wuko Targówek – szybkie i skuteczne udrażnianie rur w dzielnicy Targówek. Ciśnieniowe udrażnianie rur, kamerowanie kanalizacji.',
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
      'Ciśnieniowe udrażnianie rur Wuko Białołęka. Monitoring rur kanalizacyjnych, sprężyna elektryczna, hydrodynamiczne czyszczenie.',
    heroIntro:
      'Świadczymy usługi czyszczenia i udrażniania kanalizacji ciśnieniowo na terenie całej dzielnicy Białołęka. Zapewniamy szybki dojazd, nowoczesny sprzęt i skuteczną pomoc w nagłych przypadkach.',
    areas: ['Tarchomin', 'Choszczówka', 'Białołęka Dworska', 'Brzeziny', 'Henryków', 'Kobiałka', 'Nowodwory', 'Białołęka Nowa'],
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
      'Hydrodynamiczne czyszczenie kanalizacji Wuko to obecnie najskuteczniejsza metoda przywracania pełnej drożności rur. Wysokociśnieniowa woda – nawet do 200 barów – usuwa złogi tłuszczu, osadów organicznych i mineralnych, piasku, resztek betonu i innych przeszkód, które w tradycyjnych metodach pozostają nietknięte. Bez rozkuwania ścian i bez agresywnej chemii. Wykonujemy również inspekcje TV przed i po czyszczeniu, abyś dokładnie wiedział, co działo się w Twoich rurach i dlaczego problem nie wróci.',
    testimonials: [
      {
        text: 'Bardzo szybka interwencja i profesjonalne podejście. Zator w kuchni usunięty w 30 minut, a przyjechali na Tarchomin w ciągu godziny od zgłoszenia. Polecam bez wahania.',
        location: 'Tarchomin',
      },
      {
        text: 'Świetny kontakt, szybka realizacja i pełna kultura. Przyjechali na Białołękę Nową i poradzili sobie z problemem, z którym inni sobie nie radzili.',
        location: 'Białołęka Nowa',
      },
      {
        text: 'Profesjonalizm, punktualność i uczciwe podejście do klienta. Cena zgodna z ustaleniami. Udrażnianie pionu kanalizacyjnego wykonane wzorowo.',
        location: 'Choszczówka',
      },
    ],
  },
  {
    slug: 'wukobielany',
    name: 'Bielany',
    fullName: 'Wuko Bielany',
    metaTitle: 'Wuko Bielany – udrażnianie kanalizacji | Wuko Warszawa',
    metaDescription:
      'Udrażnianie kanalizacji i czyszczenie rur metodą Wuko na warszawskich Bielanach. Zatory w zlewie, toalecie, pionach i rurach zewnętrznych.',
    heroIntro:
      'Pracujemy w blokach, kamienicach, domach jednorodzinnych i lokalach usługowych na terenie Bielan i sąsiednich dzielnic. Bielany łączą starszą zabudowę z nowymi osiedlami – znamy specyfikę różnych typów instalacji w tej dzielnicy.',
    areas: ['Chomiczówka', 'Wawrzyszew', 'Stare Bielany', 'Słodowiec', 'Młociny'],
    streets: [
      'Marymoncka',
      'Kasprowicza',
      'Żeromskiego',
      'Reymonta',
      'Conrada',
      'Wólczyńska',
      'Sokratesa',
      'Lindego',
      'Wrzeciono',
      'Broniewskiego',
      'Klaudyny',
      'Płatnicza',
      'Magiera',
      'Schroegera',
      'Twardowska',
    ],
    description:
      'Udrażnianie zlewów, umywalek, brodzików i wanien. Usuwamy osady tłuszczu, resztki jedzenia i inne zanieczyszczenia odkładające się w rurach. Pomagamy, gdy toaleta przelewa się lub w pionie słychać charakterystyczne bulgotanie. Czyszczenie przyłączy, rur odprowadzających ścieki, studzienek i kanalizacji deszczowej z użyciem wody pod wysokim ciśnieniem. Na Bielanach spotykamy zarówno stare instalacje w kamienicach, jak i nowe systemy w świeżo oddanych blokach. W pierwszym przypadku problemem bywa wiek rur i osady narastające latami, w drugim – intensywna eksploatacja pionów przez wielu mieszkańców.',
    testimonials: [
      {
        text: 'Wuko poradziło sobie tam, gdzie sprężyna już nie wystarczała. Pion na Chomiczówce odzyskał drożność, polecam.',
        location: 'Chomiczówka',
      },
      {
        text: 'Sprawnie i konkretnie. Stare Bielany, kamienica – przepychanie zlewu w 40 minut.',
        location: 'Stare Bielany',
      },
    ],
  },
  {
    slug: 'wukobrodno',
    name: 'Bródno',
    fullName: 'Wuko Bródno',
    metaTitle: 'Wuko Bródno – udrażnianie kanalizacji | Wuko Warszawa',
    metaDescription:
      'Wuko Bródno (Warszawa) – udrażnianie kanalizacji i czyszczenie rur metodą ciśnieniową. Bródno: zatory w kuchni, łazience i pionach, inspekcja kamerą TV, dojazd lokalny.',
    heroIntro:
      'Wuko Bródno to usługa czyszczenia i udrażniania kanalizacji dla mieszkańców osiedla Bródno – kiedy odpływ zwalnia, bulgocze lub woda cofa się w łazience. Lokalny dojazd, udrażnianie bez rozkuwania.',
    areas: ['Bródno (Targówek)', 'Bródno-Podgrodzie', 'Stare Bródno'],
    streets: [
      'Kondratowicza',
      'Łabiszyńska',
      'Chodecka',
      'Rembielińska',
      'Wysockiego',
      'Suwalska',
      'Turmoncka',
      'Witebska',
      'Bazyliańska',
      'Krasnobrodzka',
      'Balkonowa',
      'Bartnicza',
      'Nadwiślańska',
      'Wyszogrodzka',
      'Bolesławicka',
      'Syrokomli',
      'Oliwska',
      'Św. Wincentego',
      'Odrowąża',
      'Łojewska',
      'Skrajna',
      'Smoleńska',
      'Julianowska',
      'Toruńska',
      'Żuromińska',
      'Zamiejska',
      'Bieżuńska',
      'Seledynowa',
      'Leśniewska',
      'Lecha',
      'Sawy',
      'Rajgrodzka',
      'Budowlana',
    ],
    description:
      'Powracające zatory zwykle nie biorą się „znikąd". W blokach na Bródnie często problem zaczyna się od warstwy tłuszczu i osadów w podejściu kuchennym, a kończy na zwężeniu w pionie. Właśnie wtedy metoda WUKO (płukanie hydrodynamiczne) działa najpewniej: wypłukuje to, co przyrasta do ścianek rur, zamiast tylko przepchnąć korek dalej. Sprężyna elektryczna do rur przydaje się tam, gdzie zator jest punktowy i twardy – np. w podejściu pod umywalką, w odpływie prysznica albo na zakręcie pionu. W praktyce często łączymy metody: najpierw sprężyna, a potem płukanie WUKO, żeby wypłukać resztki osadów.',
    testimonials: [
      {
        text: 'Hydraulik przepchał rury ciśnieniem wody. Doceniam, że po udrażnianiu sprawdził kamerą, czy rura jest naprawdę czysta. Od tamtej pory cisza – żadnych cofek i bulgotania.',
        location: 'Bródno',
      },
      {
        text: 'Zator wracał co pół roku. Tym razem zrobione porządnie: płukanie, czyszczenie, kamerowanie i wytłumaczenie, skąd bierze się problem. Polecam na Bródnie.',
        location: 'Bródno',
      },
    ],
  },
  {
    slug: 'wukowawer',
    name: 'Wawer',
    fullName: 'Wuko Wawer',
    metaTitle: 'Wuko Wawer – udrażnianie kanalizacji | Wuko Warszawa',
    metaDescription:
      'Profesjonalne udrażnianie i czyszczenie kanalizacji metodą Wuko w dzielnicy Wawer. Skutecznie, bezpiecznie, bez chemii.',
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
      'Zatory w rurach potrafią sparaliżować codzienne funkcjonowanie domu lub firmy. Stosujemy metodę hydrodynamiczną, która pozwala skutecznie usunąć nawet trudne zanieczyszczenia – bez rozkuwania, bez ryzyka dla instalacji. Przyjeżdżamy z profesjonalnym sprzętem, dobieramy ciśnienie do rodzaju instalacji i działamy szybko. Wuko Wawer to idealne rozwiązanie dla mieszkań, domów jednorodzinnych oraz lokali usługowych.',
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
      'Udrażnianie kanalizacji i czyszczenie rur metodą Wuko na warszawskiej Ochocie. Zatory w zlewie, toalecie, pionach i rurach zewnętrznych.',
    heroIntro:
      'Pracujemy w blokach, kamienicach, domach jednorodzinnych i lokalach usługowych na terenie Ochoty i sąsiednich dzielnic. Korzystamy z Wuko i sprężyny mechanicznej, dobierając metodę do instalacji.',
    areas: ['Stara Ochota', 'Filtry', 'Rakowiec', 'Szczęśliwice', 'okolice Grójeckiej'],
    streets: [
      'Grójecka',
      'Filtrowa',
      'Wawelska',
      'Niemcewicza',
      'Dickensa',
      'Banacha',
      'Korotyńskiego',
      'Białobrzeska',
      'Mołdawska',
      'Szczęśliwicka',
      'Włodarzewska',
      'Drawska',
      'Urbanistów',
      'Lirowa',
      'Opaczewska',
    ],
    description:
      'Ochota łączy zabudowę przedwojenną, powojenne bloki i nowsze osiedla. To oznacza różne typy instalacji – od starych rur w kamienicach przy Filtrowej czy Niemcewicza, po nowoczesne systemy w okolicach ulicy Banacha i Włodarzewskiej. Znamy typowe układy pionów i przyłączy w tej dzielnicy, co skraca czas diagnozy i pomaga od razu dobrać właściwy sposób czyszczenia. Przy dłuższych odcinkach rur, szczególnie między budynkiem a studzienką, sama sprężyna może nie wystarczyć. Wtedy sprawdza się czyszczenie hydrodynamiczne – strumień wody pod ciśnieniem rozbija nagromadzone osady i wypłukuje je dalej.',
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
    slug: 'wukopragapolnoc',
    name: 'Praga Północ',
    fullName: 'Wuko Praga Północ',
    metaTitle: 'Wuko Praga Północ – udrażnianie kanalizacji | Wuko Warszawa',
    metaDescription:
      'Udrażnianie kanalizacji i czyszczenie rur metodą Wuko na warszawskiej Pradze Północ. Stare kamienice, zabytkowe instalacje, nowe lokale.',
    heroIntro:
      'Pracujemy w kamienicach, blokach, lokalach usługowych i restauracjach na terenie Pragi Północ. Stara zabudowa z przedwojnia spotyka tu nowe lokale gastronomiczne – mamy doświadczenie z różnymi typami instalacji.',
    areas: ['Stara Praga', 'Nowa Praga', 'Szmulowizna', 'Pelcowizna', 'okolice Konesera'],
    streets: [
      'Targowa',
      'Ząbkowska',
      'Brzeska',
      'Floriańska',
      'Jagiellońska',
      'Stalowa',
      'Kawęczyńska',
      '11 Listopada',
      'Wileńska',
      'Inżynierska',
      'Czynszowa',
      'Kłopotowskiego',
      'Markowska',
      'Białostocka',
      'Radzymińska',
      'Konopacka',
      'Wybrzeże Szczecińskie',
      'al. Solidarności',
      'Szwedzka',
      'Strzelecka',
      'Środkowa',
      'Szymanowskiego',
    ],
    description:
      'Praga Północ to dzielnica z bogatą historią i wyjątkową zabudową – przedwojenne kamienice przy Brzeskiej, Ząbkowskiej i Stalowej, kompleks Konesera, lokale wzdłuż Targowej. Stare instalacje kanalizacyjne często wymagają delikatnego podejścia: dobieramy ciśnienie i metodę do typu rur (kamionka, żeliwo, PVC). W lokalach gastronomicznych typowym problemem są osady tłuszczu w pionach – tu hydrodynamiczne Wuko sprawdza się najlepiej. Pracujemy także w obiektach zabytkowych z niezbędnym wyczuciem i dbałością o substancję budynku.',
    testimonials: [
      {
        text: 'Kamienica przy Ząbkowskiej, zatkany pion w lokalu. Uporali się szybko, bez kucia ścian.',
        location: 'Ząbkowska',
      },
      {
        text: 'Restauracja na Pradze, problem z odpływem zlewozmywaka. Wycenione przed pracą, faktura VAT bez problemu.',
        location: 'Stara Praga',
      },
    ],
  },
  {
    slug: 'wukopragapoludnie',
    name: 'Praga Południe',
    fullName: 'Wuko Praga Południe',
    metaTitle: 'Wuko Praga Południe – udrażnianie kanalizacji | Wuko Warszawa',
    metaDescription:
      'Udrażnianie kanalizacji i czyszczenie rur metodą Wuko na Pradze Południe. Zatory w zlewie, toalecie, pionach i rurach zewnętrznych.',
    heroIntro:
      'Pracujemy w blokach, kamienicach, domach jednorodzinnych i lokalach usługowych na terenie Pragi Południe i sąsiednich dzielnic. Korzystamy z Wuko i sprężyny mechanicznej, dobierając metodę do instalacji.',
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
      'Praga Południe to m.in. Grochów, Gocław, Kamionek i Saska Kępa. Różne typy zabudowy oznaczają zróżnicowane instalacje: starsze piony w blokach i kamienicach oraz nowsze systemy w nowych osiedlach. Znamy typowe problemy lokalnych instalacji – od osadów w długich przewodach po przewężenia na starych odcinkach rur. Powolny odpływ wody, osady tłuszczu czy zanieczyszczenia w pionach to sytuacje, w których dobrze sprawdza się czyszczenie hydrodynamiczne – Wuko. Do instalacji wprowadzany jest elastyczny wąż z dyszą, a strumień wody pod ciśnieniem rozbija i wypłukuje osady. Bez użycia agresywnej chemii, bez rozkuwania.',
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
  {
    slug: 'wukorembertow',
    name: 'Rembertów',
    fullName: 'Wuko Rembertów',
    metaTitle: 'Wuko Rembertów – udrażnianie kanalizacji | Wuko Warszawa',
    metaDescription:
      'Udrażnianie kanalizacji i czyszczenie rur metodą Wuko w Rembertowie. Domy jednorodzinne, szamba, przyłącza, sprężyna elektryczna.',
    heroIntro:
      'Dojeżdżamy do Rembertowa przy zatorach w domach jednorodzinnych, na działkach z szambami, w blokach i lokalach usługowych. Dzielnica z dużą ilością zabudowy jednorodzinnej – mamy doświadczenie w czyszczeniu przyłączy i rur od szamba.',
    areas: ['Stary Rembertów', 'Nowy Rembertów', 'Kawęczyn-Wygoda', 'Pociski', 'Wygoda'],
    streets: [
      'Marsa',
      'Cyrulików',
      'Czwartaków',
      'Chełmżyńska',
      'Płatnerska',
      'Gawędziarzy',
      'Ady Sari',
      'Strażacka',
      'Kordiana',
      'Paderewskiego',
      'Republikańska',
      'Frontowa',
      'Plutonowych',
      'Beli Bartoka',
      'Komandosów',
    ],
    description:
      'Rembertów to przede wszystkim domy jednorodzinne i mniejsze bloki – częstą sytuacją są zatory na przyłączach do szamba lub kanalizacji miejskiej, czyszczenie studzienek oraz rur deszczowych. Hydrodynamiczne Wuko działa tu szczególnie dobrze przy dłuższych odcinkach rur zewnętrznych, gdzie sprężyna elektryczna już nie wystarcza. Korzenie drzew wrastające w stare przyłącza, osady mineralne, piasek po opadach – z tym wszystkim radzi sobie strumień wody pod ciśnieniem. Przed wyceną prosimy o krótki opis – czy problem dotyczy domu, czy działki, gdzie znajduje się studzienka rewizyjna.',
    testimonials: [
      {
        text: 'Czyszczenie przyłącza od szamba do domu w Starym Rembertowie. Sprawnie, bez kopania.',
        location: 'Stary Rembertów',
      },
      {
        text: 'Korzenie wrastały w rurę – kamera pokazała problem, Wuko wypłukało resztę. Polecam.',
        location: 'Rembertów',
      },
    ],
  },
  {
    slug: 'wukoursus',
    name: 'Ursus',
    fullName: 'Wuko Ursus',
    metaTitle: 'Wuko Ursus – udrażnianie kanalizacji | Wuko Warszawa',
    metaDescription:
      'Profesjonalne Wuko Ursus – szybkie udrażnianie rur, ciśnieniowe czyszczenie kanalizacji, kamerowanie.',
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
      'Jeśli mieszkasz w Ursusie i szukasz sprawdzonego sposobu na udrażnianie kanalizacji, skorzystaj z naszej usługi ciśnieniowego udrażniania rur. Stosujemy metodę hydrodynamiczną – skuteczną nawet przy trudnych zanieczyszczeniach – bez rozkuwania i bez ryzyka dla instalacji. Działamy lokalnie i dobrze znamy dzielnicę. Wuko Ursus to idealne rozwiązanie dla mieszkań, domów jednorodzinnych oraz lokali usługowych. Nasza metoda jest bezpieczna, ekologiczna i bardzo skuteczna.',
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
];

export function getDistrictBySlug(slug: string): DistrictData | undefined {
  return districts.find((d) => d.slug === slug);
}

export default districts;
