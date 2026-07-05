# memory.md — wukowarszawa.pl
> Hub pamięci TEGO projektu. Czytany na starcie każdej rozmowy. Aktualizacja: 2026-06-12.

## Zasada zapisu
- **Ustalenia specyficzne dla tego projektu** (decyzje, do zrobienia, drafty, reguły dot. tylko wukowarszawa.pl) trafiają TU.
- **Do globalnego `C:\Users\lenovo\.claude\CLAUDE.md`** — tylko gdy użytkownik wyraźnie powie „dodaj do globalnych".
- „Co zostało zrobione" pamięta git — tu trzymamy USTALENIA i STAN, nie przebieg prac.

## O projekcie
- **Ścieżka**: `C:\Users\lenovo\wukowarszawa.pl`
- **Stack**: Astro 5 + MDX (świeżo po migracji z React+Vite+TS)
- **Wzorzec strukturalny**: udraznianiekanalizacji.eu
- **Tel**: 660 360 170

## Stan na 2026-06-12
Zrobione (wg git, wieczór 2026-06-11):
- SEO bazowe: `robots.txt`, favicon SVG, grafika OG, gwiazdki (`CreativeWorkSeries` + `aggregateRating`), FAQPage, LocalBusiness, canonical, sitemap.
- Strona główna: sekcja merytoryczna o metodzie WUKO (czym jest, WUKO vs sprężyna, średnice rur).
- Poradnik: kolekcja MDX, podstrona `/poradnik/`, szablon artykułu, 3 pierwsze artykuły, sekcja poradnika na stronie głównej.

## Podstrony dzielnicowe (stan na 2026-06-14)
- Sterowane danymi: jeden wpis w `src/data/districts.ts` + cienki wrapper `src/pages/wuko<slug>.astro`. Navbar/Footer/Locations iterują tablicę `districts` automatycznie. `mainDistricts` w `src/config/site.ts` steruje sekcją „Inne dzielnice" na podstronach (dodawać tam każdą nową dzielnicę).
- Komponent `DistrictContent.astro` NIE ma mapy Google ani zdjęć — nowe podstrony ich nie dodają.
- Istniejące (12): Targówek, Białołęka, Bielany, Bródno, Wawer, Ochota, Praga Północ, Praga Południe, Rembertów, Ursus, Mokotów, **Wola** (dodana 2026-06-14).
- Brakujące (kandydaci): Ursynów, Bemowo, Żoliborz, Włochy, Wesoła, Śródmieście, Wilanów.

## Do zrobienia / otwarte
- [x] Numer 660 360 170 wstawiony w `src/config/site.ts` (phone + phoneTel) — propaguje na całą stronę.
- [ ] Kolejne artykuły poradnika. Tematy-kandydaci z researchu (2026-06-20), niekanibalizujące strony głównej ani dzielnic — uszeregowane wg priorytetu:
  - „Tłuszcz w kanalizacji — jak się go pozbyć" (indywidualny + gastronomia)
  - „Zatkany pion w bloku — kto odpowiada i jak udrożnić" (B2B, niska konkurencja)
  - Zajęte (nie powtarzać): wuko czy sprężyna, ile kosztuje wuko, czyszczenie deszczówki, zapchana studzienka kanalizacyjna, zapchana kanalizacja krok po kroku.
  - Uwaga researchu: brak twardych wolumenów (Ahrefs/GKP) — priorytet wnioskowany z gęstości treści konkurencji, nie z pomiaru.
- [ ] Kolejne podstrony dzielnicowe (patrz lista brakujących — pilnować anty-kanibalizacji).

## Podstrony usługowe (nowy typ, od 2026-07-06)
- Pierwsza dedykowana podstrona usługowa (poza dzielnicami): **`/inspekcja-kamera-kanalizacji`** — `src/pages/inspekcja-kamera-kanalizacji.astro` (samodzielna, styl `ik-` wzorowany na DistrictContent). Celuje we frazę „inspekcja kamerą kanalizacji Warszawa" (klaster inspekcja/monitoring/kamerowanie — nie kanibalizuje strony głównej ani dzielnic).
- Ma: Service + BreadcrumbList + FAQPage JSON-LD, FAQ (5 pytań, telefon w odpowiedzi o cenie), linki wewnętrzne ze stopki (każda strona) i z kafelka „Inspekcja kamerą TV" na stronie głównej (`Services.astro` — pole `href`/`linkLabel`).
- Wzorzec do powielenia na kolejne usługi. Kandydaci NIŻSZEGO priorytetu (odrzucone teraz przez konkurencję/kanibalizację): „pogotowie kanalizacyjne 24h" (rzeźnia exact-match domen), „przepychanie rur" (blisko strony głównej).

## Decyzje / ustalenia
- Ocena zbiorcza (gwiazdki) liczona automatycznie z realnych opinii w `src/content/reviews` (Layout.astro) — usunięto sztuczne 467 z `site.ts`. Nie wpisywać ręcznej liczby. Realny brak: pusty `googleMapsUrl` (brak podpiętej wizytówki Google) + brak pełnego NAP — czeka na dane od właściciela.
