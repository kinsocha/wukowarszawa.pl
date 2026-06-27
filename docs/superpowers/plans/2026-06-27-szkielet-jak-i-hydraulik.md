# Przebudowa wukowarszawa.pl na szkielet i-hydraulik.pl (czysty CSS, bez Tailwinda) — plan wdrożenia

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Przepisać wukowarszawa.pl z Tailwind v3 na czysty CSS (scoped `<style>` w komponentach + `global.css` z tokenami i wspólnymi klasami), tak by struktura plików i podejście do stylowania odpowiadały i-hydraulik.pl — zachowując 1:1 obecny wygląd, treść i całe SEO.

**Architecture:** Każdy komponent `.astro` dostaje własny scoped `<style>` w czystym CSS. Wspólne tokeny (kolory, font, breakpointy) i klasy współdzielone (`.container`, `.btn-primary`, `.section-header`) lądują w `src/styles/global.css`. Layout `Default.astro` → `Layout.astro` (zachowuje całą głowę SEO, traci tylko klasy Tailwind). Poradnik przechodzi z `.mdx` na `.md` + `PoradnikLayout.astro`. Tailwind/PostCSS i pozostałości po React zostają usunięte na końcu.

**Tech Stack:** Astro 5, czysty CSS (scoped + global), font Inter (Google Fonts), bez Tailwinda, bez PostCSS, bez MDX.

## Global Constraints

- **Praca na gałęzi `refactor/szkielet-i-hydraulik`** — `main` (produkcja) nietykany do końcowego merga.
- **Wygląd 1:1** — po każdym etapie strona ma wyglądać tak samo jak przed (port wizualny, nie redesign).
- **SEO nietykalne** — zachować w `Layout.astro`: schema `LocalBusiness`, `CreativeWorkSeries` + `aggregateRating`, wszystkie meta OG/Twitter, canonical, FAQ JSON-LD na podstronach. (Reguły z CLAUDE.md sekcje 3–4.)
- **Body min 16px na mobile**, font Inter, paleta zamknięta: `#1a3a52`, `#2563eb`, `#eff6ff`, `#f8fafc`, akcent sky `#0ea5e9`, gradient hero `#38bdf8 → #22d3ee`, tekst `#334155`.
- **Po KAŻDYM etapie:** `npm run build` musi przejść bez błędów + wizualna kontrola (`npm run dev` / zrzut) zanim commit.
- **Bez placeholder-tekstu w HTML, bez emoji, komentarze tylko gdy nietrywialne.**
- **Telefon:** 660 360 170.

---

## Mapa plików (co powstaje / co znika)

**Tworzone / przebudowane:**
- `src/styles/global.css` — przepisany: tokeny `:root` + reset + klasy współdzielone (zamiast dyrektyw `@tailwind`).
- `src/layouts/Layout.astro` — z `Default.astro` (zmiana nazwy, zachowane SEO, bez klas Tailwind).
- `src/layouts/PoradnikLayout.astro` — nowy layout artykułu (dziś logika siedzi w `[...slug].astro`).
- Wszystkie `src/components/*.astro` — Tailwind → scoped CSS.
- `src/pages/opinie.astro` — Tailwind → CSS.
- `src/pages/poradnik/index.astro`, `src/pages/poradnik/[...slug].astro` — Tailwind → CSS + użycie `PoradnikLayout`.
- `src/content/poradnik/*.md` — z `*.mdx` (5 plików).

**Usuwane na końcu:**
- `src/App.css`, `src/hooks/`, `src/lib/`, `src/vite-env.d.ts` (pozostałości React/Vite).
- `tailwind.config.js`, `postcss.config.js`, `components.json`, `dev-output.txt`.
- Zależności: `tailwindcss`, `autoprefixer`, `postcss` (devDeps), integracja `@astrojs/mdx`.

**Niezmieniane:** `src/config/site.ts`, `src/data/districts.ts`, `src/content/reviews/*.json`, `public/`, `astro.config.mjs` (poza usunięciem `mdx()`), `src/utils/icons.ts`, `src/components/Icon.astro`.

---

## Kontrakt tokenów Tailwind → CSS (używać przy KAŻDEJ konwersji)

To jest wspólny słownik. Przy przepisywaniu komponentu każdą klasę Tailwind tłumaczymy wg tej tabeli, żeby wynik był spójny.

| Tailwind | CSS |
|---|---|
| `container mx-auto px-4` | `.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }` |
| `text-slate-700` | `color: #334155;` |
| `text-slate-900` / `text-[#1a3a52]` | `color: #1a3a52;` |
| `text-sky-500` / `text-sky-400` | `color: #0ea5e9;` |
| `bg-sky-50` / `bg-[#eff6ff]` | `background: #eff6ff;` |
| `bg-slate-50` / `bg-[#f8fafc]` | `background: #f8fafc;` |
| `bg-blue-600` | `background: #2563eb;` |
| `rounded-xl` / `rounded-2xl` / `rounded-full` | `border-radius: 0.75rem / 1rem / 999px;` |
| `font-bold` / `font-semibold` | `font-weight: 700 / 600;` |
| `text-4xl … text-7xl` | `font-size: 2.25 / 3 / 3.75 / 4.5rem;` (skala Tailwind) |
| `sm: / md: / lg: / xl:` | `@media (min-width: 640 / 768 / 1024 / 1280px)` |
| `gap-4 / p-6 / mb-6` | `gap: 1rem / padding: 1.5rem / margin-bottom: 1.5rem;` (skala: 1 = 0.25rem) |
| gradient `from-sky-400 to-cyan-400 bg-clip-text text-transparent` | `background: linear-gradient(90deg,#38bdf8,#22d3ee); -webkit-background-clip:text; background-clip:text; color:transparent;` |

Skala odstępów Tailwind: `n` = `n * 0.25rem` (np. `4`=1rem, `6`=1.5rem, `8`=2rem, `12`=3rem, `16`=4rem).

---

### Task 0: Gałąź i punkt odniesienia

**Files:** — (operacje git)

- [ ] **Step 1: Utwórz i przełącz gałąź**

```bash
cd /c/Users/lenovo/wukowarszawa.pl
git checkout -b refactor/szkielet-i-hydraulik
```

- [ ] **Step 2: Zweryfikuj, że obecny build przechodzi (baseline)**

Run: `npm run build`
Expected: build kończy się sukcesem, katalog `dist/` powstaje bez błędów.

- [ ] **Step 3: Zapisz zrzut wyglądu „przed" do porównań**

Run: `npm run dev` i ręcznie obejrzyj `/`, `/opinie`, `/wukowola`, `/poradnik` (zapamiętaj/zrzuć wygląd). To materiał porównawczy dla kolejnych etapów.

---

### Task 1: Fundament — global.css + Layout.astro

**Files:**
- Modify: `src/styles/global.css` (całość)
- Create: `src/layouts/Layout.astro` (z `Default.astro`)
- Test: `npm run build`

**Interfaces:**
- Produkuje globalne tokeny `:root` (`--primary:#1a3a52; --accent:#2563eb; --sky:#0ea5e9; --bg-light:#f8fafc; --bg-sky:#eff6ff; --text:#334155;` itd.) oraz klasy współdzielone: `.container`, `.section-header` (h2 + p), `.btn-primary`, `.btn-secondary`. Każdy następny task je konsumuje.
- `Layout.astro` przyjmuje te same propsy co dziś `Default.astro`: `{ title: string; description: string }` i zachowuje cały blok `<head>` (schema, OG, canonical, font Inter).

- [ ] **Step 1: Przepisz `global.css`** — usuń `@tailwind base/components/utilities`; dodaj reset (`*{margin:0;padding:0;box-sizing:border-box}`), `:root` z tokenami z Global Constraints, `body{font-family:'Inter',sans-serif;color:var(--text);line-height:1.6}`, zachowaj istniejące keyframes (`fade-in`, `scroll`), scrollbar i `html{scroll-behavior:smooth}`. Dodaj klasy współdzielone `.container`, `.section-header`, `.btn-primary`, `.btn-secondary` (wartości wg tabeli tokenów).

- [ ] **Step 2: Utwórz `Layout.astro`** — skopiuj `Default.astro` 1:1, zmień tylko `<body class="min-h-screen bg-white font-sans antialiased">` na `<body>` (style przejmuje `global.css`). Zachowaj import `Navigation`, `Footer`, `siteConfig`, całą logikę schema/rating/canonical i `<head>`.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: PASS. (Stary `Default.astro` jeszcze istnieje — strony nadal działają.)

- [ ] **Step 4: Commit**

```bash
git add src/styles/global.css src/layouts/Layout.astro
git commit -m "Fundament: global.css na czystym CSS + Layout.astro (bez Tailwinda)"
```

---

### Task 2: Chrome globalny — Navigation + Footer

**Files:**
- Modify: `src/components/Navigation.astro`, `src/components/Footer.astro`
- Test: `npm run build` + wizualnie

**Interfaces:** Consumes: tokeny i `.container` z Task 1. Navigation zachowuje `id="navbar"` i `.nav-link` (używane przez selektory w `global.css`) oraz logikę scroll/`data-solid` i mobilne menu.

- [ ] **Step 1:** Przepisz `Navigation.astro` — wszystkie klasy Tailwind na scoped `<style>` wg tabeli tokenów; zachowaj `id="navbar"`, `data-solid`, klasy `.nav-link`, dropdown dzielnic i hamburger. Zachowaj `<script>` sterujący scrollem i menu.
- [ ] **Step 2:** Przepisz `Footer.astro` analogicznie.
- [ ] **Step 3: Build + wizualnie** — `npm run build`, potem `npm run dev`: sprawdź nawigację (desktop + mobile menu) i stopkę. Expected: identyczny wygląd i działające menu.
- [ ] **Step 4: Commit** — `git commit -am "Navigation + Footer na czysty CSS"`

---

### Task 3: Sekcje strony głównej, część 1 — Hero, Stats, Services, WukoMethod

**Files:** Modify: `src/components/Hero.astro`, `Stats.astro`, `Services.astro`, `WukoMethod.astro`
**Interfaces:** Consumes: tokeny, `.container`, `.section-header`, `.btn-primary` z Task 1. Hero zachowuje H1 z gradientem (klasa gradientu wg tabeli).

- [ ] **Step 1:** Przepisz `Hero.astro` (zachowaj gradient na H1, przyciski, klasy `animate-fade-in`).
- [ ] **Step 2:** Przepisz `Stats.astro`.
- [ ] **Step 3:** Przepisz `Services.astro`.
- [ ] **Step 4:** Przepisz `WukoMethod.astro`.
- [ ] **Step 5: Build + wizualnie** — `npm run build` + obejrzyj górę `/`. Expected: identyczny układ.
- [ ] **Step 6: Commit** — `git commit -am "Hero/Stats/Services/WukoMethod na czysty CSS"`

---

### Task 4: Sekcje strony głównej, część 2 — VideoSection, WhyUs, Process, Pricing

**Files:** Modify: `src/components/VideoSection.astro`, `WhyUs.astro`, `Process.astro`, `Pricing.astro`
**Interfaces:** Consumes: tokeny i klasy współdzielone z Task 1. Pricing zachowuje logikę ukrywania cenników (jeśli sterowana klasą/JS — nie zmieniać zachowania).

- [ ] **Step 1–4:** Przepisz kolejno każdy z 4 komponentów (Tailwind → scoped CSS).
- [ ] **Step 5: Build + wizualnie** — `npm run build` + środek `/`. Expected: identyczny układ, cenniki zachowują się jak wcześniej.
- [ ] **Step 6: Commit** — `git commit -am "VideoSection/WhyUs/Process/Pricing na czysty CSS"`

---

### Task 5: Sekcje strony głównej, część 3 — Testimonials, FAQ, Contact, Locations, PoradnikSection

**Files:** Modify: `src/components/Testimonials.astro`, `FAQ.astro`, `Contact.astro`, `Locations.astro`, `PoradnikSection.astro`
**Interfaces:** Consumes: tokeny i klasy z Task 1. FAQ zachowuje blok `<script type="application/ld+json">` (FAQPage) — NIE ruszać JSON-LD, tylko style. Testimonials/Contact zachowują logikę JS (accordion/slider), jeśli istnieje.

- [ ] **Step 1–5:** Przepisz kolejno każdy z 5 komponentów. Przy FAQ: tylko warstwa wizualna, JSON-LD bez zmian.
- [ ] **Step 6: Build + wizualnie** — `npm run build` + dół `/`. Sprawdź rozwijanie FAQ i karuzelę opinii. Expected: identyczny wygląd + działające interakcje.
- [ ] **Step 7: Commit** — `git commit -am "Testimonials/FAQ/Contact/Locations/PoradnikSection na czysty CSS"`

---

### Task 6: DistrictContent (obsługuje 12 podstron dzielnicowych)

**Files:** Modify: `src/components/DistrictContent.astro`
**Interfaces:** Consumes: tokeny i klasy z Task 1. Przyjmuje prop `district` z `src/data/districts.ts` (bez zmian). Zawiera FAQ JSON-LD z lokalnym telefonem — NIE ruszać.

- [ ] **Step 1:** Przepisz `DistrictContent.astro` (239 linii) — Tailwind → scoped CSS; JSON-LD FAQ i telefon bez zmian.
- [ ] **Step 2: Build + wizualnie** — `npm run build` + obejrzyj `/wukowola`, `/wukomokotow`, `/wukotargowek` (różne długości treści). Expected: identyczny układ na wszystkich.
- [ ] **Step 3: Commit** — `git commit -am "DistrictContent na czysty CSS (12 podstron)"`

---

### Task 7: Strona /opinie

**Files:** Modify: `src/pages/opinie.astro` (33 użycia Tailwinda)
**Interfaces:** Consumes: `Layout` (po Task 8 — tu jeszcze `Default`/`Layout`, użyć `Layout.astro`), tokeny i klasy z Task 1, kolekcja `reviews`.

- [ ] **Step 1:** Zamień import na `Layout.astro`; przepisz wszystkie klasy Tailwind na scoped CSS.
- [ ] **Step 2: Build + wizualnie** — `npm run build` + `/opinie`. Expected: identyczny wygląd listy opinii.
- [ ] **Step 3: Commit** — `git commit -am "Strona /opinie na czysty CSS"`

---

### Task 8: Przełączenie wszystkich stron na Layout.astro i usunięcie Default.astro

**Files:** Modify: `src/pages/index.astro`, 12× `src/pages/wuko*.astro`, `src/pages/opinie.astro`; Delete: `src/layouts/Default.astro`
**Interfaces:** Wszystkie strony importują `../layouts/Layout.astro` zamiast `Default.astro`.

- [ ] **Step 1:** We wszystkich stronach zmień `import Default from '../layouts/Default.astro'` → `import Layout from '../layouts/Layout.astro'` oraz `<Default …>` → `<Layout …>` (i zamykające). (12 dzielnic + index + opinie.)
- [ ] **Step 2:** Usuń `src/layouts/Default.astro`.
- [ ] **Step 3: Build + wizualnie** — `npm run build` + obejrzyj `/`, `/opinie`, `/wukowola`. Expected: PASS, wygląd bez zmian.
- [ ] **Step 4: Commit** — `git commit -am "Wszystkie strony na Layout.astro, usuniety Default.astro"`

---

### Task 9: Poradnik — PoradnikLayout + listing + artykuł

**Files:**
- Create: `src/layouts/PoradnikLayout.astro`
- Modify: `src/pages/poradnik/index.astro`, `src/pages/poradnik/[...slug].astro`
**Interfaces:** `PoradnikLayout` przyjmuje propsy artykułu (title, description, pubDate, category, readingTime, faq) i renderuje `<slot/>`. `[...slug].astro` używa `PoradnikLayout` i zachowuje FAQ JSON-LD artykułu.

- [ ] **Step 1:** Wydziel warstwę prezentacji artykułu z `[...slug].astro` do `PoradnikLayout.astro` (wzorzec: i-hydraulik `PoradnikLayout.astro`); czysty CSS.
- [ ] **Step 2:** Przepisz `poradnik/index.astro` (listing kafelków) na czysty CSS.
- [ ] **Step 3:** Podłącz `[...slug].astro` do `PoradnikLayout`; zachowaj JSON-LD FAQ i renderowanie treści.
- [ ] **Step 4: Build + wizualnie** — `npm run build` + `/poradnik` i jeden artykuł. Expected: identyczny wygląd, FAQ JSON-LD obecne.
- [ ] **Step 5: Commit** — `git commit -am "Poradnik: PoradnikLayout + listing + artykul na czysty CSS"`

---

### Task 10: Konwersja treści poradnika MDX → MD i usunięcie integracji MDX

**Files:**
- Rename: `src/content/poradnik/*.mdx` → `*.md` (5 plików)
- Modify: `astro.config.mjs` (usuń `mdx()`), `package.json` (usuń `@astrojs/mdx`)
**Interfaces:** Treść to czysty markdown (zweryfikowane: zero importów/JSX), więc zmiana rozszerzenia jest bezpieczna. `content/config.ts` (`type:'content'`) obsługuje `.md` bez zmian.

- [ ] **Step 1:** `git mv` każdego z 5 plików `.mdx` → `.md`.
- [ ] **Step 2:** W `astro.config.mjs` usuń import i wpis `mdx()` z `integrations` (zostaje `sitemap()`).
- [ ] **Step 3:** Usuń `@astrojs/mdx` z `dependencies` w `package.json`, uruchom `npm install`.
- [ ] **Step 4: Build + wizualnie** — `npm run build` + obejrzyj listing i 2 artykuły. Expected: PASS, treść i FAQ bez zmian.
- [ ] **Step 5: Commit** — `git commit -am "Poradnik: MDX -> MD, usunieta integracja mdx"`

---

### Task 11: Usunięcie Tailwinda, PostCSS i pozostałości po React

**Files:**
- Delete: `src/App.css`, `src/hooks/` (cały), `src/lib/` (cały), `src/vite-env.d.ts`, `tailwind.config.js`, `postcss.config.js`, `components.json`, `dev-output.txt`
- Modify: `package.json` (usuń `tailwindcss`, `autoprefixer`, `postcss` z devDeps)
**Interfaces:** Po tym etapie w repo nie ma śladu Tailwinda ani Vite/React.

- [ ] **Step 1:** Upewnij się, że nic nie importuje `App.css`, `lib/utils`, `hooks/` ani klas Tailwind:

Run: `grep -rn "App.css\|lib/utils\|use-mobile\|@apply\|@tailwind" src/`
Expected: brak wyników (poza ewentualnie tym, co usuwasz).

- [ ] **Step 2:** Usuń pliki/foldery z listy.
- [ ] **Step 3:** Usuń `tailwindcss`, `autoprefixer`, `postcss` z `devDeps` w `package.json`; `npm install`.
- [ ] **Step 4: Build + wizualnie** — `npm run build` + pełny przegląd `/`, `/opinie`, `/wukowola`, `/poradnik`. Expected: PASS, wszystko jak wcześniej.
- [ ] **Step 5: Commit** — `git commit -am "Usuniety Tailwind/PostCSS i pozostalosci po React"`

---

### Task 12: Weryfikacja końcowa, merge i deploy

**Files:** — (git/deploy)

- [ ] **Step 1: Pełny build i przegląd** — `npm run build`; sprawdź `dist/` i obejrzyj kluczowe strony. Potwierdź brak Tailwinda: `grep -rn "tailwind\|@apply" src/ astro.config.mjs package.json` → brak.
- [ ] **Step 2: Weryfikacja SEO** — w `dist/` sprawdź, że strona główna i jedna podstrona dzielnicowa mają: schema `LocalBusiness`, `CreativeWorkSeries`/`aggregateRating`, FAQ JSON-LD, canonical, OG.
- [ ] **Step 3: Merge do main** (po akceptacji użytkownika):

```bash
git checkout main
git merge --no-ff refactor/szkielet-i-hydraulik
git push
```

- [ ] **Step 4:** GitHub Actions wdraża na Seohost. Po wdrożeniu sprawdź produkcję.

---

## Self-Review (wykonane)

- **Pokrycie:** każdy plik z mapy ma swój task (global.css/Layout → T1; komponenty → T2–T6; opinie → T7; przełączenie layoutu → T8; poradnik → T9–T10; sprzątanie → T11; deploy → T12). DistrictContent (T6) pokrywa 12 podstron dzielnicowych.
- **Ryzyka oznaczone:** SEO/JSON-LD wyróżnione w T1, T5, T6, T9, T12; MDX→MD bezpieczne (czysty markdown — zweryfikowane); cenniki w T4.
- **Spójność:** kontrakt tokenów (jedna tabela) używany w każdym tasku konwersji — gwarantuje spójny wynik. Layout: `Default.astro` żyje do T8, więc strony nie pękają w trakcie.
- **Weryfikacja:** każdy task kończy się `npm run build` + kontrolą wizualną przed commitem (zgodnie z Global Constraints).
