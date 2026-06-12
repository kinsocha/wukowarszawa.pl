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
  faq?: Array<{
    question: string;
    answer: string;
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
    faq: [
      {
        question: 'Ile kosztuje Wuko na Targówku?',
        answer: 'Każde zlecenie wyceniamy indywidualnie – orientacyjny cennik usług znajdziesz na stronie głównej, w sekcji Cennik. Dokładną kwotę podajemy telefonicznie, przed przyjazdem, po krótkim opisie problemu. Na miejscu nie ma niespodzianek.',
      },
      {
        question: 'Jak szybko przyjedziecie na Targówek?',
        answer: 'Najczęściej w ciągu 1–2 godzin od zgłoszenia. Znamy dobrze dzielnicę – zarówno bloki w Targówku Mieszkaniowym, jak i starszą zabudowę przy Radzymińskiej.',
      },
      {
        question: 'Obsługujecie bloki i kamienice na całym Targówku?',
        answer: 'Tak. Pracujemy w blokach spółdzielczych, kamienicach i nowych osiedlach. Obsługujemy Bródno, Targówek Mieszkaniowy, Fabryczny, Zacisze i Elsnerów. Jeśli nie jesteś pewny, czy dojedziemy na Twój adres – zadzwoń, sprawdzimy.',
      },
      {
        question: 'Pion w bloku na Targówku zatyka się co kilka miesięcy – co z tym zrobić?',
        answer: 'Powtarzające się zatory w pionie to zwykle osady narastające na długim odcinku rury, nie jednorazowy korek. Przepchnięcie sprężyną daje chwilową ulgę. Płukanie hydrodynamiczne Wuko usuwa osady ze ścianek – efekt jest trwalszy. Przy opornych przypadkach warto też zrobić inspekcję kamerą TV.',
      },
      {
        question: 'Czy wystawiacie faktury VAT na Targówku?',
        answer: 'Tak. Wystawiamy faktury dla osób prywatnych, firm, spółdzielni i wspólnot mieszkaniowych. Można też umówić się na cykliczne przeglądy pionów.',
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
    faq: [
      {
        question: 'Ile kosztuje Wuko na Białołęce?',
        answer: 'Cena zależy od rodzaju instalacji i skali zatoru. Orientacyjne stawki mamy zebrane na stronie głównej, w sekcji Cennik. Konkretną wycenę podajemy telefonicznie, przed przyjazdem – po krótkim opisie problemu i adresie.',
      },
      {
        question: 'Jak szybko przyjedziecie na Tarchomin, Choszczówkę lub Nowodwory?',
        answer: 'Zazwyczaj w ciągu 1–2 godzin. Białołęka jest rozległą dzielnicą – czas dojazdu zależy od aktualnej trasy, ale staramy się reagować szybko. Zadzwoń i podaj adres, ustalimy realny termin.',
      },
      {
        question: 'Czy Wuko nadaje się do nowych domów jednorodzinnych na Białołęce?',
        answer: 'Tak. Nowe instalacje PVC bez problemu znoszą ciśnienie Wuko. W nowych budynkach na Białołęce częstym problemem są osady tłuszczu i resztki budowlane pozostałe po odbiorze. Wuko je wypłucze bez ryzyka dla instalacji.',
      },
      {
        question: 'Korzenie drzew w rurach – czy to problem na Białołęce?',
        answer: 'Owszem, szczególnie w starszych częściach dzielnicy i na działkach z drzewami blisko domu. Korzenie wrastają w nieszczelności na połączeniach rur. Kamera TV wskazuje dokładne miejsce, a Wuko usuwa włókna korzeni. Przy mocno przerośniętych rurach może być potrzebna wymiana odcinka.',
      },
      {
        question: 'Czy po udrożnieniu możecie zrobić inspekcję kamerą?',
        answer: 'Tak. Inspekcję kamerą TV można wykonać przed czyszczeniem (diagnostyka) lub po nim (potwierdzenie, że rura jest czysta). Nagranie możemy przekazać na pendrive. Przydatne szczególnie przy starszych przyłączach i rurach biegnących przez ogród.',
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
    faq: [
      {
        question: 'Ile kosztuje Wuko na Bielanach?',
        answer: 'Wyceniamy przed przyjazdem, telefonicznie – wystarczy krótki opis sytuacji. Orientacyjny cennik poszczególnych usług znajdziesz na stronie głównej. Żadnych dopłat doliczanych na miejscu.',
      },
      {
        question: 'Czy obsługujecie stare kamienice na Bielanach?',
        answer: 'Tak. Na Starych Bielanach i przy Kasprowicza czy Marymonckiej spotykamy stare piony żeliwne i ceramiczne odpływy. Znamy te instalacje. Dobieramy ciśnienie ostrożnie, żeby nie uszkodzić rur liczących kilkadziesiąt lat.',
      },
      {
        question: 'Jak szybko możecie przyjechać na Chomiczówkę lub Wawrzyszew?',
        answer: 'Zwykle w ciągu 1–2 godzin od zgłoszenia. Bielany to dzielnica, którą dobrze znamy – od Słodowca po Młociny. Zadzwoń i podaj adres, podamy realny czas.',
      },
      {
        question: 'Pion w bloku na Bielanach bulgocze – co to znaczy?',
        answer: 'Bulgotanie w pionie to znak, że gdzieś jest zwężenie utrudniające spływ. Może to być osad tłuszczu, ciało obce albo nieszczelność z wrosłymi korzeniami. Samo bulgotanie rzadko ustępuje samoistnie – lepiej zdiagnozować wcześniej, zanim doprowadzi do cofki.',
      },
      {
        question: 'Czy Wuko działa w nowych blokach na Bielanach?',
        answer: 'Tak. Nowe instalacje PVC są odporne na ciśnienie Wuko. W nowych budynkach typowe problemy to tłuszcz z kuchni i osady z twardej wody. Wuko usuwa je bez problemu.',
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
    faq: [
      {
        question: 'Ile kosztuje Wuko na Bródnie?',
        answer: 'Cena zależy od rodzaju instalacji i skali problemu. Pełny, orientacyjny cennik jest na stronie głównej, w sekcji Cennik. Dokładną kwotę ustalamy w krótkiej rozmowie telefonicznej, jeszcze przed przyjazdem.',
      },
      {
        question: 'Jak szybko przyjedziecie na Bródno?',
        answer: 'Najczęściej w ciągu 1–2 godzin. Bródno to osiedle, które dobrze znamy – dotrzemy zarówno do bloków przy Kondratowicza, jak i do starszej zabudowy przy Wysockiego.',
      },
      {
        question: 'Dlaczego zatory na Bródnie tak często wracają po kilku tygodniach?',
        answer: 'To typowe przy samym przepychaniu sprężyną – przebija się przez korek, ale osady na ścianach rury zostają. Wuko wypłukuje całą warstwę tłuszczu i nagromadzonych resztek, więc efekt jest trwalszy. W blokach z intensywnie użytkowanymi pionami polecamy pełne płukanie Wuko zamiast samego przepychania.',
      },
      {
        question: 'Wuko czy sprężyna – co lepsze w blokach na Bródnie?',
        answer: 'Sprężyna sprawdza się przy punktowym, twardym zatorze – np. ciało obce w odpływie. Wuko jest lepsze przy rozległych osadach w dłuższym odcinku pionu. Często stosujemy obie metody: najpierw sprężyna, potem płukanie Wuko. Wszystko zależy od tego, co kamera lub opis problemu pokazuje.',
      },
      {
        question: 'Czy po czyszczeniu możecie zrobić inspekcję kamerą TV?',
        answer: 'Tak. Inspekcja kamerą po Wuko potwierdza, że rura jest faktycznie czysta, nie tylko drożna. Przy powracających zatorach to dobra inwestycja – pozwala zobaczyć, czy w rurze nie ma pęknięcia lub innego defektu.',
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
    faq: [
      {
        question: 'Ile kosztuje Wuko w Wawrze?',
        answer: 'Wycenę podajemy telefonicznie, przed przyjazdem – po opisie problemu. Orientacyjny cennik usług znajdziesz na stronie głównej. Przy dłuższych przyłączach zewnętrznych kwota bywa wyższa, dlatego ustalamy ją indywidualnie.',
      },
      {
        question: 'Jak szybko przyjedziecie na Anin, Falęnicę lub Marysin?',
        answer: 'Zazwyczaj w ciągu 1–2 godzin. Wawer jest rozległą dzielnicą – czas dojazdu na Zerzeń czy Radość może się trochę różnić od dojazdu na Anin. Podaj adres, ustalimy realny termin.',
      },
      {
        question: 'Czy Wuko sprawdza się w domach jednorodzinnych w Wawrze?',
        answer: 'Tak, i to bardzo dobrze. Domy mają zwykle dłuższe odcinki rur zewnętrznych niż mieszkania w blokach. Wuko dosięga dalej niż sprężyna – 50, 80, a nawet 100 metrów elastycznym wężem pod ciśnieniem. Przy osadach na długich przyłączach to jedyna skuteczna metoda.',
      },
      {
        question: 'Korzenie drzew w rurze – czy Wuko sobie poradzi?',
        answer: 'Z cienką siatką korzeni – tak. Wuko wyrywa drobne włókna korzeniowe i wypłukuje je. Gdy korzeń jest gruby i mocno wpluty w rurę – potrzebna jest wymiana odcinka. Kamera TV przed czyszczeniem pokazuje dokładnie, z czym mamy do czynienia. To oszczędza czas i pieniądze.',
      },
      {
        question: 'Czy obsługujecie też rury deszczowe i studzienki w Wawrze?',
        answer: 'Tak. Czyszczenie rur deszczowych, studzienek rewizyjnych i przyłączy zewnętrznych to część naszych usług. W domach jednorodzinnych jesienią częste blokady wywołują liście i piasek po opadach. Wuko radzi sobie z takimi zanieczyszczeniami sprawnie.',
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
    faq: [
      {
        question: 'Ile kosztuje Wuko na Ochocie?',
        answer: 'Każdą usługę wyceniamy przed przyjazdem, po krótkim opisie sytuacji. Orientacyjne stawki znajdziesz w sekcji Cennik na stronie głównej. W kamienicach z długimi pionami lub starymi rurami kwota może być inna – ustalamy ją przed wyjazdem.',
      },
      {
        question: 'Jak szybko przyjedziecie na Rakowiec, Szczęśliwice lub Filtry?',
        answer: 'Zwykle w ciągu 1–2 godzin od zgłoszenia. Dobrze znamy Ochotę – od Filtrowej i Wawelskiej po Opaczewską i Drawską. Podaj adres, powiemy realny czas dojazdu.',
      },
      {
        question: 'Czy Wuko nadaje się do starych instalacji w kamienicach na Ochocie?',
        answer: 'Tak, ale z wyczuciem. Kamienice przy Filtrowej czy Niemcewicza mają stare piony żeliwne lub kamionkowe. Ciśnienie dobieramy do stanu rury. Nie używamy maksymalnego – to mogłoby zaszkodzić starym połączeniom.',
      },
      {
        question: 'Pion w kamienicy na Ochocie ciągle ma problem – co z tym?',
        answer: 'Powtarzające się zatory w tym samym pionie to sygnał, że jest nagromadzony osad na dłuższym odcinku. Samo przepychanie przynosi chwilową ulgę. Pełne płukanie Wuko z inspekcją kamerą pozwala zobaczyć, gdzie i dlaczego problem wraca.',
      },
      {
        question: 'Czy wystawiacie faktury VAT dla biur i firm na Ochocie?',
        answer: 'Tak. Obsługujemy biura, lokale usługowe i restauracje. Faktury VAT bez problemu. Można też umówić się na cykliczne konserwacje pionów – przydatne w budynkach z dużym ruchem.',
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
    faq: [
      {
        question: 'Ile kosztuje Wuko na Pradze Północ?',
        answer: 'Wyceniamy przed przyjazdem, telefonicznie. Orientacyjny cennik usług mamy na stronie głównej. W lokalach gastronomicznych ze zbiornikami tłuszczu i długimi pionami kuchennymi kwota bywa wyższa – dlatego liczymy ją indywidualnie.',
      },
      {
        question: 'Jak szybko przyjedziecie na Ząbkowską, Brzeską czy Targową?',
        answer: 'Zazwyczaj w ciągu 1–2 godzin. Praga Północ to zwarta dzielnica i dobrze ją znamy. Przy kamienicach na wąskich ulicach mamy odpowiedni sprzęt – nie jest potrzebny wjazd dla dużego auta.',
      },
      {
        question: 'Czy Wuko sprawdza się w starych instalacjach kamienicowych na Pradze?',
        answer: 'Tak, ale dobieramy ciśnienie do stanu rury. Stare kamionkowe i żeliwne instalacje przy Ząbkowskiej czy Brzeskiej wymagają ostrożności. Jeśli jest wątpliwość co do stanu rur, zaczynamy od inspekcji kamerą TV.',
      },
      {
        question: 'Obsługujecie lokale gastronomiczne i restauracje na Pradze Północ?',
        answer: 'Tak. Piony kuchenne w restauracjach to specyficzny przypadek – tłuszcz odkłada się szybko, szczególnie latem. Czyścimy odpływy zlewozmywaków, separatory tłuszczu, piony kuchenne. Faktury VAT i możliwość cyklicznych przeglądów.',
      },
      {
        question: 'Co gdy kilka lokali w jednej kamienicy ma problem z kanalizacją naraz?',
        answer: 'To klasyczny objaw zatoru w głównym pionie budynku. Warto wtedy zgłosić sprawę zarządcy – czyszczenie całego pionu to lepsza opcja niż kolejne interwencje w każdym lokalu osobno. Obsługujemy zarówno zarządców kamienic, jak i poszczególnych lokatorów.',
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
    faq: [
      {
        question: 'Ile kosztuje Wuko na Pradze Południe?',
        answer: 'Wycena przed przyjazdem – zadzwoń, opisz problem. Orientacyjny cennik znajdziesz na stronie głównej, w sekcji Cennik. Na miejscu kwota nie zmienia się bez powodu.',
      },
      {
        question: 'Jak szybko przyjedziecie na Grochów, Gocław lub Saską Kępę?',
        answer: 'Zazwyczaj w ciągu 1–2 godzin od zgłoszenia. Praga Południe jest rozległa, ale dobrze ją znamy. Wiatraczna, Grochowska, Waszyngtona – dojazd mamy sprawdzony.',
      },
      {
        question: 'Czy obsługujecie starszą zabudowę na Kamionku i Grochowie?',
        answer: 'Tak. Na Kamionku i Grochowie są kamienice z różnorodną instalacją. Starsze rury kamionkowe i żeliwne wymagają odpowiedniego ciśnienia. Dobieramy metodę po opisie problemu i jeśli trzeba, weryfikujemy kamerą TV.',
      },
      {
        question: 'Zator w bloku pojawia się u kilku mieszkańców naraz – co to oznacza?',
        answer: 'Prawie zawsze to zatkany wspólny pion lub poziom odprowadzający ścieki. Problem leży poza mieszkaniem. Zazwyczaj czyszczenie wspólnego odcinka rozwiązuje sprawę od razu u wszystkich. Zarządca lub spółdzielnia mogą zlecić taką usługę.',
      },
      {
        question: 'Czy Wuko jest bezpieczne dla rur w kamienicach na Saskiej Kępie?',
        answer: 'Tak, przy odpowiednio dobranym ciśnieniu. Saska Kępa ma zwartą zabudowę z lat 30.–40. – eleganckie kamienice, ale stare instalacje. Dobieramy ciśnienie ostrożnie. Przy wątpliwościach co do stanu rur robimy najpierw inspekcję kamerą.',
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
    faq: [
      {
        question: 'Ile kosztuje Wuko w Rembertowie?',
        answer: 'Każde zlecenie liczymy indywidualnie, po opisie problemu przez telefon. Orientacyjne stawki są na stronie głównej, w sekcji Cennik. Przy dłuższych przyłączach zewnętrznych lub rurach od szamba kwota bywa wyższa.',
      },
      {
        question: 'Jak szybko przyjedziecie do Starego i Nowego Rembertowa?',
        answer: 'Zazwyczaj w ciągu 1–2 godzin. Rembertów to dzielnica z przewagą zabudowy jednorodzinnej – mamy sprzęt dostosowany do pracy przy domach, nie tylko blokach.',
      },
      {
        question: 'Czy Wuko sprawdza się przy czyszczeniu przyłączy do szamba?',
        answer: 'Tak, i bardzo dobrze. Długie przyłącza zewnętrzne – często kilkanaście, a nawet kilkadziesiąt metrów – to idealne warunki dla Wuko. Sprężyna mechaniczna może nie dosięgnąć dalej niż 10–15 metrów. Wuko pracuje na 50–100 metrach elastycznym wężem pod ciśnieniem, bez kopania.',
      },
      {
        question: 'Korzenie drzew wrosły w rurę – co teraz?',
        answer: 'Kamera TV pokaże, jak głęboko i jak mocno. Przy cienkich włóknach korzeniowych Wuko je wypłucze. Gdy korzeń jest gruby lub rura jest uszkodzona w miejscu wrastania – potrzebna jest wymiana odcinka. Zadzwoń, opiszemy opcje po obejrzeniu nagrania.',
      },
      {
        question: 'Rury zewnętrzne w domu: kiedy Wuko, kiedy sprężyna?',
        answer: 'Sprężyna przy twardym, punktowym zatorze i krótkim odcinku. Wuko przy osadach na długim odcinku rury, korzeniach, piasku po opadach i zanieczyszczeniach organicznych. W domach jednorodzinnych z długimi przyłączami najczęściej sięgamy po Wuko.',
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
    faq: [
      {
        question: 'Ile kosztuje Wuko w Ursusie?',
        answer: 'Wycenę podajemy telefonicznie, przed przyjazdem. Orientacyjny cennik usług znajdziesz na stronie głównej. Kwota zależy od rodzaju instalacji i skali problemu.',
      },
      {
        question: 'Jak szybko możecie przyjechać na Niedźwiadek, Czechowice lub Skorosze?',
        answer: 'Zazwyczaj w ciągu 1–2 godzin od zgłoszenia. Ursus to dzielnica, którą dobrze znamy. Od Ryżowej przez Dzieci Warszawy po Posag 7 Panien – dojazd sprawny.',
      },
      {
        question: 'Czy Wuko działa w nowych blokach w Ursusie?',
        answer: 'Tak. Nowe bloki w Ursusie mają instalacje PVC – bezproblemowe dla Wuko. Typowe problemy w nowych budynkach to tłuszcz kuchenny, włosy i osady wapienne narastające stopniowo. Wuko usuwa je skutecznie i bez ryzyka dla instalacji.',
      },
      {
        question: 'Odpływ w łazience jest coraz wolniejszy – co to sygnalizuje?',
        answer: 'To najczęściej warstwa włosów, mydła i osadów wapiennych zbierających się na ściance rury lub w syfonie. Na początek warto zdjąć syfon i go wyczyścić – często to wystarczy. Jeśli nie, problem leży głębiej. Wtedy Wuko lub sprężyna w zależności od lokalizacji zatoru.',
      },
      {
        question: 'Czy wystawiacie faktury VAT dla firm i spółdzielni w Ursusie?',
        answer: 'Tak. Faktury VAT bez problemu – dla osób prywatnych, firm, spółdzielni i wspólnot. Obsługujemy też cykliczne przeglądy pionów w budynkach wielorodzinnych.',
      },
    ],
  },
  {
    slug: 'wukomokotow',
    name: 'Mokotów',
    fullName: 'Wuko Mokotów',
    metaTitle: 'Wuko Mokotów – ciśnieniowe udrażnianie kanalizacji | Wuko Warszawa',
    metaDescription:
      'Wuko Mokotów – szybkie udrażnianie kanalizacji w kamienicach, blokach i biurowcach. Stary Mokotów, Służewiec, Sadyba. Wycena przed przyjazdem, faktura VAT.',
    heroIntro:
      'Obsługujemy całą dzielnicę Mokotów – od przedwojennych kamienic przy Puławskiej i Wiśniowej, przez bloki na Wierzbnie i Sielcach, aż po biurowce i lokale gastronomiczne na Służewcu. Dobieramy metodę do instalacji i podajemy cenę przed przyjazdem.',
    areas: [
      'Stary Mokotów',
      'Górny Mokotów',
      'Dolny Mokotów',
      'Sielce',
      'Czerniaków',
      'Sadyba',
      'Służewiec',
      'Wierzbno',
      'Ksawerów',
    ],
    streets: [
      'Puławska',
      'Racławicka',
      'Wiśniowa',
      'Różana',
      'Madalińskiego',
      'al. Niepodległości',
      'Odyńca',
      'Malczewskiego',
      'Woronicza',
      'Wołoska',
      'Konstruktorska',
      'Chełmska',
      'Dąbrowskiego',
      'Sobieskiego',
      'Belwederska',
      'Idzikowskiego',
      'Bobrowiecka',
      'Szustra',
      'Podchorążych',
      'Olszewska',
    ],
    description:
      'Mokotów to dzielnica o silnym kontraście zabudowy. Stary Mokotów – okolice Puławskiej, Wiśniowej i Odyńca – to kamienice z lat 20.–40. z żeliwnymi pionami i ceramicznymi odpływami, gdzie osady narastają latami. Zupełnie inaczej wygląda Służewiec: biurowce, centra handlowe i restauracje generujące intensywne zatykanie pionów tłuszczem z kuchni. Do tego nowe osiedla na Sadybie, Sielcach i Czerniakowie z nowoczesnymi instalacjami PVC. Każdy typ budynku wymaga innego podejścia. W kamienicach dobieramy ciśnienie ostrożnie – nie każda stara rura zniesie pełne 200 barów. W lokalach gastronomicznych sprawdza się pełne płukanie pionu z czyszczeniem separatora tłuszczu. W domach jednorodzinnych na Sadybie częstym problemem są korzenie drzew wrastające w przyłącza. Przyjeżdżamy z kamerą i sprzętem Wuko, dobieramy metodę na miejscu.',
    testimonials: [
      {
        text: 'Kamienica przy Wiśniowej, stary pion żeliwny. Pan wiedział, że nie można dawać pełnego ciśnienia na takie rury – podchodził ostrożnie. Zator usunięty, porządek po pracy.',
        location: 'Stary Mokotów',
      },
      {
        text: 'Restauracja przy Woronicza, zatkany odpływ w kuchni. Wycena przez telefon, faktura VAT bez problemu. Polecam.',
        location: 'Służewiec',
      },
      {
        text: 'Korzenie wrosły w przyłącze przy domu na Sadybie. Kamera pokazała gdzie, Wuko wypłukało resztę. Nie trzeba było kopać.',
        location: 'Sadyba',
      },
    ],
    faq: [
      {
        question: 'Ile kosztuje Wuko na Mokotowie?',
        answer:
          'Dokładną wycenę Wuko na Mokotowie podajemy telefonicznie, po krótkim opisie problemu – przed przyjazdem, nie na miejscu. Orientacyjny cennik wszystkich usług znajdziesz na stronie głównej, w sekcji Cennik.',
      },
      {
        question: 'Jak szybko przyjedziecie na Mokotów?',
        answer:
          'Najczęściej w ciągu 1–2 godzin od zgłoszenia. Znamy dobrze dzielnicę i docieramy sprawnie zarówno do Starego Mokotowa, jak i na Służewiec czy Sadybę.',
      },
      {
        question: 'Czy obsługujecie stare kamienice na Puławskiej i Wiśniowej?',
        answer:
          'Tak. Stary Mokotów to głównie przedwojenne kamienice z pionami żeliwnymi i ceramicznymi. Znamy te instalacje i dobieramy ciśnienie ostrożnie, żeby nie uszkodzić starych rur.',
      },
      {
        question: 'Czy działacie w biurowcach i lokalach gastronomicznych na Służewcu?',
        answer:
          'Tak. W restauracjach i biurowcach na Służewcu typowy problem to osady tłuszczu w pionach kuchennych. Wuko sprawdza się tu najlepiej. Wystawiamy faktury VAT.',
      },
      {
        question: 'Co zrobić, gdy zator w kanalizacji wraca po kilku tygodniach?',
        answer:
          'Powtarzający się zator to sygnał, że problem nie leży tylko w jednym miejscu. Najczęściej to warstwa osadów na długim odcinku pionu. Polecamy wtedy pełne czyszczenie hydrodynamiczne z inspekcją kamerą TV – żeby usunąć przyczynę, nie tylko korek.',
      },
    ],
  },
];

export function getDistrictBySlug(slug: string): DistrictData | undefined {
  return districts.find((d) => d.slug === slug);
}

export default districts;
