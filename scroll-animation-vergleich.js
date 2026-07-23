(() => {
  function initializeCompareScrollAnimations() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animationGroups = [
      {
        selector: ".compare-intro",
        effect: "compare-reveal-left",
        delay: 0
      },
      {
        selector: ".compare-image",
        effect: "compare-reveal-right",
        delay: 120
      },
      {
        selector: ".compare-section-header",
        effect: "compare-reveal-up",
        delay: 0
      },
      {
        selector: ".model-card",
        effect: "compare-reveal-up",
        stagger: 90
      },
      {
        selector: ".comparison-table-section",
        effect: "compare-reveal-up",
        delay: 80
      },
      {
        selector: ".compare-info-card, .compare-conclusion-card",
        effect: "compare-reveal-up",
        stagger: 140
      }
    ];

    const animatedElements = [];

    animationGroups.forEach((group) => {
      const elements = document.querySelectorAll(group.selector);

      elements.forEach((element, index) => {
        element.classList.add(
          "compare-reveal",
          group.effect
        );

        const delay =
          group.delay ?? index * (group.stagger ?? 0);

        element.style.setProperty(
          "--compare-delay",
          `${Math.min(delay, 400)}ms`
        );

        animatedElements.push(element);
      });
    });

    if (
      reduceMotion ||
      !("IntersectionObserver" in window)
    ) {
      animatedElements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px"
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }

  document.addEventListener(
    "DOMContentLoaded",
    initializeCompareScrollAnimations
  );
})();