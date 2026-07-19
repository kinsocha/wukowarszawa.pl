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
- Ma: Service + BreadcrumbList + FAQPage JSON-LD, FAQ (9 pytań — rozbudowa 2026-07-07 o: bez kucia pod posadzką, czy najpierw udrożnić, nagranie z inspekcji, jak długo trwa; telefon w odpowiedzi o cenie), linki wewnętrzne ze stopki (każda strona) i z kafelka „Inspekcja kamerą TV" na stronie głównej (`Services.astro` — pole `href`/`linkLabel`) oraz kontekstowe z 2 artykułów poradnika (`zapchana-studzienka`, `zapchana-kanalizacja`). Wszystkie linki + schema url ujednolicone do wersji z ukośnikiem (canonical). FAQ pisane wg reguły 5.27 (kamera ocenia stan/drożność, NIE „wykrywa wycieków na łączeniach").
- **Nagranie z inspekcji: POTWIERDZONE (2026-07-07)** — właściciel potwierdził, że robicie nagranie/zdjęcia z przeglądu. FAQ „Czy z inspekcji można dostać nagranie?" + meta description są OK. Fakt zapisany też w globalnym CLAUDE.md (sekcja 5).
- Wzorzec do powielenia na kolejne usługi. Kandydaci NIŻSZEGO priorytetu (odrzucone teraz przez konkurencję/kanibalizację): „pogotowie kanalizacyjne 24h" (rzeźnia exact-match domen), „przepychanie rur" (blisko strony głównej).
- **Wuko a sprężyna — NIE robić osobnej podstrony (decyzja 2026-07-10).** Najpierw powstała podstrona `/wuko-a-sprezyna-elektryczna`, ale właściciel słusznie uznał, że kanibalizuje istniejący artykuł poradnika `wuko-czy-sprezyna-elektryczna.md` — podstronę USUNIĘTO. Zamiast niej artykuł wzbogacono o sekcję „Stare żeliwo i zapchany pion" (tekst właściciela: żeliwo + pion, na którym woda cofa się w kilku mieszkaniach) z frazami „wuko w Warszawie" (link `/`) i „wuko na Białołęce" (link `/wukobialoleka`). Wniosek na przyszłość: temat wuko-vs-sprężyna należy do tego jednego artykułu, nie dublować go podstroną.

## Realizacje (stan po 2026-07-19)
- **Na stronie głównej jest JEDNA sekcja realizacji**: `RealizacjaZlew.astro` (między WukoMethod a VideoSection, tło #f8fafc, eyebrow „Kolejna realizacja z terenu") — ścieki podchodzące w technicznym zlewie w węźle cieplnym bloku, czyszczenie przykanalika wuko. Zlecenie z Wawra (poprawki właściciela: zlew w węźle cieplnym, NIE kratka w piwnicy; Wawer, NIE Targówek; „na Wawrze" dopisane do h2 na wyraźne polecenie właściciela). Link do `/wukowawer` w CTA. Zdjęcie: `public/img/realizacje/wuko-agregat-cisnieniowy-auto.webp` (źródło: `Desktop\zdjęcia udraznianiekanalizacji.eu - claude\wuko dla udraznianiekanalizacji.eu\wuko-samochód.png`).
- **Pierwsza realizacja (szambo, Białołęka) wróciła do poradnika**: właściciel kazał wyciąć ją z index → przywrócony z gita oryginalny artykuł `src/content/poradnik/zator-w-przylaczu-do-szamba.md` (stan z commita 31a251a, z FAQ i pubDate 2026-07-09). Komponent `Realizacja.astro` USUNIĘTY.
- Historia zmian węzła cieplnego 2026-07-19: najpierw osobna podstrona `/realizacje/zlew-w-wezle-cieplnym/` (FAQ + JSON-LD), potem na polecenie właściciela cały artykuł jako sekcja na index — podstrona i kafelek-zajawka usunięte. FAQ z podstrony nie przeniesiono (index ma własny FAQPage; wątek drożnego syfonu wpleciony w sekcję „Objaw").
- Wniosek: miejsce publikacji realizacji (sekcja na index vs artykuł w poradniku) każdorazowo potwierdzać z właścicielem — decyzje bywały w obie strony.

## Do dostarczenia przez właściciela — podstrona kamery (otwarte na 2026-07-07)
Gdy użytkownik zapyta „co mieliśmy zrobić" przy podstronie inspekcji kamerą, przypomnieć tę listę:
- [ ] **Zdjęcia** na podstronę (kamera inspekcyjna, ekran z obrazem z rury, sprzęt/auto w pracy) — strona ma teraz 0 grafik.
- [ ] **Nagrania z kamery** — krótki film/klip z inspekcji do osadzenia na stronie (nagrywanie potwierdzone).
- [ ] **Realizacje** — 3-5 prawdziwych zleceń (objaw → co pokazała kamera → efekt); tytuł po PROBLEMIE, nie po dzielnicy (anty-kanibalizacja).
- [ ] **GSC** — Inspekcja adresu URL → „Poproś o zindeksowanie" dla `/inspekcja-kamera-kanalizacji/` (realny powód niewidoczności, nie żaden loader).
- [ ] **Decyzja o cenie** — zostawiamy „po rozmowie" czy podajemy widełki „od X zł".

## Decyzje / ustalenia
- Ocena zbiorcza (gwiazdki) liczona automatycznie z realnych opinii w `src/content/reviews` (Layout.astro) — usunięto sztuczne 467 z `site.ts`. Nie wpisywać ręcznej liczby. Realny brak: pusty `googleMapsUrl` (brak podpiętej wizytówki Google) + brak pełnego NAP — czeka na dane od właściciela.
