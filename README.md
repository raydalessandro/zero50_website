# 🎭 UCT - Uno Contro Tutti | Zero50

> L'osservatore disilluso. Tre tracce, tre porte, una frequenza.

---

## 🚀 Deploy su GitHub Pages

### 1. Setup Repository

```bash
# Crea il repository su GitHub
# Nome: uct-website (o zero50-website)

# Clona in locale
git clone https://github.com/TUO_USERNAME/uct-website.git
cd uct-website

# Copia tutti i file
# Struttura finale:
# uct-website/
# ├── index.html
# ├── bio.html
# ├── press-kit.html
# ├── contatti.html
# ├── shop.html (coming soon)
# ├── privacy.html (da creare)
# ├── README.md
# └── assets/ (optional - per MP3, immagini)
```

### 2. Commit & Push

```bash
git add .
git commit -m "🎭 UCT Launch - Dal rumore alla risonanza"
git push origin main
```

### 3. Attiva GitHub Pages

1. Vai su **Settings** del repository
2. Sezione **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** → Folder: **/ (root)**
5. Save

Il sito sarà live su: `https://TUO_USERNAME.github.io/uct-website/`

---

## 📁 Struttura File

```
uct-website/
├── index.html          # Homepage + Player + Tracce
├── bio.html            # Chi è Zero50, progetto UCT
├── press-kit.html      # Materiale stampa, download assets
├── contatti.html       # Form contatti + social
├── shop.html           # [TODO] Ecommerce
├── privacy.html        # [TODO] Privacy Policy GDPR
├── README.md           # Questo file
└── assets/             # [OPTIONAL]
    ├── audio/          # MP3 tracce
    ├── images/         # Press photos
    └── downloads/      # Press kit files
```

---

## ⚙️ Setup Tecnico

### Form Contatti (contatti.html)

**Opzione 1: Formspree (Consigliato)**
```html
<!-- In contatti.html, sostituisci YOUR_FORM_ID -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

1. Vai su [formspree.io](https://formspree.io)
2. Crea account gratuito
3. Crea nuovo form
4. Copia il Form ID
5. Sostituisci in `contatti.html` riga ~130

**Opzione 2: EmailJS**
Alternative più complessa ma con più controllo.

---

### Audio Player Integration

**Quando hai gli MP3:**

1. Carica in `assets/audio/`
2. In `index.html`, sostituisci i placeholder:
```javascript
audioUrl: "/assets/audio/mondo-vecchio.mp3"
audioUrl: "/assets/audio/anime-perdute.mp3"
audioUrl: "/assets/audio/incubo-sogno.mp3"
```

**Alternative Streaming:**
- Spotify Embed
- SoundCloud Widget
- YouTube Embed

---

### Analytics (Optional)

**Plausible (Privacy-First, Consigliato)**
```html
<!-- Aggiungi in <head> di tutte le pagine -->
<script defer data-domain="TUO_DOMINIO.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🎨 Customization

### Colori Principali
```css
--nero: #000000
--bianco: #ffffff
--rosso: #dc2626 (rgb(220, 38, 38))
```

### Font
```css
font-family: 'Space Mono', monospace;
```

---

## 📋 TODO List

### Pre-Launch
- [ ] Sostituire `YOUR_FORM_ID` in contatti.html con ID Formspree reale
- [ ] Creare `privacy.html` (GDPR compliant)
- [ ] Aggiungere link social reali (Instagram, Spotify, YouTube)
- [ ] Caricare MP3 tracce o integrare player esterno
- [ ] Test form contatti
- [ ] Test mobile su vari dispositivi

### Post-Launch
- [ ] Setup Google Search Console
- [ ] Creare sitemap.xml
- [ ] Aggiungere robots.txt
- [ ] Setup dominio custom (opzionale)
- [ ] Creare materiale press kit downloadable
- [ ] Implementare newsletter signup (opzionale)

### Shop (Fase 2)
- [ ] Design shop.html
- [ ] PayPal integration
- [ ] Catalogo prodotti
- [ ] Sistema ordini
- [ ] Privacy & Termini shop

---

## 🔒 Privacy & Legal

### Da Creare

**privacy.html**
- Informativa GDPR
- Uso cookie (se presenti)
- Trattamento dati form contatti
- Diritti utente

**Minimo Essenziale:**
```
- Chi raccoglie i dati: Zero50 / UCT
- Cosa raccoglie: Nome, Email, Messaggio (form)
- Perché: Rispondere alle richieste
- Come: Formspree (terza parte)
- Quanto tempo: 2 anni
- Diritti: Accesso, cancellazione, modifica
- Contatto: privacy@uctzero50.com
```

---

## 🎯 SEO Basics

### Meta Tags già presenti:
✅ Title
✅ Description
✅ Open Graph

### Da aggiungere:
- [ ] `sitemap.xml`
- [ ] `robots.txt`
- [ ] Schema.org markup (MusicGroup)

---

## 📱 Mobile Optimization

✅ Responsive design (Tailwind)
✅ Touch-friendly buttons
✅ Mobile menu hamburger
✅ Optimized typography

**Test su:**
- iPhone (Safari)
- Android (Chrome)
- Tablet

---

## 🚨 Note Importanti

### Audio Files
- **Non committare MP3 pesanti su Git** (GitHub ha limit 100MB per file)
- Usa GitHub Releases per file grandi
- O hosting esterno (Spotify, SoundCloud)

### Form Endpoint
- **Formspree free plan**: 50 submissions/mese
- Per più volume: upgrade o EmailJS

### Performance
- Immagini: max 500KB, usa WebP
- Font: già ottimizzati (Google Fonts)
- JS: tutto inline, zero librerie esterne pesanti

---

## 🛠️ Troubleshooting

**Il sito non si vede dopo deploy?**
- Aspetta 5-10 minuti dopo attivazione Pages
- Controlla Settings > Pages sia impostato correttamente
- Hard refresh browser (Ctrl+F5)

**Form non funziona?**
- Verifica Formspree ID sia corretto
- Controlla console browser per errori
- Testa email destinazione sia valida

**Audio non parte?**
- Verifica path file MP3
- Controlla formato supportato (MP3, AAC)
- Browser blocca autoplay, serve click utente

---

## 📞 Support

**Tech Issues:**
EAR Marketing - [alessiomarrone@outlook.com](mailto:alessiomarrone@outlook.com)

**Content/Strategy:**
Zero50 Management

---

## 🎭 Credits

**Artista:** Zero50  
**Progetto:** UCT - Uno Contro Tutti  
**Produzione:** Vibes Studio  
**Web Design/Dev:** EAR Marketing  
**Anno:** 2025

---

**Dal rumore alla risonanza. Sempre.**

---

## License

© 2025 Zero50 / UCT. All rights reserved.
Website code by EAR Marketing.
