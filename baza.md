
# WeddInfo – Premium Wedding Template Specification (Cursor AI Prompt)

## Cel projektu
Stwórz nowoczesny, elegancki szablon strony weselnej / wedding invitation website w **Next.js 15 + TypeScript + Tailwind CSS**.

Projekt ma wyglądać jak produkt premium sprzedawany jako gotowy szablon (ThemeForest / Framer / Awwwards quality), a nie zwykła strona internetowa.

Inspiracje:
- luksus
- minimalizm
- editorial design
- Apple
- Framer
- Squarespace Weddings

Nie kopiuj istniejących szablonów. Stwórz całkowicie nowy układ.

---

# Styl

Projekt powinien sprawiać wrażenie:
- luksusowego
- lekkiego
- przestronnego
- romantycznego
- nowoczesnego
- premium

Dekoracje mają być bardzo subtelne.

---

# Kolorystyka

## Tło
- `#FAF7F2`
- alternatywnie `#F8F5EF`

## Kolor główny
- Olive Green `#66704A`

## Akcent
- Warm Gold `#B89A63`

Używany jedynie do:
- ikon
- hover
- separatorów
- cienkich ramek
- aktywnych elementów

## Tekst
Nagłówki:
- `#3D3328`

Treść:
- `#5F554A`

Border:
- `rgba(182,164,122,.2)`

Gradient Hero:
```css
linear-gradient(
180deg,
rgba(250,247,242,0),
rgba(250,247,242,.95)
)
```

---

# Typografia

Nagłówki:
- Playfair Display
- lub Cormorant Garamond

Treść:
- Lato
- lub Inter

Podpisy:
- Allura (wyłącznie imiona)

---

# Layout

## Hero
Układ dwukolumnowy.

Lewa:
- tekst
- imiona
- opis
- licznik
- CTA

Prawa:
- duże okrągłe zdjęcie pary

Zdjęcie:
- złota cienka ramka
- delikatny cień
- drugi półprzezroczysty okrąg
- dekoracyjne gałązki SVG

Tło:
- gradient
- blur circles
- light blobs
- grain
- noise
- delikatne liście SVG

Pod zdjęciem:
- animowany scroll indicator.

---

# Welcome

Lewa kolumna:
- tekst

Prawa:
- dwa nachodzące na siebie zdjęcia.

---

# Najważniejsze informacje

Jedna szeroka karta z ikonami:
- Lokalizacja
- Nocleg
- Prezenty
- Dress code
- Kontakt

---

# Lokalizacje

Dwie eleganckie karty:
- zdjęcie
- opis
- mapa
- przycisk

---

# Harmonogram

Pionowa oś czasu.

Po scrollowaniu kolejne punkty aktywują się animacją.

---

# Galeria

Pinterest Masonry Layout.

Efekty:
- zoom
- gradient
- lazy loading

---

# RSVP

Oddzielna sekcja.

Lewa:
- opis

Prawa:
- formularz

---

# Kontakt

Sekcje:
- Para młoda
- Świadkowie
- Social media
- Mapa

---

# Footer

Minimalistyczny.
Monogram + subtelna gałązka.

---

# Mobile

Nie zmniejszaj desktopu.

Przeprojektuj układ.

Hero:
- tekst
- zdjęcie
- licznik
- CTA

Zdjęcie:
- 70% szerokości

Menu:
- floating
- glassmorphism
- zwijane po scrollu

Galeria:
- 2 kolumny

Licznik:
- 2x2

---

# Desktop

Max width:
- 1400px

Padding sekcji:
- 120px góra/dół

---

# Styl komponentów

Cards:
- radius 24px

Buttons:
- pill (999px)

Zdjęcia:
- radius 24px

Cienie:
```css
0 20px 60px rgba(0,0,0,.08)
```

---

# Animacje (Framer Motion)

Hero:
- fade
- slide up

Zdjęcie:
- scale 0.95 -> 1

Counter:
- stagger

Sekcje:
- opacity
- translateY

Cards hover:
- translateY(-6px)

Buttons hover:
- scale(1.03)

Zdjęcia:
- zoom 1.05

Liście SVG:
- floating 8s infinite

Parallax:
- tylko Hero (20px)

---

# Ikony

Lucide React

---

# Dekoracje SVG

- gałązki
- listki
- separatory
- monogram
- cienkie linie
- ornamenty

---

# Grafiki

Hero:
- 2000x1400

Lokalizacja:
- 900x700

Galeria:
- minimum 1200x1600

Miniatury:
- 800x800

---

# Efekty

Backdrop blur:
- blur(30px)

Glass:
- tylko menu

Noise:
- opacity 0.03

Gradient overlay na zdjęciach.

---

# Technologia

- Next.js 15
- App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Lucide React
- next/image
- next/font
- SEO Friendly
- ISR / SSG
- Vercel Ready
- Dane w osobnych plikach JSON / TS.

---

# Dodatkowe funkcje Premium

- animowane przejścia między sekcjami
- flip countdown
- progress bar scrolla
- aktywne menu
- subtelne światło pod kursorem
- animowany monogram
- elegancki preloader
- crossfade galerii
- delikatny parallax dekoracji

Projekt powinien być maksymalnie modularny, łatwy do rozbudowy o kolejne szablony WeddInfo oraz zoptymalizowany pod wydajność i Core Web Vitals.
