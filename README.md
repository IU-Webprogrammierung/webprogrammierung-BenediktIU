Mein Air Fryer – Produktbewertungs-Webseite

### Projektbeschreibung

Geplant ist eine persönliche Produktbewertungsseite zur Cosori Air Fryer Turbo Tower mit Keramikbeschichtung. Das Ziel ist es, das Gerät ausführlich und aus meiner nutzerorientierten Perspektive zu bewerten, anstatt es nur kurz vorzustellen. Der Webauftritt umfasst acht Seiten, die alle verlinkt sind: Startseite, Bewertung, Technik, Keramikbeschichtung, Vergleich, favorisierte Rezepte, FAQ und Kontakt/Impressum

## Live-Demo

[![Live Demo](https://img.shields.io/badge/Live--Demo-Webseite%20öffnen-2f7d56?style=for-the-badge)](https://iu-webprogrammierung.github.io/webprogrammierung-BenediktIU/)

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

Die Website soll sowohl auf großen Bildschirmen als auch auf Tablets und Smartphones verständlich, übersichtlich und angenehm nutzbar sein.

## Herausforderungen und Erkenntnisse aus Phase 2

Weil ich schon Erfahrung mit HTML, CSS und ein paar kleineren JavaScript-Projekten hatte, war die Herausforderung weniger die Beherrschung der Grundlagen der Syntax. Es war deutlich schwieriger, viele einzelne Seiten so zu designen, dass sie trotz unterschiedlicher Inhalte wie ein zusammenhängender Webauftritt wirken. Die einheitliche Gestaltung der Hero-Bereiche stellte eine zentrale Herausforderung dar. Überschriften, Produktbilder, Badges und Abstände sollten auf allen Seiten so konsistent wie möglich sein. Es wurde festgestellt, dass selbst kleine Anpassungen bei padding, min-height, Bildgrößen oder Grid-Spalten bereits beeinflussen können, ob eine Seite ruhig und ausgewogen wirkt.
Dabei habe ich gelernt, dass es entscheidend ist, einheitliche CSS-Werte und wiederkehrende Designmuster zu verwenden.  Farben, Abstände, Schatten, Kartenradien und Schriftgrößen sind deshalb über CSS Custom Properties und ähnliche Klassenstrukturen wiederverwendet worden.

Das responsive Verhalten stellte ebenfalls eine Herausforderung dar. Was auf einem Desktop gut aussieht, funktioniert nicht automatisch auf einem Smartphone.  Insbesondere mussten Produktbilder, schwebende Badges und mehrspaltige Kartenbereiche mehrfach überarbeitet werden. Es wurde klar, dass responsive Design weit mehr umfasst, als nur von mehreren Spalten auf eine zu wechseln.  Es müssen auch Schriftgrößen, Innenabstände, Bildhöhen und die Platzierung einzelner Elemente beachtet werden.

Es war für mich entscheidend, dass ich beim Umsetzen von dynamischen Bereichen über visuell klickbare Elemente hinausgehe.  Auch die Technik- und Bewertungsbereiche sollten sinnvoll strukturiert und mit der Tastatur bedienbar gestaltet sein. Dies hat dazu geführt, dass ich mich intensiver mit ARIA-Attributen, der Fokussteuerung und reduzierten Animationen auseinandergesetzt habe.
Eine weitere wichtige Erkenntnis war, dass man Header und Footer über HTMX einbinden kann. Selbst wenn es nur um kleine Seitenelemente geht, so ist die zentrale Verwaltung eine große Erleichterung. Änderungen an Navigation oder Footer müssen nicht auf jeder Seite einzeln nachgetragen werden.

Alles in allem hat mir die Phase 2 die Erkenntnis vermittelt, dass ein schönes Design allein nicht ausreicht, um die Qualität einer Website zu gewährleisten. Wichtige Faktoren sind zudem Konsistenz, Wartbarkeit, sinnvolle Komponenten, responsive Anpassungen sowie eine verständliche Bedienung.


## Herausforderungen und Erkenntnisse aus Phase 1

In der ersten Phase war es entscheidend, die Website als zusammenhängendes Projekt mit einer klaren Informationsarchitektur zu sehen, anstatt sie als Sammlung einzelner HTML-Dateien zu betrachten. Dank meiner bisherigen Erfahrung mit HTML und CSS kannte ich die grundlegende Struktur bereits. Es wurde jedoch offensichtlich, dass eine sorgfältige Planung besonders wichtig ist, wenn mehrere Seiten später einheitlich gestaltet werden sollen. Eine wichtige Einsicht aus dieser Phase war, dass semantisches HTML über die Barrierefreiheit hinausgeht. Eine saubere Strukturierung mit `main`, `section`, `article`, `nav` und sinnvollen Überschriften vereinfacht nicht nur die spätere CSS-Gestaltung, sondern macht den Code auch leichter nachvollziehbar.

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

## Responsive-Design-Strategie

### Breakpoints

| Gerät | Bildschirmbreite |
|---|---|
| Smartphones | ≤ 700px |
| Tablets und kleine Laptops | 701px – 1100px |
| Desktops | ≥ 1101px |

# Barrierefreiheit

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


## Tests und Qualitätssicherung

Während der  Entwicklung und vor der Abgabe wurden folgende Punkte geprüft:

- Darstellung auf Desktop, Tablet und Smartphone
- Navigation und Verlinkung aller Seiten
- Laden von Header und Footer über HTMX
- Lesbarkeit von Texten bei kleinen Bildschirmgrößen
- Verhalten der Grid- und Flexbox-Layouts
- Tastaturbedienung dynamischer Bereiche
- sichtbare Fokuszustände
- Wechsel und Animationen der interaktiven Inhalte
- Erreichbarkeit von Impressum, Datenschutz und Kontakt

Zusätzlich bieten sich folgende Prüfungen an:

- HTML-Prüfung mit dem W3C Markup Validator | https://validator.w3.org/nu/?doc=https%3A%2F%2Fiu-webprogrammierung.github.io%2Fwebprogrammierung-BenediktIU%2Findex.html
- CSS-Prüfung mit einem CSS Validator | https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fiu-webprogrammierung.github.io%2Fwebprogrammierung-BenediktIU%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=de
- Barrierefreiheitsprüfung mit WAVE | https://wave.webaim.org/report#/https://iu-webprogrammierung.github.io/webprogrammierung-BenediktIU/
- Prüfung der mobilen Darstellung über Browser-Entwicklertools
- Lighthouse-Prüfung der HTML Seiten: 
    index.html: https://pagespeed.web.dev/analysis/https-iu-webprogrammierung-github-io-webprogrammierung-BenediktIU-index-html/9pr4ohkzlv?hl=de&form_factor=mobile
    weitere Prüfungen stehen noch aus!!!

## Wiederverwendbare Komponenten

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


## Projektstruktur

```text
.
├── bilder/
│   └── cosori-turbo-tower.PNG
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
├── technik.js
├── bewertung.js
└── README.md


