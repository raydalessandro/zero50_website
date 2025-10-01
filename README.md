# 🎭 UCT - ZERO50 | Deployment Guide

> Dal rumore alla risonanza. Sempre.

---

## 📁 Struttura File Completa

```
uct-website/
├── index.html              ✅ Homepage + Player + Tracce
├── bio.html                ✅ Chi è Zero50 (da bio.html originale)
├── press-kit.html          ✅ Materiale stampa (da Presskit.html originale)
├── contatti.html           ✅ Form contatti + info
├── shop.html               ⏳ Coming soon
├── privacy.html            ⏳ Da creare (GDPR)
│
├── css/
│   ├── style.css           ✅ Stili principali
│   └── contatti.css        ✅ Stili pagina contatti
│
├── js/
│   ├── main.js             ✅ Script principale
│   └── contatti.js         ✅ Handler form contatti
│
├── assets/                 📦 Optional
│   ├── audio/              🎵 MP3 tracce (quando disponibili)
│   ├── images/             🖼️ Press photos
│   └── downloads/          📄 Press kit files
│
├── README.md               📖 Questo file
└── LICENSE                 ⚖️ MIT License

```

---

## 🚀 Deploy su GitHub Pages

### 1. Setup Repository

```bash
# Crea repository su GitHub
# Nome suggerito: uct-website o zero50-official

# Clona in locale
git clone https://github.com/TUO_USERNAME/uct-website.git
cd uct-website

# Copia tutti i file del progetto
```

### 2. Commit & Push

```bash
git add .
git commit -m "🎭 UCT Launch - Sistema inizializzato"
git push origin main
```

### 3. Attiva GitHub Pages

1. Vai su **Settings** del repository
2. Sezione **Pages** (menu laterale)
3. Source: **Deploy from a branch**
4. Branch: **main** → Folder: **/ (root)**
5. Clicca **Save**

⏳ Attendi 2-5 minuti

✅ Sito live su: `https://TUO_USERNAME.github.io/uct-website/`

---

## ⚙️ Configurazioni Obbligatorie

### 1. Form Contatti (PRIORITÀ ALTA)

**File da modificare:** `contatti.html` (linea ~50)

```html
<!-- SOSTITUISCI YOUR_FORM_ID -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Setup Formspree:**

1. Vai su [formspree.io](https://formspree.io)
2. Registrati (gratis: 50 submit/mese)
3. Crea nuovo form
4. Copia il Form ID (es: `mzbqjkpl`)
5. Sostituisci in `contatti.html`
6. Test: invia messaggio di prova

**Alternative:**
- EmailJS (più complesso, più controllo)
- Netlify Forms (se usi Netlify invece di GitHub Pages)

---

### 2. Link Social Reali

**File da modificare:** Tutti (cerca `https://instagram.com/zero50_uct`)

Sostituisci con i link reali:
- Instagram: `https://instagram.com/ACCOUNT_REALE`
- Spotify: `https://open.spotify.com/artist/ID_ARTISTA`
- YouTube: `https://youtube.com/@CANALE_REALE`

**Cerca e sostituisci in:**
- `index.html`
- `bio.html`
- `press-kit.html`
- `contatti.html`

---

### 3. Email Contatti

**File da modificare:** `contatti.html`

Sostituisci le email placeholder:
```html
press@uctzero50.com      → EMAIL_REALE_STAMPA
booking@uctzero50.com    → EMAIL_REALE_BOOKING
collab@uctzero50.com     → EMAIL_REALE_COLLAB
```

---

## 🎵 Integrazione Audio

### Opzione 1: MP3 Locale (Sconsigliato per GitHub)

**Attenzione:** GitHub ha limite 100MB per file.

```bash
# Crea cartella
mkdir -p assets/audio

# Copia MP3 (comprimi se >10MB ciascuno)
cp mondo-vecchio.mp3 assets/audio/
cp anime-perdute.mp3 assets/audio/
cp incubo-sogno.mp3 assets/audio/
```

**Modifica** `index.html`:
```javascript
// Cerca i placeholder e sostituisci
audioUrl: "/assets/audio/mondo-vecchio.mp3"
audioUrl: "/assets/audio/anime-perdute.mp3"
audioUrl: "/assets/audio/incubo-sogno.mp3"
```

### Opzione 2: Spotify Embed (Consigliato)

Quando le tracce sono su Spotify:

```html
<!-- Nel player, sostituisci con -->
<iframe src="https://open.spotify.com/embed/track/TRACK_ID" 
        width="100%" height="80" frameborder="0"></iframe>
```

### Opzione 3: SoundCloud Widget

```html
<iframe width="100%" height="166" scrolling="no" frameborder="no"
        src="https://w.soundcloud.com/player/?url=URL_TRACCIA"></iframe>
```

---

## 📋 Checklist Pre-Launch

### Configurazione

- [ ] Form contatti: Formspree ID inserito
- [ ] Link social: URL reali inseriti
- [ ] Email contatti: Indirizzi reali
- [ ] Audio: Player configurato (locale o streaming)
- [ ] `bio.html`: Presente e funzionante
- [ ] `press-kit.html`: Presente e funzionante

### Test Funzionalità

- [ ] Form contatti: Invia messaggio di test
- [ ] Navigation: Tutti i link funzionano
- [ ] Mobile menu: Si apre/chiude correttamente
- [ ] Track player: Expand/collapse funziona
- [ ] Responsive: Test su mobile/tablet
- [ ] Link esterni: Social aprono in nuova tab

### Test Browser

- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

---

## 🔒 Privacy & GDPR (DA FARE)

### privacy.html - Template Base

Crea file `privacy.html`:

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <title>Privacy Policy - UCT Zero50</title>
    <!-- Copia <head> da index.html -->
</head>
<body>
    <!-- Copia header da index.html -->
    
    <main style="padding: 150px 20px 50px;">
        <div class="container" style="max-width: 900px;">
            <h1>PRIVACY_POLICY.txt</h1>
            
            <h2>1. Titolare del Trattamento</h2>
            <p>Zero50 / UCT<br>
            Email: privacy@uctzero50.com</p>
            
            <h2>2. Dati Raccolti</h2>
            <p>Tramite il form contatti raccogliamo:
            - Nome/Alias
            - Email
            - Messaggio</p>
            
            <h2>3. Finalità</h2>
            <p>Rispondere alle richieste ricevute.</p>
            
            <h2>4. Base Giuridica</h2>
            <p>Consenso esplicito (flag privacy).</p>
            
            <h2>5. Conservazione</h2>
            <p>I dati vengono conservati per 24 mesi.</p>
            
            <h2>6. Diritti dell'Interessato</h2>
            <p>Hai diritto di:
            - Accedere ai tuoi dati
            - Richiederne la cancellazione
            - Richiederne la modifica
            Scrivi a: privacy@uctzero50.com</p>
            
            <h2>7. Cookie</h2>
            <p>Questo sito non utilizza cookie di profilazione.</p>
            
            <p><strong>Ultimo aggiornamento:</strong> Gennaio 2025</p>
        </div>
    </main>
    
    <!-- Copia footer da index.html -->
</body>
</html>
```

**Nota Legale:** Questo è un template base. Per un sito professionale, consulta un legale per privacy conforme GDPR.

---

## 🎨 Personalizzazioni Future

### Colori Brand

File: `css/style.css` (righe 15-20)

```css
:root {
    --black: #000000;
    --white: #ffffff;
    --red: #dc2626;     /* ROSSO PRINCIPALE */
    --gray-dark: #1a1a1a;
    --gray-medium: #333333;
    --gray-light: #666666;
}
```

### Font

Attuale: `Space Mono` (monospace)

Per cambiare:
```css
@import url('https://fonts.googleapis.com/css2?family=NUOVO_FONT');

body {
    font-family: 'NUOVO_FONT', monospace;
}
```

---

## 🛠️ Troubleshooting

### Sito non visibile dopo deploy

✅ **Soluzione:**
- Attendi 5-10 minuti
- Vai su Settings > Pages
- Verifica branch sia `main` e folder `/  (root)`
- Hard refresh: `Ctrl+F5` (Windows) o `Cmd+Shift+R` (Mac)

### Form non funziona

✅ **Soluzione:**
- Verifica Formspree ID corretto in `contatti.html`
- Controlla console browser (F12) per errori
- Test email destinazione valida su Formspree dashboard

### Audio non parte

✅ **Soluzione:**
- Browser bloccano autoplay
- Serve click utente per partire
- Verifica path MP3 corretto
- Controlla formato supportato (MP3 o AAC)

### Mobile menu non si apre

✅ **Soluzione:**
- Verifica `js/main.js` caricato
- Controlla console browser per errori JS
- Test su device reale, non solo DevTools

---

## 📊 Analytics (Opzionale)

### Plausible (Privacy-First, Consigliato)

1. Registrati su [plausible.io](https://plausible.io)
2. Aggiungi dominio
3. Copia script snippet
4. Incolla in `<head>` di tutti gli HTML:

```html
<script defer data-domain="TUO_DOMINIO.com" 
        src="https://plausible.io/js/script.js"></script>
```

**Costo:** €9/mese (free trial disponibile)

---

## 🎯 SEO Basics

### sitemap.xml

Crea file `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://TUO_DOMINIO.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://TUO_DOMINIO.com/bio.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://TUO_DOMINIO.com/press-kit.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://TUO_DOMINIO.com/contatti.html</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

### robots.txt

Crea file `robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://TUO_DOMINIO.com/sitemap.xml
```

---

## 🌐 Dominio Custom (Opzionale)

### Setup con Dominio Proprio

1. Acquista dominio (es: `zero50.com`)
2. GitHub Pages Settings > Custom domain
3. Inserisci dominio
4. Sul provider dominio, aggiungi record DNS:

```
Type: CNAME
Name: www
Value: TUO_USERNAME.github.io

Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

5. Attendi propagazione DNS (4-48 ore)
6. Attiva HTTPS su GitHub Pages

---

## 📞 Support

**Tech Issues:**  
EAR Marketing - alessiomarrone@outlook.com

**Content Updates:**  
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
Website code: MIT License (vedi LICENSE file)
