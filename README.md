# 🤖 AI Tools Dashboard

> Entdecke die besten KI-Tools auf einen Blick – Eine kuratierte Sammlung der leistungsstärksten AI-Tools für Text, Bild, Video, Code und mehr.

![AI Tools Dashboard](https://via.placeholder.com/1200x600/0f172a/60a5fa?text=AI+Tools+Dashboard)

## ✨ Features

- 🎨 **Moderne UI/UX** – Sleek, responsive Design mit Dark Mode als Standard
- 🔍 **Echtzeit-Suche** – Schnelle Suche nach Tools, Kategorien und Beschreibungen
- 🏷️ **Smart Filtering** – Filtere nach Kategorie, Preis und sortiere nach Bewertung
- 📱 **100% Responsive** – Perfekt auf Mobile, Tablet und Desktop
- 🎭 **Dark/Light Mode** – Theme-Toggle mit localStorage-Persistenz
- ⚡ **Performance** – Optimiert mit Next.js 14 und Server Components
- 🎯 **38+ Tools** – Kuratierte Sammlung über 8 Kategorien
- 🆕 **Neu-Kennzeichnung** – Sieh auf einen Blick, welche Tools neu hinzugefügt wurden
- ⭐ **Bewertungssystem** – 5-Sterne-Bewertung für jeden Tool
- 💰 **Preistransparenz** – Klar gekennzeichnet: Kostenlos, Freemium oder Bezahlt

## 🚀 Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Sprache:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** Vercel (empfohlen)

## 📦 Installation & Setup

### Voraussetzungen

- Node.js 18+ installiert
- npm oder yarn

### Installation

1. **Repository klonen**
   ```bash
   git clone https://github.com/hcscmedia/ai-tools-dashboard.git
   cd ai-tools-dashboard
   ```

2. **Abhängigkeiten installieren**
   ```bash
   npm install
   # oder
   yarn install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm run dev
   # oder
   yarn dev
   ```

4. **Im Browser öffnen**
   ```
   http://localhost:3000
   ```

### Build für Produktion

```bash
npm run build
npm run start
# oder
yarn build
yarn start
```

## 📁 Projektstruktur

```
ai-tools-dashboard/
├── app/
│   ├── layout.tsx          # Root Layout mit Header/Footer
│   ├── page.tsx            # Hauptseite mit State-Management
│   └── globals.css         # Globale Styles und Tailwind
├── components/
│   ├── Header.tsx          # Header mit Logo und Navigation
│   ├── Hero.tsx            # Hero-Sektion mit Statistiken
│   ├── SearchBar.tsx       # Suchleiste mit Echtzeit-Suche
│   ├── CategoryFilter.tsx  # Kategorie-Filter Buttons
│   ├── ToolCard.tsx        # Tool-Karte mit allen Infos
│   ├── ToolGrid.tsx        # Responsive Grid für Tools
│   ├── FilterBar.tsx       # Preis-Filter und Sortierung
│   ├── ThemeToggle.tsx     # Dark/Light Mode Toggle
│   ├── Newsletter.tsx      # Newsletter-Signup Sektion
│   ├── FAQ.tsx             # FAQ Accordion
│   └── Footer.tsx          # Footer mit Links
├── data/
│   └── tools.ts            # 38 KI-Tools mit allen Daten
├── types/
│   └── index.ts            # TypeScript Interfaces
├── lib/
│   └── utils.ts            # Utility-Funktionen
├── public/                 # Statische Assets
├── tailwind.config.ts      # Tailwind-Konfiguration
├── next.config.js          # Next.js-Konfiguration
├── tsconfig.json           # TypeScript-Konfiguration
└── package.json            # Projekt-Dependencies
```

## 🎯 Kategorien

Das Dashboard umfasst folgende 8 Kategorien:

| Kategorie | Icon | Anzahl Tools |
|-----------|------|--------------|
| Text & Writing | 📝 | 5 |
| Bild & Design | 🎨 | 5 |
| Video | 🎬 | 5 |
| Code & Development | 💻 | 5 |
| Audio & Musik | 🎵 | 4 |
| Produktivität | 📊 | 5 |
| Forschung & Analyse | 🔬 | 4 |
| Chatbots & Assistenten | 🤖 | 5 |

## ➕ Neue Tools hinzufügen

Du möchtest ein neues Tool hinzufügen? So geht's:

1. Öffne `data/tools.ts`
2. Füge ein neues Tool-Objekt zum `tools` Array hinzu:

```typescript
{
  id: '39',
  name: 'Tool Name',
  description: 'Kurze Beschreibung des Tools (1-2 Sätze)',
  category: 'Text & Writing', // Wähle eine existierende Kategorie
  rating: 4, // 1-5
  pricing: 'Freemium', // 'Kostenlos' | 'Freemium' | 'Bezahlt'
  url: 'https://example.com',
  isNew: true, // true für neu hinzugefügte Tools
}
```

3. Speichern – Die Änderung wird automatisch auf der Seite reflektiert!

## 🎨 Anpassung

### Farben ändern

Bearbeite `tailwind.config.ts` und `app/globals.css` für Custom-Farben:

```css
/* app/globals.css */
:root {
  --background: 222.2 84% 4.9%;  /* Hintergrundfarbe */
  --foreground: 210 40% 98%;     /* Textfarbe */
}
```

### Logo austauschen

Ersetze das Icon in `components/Header.tsx`:

```tsx
import { YourIcon } from 'lucide-react';
// ...
<YourIcon className="w-8 h-8 text-blue-500" />
```

## 🌐 Deployment

### Vercel (empfohlen)

1. Push dein Repository zu GitHub
2. Gehe zu [vercel.com](https://vercel.com)
3. Importiere dein Repository
4. Deploy! ✨

### Andere Plattformen

Das Projekt kann auf allen Next.js-kompatiblen Plattformen deployed werden:
- Netlify
- Railway
- Render
- AWS
- Digital Ocean

## 📝 Lizenz

Dieses Projekt ist unter der **MIT Lizenz** lizenziert.

```
MIT License

Copyright (c) 2024 AI Tools Dashboard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🤝 Contributing

Contributions sind willkommen! Bitte erstelle einen Pull Request oder öffne ein Issue.

## 📧 Kontakt

Bei Fragen oder Vorschlägen öffne bitte ein Issue auf GitHub.

---

**Erstellt mit ❤️ und Next.js**
