Mein Air Fryer – Produktbewertungs-Webseite

### Projektbeschreibung

Geplant ist eine persönliche Produktbewertungsseite zur Cosori Air Fryer Turbo Tower mit Keramikbeschichtung. Das Ziel ist es, das Gerät ausführlich und aus meiner nutzerorientierten Perspektive zu bewerten, anstatt es nur kurz vorzustellen. Der Webauftritt umfasst acht Seiten, die alle verlinkt sind: Startseite, Bewertung, Technik, Keramikbeschichtung, Vergleich, favorisierte Rezepte, FAQ und Kontakt/Impressum

## Live-Demo

[![Live Demo](https://img.shields.io/badge/Live--Demo-Webseite%20öffnen-2f7d56?style=for-the-badge)](https://iu-webprogrammierung.github.io/webprogrammierung-BenediktIU/)

### Inhalt der Webseite

Die Webseite besteht aus mehreren verlinkten Seiten:

- index.html – Startseite mit Produktvorstellung
- bewertung.html – Bewertungsseite mit Gesamtbewertung, Detailbewertung und Vor-/Nachteilen
- technik.html – Technische Daten des Air Fryers
- keramikbeschichtung.html – Informationen zur Keramikbeschichtung
- vergleich.html – Vergleich mit anderen Air Fryern
- rezepte.html – Rezeptideen
- faq.html – Häufige Fragen
- impressum.html - Impressum
- datenschutz.html - Datenschutz informationen
- kontakt.html - Kontaktschnittstelle

## Responsive-Design-Strategie

### Breakpoints

| Gerät | Bildschirmbreite |
|---|---|
| Smartphones | ≤ 700px |
| Tablets und kleine Laptops | 701px – 1100px |
| Desktops | ≥ 1101px |


### Vorgehensweise

Bei der Umsetzung wurde eine Desktop-First-Strategie verfolgt. Die Desktop-Version nutzt den verfügbaren Platz durch mehrspaltige Layouts, große Hero-Bereiche und übersichtliche Inhaltskarten.

Für kleinere Bildschirmgrößen werden die Layouts mithilfe von Media Queries angepasst. Mehrspaltige Bereiche werden auf Tablets und Smartphones schrittweise in einspaltige Layouts umgewandelt. Dadurch bleiben Inhalte auch auf mobilen Geräten gut lesbar und bedienbar.

Für das Layout wurden vor allem **CSS Grid** und **Flexbox** eingesetzt. Größere Unterseiten besitzen eigene CSS-Dateien, damit das Styling modular, übersichtlich und wartbar bleibt. Alle erstellten HTML und CSS-Dateien sind in der **Projektsturkur** sichtbar.

Besonders berücksichtigt wurden:

- gut lesbare Schriftgrößen
- klare Abstände zwischen den Bereichen
- sichtbare Fokuszustände für Tastaturnavigation
- aktive Navigation mit `aria-current`
- semantische HTML-Struktur
- ausreichend große Klick- und Tippflächen
- responsive Karten, Tabellen und Inhaltsbereiche

## Projektstruktur

```text
mein-air-fryer/
│
├── index.html
├── bewertung.html
├── technik.html
├── keramikbeschichtung.html
├── vergleich.html
├── rezepte.html
├── faq.html
├── impressum.html
├── datenschutz.html
├── kontakt.html
│
├── style.css
├── bewertung.css
├── technik.css
├── keramikbeschichtung.css
├── vergleich.css
├── rezepte.css
├── faq.css
├── impressum.css
├── datenschutz.css
├── kontakt.css
│
└── README.md