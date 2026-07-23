(() => {
  function initializeReviewScrollAnimations() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animationGroups = [
      {
        selector: ".review-intro",
        effect: "review-reveal-left",
        delay: 0
      },
      {
        selector: ".review-image-panel",
        effect: "review-reveal-right",
        delay: 100
      },
      {
        selector: ".rating-summary",
        effect: "review-reveal-up",
        delay: 180
      },
      {
        selector: ".review-verdict",
        effect: "review-reveal-up",
        delay: 260
      },
      {
        selector: ".review-section-header",
        effect: "review-reveal-up",
        delay: 0
      },
      {
        selector: ".rating-card",
        effect: "review-reveal-up",
        stagger: 90
      },
      {
        selector: ".review-report",
        effect: "review-reveal-up",
        delay: 80
      },
      {
        selector: ".pros-card, .cons-card",
        effect: "review-reveal-up",
        stagger: 140
      }
    ];

    const animatedElements = [];

    animationGroups.forEach((group) => {
      const elements = document.querySelectorAll(group.selector);

      elements.forEach((element, index) => {
        element.classList.add(
          "review-reveal",
          group.effect
        );

        const delay =
          group.delay ?? index * (group.stagger ?? 0);

        element.style.setProperty(
          "--review-delay",
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
    initializeReviewScrollAnimations
  );
})();