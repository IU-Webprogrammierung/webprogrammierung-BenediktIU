document.addEventListener("DOMContentLoaded", () => {
  const tabs = [...document.querySelectorAll(".tech-tab")];
  const detailPanel = document.querySelector("#tech-detail");
  const highlightPanel = document.querySelector(".zone-highlight");

  const kicker = document.querySelector("#tech-detail-kicker");
  const title = document.querySelector("#zone-title");
  const detailText = document.querySelector("#tech-detail-text");

  const highlightTitle = document.querySelector("#tech-highlight-title");
  const highlightText = document.querySelector("#tech-highlight-text");

  if (
    !tabs.length ||
    !detailPanel ||
    !highlightPanel ||
    !kicker ||
    !title ||
    !detailText ||
    !highlightTitle ||
    !highlightText
  ) {
    return;
  }

  const topics = {
    garzonen: {
      kicker: "Flexibilität",
      title: "Zwei Garzonen für mehr Möglichkeiten",
      text:
        "Durch die zwei getrennten Garbereiche können unterschiedliche Speisen parallel zubereitet werden. So lassen sich zum Beispiel Beilage und Hauptgericht zeitgleich planen.",
      highlightTitle: "Warum das praktisch ist",
      highlightText:
        "Die getrennten Ebenen sparen Zeit und machen den Cosori besonders interessant, wenn regelmäßig mehrere Bestandteile einer Mahlzeit gleichzeitig zubereitet werden sollen."
    },

    programme: {
      kicker: "Temperatur & Programme",
      title: "Passende Einstellungen für unterschiedliche Gerichte",
      text:
        "Über Temperatur, Zeit und verfügbare Programme lässt sich die Zubereitung an unterschiedliche Lebensmittel anpassen. Das erleichtert den Einstieg bei häufig genutzten Gerichten.",
      highlightTitle: "Schneller zur passenden Einstellung",
      highlightText:
        "Programme können eine praktische Orientierung geben. Für individuelle Ergebnisse lassen sich Zeit und Temperatur bei Bedarf zusätzlich anpassen."
    },

    bedienung: {
      kicker: "Bedienung",
      title: "Übersichtliche Steuerung über das Display",
      text:
        "Die Bedienung erfolgt über das Display und die Programmauswahl. Dort können Garzeit und Temperatur eingestellt sowie einzelne Funktionen ausgewählt werden.",
      highlightTitle: "Einfach im Alltag nutzbar",
      highlightText:
        "Eine übersichtliche Bedienung ist besonders hilfreich, wenn das Gerät regelmäßig für unterschiedliche Gerichte und Mengen eingesetzt wird."
    },

    lieferumfang: {
      kicker: "Lieferumfang",
      title: "Alles Wichtige für den Einstieg",
      text:
        "Zum Gerät gehören die für die Zubereitung vorgesehenen Garbereiche und Einsätze. Der genaue Lieferumfang kann sich je nach Modellvariante oder Händler unterscheiden.",
      highlightTitle: "Vor dem Kauf kurz prüfen",
      highlightText:
        "Ein Blick auf die Hersteller- oder Händlerangaben zeigt, welches Zubehör enthalten ist und ob zusätzliche Teile für den eigenen Alltag sinnvoll sind."
    }
  };

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const animationDuration = reduceMotion ? 0 : 180;
  let animationTimer;

  function updateTopic(activeTab) {
    const topic = topics[activeTab.dataset.topic];

    if (!topic) {
      return;
    }

    tabs.forEach((tab) => {
      const isActive = tab === activeTab;

      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });

    detailPanel.setAttribute("aria-labelledby", activeTab.id);

    window.clearTimeout(animationTimer);

    detailPanel.classList.add("is-changing");
    highlightPanel.classList.add("is-changing");

    animationTimer = window.setTimeout(() => {
      kicker.textContent = topic.kicker;
      title.textContent = topic.title;
      detailText.textContent = topic.text;

      highlightTitle.textContent = topic.highlightTitle;
      highlightText.textContent = topic.highlightText;

      detailPanel.classList.remove("is-changing");
      highlightPanel.classList.remove("is-changing");
    }, animationDuration);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      updateTopic(tab);
    });
  });

  document
    .querySelector(".tech-tab-list")
    .addEventListener("keydown", (event) => {
      const currentIndex = tabs.indexOf(document.activeElement);

      if (currentIndex === -1) {
        return;
      }

      let nextIndex;

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        nextIndex = (currentIndex + 1) % tabs.length;
      }

      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      }

      if (event.key === "Home") {
        nextIndex = 0;
      }

      if (event.key === "End") {
        nextIndex = tabs.length - 1;
      }

      if (nextIndex === undefined) {
        return;
      }

      event.preventDefault();

      tabs[nextIndex].focus();
      updateTopic(tabs[nextIndex]);
    });
});