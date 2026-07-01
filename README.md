# WeddInfo — Strona weselna Julia & Antoni

Elegancki szablon strony weselnej zbudowany w **Next.js 15**, **TypeScript** i **Tailwind CSS**.

## Uruchomienie

```bash
npm install
npm run dev
```

Strona dostępna pod adresem [http://localhost:3000](http://localhost:3000).

## Konfiguracja

Wszystkie dane pary młodej, harmonogram, lokalizacje i kontakt znajdują się w pliku:

`src/config/wedding.ts`

Podmiana szablonu na inną parę młodą polega na edycji tego jednego pliku.

## Zasoby graficzne

- `public/foto.jpg` — zdjęcie pary (używane we wszystkich miejscach ze zdjęciami)
- `public/icon.png` — ikona zastępcza (używana we wszystkich miejscach z ikonami)

## Funkcje

- Responsywny design (desktop + mobile)
- Licznik odliczający do dnia ślubu
- Harmonogram z animacjami
- Galeria masonry z filtrami
- Formularz RSVP
- Mapy Google
- Preloader i pasek postępu scrolla
- Konfigurowalne przyciski (galeria, RSVP)

## Deploy

Projekt gotowy do wdrożenia na Vercel:

```bash
npm run build
```
