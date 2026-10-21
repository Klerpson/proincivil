// PROINCIVIL — motion.js: m-count. El número real ya está en el HTML (SEO/accesibilidad);
// este script solo lo cuenta visualmente desde 0 al entrar en pantalla.
(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { return; }
  if (!("IntersectionObserver" in window)) { return; }

  var nodos = document.querySelectorAll(".cifras__numero, .cta-final__datos strong");
  if (!nodos.length) { return; }

  var animar = function (el) {
    var texto = el.textContent;
    var digitos = texto.replace(/[^0-9]/g, "");
    if (!digitos) { return; }
    var meta = parseInt(digitos, 10);
    var duracion = 900;
    var inicio = null;

    var paso = function (ahora) {
      if (inicio === null) { inicio = ahora; }
      var avance = Math.min((ahora - inicio) / duracion, 1);
      var valor = Math.floor(avance * meta);
      el.textContent = texto.replace(digitos, valor.toLocaleString("es-CO"));
      if (avance < 1) {
        window.requestAnimationFrame(paso);
      } else {
        el.textContent = texto;
      }
    };
    window.requestAnimationFrame(paso);
  };

  var io = new IntersectionObserver(function (entradas, observer) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) { return; }
      animar(entrada.target);
      observer.unobserve(entrada.target);
    });
  }, { threshold: 0.4 });

  nodos.forEach(function (el) { io.observe(el); });
})();
