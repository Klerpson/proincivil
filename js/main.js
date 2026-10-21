/* PROINCIVIL · Plano vivo. JS mínimo, sin dependencias. Todo el contenido está en el HTML;
   esto solo añade comportamiento. Comentarios de bloque: layout compress une líneas. */
(function () {
  var doc = document;
  var ultimo = window.scrollY;

  /* 1. Evento de conversión en GA4 para cada enlace de WhatsApp (data-location identifica el CTA). */
  doc.addEventListener('click', function (e) {
    var a = e.target.closest('a.lead-whatsapp');
    if (a && typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', { location: a.getAttribute('data-location') || 'sin-ubicacion', page_path: location.pathname });
    }
  });

  /* 2. Menú: botón móvil, cierre con Escape y un solo desplegable abierto. */
  var menu = doc.querySelector('.menu');
  var boton = menu && menu.querySelector('.menu__boton');
  var desplegables = menu ? menu.querySelectorAll('.menu__desplegable') : [];

  function cerrarDesplegables(excepto) {
    for (var i = 0; i < desplegables.length; i++) {
      if (desplegables[i] !== excepto) desplegables[i].removeAttribute('open');
    }
  }
  function cerrarMenu() {
    if (boton) boton.setAttribute('aria-expanded', 'false');
    cerrarDesplegables(null);
  }

  if (boton) {
    boton.hidden = false;
    boton.addEventListener('click', function () {
      var abierto = boton.getAttribute('aria-expanded') === 'true';
      boton.setAttribute('aria-expanded', abierto ? 'false' : 'true');
    });
  }
  for (var i = 0; i < desplegables.length; i++) {
    desplegables[i].addEventListener('toggle', function (e) {
      if (e.target.open) cerrarDesplegables(e.target);
    });
  }
  doc.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || !menu) return;
    var activo = doc.activeElement;
    var desplegable = activo && activo.closest ? activo.closest('.menu__desplegable[open]') : null;
    var listaAbierta = boton && boton.getAttribute('aria-expanded') === 'true' && menu.contains(activo);
    cerrarMenu();
    if (desplegable) desplegable.querySelector('summary').focus();
    else if (listaAbierta) boton.focus();
  });
  if (menu) {
    menu.addEventListener('focusin', function () { menu.classList.remove('menu--oculto'); });
    menu.addEventListener('focusout', function (e) {
      if (!e.relatedTarget || !menu.contains(e.relatedTarget)) cerrarMenu();
    });
  }
  doc.addEventListener('click', function (e) {
    if (menu && !menu.contains(e.target)) cerrarMenu();
    if (e.target.closest('.menu a')) cerrarMenu();
  });

  /* 3. La barra secundaria del menú se oculta al bajar y vuelve al subir. */
  if (menu) {
    var pendiente = false;
    window.addEventListener('scroll', function () {
      if (pendiente) return;
      pendiente = true;
      window.requestAnimationFrame(function () {
        var y = window.scrollY;
        var bajando = y > ultimo && y > 160;
        var abierto = boton && boton.getAttribute('aria-expanded') === 'true';
        if (!abierto && !menu.querySelector('.menu__desplegable[open]')) menu.classList.toggle('menu--oculto', bajando);
        ultimo = y;
        pendiente = false;
      });
    }, { passive: true });
  }

  /* 4. El botón flotante se oculta mientras se ve la portada o la cabecera. */
  var flotante = doc.querySelector('.flotante');
  var cabecera = doc.querySelector('.portada, .cabecera');
  if (flotante && cabecera && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entradas) {
      flotante.classList.toggle('flotante--oculto', entradas[0].isIntersecting);
    }).observe(cabecera);
  }

  /* 5. Resplandor que sigue al cursor sobre la cuadrícula de la portada (solo puntero fino). */
  var portada = doc.querySelector('.portada');
  if (portada && window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
    var marco = null;
    portada.addEventListener('pointermove', function (e) {
      if (marco) return;
      marco = window.requestAnimationFrame(function () {
        var r = portada.getBoundingClientRect();
        portada.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        portada.style.setProperty('--my', (e.clientY - r.top) + 'px');
        marco = null;
      });
    });
    portada.addEventListener('pointerenter', function () { portada.classList.add('portada--puntero'); });
    portada.addEventListener('pointerleave', function () { portada.classList.remove('portada--puntero'); });
  }

  /* 6. Enlaces externos en pestaña nueva y sin acceso a window.opener. */
  var enlaces = doc.querySelectorAll('a[href^="http"]');
  for (var j = 0; j < enlaces.length; j++) {
    if (enlaces[j].hostname !== location.hostname) {
      enlaces[j].target = '_blank';
      if (!/noopener/.test(enlaces[j].rel)) enlaces[j].rel = (enlaces[j].rel + ' noopener').trim();
    }
  }
})();
