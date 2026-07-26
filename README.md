Mein Air Fryer – Produktbewertungs-Webseite

### Projektbeschreibung

Geplant ist eine persönliche Produktbewertungsseite zur Cosori Air Fryer Turbo Tower mit Keramikbeschichtung. Das Ziel ist es, das Gerät ausführlich und aus meiner nutzerorientierten Perspektive zu bewerten, anstatt es nur kurz vorzustellen. Der Webauftritt umfasst acht Seiten, die alle verlinkt sind: Startseite, Bewertung, Technik, Keramikbeschichtung, Vergleich, favorisierte Rezepte, FAQ und Kontakt/Impressum.

### Inhalt der Webseite

Ziel der Website ist es, eine moderne und übersichtliche Produktbewertung zu erstellen. Anders als bei einer einfachen Produktseite steht nicht nur das Gerät selbst im Vordergrund, sondern auch die praktische Nutzung im Alltag.

Die Inhalte sind deshalb in verschiedene Bereiche gegliedert:

- technische Daten und Ausstattung
- persönliche Bewertung mit Einzelwertungen
- Vergleich mit weiteren Air-Fryer-Modellen
- Informationen zur Keramikbeschichtung
- Rezeptideen
- häufige Fragen
- Kontakt sowie rechtliche Informationen

## Seiten und ihre Aufgaben

Die Website soll sowohl auf großen Bildschirmen als auch auf Tablets und Smartphones verständlich, übersichtlich und angenehm nutzbar sein.

| Datei | Zweck und Inhalte |
|---|---|
| `index.html` | Einstieg in das Projekt mit Produktüberblick, Kennzahlen und Verweisen auf die wichtigsten Themenbereiche |
| `bewertung.html` | Persönlicher Testbericht, Gesamt- und Einzelbewertungen, interaktiver Praxiseindruck sowie Vor- und Nachteile |
| `technik.html` | Technische Daten, Ausstattung, Garzonen und interaktiv wechselnde Detailinformationen |
| `keramikbeschichtung.html` | Eigenschaften, Pflege, Alltagserfahrungen sowie Vor- und Nachteile der Keramikbeschichtung |
| `vergleich.html` | Vergleich mit ausgewählten Air-Fryer-Modellen, Kriterienübersicht, Vergleichstabelle und Fazit |
| `rezepte.html` | Zwölf Rezeptideen mit Kategorie-Filtern, Duo-Menü und ausführlichen Rezeptdialogen |
| `faq.html` | Schnellübersicht, thematisch gegliederte Fragen und aufklappbare Antworten |
| `kontakt.html` | Kontaktmöglichkeit und Hinweise zur Datenverarbeitung bei einer Kontaktaufnahme |
| `impressum.html` | Anbieterangaben, Projektkontext und Haftungshinweise |
| `datenschutz.html` | Informationen zur technischen Bereitstellung, Kontaktaufnahme und zu Betroffenenrechten |
| `404.html` | Individuelle Fehlerseite mit Rückweg zur Startseite |


## Live-Demo

[![Live Demo](https://img.shields.io/badge/Live--Demo-Webseite%20öffnen-2f7d56?style=for-the-badge)](https://iu-webprogrammierung.github.io/webprogrammierung-BenediktIU/)


## Herausforderungen und Erkenntnisse aus Phase 3

In der Finalisierung wurden bestehende Bereiche überarbeitet und zusätzliche Funktionen ergänzt. Dazu gehören der Dark Mode, Rezeptfilter, Rezeptdialoge, Scroll-Reveal-Animationen, die individuelle 404-Seite, das Favicon sowie zusätzliche Inhaltskarten.
Ein Schwerpunkt lag auf Refactoring: feste Farben wurden schrittweise durch CSS-Variablen ersetzt, wiederkehrende Komponenten zentralisiert und JavaScript-Funktionen stärker auf Barrierefreiheit und reduzierte Bewegung ausgerichtet.


## Herausforderungen und Erkenntnisse aus Phase 2

Weil ich schon Erfahrung mit HTML, CSS und ein paar kleineren JavaScript-Projekten hatte, war die Herausforderung weniger die Beherrschung der Grundlagen der Syntax. Es war deutlich schwieriger, viele einzelne Seiten so zu designen, dass sie trotz unterschiedlicher Inhalte wie ein zusammenhängender Webauftritt wirken. Die einheitliche Gestaltung der Hero-Bereiche stellte eine zentrale Herausforderung dar. Überschriften, Produktbilder, Badges und Abstände sollten auf allen Seiten so konsistent wie möglich sein. Es wurde festgestellt, dass selbst kleine Anpassungen bei padding, min-height, Bildgrößen oder Grid-Spalten bereits beeinflussen können, ob eine Seite ruhig und ausgewogen wirkt.
Dabei habe ich gelernt, dass es entscheidend ist, einheitliche CSS-Werte und wiederkehrende Designmuster zu verwenden.  Farben, Abstände, Schatten, Kartenradien und Schriftgrößen sind deshalb über CSS Custom Properties und ähnliche Klassenstrukturen wiederverwendet worden.

Das responsive Verhalten stellte ebenfalls eine Herausforderung dar. Was auf einem Desktop gut aussieht, funktioniert nicht automatisch auf einem Smartphone.  Insbesondere mussten Produktbilder, schwebende Badges und mehrspaltige Kartenbereiche mehrfach überarbeitet werden. Es wurde klar, dass responsive Design weit mehr umfasst, als nur von mehreren Spalten auf eine zu wechseln.  Es müssen auch Schriftgrößen, Innenabstände, Bildhöhen und die Platzierung einzelner Elemente beachtet werden.

Es war für mich entscheidend, dass ich beim Umsetzen von dynamischen Bereichen über visuell klickbare Elemente hinausgehe.  Auch die Technik- und Bewertungsbereiche sollten sinnvoll strukturiert und mit der Tastatur bedienbar gestaltet sein. Dies hat dazu geführt, dass ich mich intensiver mit ARIA-Attributen, der Fokussteuerung und reduzierten Animationen auseinandergesetzt habe.
Eine weitere wichtige Erkenntnis war, dass man Header und Footer über HTMX einbinden kann. Selbst wenn es nur um kleine Seitenelemente geht, so ist die zentrale Verwaltung eine große Erleichterung. Änderungen an Navigation oder Footer müssen nicht auf jeder Seite einzeln nachgetragen werden.

Alles in allem hat mir die Phase 2 die Erkenntnis vermittelt, dass ein schönes Design allein nicht ausreicht, um die Qualität einer Website zu gewährleisten. Wichtige Faktoren sind zudem Konsistenz, Wartbarkeit, sinnvolle Komponenten, responsive Anpassungen sowie eine verständliche Bedienung.


## Herausforderungen und Erkenntnisse aus Phase 1

In der ersten Phase war es entscheidend, die Website als zusammenhängendes Projekt mit einer klaren Informationsarchitektur zu sehen, anstatt sie als Sammlung einzelner HTML-Dateien zu betrachten. Dank meiner bisherigen Erfahrung mit HTML und CSS kannte ich die grundlegende Struktur bereits. Es wurde jedoch offensichtlich, dass eine sorgfältige Planung besonders wichtig ist, wenn mehrere Seiten später einheitlich gestaltet werden sollen. Eine wichtige Einsicht aus dieser Phase war, dass semantisches HTML über die Barrierefreiheit hinausgeht. Eine saubere Strukturierung mit `main`, `section`, `article`, `nav` und sinnvollen Überschriften vereinfacht nicht nur die spätere CSS-Gestaltung, sondern macht den Code auch leichter nachvollziehbar.

## Schwerpunkte

Folgende Leistungen sollten berücksichtigt werden:

- umfangreicher, konsistenter Webauftritt mit elf HTML-Seiten
- nachvollziehbare Aufteilung der Inhalte nach Seitenzweck
- responsive Layouts mit Grid, Flexbox und mehreren Breakpoints
- eigenständiges Design ohne CSS-Framework
- zentrale CSS-Variablen und seitenbezogene Stylesheets
- wiederverwendbare HTMX-Komponenten
- persistenter Dark Mode
- Rezeptfilter und dynamisch befüllte Dialoge
- Scroll-Reveal-Animationen
- individuelle 404-Seite und eigenes Favicon
- umfangreiche Git-Historie und schrittweise Weiterentwicklung
- Berücksichtigung von Barrierefreiheit


## Zentrale Funktionen

### 1. Responsives Layout

Die Website wurde Desktop-first aufgebaut und für unterschiedliche Bildschirmgrößen angepasst.

### Breakpoints

| Gerät | Bildschirmbreite |
|---|---|
| Smartphones | ≤ 700px |
| Tablets und kleine Laptops | 701px – 1100px |
| Desktops | ≥ 1101px |

Die Layouts verwenden sowohl **CSS Grid** als auch **Flexbox**. Mehrspaltige Bereiche werden abhängig von der verfügbaren Breite neu angeordnet. Schriftgrößen, Abstände, Bildgrößen, Kartenradien und Bedienelemente werden ebenfalls angepasst.

### Wiederverwendbare Komponenten

Header und Footer werden nicht auf jeder Seite doppelt gepflegt. Stattdessen liegen sie als gemeinsame Dateien im Ordner `komponenten/`.

Die Einbindung erfolgt mit HTMX:

```html
<header
  hx-get="./komponenten/header.html"
  hx-trigger="load"
  hx-swap="outerHTML"
></header>
```

```html
<footer
  hx-get="./komponenten/header.html"
  hx-trigger="load"
  hx-swap="outerHTML"
></footer>
```

### Dark Mode und Light Mode

Der Theme-Schalter befindet sich im gemeinsamen Header.

Umgesetzt wurden:

- Erkennung der Systemeinstellung über `prefers-color-scheme`
- Speicherung der Auswahl im `localStorage`
- Wiederherstellung des gewählten Themes beim Seitenwechsel
- Umschaltung über ein zugängliches Bedienelement
- dynamische Anpassung von `aria-label` und `aria-pressed`
- eigene Farbvariablen für helle und dunkle Oberflächen
- Berücksichtigung von `prefers-reduced-motion`


### Barrierefreiheit

Bei der Umsetzung wurden grundlegende Aspekte der Barrierefreiheit berücksichtigt:

- semantische HTML-Struktur,
- sinnvolle Überschriftenhierarchie,
- beschreibende Alternativtexte für Produktbilder,
- sichtbare Fokuszustände für Links, Buttons und aufklappbare Elemente,
- ausreichend große interaktive Flächen,
- `aria-label` für Navigations- und Inhaltsbereiche,
- `aria-live` für dynamisch wechselnde Inhalte,
- `role="tablist"`, `role="tab"` und `role="tabpanel"` für interaktive Tab-Bereiche,
- Tastaturbedienung der dynamischen Technik- und Bewertungsbereiche,
- Berücksichtigung von `prefers-reduced-motion`.

### Interaktive Bewertung

Auf `bewertung.html` kann zwischen den Bereichen **Leistung**, **Bedienung** und **Reinigung** gewechselt werden.

Die Umsetzung umfasst:

- ARIA-Tabstruktur mit `role="tablist"`, `role="tab"` und `role="tabpanel"`
- Aktualisierung der Inhalte ohne Seitenwechsel
- Bedienung mit Maus und Tastatur
- Pfeiltasten sowie `Home` und `End`
- Fokussteuerung und aktualisierte `aria-selected`-Werte
- reduzierte Animationen bei entsprechender Systemeinstellung

### Rezeptfilter und Rezeptdialoge

Die Rezeptseite enthält zwölf Rezepte in den Kategorien:

- Hauptgerichte
- Snacks
- Desserts

Die JavaScript-Funktionen ermöglichen:

- Filterung der Karten nach Kategorie
- Aktualisierung der sichtbaren Rezeptanzahl über `aria-live`
- Öffnen von Rezepten per Klick, `Enter` oder Leertaste
- Darstellung von Zutaten und Schritten in einem nativen `<dialog>`
- Fokus auf die Schließen-Schaltfläche nach dem Öffnen
- Rückgabe des Fokus an das zuvor verwendete Element
- Schließen über Schaltfläche oder Klick auf den Dialoghintergrund

Zusätzlich zeigt das Duo-Menü, wie zwei Gerichte in getrennten Garzonen kombiniert werden können.

### Individuelle 404-Seite

Die Datei `404.html` übernimmt das vorhandene Designsystem und bietet einen eindeutigen Rückweg zur Startseite. Sie kann von GitHub Pages als eigene Fehlerseite verwendet werden.

## Tests und Qualitätssicherung

Während der  Entwicklung und vor der Abgabe wurden folgende Punkte geprüft:

- Darstellung bei 360, 650, 700, 768, 980, 1100, 1440 und 1920 Pixeln
- horizontales Scrollen und überstehende Elemente
- vollständige Bedienbarkeit mit der Tastatur
- Kontraste in Light Mode und Dark Mode
- Funktion aller Tabs, Filter und Dialoge
- Erreichbarkeit aller internen Links
- Laden der HTMX-Komponenten
- HTML-Prüfung mit dem W3C HTML Checker
- CSS-Prüfung mit dem W3C CSS Validator
- Prüfung mit Lighthouse und WAVE
- finale Kontrolle auf Platzhalter, Tippfehler und widersprüchliche Angaben

Zusätzlich bieten sich folgende Prüfungen an:

- HTML-Prüfung mit dem W3C Markup Validator | https://validator.w3.org/nu/?doc=https%3A%2F%2Fiu-webprogrammierung.github.io%2Fwebprogrammierung-BenediktIU%2Findex.html
- CSS-Prüfung mit einem CSS Validator | https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fiu-webprogrammierung.github.io%2Fwebprogrammierung-BenediktIU%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=de
- Barrierefreiheitsprüfung mit WAVE | https://wave.webaim.org/report#/https://iu-webprogrammierung.github.io/webprogrammierung-BenediktIU/
- Prüfung der mobilen Darstellung über Browser-Entwicklertools
- Lighthouse-Prüfung der HTML Seiten: 
    index.html: https://pagespeed.web.dev/analysis/https-iu-webprogrammierung-github-io-webprogrammierung-BenediktIU-index-html/9pr4ohkzlv?hl=de&form_factor=mobile
    weitere Prüfungen stehen noch aus!!!

### CSS-Validierung

Die Stylesheets wurden mit dem W3C CSS Validator geprüft. Dabei wurden
keine CSS-Fehler festgestellt. Die verbleibenden Hinweise betreffen
ausschließlich CSS Custom Properties, deren dynamische Werte vom
Validator nicht vollständig statisch geprüft werden können.


## Projektstruktur

.
├── bilder/
│   └── cosori-turbo-tower.png
├── komponenten/
│   ├── footer.html
│   └── header.html
├── index.html
├── bewertung.html
├── technik.html
├── keramikbeschichtung.html
├── vergleich.html
├── rezepte.html
├── faq.html
├── kontakt.html
├── impressum.html
├── datenschutz.html
├── 404.html
├── style.css
├── bewertung.css
├── technik.css
├── keramikbeschichtung.css
├── vergleich.css
├── rezepte.css
├── faq.css
├── kontakt.css
├── impressum.css
├── datenschutz.css
├── 404.css
├── darkmode.css
├── technik.js
├── bewertung.js
├── rezepte.js
├── darkmode.js
├── scroll-animation-index.js
├── scroll-animation-technik.js
├── scroll-animation-bewertung.js
├── scroll-animation-keramik.js
├── scroll-animation-vergleich.js
├── scroll-animation-rezepte.js
├── scroll-animation-faq.js
├── favicon.svg
└── README.md