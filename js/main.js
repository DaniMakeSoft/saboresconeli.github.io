// =========================================================
// Sabores con Eli — script principal
// Menú hamburguesa + pestañas del menú de productos + scroll reveal
// =========================================================
document.addEventListener('DOMContentLoaded', function () {

  // ---------- Menú hamburguesa ----------
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('menu');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      var isActive = nav.classList.toggle('active');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isActive);
    });

    // Cierra el menú al pulsar un enlace (útil al navegar entre páginas)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Pestañas del menú de productos ----------
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
