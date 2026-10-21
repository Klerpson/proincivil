/* PROINCIVIL — JS mínimo. Solo comentarios de bloque: layout compress une líneas. */
(function () {
  "use strict";

  /* Selecciona sin desplazar el foco; en móvil conserva además la fila pulsada. */
  document.querySelectorAll(".selector__galeria").forEach(function (galeria) {
    galeria.addEventListener("click", function (ev) {
      var fila = ev.target.closest(".selector__fila");
      if (!fila) { return; }
      var opcion = document.getElementById(fila.htmlFor);
      var top = fila.getBoundingClientRect().top;
      var y = window.scrollY;
      ev.preventDefault();
      opcion.checked = true;
      opcion.focus({ preventScroll: true });
      if (window.matchMedia("(max-width: 600px)").matches) {
        window.scrollBy({ top: fila.getBoundingClientRect().top - top, behavior: "instant" });
      } else {
        window.scrollTo({ top: y, behavior: "instant" });
      }
      opcion.dispatchEvent(new Event("change", { bubbles: true }));
    });
  });

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
  var nav = document.querySelector(".nav");
  if (document.body.dataset.layout === "home" && nav) {
    var marcar = function () {
      nav.classList.toggle("nav--solido", window.scrollY > 60);
    };
    marcar();
    window.addEventListener("scroll", marcar, { passive: true });
  }

  /* La barra se oculta al bajar y reaparece al subir, en todas las páginas; nunca con el menú móvil abierto. */
  if (nav) {
    var navToggle = document.getElementById("nav-toggle");
    var ultimoY = window.scrollY;
    var ocultar = function () {
      var y = window.scrollY;
      if (navToggle && navToggle.checked) { ultimoY = y; return; }
      if (y > ultimoY && y > nav.offsetHeight) { nav.classList.add("nav--oculto"); }
      else if (y < ultimoY) { nav.classList.remove("nav--oculto"); }
      ultimoY = y;
    };
    window.addEventListener("scroll", ocultar, { passive: true });
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
