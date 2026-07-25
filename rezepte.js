(() => {
  const recipes = {
    haehnchenstreifen: {
      category: "Hauptgericht",
      title: "Knusprige Hähnchenstreifen",
      lead: "Saftige Hähnchenstreifen mit würziger Panade – ideal mit Kartoffelecken, Salat oder einem Dip.",
      time: "20 Minuten",
      temperature: "190 °C",
      servings: "2–3 Portionen",
      difficulty: "Einfach",
      ingredients: [
        "400 g Hähnchenbrust",
        "2 EL Paniermehl",
        "1 EL Speisestärke",
        "1 EL Öl",
        "1 TL Paprikapulver",
        "½ TL Knoblauchpulver",
        "Salz und Pfeffer"
      ],
      steps: [
        "Hähnchenbrust trocken tupfen und in gleichmäßige Streifen schneiden.",
        "Paniermehl, Speisestärke und Gewürze in einer Schüssel vermischen.",
        "Hähnchen mit Öl vermengen und anschließend in der Panade wenden.",
        "Streifen mit etwas Abstand in den Korb legen und 12 bis 15 Minuten garen.",
        "Nach der Hälfte der Zeit wenden und vor dem Servieren prüfen, ob das Fleisch vollständig durchgegart ist."
      ],
      tip: "Nicht zu viele Streifen übereinanderlegen. Bei größeren Mengen lieber in zwei Durchgängen arbeiten."
    },

    "gefuellte-paprika": {
      category: "Hauptgericht",
      title: "Gefüllte Paprika",
      lead: "Herzhafte Paprikahälften mit einer saftigen Reis-Hackfleisch-Füllung und geschmolzenem Käse.",
      time: "30 Minuten",
      temperature: "180 °C",
      servings: "2 Portionen",
      difficulty: "Mittel",
      ingredients: [
        "2 große Paprikaschoten",
        "250 g Hackfleisch",
        "120 g vorgekochter Reis",
        "2 EL passierte Tomaten",
        "½ kleine Zwiebel",
        "50 g geriebener Käse",
        "1 TL Paprikapulver",
        "Salz und Pfeffer"
      ],
      steps: [
        "Paprika längs halbieren, Kerne entfernen und die Hälften leicht salzen.",
        "Zwiebel fein würfeln und mit Hackfleisch, Reis, Tomaten und Gewürzen vermengen.",
        "Füllung in die Paprikahälften geben und leicht andrücken.",
        "Paprika 16 bis 20 Minuten garen, bis die Füllung vollständig durchgegart ist.",
        "Käse in den letzten 3 bis 4 Minuten darüberstreuen und schmelzen lassen."
      ],
      tip: "Sehr große Paprikahälften können zunächst 4 Minuten ohne Füllung vorgegart werden."
    },

    "gemuese-mix": {
      category: "Hauptgericht",
      title: "Bunter Gemüse-Mix",
      lead: "Eine schnelle Mischung aus Zucchini, Paprika und Brokkoli – als Beilage oder leichte Mahlzeit.",
      time: "20 Minuten",
      temperature: "185 °C",
      servings: "2–3 Portionen",
      difficulty: "Einfach",
      ingredients: [
        "1 kleine Zucchini",
        "1 Paprikaschote",
        "200 g Brokkoliröschen",
        "1 kleine rote Zwiebel",
        "1 EL Olivenöl",
        "1 TL italienische Kräuter",
        "Salz und Pfeffer"
      ],
      steps: [
        "Gemüse waschen und in ähnlich große Stücke schneiden.",
        "Alles mit Öl, Kräutern, Salz und Pfeffer vermengen.",
        "Gemüse locker im Korb verteilen.",
        "14 bis 18 Minuten garen und nach etwa 8 Minuten kräftig durchschütteln.",
        "Je nach gewünschter Bräunung noch 2 Minuten weitergaren."
      ],
      tip: "Brokkoli wird weniger trocken, wenn du ihn vor dem Würzen kurz mit etwas Wasser benetzt."
    },

    lachsfilet: {
      category: "Hauptgericht",
      title: "Zitronen-Lachsfilet",
      lead: "Zartes Lachsfilet mit einer frischen Zitronen-Kräuter-Würzung und kurzer Garzeit.",
      time: "15 Minuten",
      temperature: "180 °C",
      servings: "2 Portionen",
      difficulty: "Einfach",
      ingredients: [
        "2 Lachsfilets",
        "1 TL Olivenöl",
        "½ Bio-Zitrone",
        "1 TL getrocknete Kräuter",
        "Salz und Pfeffer"
      ],
      steps: [
        "Lachs trocken tupfen und auf mögliche Gräten prüfen.",
        "Mit Öl einreiben und mit Salz, Pfeffer, Kräutern und Zitronenabrieb würzen.",
        "Filets mit der Hautseite nach unten in den Korb legen.",
        "Je nach Dicke 9 bis 12 Minuten garen.",
        "Vor dem Servieren kurz ruhen lassen und mit Zitronensaft beträufeln."
      ],
      tip: "Kontrolliere dünne Filets bereits nach 8 Minuten, damit der Fisch saftig bleibt."
    },

    pommes: {
      category: "Snack",
      title: "Air-Fryer-Pommes",
      lead: "Hausgemachte Kartoffel-Pommes mit knuspriger Oberfläche und weichem Inneren.",
      time: "30 Minuten",
      temperature: "190 °C",
      servings: "2–3 Portionen",
      difficulty: "Einfach",
      ingredients: [
        "700 g festkochende Kartoffeln",
        "1 EL neutrales Öl",
        "1 TL Speisestärke",
        "Salz",
        "Paprikapulver nach Geschmack"
      ],
      steps: [
        "Kartoffeln schälen oder gründlich waschen und in gleichmäßige Stifte schneiden.",
        "Stifte 15 Minuten in kaltes Wasser legen, danach sehr gründlich trocknen.",
        "Mit Öl, Speisestärke und Paprikapulver vermengen.",
        "20 bis 25 Minuten garen und den Korb alle 6 bis 8 Minuten schütteln.",
        "Erst nach dem Garen salzen."
      ],
      tip: "Trockene Kartoffelstifte und ausreichend Platz zwischen den Pommes sorgen für ein knusprigeres Ergebnis."
    },

    "mozzarella-sticks": {
      category: "Snack",
      title: "Mozzarella-Sticks",
      lead: "Ein schneller Snack mit knuspriger Panade und einem weichen Käsekern.",
      time: "10 Minuten",
      temperature: "180 °C",
      servings: "2 Portionen",
      difficulty: "Einfach",
      ingredients: [
        "8 tiefgekühlte Mozzarella-Sticks",
        "Optional: Tomaten- oder Kräuterdip"
      ],
      steps: [
        "Mozzarella-Sticks bis unmittelbar vor der Zubereitung tiefgekühlt lassen.",
        "Sticks mit Abstand in den kalten oder kurz vorgeheizten Korb legen.",
        "7 bis 9 Minuten garen.",
        "Nach etwa 6 Minuten kontrollieren, damit kein Käse aus der Panade läuft.",
        "Vor dem Essen 1 bis 2 Minuten abkühlen lassen."
      ],
      tip: "Die Sticks nicht auftauen. Tiefgekühlt bleibt die Panade eher geschlossen."
    },

    kartoffelecken: {
      category: "Snack",
      title: "Knusprige Kartoffelecken",
      lead: "Würzige Kartoffelspalten mit Paprika, Knoblauch und Rosmarin.",
      time: "30 Minuten",
      temperature: "195 °C",
      servings: "3 Portionen",
      difficulty: "Einfach",
      ingredients: [
        "800 g Kartoffeln",
        "1½ EL Öl",
        "1 TL Paprikapulver",
        "½ TL Knoblauchpulver",
        "1 TL Rosmarin",
        "Salz und Pfeffer"
      ],
      steps: [
        "Kartoffeln gründlich waschen und in gleich große Spalten schneiden.",
        "Spalten gut trocknen und mit Öl sowie den Gewürzen vermischen.",
        "Locker in einer Garzone verteilen.",
        "20 bis 25 Minuten garen.",
        "Während der Garzeit mindestens zweimal wenden oder schütteln."
      ],
      tip: "Für besonders knusprige Ecken 1 TL Speisestärke zu den Gewürzen geben."
    },

    falafel: {
      category: "Snack",
      title: "Kräuter-Falafel",
      lead: "Würzige Kichererbsenbällchen mit Petersilie, Zwiebel und Kreuzkümmel.",
      time: "25 Minuten",
      temperature: "190 °C",
      servings: "3 Portionen",
      difficulty: "Mittel",
      ingredients: [
        "1 Dose Kichererbsen, gut abgetropft",
        "½ kleine Zwiebel",
        "1 Knoblauchzehe",
        "2 EL gehackte Petersilie",
        "1 TL Kreuzkümmel",
        "2 EL Mehl",
        "1 TL Öl",
        "Salz und Pfeffer"
      ],
      steps: [
        "Kichererbsen sehr gut abtropfen lassen und trocken tupfen.",
        "Mit Zwiebel, Knoblauch, Petersilie und Gewürzen grob zerkleinern.",
        "Mehl einarbeiten und aus der Masse kleine feste Bällchen formen.",
        "Falafel leicht mit Öl bestreichen.",
        "12 bis 15 Minuten garen und nach der Hälfte der Zeit vorsichtig wenden."
      ],
      tip: "Ist die Masse zu weich, noch etwas Mehl hinzufügen und 10 Minuten kaltstellen."
    },

    "apfel-zimt": {
      category: "Dessert",
      title: "Apfel-Zimt-Stücke",
      lead: "Warme Apfelstücke mit Zimt, etwas Zucker und einer leicht karamellisierten Oberfläche.",
      time: "15 Minuten",
      temperature: "180 °C",
      servings: "2 Portionen",
      difficulty: "Einfach",
      ingredients: [
        "2 feste Äpfel",
        "1 TL geschmolzene Butter",
        "1 TL Zucker oder Honig",
        "½ TL Zimt",
        "Optional: gehackte Nüsse"
      ],
      steps: [
        "Äpfel entkernen und in mundgerechte Stücke schneiden.",
        "Mit Butter, Zucker und Zimt vermengen.",
        "In eine kleine hitzebeständige Form geben.",
        "8 bis 10 Minuten garen und einmal umrühren.",
        "Warm servieren."
      ],
      tip: "Dazu passen Naturjoghurt, Vanillequark oder eine kleine Kugel Eis."
    },

    "mini-schokokuchen": {
      category: "Dessert",
      title: "Mini-Schokokuchen",
      lead: "Kleine Schokoladenküchlein mit weichem Kern – direkt in hitzebeständigen Förmchen gebacken.",
      time: "18 Minuten",
      temperature: "160 °C",
      servings: "2 Küchlein",
      difficulty: "Mittel",
      ingredients: [
        "50 g Zartbitterschokolade",
        "40 g Butter",
        "1 Ei",
        "30 g Zucker",
        "25 g Mehl",
        "1 Prise Salz",
        "Etwas Butter für die Förmchen"
      ],
      steps: [
        "Schokolade und Butter vorsichtig schmelzen und etwas abkühlen lassen.",
        "Ei und Zucker verrühren, anschließend die Schokoladenmischung unterheben.",
        "Mehl und Salz kurz einarbeiten.",
        "Zwei gefettete, hitzebeständige Förmchen zu etwa zwei Dritteln füllen.",
        "10 bis 13 Minuten backen und vor dem Stürzen 2 Minuten ruhen lassen."
      ],
      tip: "Für einen weicheren Kern früh kontrollieren. Die genaue Zeit hängt stark von den Förmchen ab."
    },

    "bananen-muffins": {
      category: "Dessert",
      title: "Bananen-Hafer-Muffins",
      lead: "Saftige Mini-Muffins mit Banane, Haferflocken und einer feinen Zimtnote.",
      time: "20 Minuten",
      temperature: "160 °C",
      servings: "6 Mini-Muffins",
      difficulty: "Einfach",
      ingredients: [
        "1 reife Banane",
        "1 Ei",
        "80 g feine Haferflocken",
        "½ TL Backpulver",
        "½ TL Zimt",
        "1 EL Honig oder Ahornsirup",
        "Optional: 1 EL Schokotropfen"
      ],
      steps: [
        "Banane mit einer Gabel fein zerdrücken.",
        "Ei und Honig unterrühren.",
        "Haferflocken, Backpulver und Zimt einarbeiten.",
        "Teig in kleine Silikonförmchen füllen.",
        "12 bis 15 Minuten backen und anschließend kurz abkühlen lassen."
      ],
      tip: "Die Förmchen nur zu etwa drei Vierteln füllen, damit der Teig nicht überläuft."
    },

    zimtschnecken: {
      category: "Dessert",
      title: "Blätterteig-Zimtschnecken",
      lead: "Schnelle Zimtschnecken aus Blätterteig mit knusprigen Rändern und saftiger Zimtfüllung.",
      time: "17 Minuten",
      temperature: "170 °C",
      servings: "8 Stück",
      difficulty: "Einfach",
      ingredients: [
        "1 Rolle Blätterteig",
        "20 g weiche Butter",
        "2 EL brauner Zucker",
        "1 TL Zimt",
        "Optional: 2 EL Puderzucker für den Guss"
      ],
      steps: [
        "Blätterteig ausrollen und dünn mit Butter bestreichen.",
        "Zucker und Zimt mischen und gleichmäßig darüberstreuen.",
        "Teig von der langen Seite aufrollen und in 8 Scheiben schneiden.",
        "Schnecken mit Abstand auf Backpapier oder eine passende Unterlage legen.",
        "9 bis 12 Minuten goldbraun backen und nach Wunsch glasieren."
      ],
      tip: "Die Teigrolle vor dem Schneiden 10 Minuten kühlen. So behalten die Schnecken besser ihre Form."
    }
  };

  function initializeRecipes() {
    const cards = [...document.querySelectorAll(".recipe-card[data-recipe-id]")];
    const duoButtons = [...document.querySelectorAll("[data-open-recipe]")];
    const filterButtons = [...document.querySelectorAll("[data-filter]")];
    const resultCount = document.querySelector("#recipe-result-count");
    const dialog = document.querySelector("#recipe-dialog");

    if (!cards.length || !dialog) {
      return;
    }

    const closeButton = dialog.querySelector(".recipe-dialog-close");
    const category = dialog.querySelector("#recipe-dialog-category");
    const title = dialog.querySelector("#recipe-dialog-title");
    const lead = dialog.querySelector("#recipe-dialog-lead");
    const time = dialog.querySelector("#recipe-dialog-time");
    const temperature = dialog.querySelector("#recipe-dialog-temperature");
    const servings = dialog.querySelector("#recipe-dialog-servings");
    const difficulty = dialog.querySelector("#recipe-dialog-difficulty");
    const ingredients = dialog.querySelector("#recipe-dialog-ingredients");
    const steps = dialog.querySelector("#recipe-dialog-steps");
    const tip = dialog.querySelector("#recipe-dialog-tip");

    let lastFocusedCard = null;

    function fillList(listElement, entries) {
      listElement.replaceChildren();

      entries.forEach((entry) => {
        const item = document.createElement("li");
        item.textContent = entry;
        listElement.append(item);
      });
    }

    function openRecipe(card) {
      const recipeId = card.dataset.recipeId || card.dataset.openRecipe;
      const recipe = recipes[recipeId];

      if (!recipe) {
        return;
      }

      category.textContent = recipe.category;
      title.textContent = recipe.title;
      lead.textContent = recipe.lead;
      time.textContent = recipe.time;
      temperature.textContent = recipe.temperature;
      servings.textContent = recipe.servings;
      difficulty.textContent = recipe.difficulty;
      tip.textContent = recipe.tip;

      fillList(ingredients, recipe.ingredients);
      fillList(steps, recipe.steps);

      lastFocusedCard = card;

      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }

      closeButton?.focus();
    }

    function closeRecipe() {
      if (typeof dialog.close === "function") {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
      }
    }

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        openRecipe(card);
      });

      card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }

        event.preventDefault();
        openRecipe(card);
      });
    });

    duoButtons.forEach((button) => {
      button.addEventListener("click", () => {
          openRecipe(button);
      });
    });

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;
        let visibleRecipes = 0;

        filterButtons.forEach((currentButton) => {
          const isActive = currentButton === button;

          currentButton.classList.toggle(
            "filter-button-active",
            isActive
          );

          currentButton.setAttribute(
            "aria-pressed",
            String(isActive)
          );
        });

        cards.forEach((card) => {
          const isVisible =
            selectedFilter === "all" ||
            card.dataset.category === selectedFilter;

          card.hidden = !isVisible;

          if (isVisible) {
            visibleRecipes += 1;
          }
        });

        if (resultCount) {
          resultCount.textContent =
            visibleRecipes === 1
              ? "1 Rezept angezeigt"
              : `${visibleRecipes} Rezepte angezeigt`;
        }
      });
    });

    closeButton?.addEventListener("click", closeRecipe);

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        closeRecipe();
      }
    });

    dialog.addEventListener("close", () => {
      lastFocusedCard?.focus();
    });
  }

  document.addEventListener("DOMContentLoaded", initializeRecipes);
})();