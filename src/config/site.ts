// Centralna konfiguracja danych firmowych.
// Zmiana w jednym miejscu = zmiana na całej stronie.

export const siteConfig = {
  name: 'Wuko Warszawa',
  shortName: 'WUKO',
  tagline: 'Ciśnieniowe udrażnianie kanalizacji',

  // Kontakt
  phone: '',
  phoneTel: '',
  email: 'wukowarszawa@gmail.com',

  // Dane firmowe
  legalName: 'Warszawskie Usługi Kanalizacyjne WUKO',
  bank: 'Alior Bank S.A.',

  // Domena
  domain: 'wukowarszawa.pl',
  url: 'https://wukowarszawa.pl',

  // Historia
  experienceSince: 1979, // praca w MPWiK Warszawa
  ownCompanySince: 1991, // własna firma

  // Social
  social: {
    facebook: 'https://www.facebook.com/WukoWarszawa/',
    instagram: 'https://www.instagram.com/WukoWarszawa/',
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
