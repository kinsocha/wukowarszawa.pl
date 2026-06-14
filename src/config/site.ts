// Centralna konfiguracja danych firmowych.
// Zmiana w jednym miejscu = zmiana na całej stronie.

export const siteConfig = {
  name: 'Wuko Warszawa',
  shortName: 'WUKO',
  tagline: 'Ciśnieniowe udrażnianie kanalizacji',

  // Kontakt
  phone: '660 360 170',
  phoneTel: '+48660360170',
  email: 'wukowarszawa@gmail.com',

  // Dane firmowe
  legalName: 'Warszawskie Usługi Kanalizacyjne WUKO',
  bank: 'Alior Bank S.A.',

  // Domena
  domain: 'wukowarszawa.pl',
  url: 'https://wukowarszawa.pl',

  // Historia
  experienceSince: 1976, // 50 lat doświadczenia
  ownCompanySince: 1976, // 50 lat działalności firmy

  // Social
  social: {
    facebook: 'https://www.facebook.com/WukoWarszawa/',
    instagram: 'https://www.instagram.com/WukoWarszawa/',
  },

  // SEO / Schema – uzupełnij przed wdrożeniem
  openingHours: 'Mo-Su 08:00-20:00', // godziny pracy – sprawdź i zaktualizuj
  googleMapsUrl: '',                   // wklej URL z Google Maps (Twój profil firmy)
  rating: {
    value: 5.0,   // średnia ocena – 0 = wyłączone
    count: 467,   // liczba opinii – 0 = wyłączone
  },

  // Obsługiwane dzielnice (główne, z osobnymi podstronami)
  mainDistricts: [
    'Targówek',
    'Białołęka',
    'Bielany',
    'Bródno',
    'Wawer',
    'Ochota',
    'Praga Północ',
    'Praga Południe',
    'Rembertów',
    'Ursus',
    'Mokotów',
    'Wola',
  ],

  // Wszystkie dzielnice Warszawy (dla sekcji Locations)
  allDistricts: [
    'Mokotów',
    'Praga Południe',
    'Ursynów',
    'Wola',
    'Śródmieście',
    'Białołęka',
    'Praga Północ',
    'Bemowo',
    'Targówek',
    'Bielany',
    'Wawer',
    'Wilanów',
    'Ochota',
    'Ursus',
    'Rembertów',
    'Włochy',
    'Wesoła',
    'Żoliborz',
  ],
} as const;

export default siteConfig;
