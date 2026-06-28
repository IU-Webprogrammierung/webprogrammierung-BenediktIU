document.addEventListener("DOMContentLoaded", () => {
  const tabs = [...document.querySelectorAll(".review-insight-tab")];
  const tabList = document.querySelector(".review-insight-tabs");
  const panel = document.querySelector("#review-insight-panel");

  const headline = document.querySelector("#review-insight-headline");
  const text = document.querySelector("#review-insight-text");
  const fact = document.querySelector("#review-insight-fact");

  if (!tabs.length || !tabList || !panel || !headline || !text || !fact) {
    return;
  }

  const insights = {
    leistung: {
      headline: "Viel Leistung für größere Portionen",
      text:
        "Der Cosori Turbo Tower bietet viel Platz und ist besonders praktisch, wenn mehrere Bestandteile einer Mahlzeit gleichzeitig zubereitet werden sollen.",
      fact: "2600 Watt Leistung"
    },

    bedienung: {
      headline: "Übersichtlich und schnell eingestellt",
      text:
        "Über das Display lassen sich Zeit und Temperatur unkompliziert einstellen. Gerade bei häufig genutzten Gerichten ist die Bedienung schnell nachvollziehbar.",
      fact: "Display und Programme"
    },

    reinigung: {
      headline: "Angenehm unkompliziert im Alltag",
      text:
        "Nach dem Abkühlen lassen sich Rückstände meist einfach mit warmem Wasser, etwas Spülmittel und einem weichen Schwamm entfernen.",
      fact: "Keramikbeschichtung"
    }
  };

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const animationDuration = reduceMotion ? 0 : 180;
  let animationTimer;

  function updateInsight(activeTab) {
    const selectedInsight = insights[activeTab.dataset.insight];

    if (!selectedInsight) {
      return;
    }

    tabs.forEach((tab) => {
      const isActive = tab === activeTab;

      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });

    panel.setAttribute("aria-labelledby", activeTab.id);

    window.clearTimeout(animationTimer);
    panel.classList.add("is-changing");

    animationTimer = window.setTimeout(() => {
      headline.textContent = selectedInsight.headline;
      text.textContent = selectedInsight.text;
      fact.textContent = selectedInsight.fact;

      panel.classList.remove("is-changing");
    }, animationDuration);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      updateInsight(tab);
    });
  });

  tabList.addEventListener("keydown", (event) => {
    const currentIndex = tabs.indexOf(document.activeElement);

    if (currentIndex === -1) {
      return;
    }

    let nextIndex;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % tabs.length;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
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
    updateInsight(tabs[nextIndex]);
  });
});