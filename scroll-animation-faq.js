(() => {
  function initializeFaqScrollAnimations() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animationGroups = [
      {
        selector: ".faq-intro",
        effect: "faq-reveal-left",
        delay: 0
      },
      {
        selector: ".faq-image",
        effect: "faq-reveal-right",
        delay: 120
      },
      {
        selector: ".faq-categories",
        effect: "faq-reveal-up",
        delay: 0
      },
      {
        selector: ".faq-section-header",
        effect: "faq-reveal-up",
        delay: 0
      },
      {
        selector: ".faq-topic",
        effect: "faq-reveal-up",
        stagger: 100
      },
      {
        selector: ".faq-guidance-card, .faq-tip-card",
        effect: "faq-reveal-up",
        stagger: 140
      }
    ];

    const animatedElements = [];

    animationGroups.forEach((group) => {
      const elements = document.querySelectorAll(group.selector);

      elements.forEach((element, index) => {
        element.classList.add(
          "faq-reveal",
          group.effect
        );

        const delay =
          group.delay ?? index * (group.stagger ?? 0);

        element.style.setProperty(
          "--faq-delay",
          `${Math.min(delay, 420)}ms`
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
    initializeFaqScrollAnimations
  );
})();