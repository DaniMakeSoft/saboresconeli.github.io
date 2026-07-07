// =========================================================
// Sabores con Eli — script principal
// Pestañas del menú + animaciones de scroll reveal
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---------- Pestañas del menú ----------
  var tabButtons = document.querySelectorAll('.tab-btn');
  var panels = document.querySelectorAll('.menu-panel');

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-tab');

      tabButtons.forEach(function (b) { b.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });

      btn.classList.add('active');
      var panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  // ---------- Scroll reveal ----------
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback para navegadores sin soporte de IntersectionObserver
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

});
