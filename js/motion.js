/* m-count: cuenta visual de las cifras al entrar en pantalla. El número real ya está en el HTML
   (SEO, accesibilidad y sin JS); esto solo lo recorre desde 0. Respeta prefers-reduced-motion. */
(function () {
  var nodos = document.querySelectorAll('.m-count');
  if (!nodos.length || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function partes(texto) {
    var m = texto.match(/^([^\d]*)([\d.]+)(.*)$/);
    if (!m) return null;
    return { antes: m[1], valor: parseInt(m[2].replace(/\./g, ''), 10), despues: m[3] };
  }
  function formato(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  function contar(nodo) {
    var p = partes(nodo.textContent.trim());
    if (!p || !p.valor) return;
    var inicio = null;
    var duracion = 1200;
    function paso(t) {
      if (inicio === null) inicio = t;
      var k = Math.min((t - inicio) / duracion, 1);
      var suave = 1 - Math.pow(1 - k, 3);
      nodo.textContent = p.antes + formato(Math.round(p.valor * suave)) + p.despues;
      if (k < 1) window.requestAnimationFrame(paso);
    }
    window.requestAnimationFrame(paso);
  }

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) {
        observador.unobserve(e.target);
        contar(e.target);
      }
    });
  }, { threshold: 0.6 });
  nodos.forEach(function (n) { observador.observe(n); });
})();

/* Títulos palabra por palabra y botón magnético. El texto queda en el HTML: solo se envuelve cada
   palabra en <span> (los lectores de pantalla y los buscadores siguen leyendo la frase completa). */
(function () {
  var reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducido) return;

  if (window.CSS && CSS.supports('animation-timeline: view()')) {
    var titulos = document.querySelectorAll('.encabezado__titulo, .zoom__titulo, .panel__titulo, .cierre__titulo');
    titulos.forEach(function (h) {
      var i = 0;
      var nodos = [];
      var recorrer = document.createTreeWalker(h, NodeFilter.SHOW_TEXT);
      while (recorrer.nextNode()) nodos.push(recorrer.currentNode);
      nodos.forEach(function (t) {
        var partes = t.textContent.split(/([ \t\n\r]+)/);
        var frag = document.createDocumentFragment();
        partes.forEach(function (p) {
          if (!p) return;
          if (/^[ \t\n\r]+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
          var caja = document.createElement('span');
          caja.className = 'palabra';
          var dentro = document.createElement('span');
          dentro.className = 'palabra__interior';
          dentro.style.setProperty('--i', i++);
          dentro.textContent = p;
          caja.appendChild(dentro);
          frag.appendChild(caja);
        });
        t.parentNode.replaceChild(frag, t);
      });
      h.classList.add('dividido');
    });
  }

  if (!window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll('.boton:not(.boton--contorno)').forEach(function (b) {
    b.addEventListener('pointermove', function (e) {
      var r = b.getBoundingClientRect();
      var x = e.clientX - r.left;
      var y = e.clientY - r.top;
      b.style.setProperty('--tx', ((x - r.width / 2) * 0.22).toFixed(1) + 'px');
      b.style.setProperty('--ty', ((y - r.height / 2) * 0.35).toFixed(1) + 'px');
      b.style.setProperty('--bx', x.toFixed(0) + 'px');
      b.style.setProperty('--by', y.toFixed(0) + 'px');
    });
    b.addEventListener('pointerleave', function () {
      b.style.setProperty('--tx', '0px');
      b.style.setProperty('--ty', '0px');
    });
  });
})();

/* Inclinación 3D según el cursor: retratos del equipo y piezas .inclinable (solo puntero fino y sin
   movimiento reducido). */
(function () {
  if (!window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
  document.querySelectorAll('.persona__foto, .inclinable').forEach(function (f) {
    f.addEventListener('pointermove', function (e) {
      var r = f.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      f.style.setProperty('--ry', (x * 14).toFixed(2) + 'deg');
      f.style.setProperty('--rx', (y * -14).toFixed(2) + 'deg');
    });
    f.addEventListener('pointerleave', function () {
      f.style.setProperty('--rx', '0deg');
      f.style.setProperty('--ry', '0deg');
    });
  });
})();

/* Mapa de cobertura: la ciudad bajo el puntero, con foco o (en escritorio) en el centro de la pantalla
   se enciende en el plano. Sin JS la lista y el plano se ven completos. */
(function () {
  var mapas = document.querySelectorAll('.mapa:not(.mapa--mini)');
  if (!mapas.length) return;
  var escritorio = window.matchMedia('(min-width: 60em)');
  mapas.forEach(function (mapa) {
    var ciudades = mapa.querySelectorAll('.mapa__ciudad');
    var puntos = mapa.querySelectorAll('.mapa__punto');
    function activar(n) {
      ciudades.forEach(function (c) { c.classList.toggle('mapa__ciudad--activa', c.getAttribute('data-ciudad') === n); });
      puntos.forEach(function (p) { p.classList.toggle('mapa__punto--activo', p.getAttribute('data-ciudad') === n); });
    }
    activar('1');
    ciudades.forEach(function (c) {
      var n = c.getAttribute('data-ciudad');
      c.addEventListener('pointerenter', function () { activar(n); });
      c.addEventListener('focusin', function () { activar(n); });
    });
    if (!('IntersectionObserver' in window) || !escritorio.matches) return;
    mapa.classList.add('mapa--vivo');
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) { if (e.isIntersecting) activar(e.target.getAttribute('data-ciudad')); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    ciudades.forEach(function (c) { observador.observe(c); });
  });
})();

/* Casos: en cada escena .casos marca el caso que ocupa el centro de la pantalla y muestra su foto en
   el panel fijo. */
(function () {
  var secciones = document.querySelectorAll('.casos');
  if (!secciones.length || !('IntersectionObserver' in window)) return;
  secciones.forEach(function (seccion) {
    var casos = seccion.querySelectorAll('.casos__lista .caso');
    var medios = seccion.querySelectorAll('.casos__medio');
    function activar(n) {
      casos.forEach(function (c) { c.classList.toggle('caso--activo', c.getAttribute('data-caso') === n); });
      medios.forEach(function (m) { m.classList.toggle('casos__medio--activo', m.getAttribute('data-caso') === n); });
    }
    activar('0');
    seccion.classList.add('casos--vivo');
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) { if (e.isIntersecting) activar(e.target.getAttribute('data-caso')); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    casos.forEach(function (c) { observador.observe(c); });
  });
})();
