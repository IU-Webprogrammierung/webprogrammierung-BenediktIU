(() => {
  function initializeScrollAnimations() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animationGroups = [
      {
        selector: ".hero-text",
        effect: "scroll-reveal-left",
        delay: 0
      },
      {
        selector: ".hero-image",
        effect: "scroll-reveal-right",
        delay: 120
      },
      {
        selector: ".fact",
        effect: "scroll-reveal-up",
        stagger: 90
      },
      {
        selector: ".topic-card",
        effect: "scroll-reveal-up",
        stagger: 90
      },
      {
        selector: ".topic-highlight",
        effect: "scroll-reveal-up",
        delay: 120
      }
    ];

    const animatedElements = [];

    animationGroups.forEach((group) => {
      const elements = document.querySelectorAll(group.selector);

      elements.forEach((element, index) => {
        element.classList.add("scroll-reveal", group.effect);

        const delay =
          group.delay ?? index * (group.stagger ?? 0);

        element.style.setProperty(
          "--scroll-delay",
          `${Math.min(delay, 360)}ms`
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
        threshold: 0.14,
        rootMargin: "0px 0px -60px 0px"
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }

  document.addEventListener(
    "DOMContentLoaded",
    initializeScrollAnimations
  );
})();