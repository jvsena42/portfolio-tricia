/* ===========================
   Scroll-triggered animations
   using IntersectionObserver
   =========================== */
document.addEventListener('DOMContentLoaded', () => {
  const animElements = document.querySelectorAll(
    '.anim-hidden, .anim-slide-left, .anim-slide-right, .anim-scale'
  );

  if (!animElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('anim-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  animElements.forEach((el) => observer.observe(el));
});
