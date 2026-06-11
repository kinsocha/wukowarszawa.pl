// Generuje public/og-image.png (1200x630) i public/apple-touch-icon.png (180x180).
// Uruchomienie: node scripts/generate-og.mjs
import sharp from 'sharp';

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f172a"/>
      <stop offset="0.55" stop-color="#1e293b"/>
      <stop offset="1" stop-color="#0c4a6e"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#38bdf8"/>
      <stop offset="1" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1080" cy="90" r="260" fill="#0ea5e9" opacity="0.10"/>
  <circle cx="120" cy="580" r="220" fill="#22d3ee" opacity="0.08"/>
  <g transform="translate(90,90) scale(1.6)">
    <path d="M32 9c8.5 11 16.5 19.5 16.5 29a16.5 16.5 0 0 1-33 0c0-9.5 8-18 16.5-29z" fill="url(#accent)"/>
    <path d="M24.5 39a8 8 0 0 0 8 8" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round" fill="none" opacity=".5"/>
  </g>
  <text x="90" y="330" font-family="Segoe UI, Arial, sans-serif" font-size="86" font-weight="bold" fill="#ffffff">Wuko Warszawa</text>
  <text x="90" y="408" font-family="Segoe UI, Arial, sans-serif" font-size="44" font-weight="bold" fill="url(#accent)">ciśnieniowe udrażnianie kanalizacji</text>
  <rect x="90" y="448" width="120" height="6" rx="3" fill="url(#accent)"/>
  <text x="90" y="540" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#94a3b8">wukowarszawa.pl</text>
</svg>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#38bdf8"/>
      <stop offset="1" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" fill="#0f172a"/>
  <path d="M32 9c8.5 11 16.5 19.5 16.5 29a16.5 16.5 0 0 1-33 0c0-9.5 8-18 16.5-29z" fill="url(#g)"/>
  <path d="M24.5 39a8 8 0 0 0 8 8" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round" fill="none" opacity=".5"/>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og-image.png');
await sharp(Buffer.from(icon)).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('OK: og-image.png + apple-touch-icon.png');
