// Animations ---------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const animationElements = document.querySelectorAll('.animateFade, .animateFromTop, .animateFromBottom');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3,
  });

  animationElements.forEach(el => {
    observer.observe(el);
  });

});