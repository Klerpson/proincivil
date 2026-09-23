/* PROINCIVIL — JS mínimo. Solo comentarios de bloque: layout compress une líneas. */
(function () {
  "use strict";

  /* Clics a WhatsApp → evento de conversión en GA4 (si existe gtag) */
  document.addEventListener("click", function (ev) {
    var a = ev.target.closest("a.lead-whatsapp");
    if (!a) { return; }
    if (typeof window.gtag === "function") {
      window.gtag("event", "whatsapp_click", {
        location: a.getAttribute("data-location") || "sin-ubicacion",
        page_path: window.location.pathname
      });
    }
  });

  /* En la home la barra es transparente sobre el héroe y se vuelve opaca al bajar */
  if (document.body.dataset.layout === "home") {
    var nav = document.querySelector(".nav");
    var marcar = function () {
      if (nav) { nav.classList.toggle("nav--solido", window.scrollY > 60); }
    };
    marcar();
    window.addEventListener("scroll", marcar, { passive: true });
  }

  /* Cierra el menú móvil al navegar por anclas */
  var toggle = document.getElementById("nav-toggle");
  if (toggle) {
    document.querySelectorAll(".nav__panel a, .nav__enlace[href]").forEach(function (link) {
      link.addEventListener("click", function () { toggle.checked = false; });
    });
  }

  /* Un solo FAQ abierto a la vez dentro de cada lista */
  document.querySelectorAll(".faqs__lista").forEach(function (lista) {
    lista.addEventListener("toggle", function (ev) {
      var d = ev.target;
      if (d.tagName !== "DETAILS" || !d.open) { return; }
      lista.querySelectorAll("details[open]").forEach(function (o) { if (o !== d) { o.open = false; } });
    }, true);
  });

  /* Enlaces externos en pestaña nueva */
  document.querySelectorAll('a[href^="http"]:not([href*="proincivil.com"])').forEach(function (a) {
    if (!a.target) { a.target = "_blank"; a.rel = (a.rel ? a.rel + " " : "") + "noopener"; }
  });
})();
