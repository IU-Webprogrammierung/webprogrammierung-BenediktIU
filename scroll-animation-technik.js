(() => {
  function initializeTechScrollAnimations() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animationGroups = [
      {
        selector: ".tech-intro",
        effect: "tech-reveal-left",
        delay: 0
      },
      {
        selector: ".tech-image",
        effect: "tech-reveal-right",
        delay: 120
      },
      {
        selector: ".tech-table-card",
        effect: "tech-reveal-up",
        delay: 0
      },
      {
        selector: ".equipment-card",
        effect: "tech-reveal-up",
        delay: 120
      },
      {
        selector: ".zone-section",
        effect: "tech-reveal-up",
        delay: 60
      },
      {
        selector: ".process-header",
        effect: "tech-reveal-up",
        delay: 0
      },
      {
        selector: ".process-card",
        effect: "tech-reveal-up",
        stagger: 100
      }
    ];

    const animatedElements = [];

    animationGroups.forEach((group) => {
      const elements = document.querySelectorAll(group.selector);

      elements.forEach((element, index) => {
        element.classList.add(
          "tech-reveal",
          group.effect
        );

        const delay =
          group.delay ?? index * (group.stagger ?? 0);

        element.style.setProperty(
          "--tech-delay",
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
    initializeTechScrollAnimations
  );
})();