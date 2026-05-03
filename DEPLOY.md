# 🚀 Deploy wukowarszawa.pl — krok po kroku

Schemat ten sam co w **udraznianiekanalizacji.eu** i pozostałych projektach.
Po pierwszym ustawieniu — każdy `git push` automatycznie aktualizuje stronę na serwerze.

---

## ✅ Co już jest gotowe

- [x] Projekt React + Vite z routingiem (6 podstron dzielnic)
- [x] `.github/workflows/deploy.yml` — workflow GitHub Actions
- [x] `public/.htaccess` — SPA fallback + cache + gzip (potrzebne dla React Router)
- [x] `package.json` — skrypty bez pnpm

## 🛠️ Co musisz zrobić (jednorazowo)

### **KROK 1: Utworzyć konto FTP w Seohost**

1. Zaloguj się na **panel Seohost** (DirectAdmin) → wejdź w domenę **wukowarszawa.pl**
2. Po lewej rozwiń menu **„Pliki i FTP"** → kliknij **„Konta FTP"**
3. Po prawej kliknij **„+ UTWÓRZ KONTO FTP"**
4. Wypełnij:
   - **Użytkownik:** `githubwukowarszawa`
   - **Domena:** wybierz `wukowarszawa.pl`
   - **Hasło:** wymyśl mocne i **zapisz w bezpiecznym miejscu** (np. menedżer haseł)
   - **Typ:** Domena → `wukowarszawa.pl`
5. Kliknij **„Utwórz"**

⚠️ **Pełna nazwa konta będzie miała postać:** `githubwukowarszawa@srv78381.seohost.com.pl`

(`srv78381` to numer Twojego serwera — sprawdź na liście po utworzeniu konta)

---

### **KROK 2: Utworzyć repozytorium na GitHubie**

1. Wejdź na **github.com** i zaloguj się
2. W prawym górnym rogu kliknij **„+"** → **„New repository"**
3. Wypełnij:
   - **Repository name:** `wukowarszawa.pl` (lub `wukowarszawa`)
   - **Public** lub **Private** — dowolnie (Private = nikt poza Tobą nie zobaczy kodu)
   - **NIE** zaznaczaj „Add a README" / „Add .gitignore" — masz je już w projekcie
4. Kliknij **„Create repository"**

---

### **KROK 3: Wgrać projekt do repozytorium**

W VS Code (lub PowerShell) w folderze projektu:

```bash
git init
git add .
git commit -m "Pierwsza wersja - layout WUKO Warszawa"
git branch -M main
git remote add origin https://github.com/TWOJ_LOGIN/wukowarszawa.pl.git
git push -u origin main
```

(podstaw swój GitHub login zamiast `TWOJ_LOGIN`)

---

### **KROK 4: Dodać Secrets na GitHubie (3 sekretne dane)**

1. Na GitHubie wejdź w swoje repo → kliknij zakładkę **„Settings"** (na samym pasku)
2. W lewym menu: **„Secrets and variables"** → **„Actions"**
3. Kliknij **„New repository secret"** i dodaj **trzy** sekrety:

| Nazwa (Name)       | Wartość (Secret)                                      |
|--------------------|--------------------------------------------------------|
| `REMOTE_HOST`      | `h50.seohost.pl`                                       |
| `REMOTE_USER`      | `githubwukowarszawa@srv78381.seohost.com.pl`           |
| `REMOTE_PASSWORD`  | _hasło które ustawiłeś w kroku 1_                      |

⚠️ Sprawdź dokładnie nazwę swojego serwera w Seohost — może być inny numer niż `srv78381` (masz go widać na liście kont FTP).
⚠️ Sprawdź też czy Twój host to faktycznie `h50.seohost.pl` (różne plany Seohost mają różne hosty: `h50`, `h78` itd.).

---

### **KROK 5: Sprawdzić czy działa**

1. Po dodaniu secrets, na GitHubie wejdź w zakładkę **„Actions"** (na pasku zakładek repo)
2. Powinieneś zobaczyć uruchomiony workflow **„Deploy wukowarszawa.pl"**
3. Kliknij na niego, żeby zobaczyć logi
4. Po ok. 2 minutach pojawi się **zielony znacznik ✅** = wszystko poszło OK
5. Otwórz **https://wukowarszawa.pl** — powinna być widoczna nowa strona

Jeśli czerwony znacznik ❌ — kliknij na workflow, zobacz logi, prześlij mi screenshot błędu.

---

## 🔁 Jak działa od teraz

Każda zmiana w kodzie:

```bash
git add .
git commit -m "opis zmiany"
git push
```

→ GitHub Actions automatycznie buduje projekt i wgrywa na serwer (ok. 2 minuty).

Możesz też ręcznie odpalić deploy z zakładki **Actions** → **Deploy wukowarszawa.pl** → **Run workflow**.

---

## 🛑 Co zrobić ZANIM przełączysz na nową stronę

⚠️ Obecna strona `wukowarszawa.pl` ma istniejące podstrony, które są w Google:
- `/wukotargowek`, `/wukobialoleka`, `/wukowawer`, `/wukoochota`, `/wukoursus`, `/wukopragapoludnie`, `/reviews.html`

Nowy projekt **zachowuje pierwsze 6** (te same URL-e). Brakuje:
- `/reviews.html` — jeśli masz tam wartościowy content (linki przychodzące z Google), dodaj przekierowanie 301 na sekcję opinii lub zachowaj plik

**Przed pierwszym deploy zalecam:**
1. Zrobić backup obecnego `/public_html/` przez FTP w Seohost (na wszelki wypadek)
2. Sprawdzić w **Google Search Console**, które podstrony aktualnie generują ruch — żeby nie stracić cennego SEO
3. Po deployu — w **Google Search Console** zgłosić nową mapę strony (sitemap)

---

## 📋 Migracja na Astro (opcjonalna, później)

Po pierwszym deployu — gdy strona już działa — możesz w Claude Code uruchomić migrację:

> "Zmigruj ten projekt React + Vite do Astro. Zachowaj wszystkie URL-e podstron (`/wukotargowek` itd. jako statyczne pliki). Dane firmy w `src/config/site.ts`, dane dzielnic w `src/data/districts.ts`. Zostaw Tailwind. Po migracji workflow `.github/workflows/deploy.yml` powinien dalej działać — Astro też produkuje katalog `dist/`."

Astro daje **prawdziwe statyczne pliki HTML dla każdej podstrony** = jeszcze lepsze SEO niż React SPA. Plik `.htaccess` z SPA fallback przestanie być potrzebny.
