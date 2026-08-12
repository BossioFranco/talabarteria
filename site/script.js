/* ============================================================
   LAPACHO TALABARTERÍA
   Datos + tienda + capa de movimiento.
   ============================================================ */

(() => {
  'use strict';

  const WHATSAPP = '5493516108414';
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Datos ────────────────────────────────────────────── */

  const CATS = [
    { id: 'equino', label: 'Cuidado equino', peek: 'img/p-rep-nat.webp' },
    { id: 'cuero',  label: 'Cuero',          peek: 'img/mochila-cuero.webp' },
    { id: 'aperos', label: 'Aperos',         peek: 'img/hero-montura.jpg' },
    { id: 'mates',  label: 'Mates',          peek: 'img/p-mate.jpg' },
    { id: 'ropa',   label: 'Indumentaria',   peek: 'img/poncho-rojo.jpg' }
  ];

  const PRODUCT_IMAGES = {
    mochila: 'img/mochila-cuero.webp',
    banco: 'img/banco-cuero.webp',
    poncho: 'img/poncho.webp',
    montura: 'img/hero-montura.jpg',
    'chaleco-acolchado': 'img/chaleco-acolchado.webp',
    'chaleco-gamuza': 'img/chaleco-gamuza.jpg',
    'poncho-rojo': 'img/poncho-rojo.jpg',
    botas: 'img/botas.jpg',
    rastra: 'img/rastra.jpg',
    'rep-nat': 'img/p-rep-nat.webp',
    'rep-gel': 'img/p-rep-gel.webp',
    brillo: 'img/p-brillo.webp',
    sulfato: 'img/p-sulfato.webp',
    unguento: 'img/p-unguento.jpg',
    riendas: 'img/p-riendas.webp',
    cabezada: 'img/p-cabezada.jpg',
    cinto: 'img/p-cinto.jpg',
    mate: 'img/p-mate.jpg',
    'set-mate': 'img/p-set-mate.webp',
    equisoft: 'img/p-equisoft.webp',
    boina: 'img/p-boina.webp'
  };

  const PRODUCTS = [
    { id: 'rep-nat', cat: 'equino', name: 'Repelente Natural x 1 L', price: 18900, stock: 34, short: 'Citronela y eucalipto, sin químicos agresivos.', badge: 'Más vendido',
      desc: 'Repelente de moscas y tábanos a base de aceites esenciales. No irrita la piel ni reseca el pelo. Rinde para toda la temporada en un caballo de trabajo.', tags: ['1 litro', 'Sin alcohol', 'Uso diario'] },
    { id: 'rep-gel', cat: 'equino', name: 'Repelente en Gel x 500 g', price: 14500, stock: 21, short: 'Se queda donde lo ponés: heridas y zonas sensibles.',
      desc: 'Versión en gel para aplicar en puntos concretos: alrededor de los ojos, la panza y cualquier herida en cicatrización. No chorrea.', tags: ['500 g', 'Aplicación localizada'] },
    { id: 'brillo', cat: 'equino', name: 'Brillo para Cola y Crines', price: 12300, stock: 40, short: 'Desenreda y deja el pelo suelto para el desfile.',
      desc: 'Siliconado liviano que desenreda sin cortar el pelo. Ideal para jineteada, exposición y fotos.', tags: ['750 ml', 'Desenredante'] },
    { id: 'equisoft', cat: 'equino', name: 'Equi-Soft Acondicionador de Cuero', price: 16800, stock: 12, short: 'Limpia y nutre el cuero en un solo paso.',
      desc: 'Acondicionador para cueros: limpia y nutre en una sola pasada. Devuelve flexibilidad a monturas, cabezadas y riendas resecas por el sol y el zonda. Aplicar con paño suave cada dos o tres meses.', tags: ['500 g', 'Limpia y nutre', 'Para todo apero'] },
    { id: 'unguento', cat: 'equino', name: 'Ungüento Cicatrizante', price: 9700, stock: 55, short: 'El pote que no puede faltar en el botiquín.',
      desc: 'Ungüento para raspones, matatura y rozaduras de apero. Forma una capa protectora que aísla la herida del barro y las moscas.', tags: ['250 g', 'Botiquín'] },
    { id: 'sulfato', cat: 'equino', name: 'Sulfato de Cobre en Gel', price: 8400, stock: 48, short: 'Para el casco y la ranilla, sin desperdicio.',
      desc: 'Sulfato de cobre en base gel para tratamiento de ranilla y afecciones del casco. Se adhiere y no se cae al primer paso.', tags: ['300 g', 'Casco y ranilla'] },
    { id: 'montura', cat: 'aperos', name: 'Montura Criolla de Cuero', price: 890000, stock: 3, short: 'Basto de algarrobo, cosida a mano, hecha para durar.', badge: 'Hecho a mano', feature: true,
      desc: 'Montura criolla completa con basto de algarrobo, cuero vacuno curtido al vegetal y costura a mano en hilo encerado. Se entrega en 20 a 30 días si es por encargo.', tags: ['Cuero vacuno', 'Hecha a mano', 'Por encargo'] },
    { id: 'riendas', cat: 'aperos', name: 'Riendas Trenzadas de Tiento', price: 62000, stock: 9, short: 'Ocho tientos, trenzado parejo, largo a medida.',
      desc: 'Riendas trenzadas en ocho tientos de cuero crudo. Se pueden pedir en el largo que uses.', tags: ['Cuero crudo', 'Largo a medida'] },
    { id: 'cabezada', cat: 'aperos', name: 'Cabezada de Cuero con Herrajes', price: 95000, stock: 6, short: 'Herrajes de alpaca, cuero repujado a mano.',
      desc: 'Cabezada de cuero vacuno con herrajes de alpaca y repujado a mano. Regulable en dos puntos.', tags: ['Alpaca', 'Repujado', 'Regulable'] },
    { id: 'mochila', cat: 'cuero', name: 'Mochila de Cuero Crudo', price: 145000, stock: 7, short: 'Para el campo o para la ciudad, aguanta las dos.',
      desc: 'Mochila de cuero crudo con forro de lona, cierre de hebilla y correas regulables. Con el uso toma un tono más oscuro y propio.', tags: ['Cuero crudo', 'Forro de lona', '14 litros'] },
    { id: 'cinto', cat: 'cuero', name: 'Cinto Tallado a Mano', price: 46000, stock: 15, short: 'Tallado de guarda pampa, hebilla de alpaca.',
      desc: 'Cinto de cuero vacuno de 4 cm con tallado de guarda pampa y hebilla de alpaca. Se puede grabar el nombre o la marca del campo.', tags: ['4 cm', 'Personalizable', 'Alpaca'] },
    { id: 'rastra', cat: 'cuero', name: 'Rastra Criolla con Monedas', price: 118000, stock: 5, short: 'Monedas de alpaca sobre cuero negro repujado.', badge: 'Hecho a mano',
      desc: 'Rastra criolla de cuero repujado con monedas y placa central de alpaca cincelada a mano. Se hace a medida de cintura y se puede pedir con las iniciales grabadas.', tags: ['Alpaca', 'A medida', 'Repujado'] },
    { id: 'banco', cat: 'cuero', name: 'Banco de Cuero y Algarrobo', price: 128000, stock: 4, short: 'Asiento de tiento trenzado sobre madera maciza.',
      desc: 'Banco con estructura de algarrobo y asiento de tiento trenzado a mano. Cada uno sale distinto porque la madera manda.', tags: ['Algarrobo', 'Tiento trenzado', 'Pieza única'] },
    { id: 'mate', cat: 'mates', name: 'Mate Imperial con Virola', price: 54000, stock: 18, short: 'Calabaza curada y virola de alpaca cincelada.', badge: 'Regalo',
      desc: 'Mate imperial de calabaza curada, forrado en cuero y con virola de alpaca cincelada a mano. Viene curado y listo para usar.', tags: ['Calabaza', 'Alpaca', 'Curado'] },
    { id: 'set-mate', cat: 'mates', name: 'Set Mate, Bombilla y Yerbera', price: 89000, stock: 11, short: 'El equipo completo, en su estuche de cuero.',
      desc: 'Set de mate forrado en cuero, bombilla de alpaca con pico curvo y yerbera con azucarera, todo en un estuche de cuero con manija.', tags: ['Set completo', 'Estuche de cuero'] },
    { id: 'boina', cat: 'ropa', name: 'Boina de Paño de Lana', price: 32000, stock: 26, short: 'Paño pesado, la de siempre.',
      desc: 'Boina clásica de paño de lana con badana de cuero. Talles 55 al 62, en negro, gris y azul.', tags: ['Lana', 'Talles 55–62'] },
    { id: 'chaleco-acolchado', cat: 'ropa', name: 'Chaleco Acolchado con Escudo', price: 128000, stock: 14, short: 'Liviano, corta el viento y no molesta a caballo.', badge: 'Nuevo',
      desc: 'Chaleco acolchado en microfibra con cuello alto, vivos de corderoy y escudo Lapacho en cuero. Abriga sin abultar: se usa arriba de la camisa y deja el brazo libre. Talles S al XXL.', tags: ['Microfibra', 'Escudo de cuero', 'S–XXL'] },
    { id: 'chaleco-gamuza', cat: 'ropa', name: 'Chaleco de Gamuza', price: 185000, stock: 6, short: 'Gamuza natural, entallado, para montar y para salir.',
      desc: 'Chaleco de gamuza natural con hebilla de ajuste en la espalda y costura reforzada en las sisas. El cuero se ablanda con el uso y toma la forma del cuerpo. Talles XS al XL.', tags: ['Gamuza', 'Ajuste en espalda', 'XS–XL'] },
    { id: 'poncho-rojo', cat: 'ropa', name: 'Poncho Criollo Rojo', price: 210000, stock: 4, short: 'El rojo de siempre, con guarda negra.', badge: 'Clásico',
      desc: 'Poncho criollo de lana en rojo con guarda negra, tejido en telar. Prenda de fiesta y de trabajo: pesa lo justo y corta el viento de la mañana.', tags: ['Lana', 'Telar', 'Tamaño único'] },
    { id: 'botas', cat: 'ropa', name: 'Botas de Cuero Media Caña', price: 245000, stock: 8, short: 'Caña alta, suela cosida, para el estribo.',
      desc: 'Bota de caña alta en cuero vacuno con suela cosida y refuerzo interno para el estribo. Se entrega con crema de mantenimiento. Del 38 al 45.', tags: ['Cuero vacuno', 'Suela cosida', '38–45'] },
    { id: 'poncho', cat: 'ropa', name: 'Poncho de Lana Merino', price: 165000, stock: 5, short: 'Tejido en telar, abriga de verdad.',
      desc: 'Poncho de lana merino tejido en telar por artesanas de Malargüe. Tamaño único, con fleco tejido a mano.', tags: ['Lana merino', 'Telar', 'Tamaño único'] }
  ];

  const state = { filter: 'todos', cart: {}, subscribed: false, checkedOut: false, openId: null };

  /* ── Utilidades ───────────────────────────────────────── */

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  const money = n => '$ ' + n.toLocaleString('es-AR');
  const pad = n => String(n).padStart(2, '0');
  const catLabel = id => (CATS.find(c => c.id === id) || {}).label || '';
  const productById = id => PRODUCTS.find(p => p.id === id);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  function el(tag, attrs, kids) {
    const n = document.createElement(tag);
    for (const k in attrs || {}) {
      if (k === 'text') n.textContent = attrs[k];
      else if (k === 'html') n.innerHTML = attrs[k];
      else if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(c => c && n.appendChild(c));
    return n;
  }

  const ICON = {
    arrow: 'M7 17 17 7M9 7h8v8',
    cart:  'M6 6h15l-1.5 9h-12zM6 6 5 2H2M8 21h.01M18 21h.01',
    close: 'M18 6 6 18M6 6l12 12'
  };

  function icon(d, size) {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('width', size || 15);
    svg.setAttribute('height', size || 15);
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '1.6');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('aria-hidden', 'true');
    d.split('M').filter(Boolean).forEach(seg => {
      const p = document.createElementNS(ns, 'path');
      p.setAttribute('d', 'M' + seg);
      svg.appendChild(p);
    });
    return svg;
  }

  /* ── Bloqueo de scroll (menú, carrito, modal) ─────────── */

  let locks = 0;
  function lockScroll(on) {
    locks = Math.max(0, locks + (on ? 1 : -1));
    document.documentElement.classList.toggle('is-locked', locks > 0);
    document.body.classList.toggle('is-locked', locks > 0);
  }

  /* ── Aviso flotante ───────────────────────────────────── */

  const toastEl = $('[data-toast]');
  const toastText = $('[data-toast-text]');
  let toastTimer = null;
  function flash(msg) {
    clearTimeout(toastTimer);
    toastText.textContent = msg;
    toastEl.classList.add('is-on');
    toastTimer = setTimeout(() => toastEl.classList.remove('is-on'), 2800);
  }

  /* ── Navegación ───────────────────────────────────────── */

  const nav = $('[data-nav]');
  let lastY = window.scrollY;

  function onNavScroll() {
    const y = window.scrollY;
    nav.classList.toggle('is-stuck', y > 40);
    const goingDown = y > lastY && y > 520;
    nav.classList.toggle('is-hidden', goingDown && !document.body.classList.contains('is-menu-open'));
    lastY = y;
  }

  /* ── Menú a pantalla completa ─────────────────────────── */

  const menu = $('[data-menu]');
  const menuToggle = $('[data-menu-toggle]');

  function setMenu(open) {
    const already = document.body.classList.contains('is-menu-open');
    if (open === already) return;
    document.body.classList.toggle('is-menu-open', open);
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    lockScroll(open);
    // Cascada de los ítems
    $$('.menu__list a', menu).forEach((a, i) => {
      a.style.transitionDelay = open ? (140 + i * 70) + 'ms' : '0ms';
    });
  }

  menuToggle.addEventListener('click', () => setMenu(!document.body.classList.contains('is-menu-open')));
  $$('[data-close-menu]').forEach(a => a.addEventListener('click', () => setMenu(false)));

  /* ── Carrito ──────────────────────────────────────────── */

  const cartWrap    = $('[data-cart]');
  const cartItemsEl = $('[data-cart-items]');
  const cartCountEl = $('[data-cart-count]');
  const cartBtn     = $('[data-open-cart]');
  const subtotalEl  = $('[data-cart-subtotal]');
  const shippingEl  = $('[data-cart-shipping]');
  const totalEl     = $('[data-cart-total]');
  const checkoutBtn = $('[data-checkout]');

  let cartReturnFocus = null;

  function openCart() {
    cartReturnFocus = document.activeElement;
    setMenu(false);
    cartWrap.classList.add('is-open');
    lockScroll(true);
    const close = $('.btn-icon[data-close-cart]', cartWrap);
    if (close) close.focus({ preventScroll: true });
  }
  function closeCart() {
    if (!cartWrap.classList.contains('is-open')) return;
    cartWrap.classList.remove('is-open');
    lockScroll(false);
    if (cartReturnFocus) cartReturnFocus.focus({ preventScroll: true });
  }
  cartBtn.addEventListener('click', openCart);
  $$('[data-close-cart]').forEach(b => b.addEventListener('click', closeCart));

  function addToCart(id) {
    const p = productById(id);
    state.cart[id] = (state.cart[id] || 0) + 1;
    state.checkedOut = false;
    flash(p.name + ' — agregado');
    renderCart();
  }
  function setQty(id, q) {
    if (q <= 0) delete state.cart[id]; else state.cart[id] = q;
    state.checkedOut = false;
    renderCart();
  }

  function cartTotals() {
    const ids = Object.keys(state.cart);
    const subtotal = ids.reduce((t, id) => t + productById(id).price * state.cart[id], 0);
    const shipping = subtotal === 0 || subtotal >= 150000 ? 0 : 12500;
    return { ids, subtotal, shipping };
  }

  function renderCart() {
    const { ids, subtotal, shipping } = cartTotals();
    const count = ids.reduce((t, id) => t + state.cart[id], 0);

    cartCountEl.textContent = String(count);
    cartBtn.setAttribute('data-filled', count > 0 ? '1' : '0');
    cartBtn.setAttribute('aria-label', count === 0 ? 'Abrir carrito, vacío' : 'Abrir carrito, ' + count + ' artículos');

    cartItemsEl.innerHTML = '';

    if (ids.length === 0) {
      const ring = el('div', { class: 'empty__ring' }, [icon(ICON.cart, 26)]);
      cartItemsEl.appendChild(el('div', { class: 'empty' }, [
        ring,
        el('p', { html: 'Todavía no agregaste nada.<br>Volvé a la tienda y elegí algo lindo.' })
      ]));
    } else {
      ids.forEach(id => {
        const p = productById(id);
        const qty = state.cart[id];

        const dec = el('button', { type: 'button', 'aria-label': 'Quitar uno de ' + p.name, text: '–' });
        const inc = el('button', { type: 'button', 'aria-label': 'Sumar uno de ' + p.name, text: '+' });
        const rm  = el('button', { type: 'button', class: 'qty__rm', text: 'Quitar' });

        dec.addEventListener('click', () => setQty(id, qty - 1));
        inc.addEventListener('click', () => setQty(id, qty + 1));
        rm.addEventListener('click', () => setQty(id, 0));

        cartItemsEl.appendChild(el('div', { class: 'crow' }, [
          el('img', { class: 'crow__img', src: PRODUCT_IMAGES[p.id], alt: '', loading: 'lazy' }),
          el('div', {}, [
            el('p', { class: 'crow__name', text: p.name }),
            el('p', { class: 'crow__unit', text: money(p.price) + ' c/u' }),
            el('div', { class: 'qty' }, [dec, el('span', { text: String(qty) }), inc, rm])
          ]),
          el('p', { class: 'crow__line', text: money(p.price * qty) })
        ]));
      });
    }

    subtotalEl.textContent = money(subtotal);
    shippingEl.textContent = subtotal === 0 ? '—' : (shipping === 0 ? 'Gratis' : money(shipping));
    totalEl.textContent = money(subtotal + shipping);
    checkoutBtn.textContent = state.checkedOut ? 'Redirigiendo a Mercado Pago…' : 'Finalizar compra';
  }

  checkoutBtn.addEventListener('click', () => {
    if (cartTotals().ids.length === 0) { flash('El carrito está vacío'); return; }
    state.checkedOut = true;
    renderCart();
    flash('Demo: acá arranca el checkout');
  });

  /* ── Índice de rubros ─────────────────────────────────── */

  const indexWrap = $('[data-index]');
  const peek = $('[data-peek]');
  const peekImg = $('img', peek);

  function renderIndex() {
    indexWrap.innerHTML = '';
    CATS.forEach((cat, i) => {
      const count = PRODUCTS.filter(p => p.cat === cat.id).length;
      const row = el('button', { type: 'button', class: 'index__row', 'data-peek-src': cat.peek }, [
        el('span', { class: 'index__n', text: '0' + (i + 1) }),
        el('span', { class: 'index__name', text: cat.label }),
        el('span', { class: 'index__count', text: count + ' productos' }),
        el('span', { class: 'index__arrow' }, [icon(ICON.arrow, 14)])
      ]);
      row.addEventListener('click', () => {
        state.filter = cat.id;
        renderChips();
        renderProducts();
        hidePeek();
        const t = document.getElementById('tienda');
        window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 20, behavior: REDUCED ? 'auto' : 'smooth' });
      });
      row.addEventListener('mouseenter', () => showPeek(cat.peek));
      row.addEventListener('mouseleave', hidePeek);
      row.addEventListener('focus', () => showPeek(cat.peek));
      row.addEventListener('blur', hidePeek);
      indexWrap.appendChild(row);
    });
  }

  // El preview persigue al cursor con inercia
  const pk = { x: 0, y: 0, tx: 0, ty: 0, on: false };
  function showPeek(src) {
    if (REDUCED || window.matchMedia('(hover: none)').matches) return;
    if (peekImg.getAttribute('src') !== src) peekImg.src = src;
    pk.on = true;
    peek.classList.add('is-on');
  }
  function hidePeek() { pk.on = false; peek.classList.remove('is-on'); }

  document.addEventListener('pointermove', e => {
    pk.tx = e.clientX;
    pk.ty = e.clientY;
    if (!pk.on) { pk.x = pk.tx; pk.y = pk.ty; }
  }, { passive: true });

  /* ── Filtros ──────────────────────────────────────────── */

  const chipsWrap = $('[data-chips]');
  function renderChips() {
    chipsWrap.innerHTML = '';
    [{ id: 'todos', label: 'Todo' }].concat(CATS).forEach(c => {
      const on = state.filter === c.id;
      const b = el('button', { type: 'button', class: 'chip', 'aria-pressed': on ? 'true' : 'false', text: c.label });
      b.addEventListener('click', () => {
        if (state.filter === c.id) return;
        state.filter = c.id;
        renderChips();
        renderProducts();
      });
      chipsWrap.appendChild(b);
    });
  }

  /* ── Grilla de productos ──────────────────────────────── */

  const grid = $('[data-products]');
  const resultsEl = $('[data-results]');

  const stockLabel = (p, big) => p.stock > 8
    ? (big ? 'En stock — envío inmediato' : 'En stock')
    : (big ? 'Quedan ' + p.stock + ' unidades' : 'Quedan ' + p.stock);

  function renderProducts() {
    const list = state.filter === 'todos' ? PRODUCTS : PRODUCTS.filter(p => p.cat === state.filter);
    resultsEl.textContent = list.length + (list.length === 1 ? ' producto' : ' productos');

    grid.innerHTML = '';

    list.forEach((p, i) => {
      const featured = p.feature && state.filter === 'todos';

      const open = el('button', { type: 'button', class: 'card__open', 'aria-label': 'Ver detalle de ' + p.name });
      open.addEventListener('click', () => openProduct(p.id));

      const add = el('button', { type: 'button', class: 'card__add', text: 'Agregar al carrito' });
      add.addEventListener('click', () => addToCart(p.id));

      const media = el('div', { class: 'card__media' }, [
        el('img', { src: PRODUCT_IMAGES[p.id], alt: p.name, loading: i < 4 ? 'eager' : 'lazy', decoding: 'async' }),
        p.badge ? el('span', { class: 'badge', text: p.badge }) : null,
        open,
        add
      ]);

      const card = el('article', {
        class: 'card' + (featured ? ' card--feature' : ''),
        'data-reveal': '',
        style: '--d:' + Math.min(i, 6) * 70
      }, [
        media,
        el('div', { class: 'card__body' }, [
          el('p', { class: 'card__cat', text: catLabel(p.cat) }),
          el('h3', { class: 'card__name', text: p.name }),
          el('p', { class: 'card__short', text: p.short }),
          el('div', { class: 'card__foot' }, [
            el('span', { class: 'card__price', text: money(p.price) }),
            el('span', { class: 'card__stock', 'data-low': p.stock > 8 ? '0' : '1', text: stockLabel(p, false) })
          ])
        ])
      ]);

      grid.appendChild(card);
      observeReveal(card);
    });
  }

  /* ── Modal de producto ────────────────────────────────── */

  const modal = $('[data-modal]');
  const mImg  = $('[data-modal-img]');
  const mCat  = $('[data-modal-category]');
  const mName = $('[data-modal-name]');
  const mPrice= $('[data-modal-price]');
  const mStock= $('[data-modal-stock]');
  const mDesc = $('[data-modal-desc]');
  const mTags = $('[data-modal-tags]');
  const mAdd  = $('[data-modal-add]');
  const mSku  = $('[data-modal-sku]');
  let modalReturnFocus = null;

  function openProduct(id) {
    const p = productById(id);
    if (!p) return;
    state.openId = id;
    modalReturnFocus = document.activeElement;

    mImg.src = PRODUCT_IMAGES[p.id];
    mImg.alt = p.name;
    mCat.textContent = catLabel(p.cat);
    mName.textContent = p.name;
    mPrice.textContent = money(p.price);
    mStock.textContent = stockLabel(p, true);
    mStock.setAttribute('data-low', p.stock > 8 ? '0' : '1');
    mDesc.textContent = p.desc;
    mTags.innerHTML = '';
    p.tags.forEach(t => mTags.appendChild(el('span', { class: 'tag', text: t })));
    mSku.textContent = 'Código LP-' + p.id.toUpperCase() + ' · Envío en 48–72 h a todo el país · Retiro sin cargo en el local.';

    modal.classList.add('is-open');
    lockScroll(true);
    $('.modal__close', modal).focus({ preventScroll: true });
  }

  function closeProduct() {
    if (!modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    state.openId = null;
    lockScroll(false);
    if (modalReturnFocus) modalReturnFocus.focus({ preventScroll: true });
  }

  $$('[data-close-product]').forEach(b => b.addEventListener('click', closeProduct));
  mAdd.addEventListener('click', () => {
    if (!state.openId) return;
    const id = state.openId;
    closeProduct();
    addToCart(id);
    openCart();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (modal.classList.contains('is-open')) closeProduct();
    else if (cartWrap.classList.contains('is-open')) closeCart();
    else if (document.body.classList.contains('is-menu-open')) setMenu(false);
  });

  /* ── Subastas ─────────────────────────────────────────── */

  // El remate es mensual: cierra el día 4 a las 21 h.
  function nextAuctionEnd() {
    const now = new Date();
    let d = new Date(now.getFullYear(), now.getMonth(), 4, 21, 0, 0);
    if (d.getTime() <= now.getTime()) d = new Date(now.getFullYear(), now.getMonth() + 1, 4, 21, 0, 0);
    return d.getTime();
  }
  let auctionEnd = nextAuctionEnd();

  const cdD = $('[data-cd-d]'), cdH = $('[data-cd-h]'), cdM = $('[data-cd-m]');
  function tickAuction() {
    let ms = auctionEnd - Date.now();
    if (ms <= 0) { auctionEnd = nextAuctionEnd(); ms = auctionEnd - Date.now(); }
    cdD.textContent = pad(Math.floor(ms / 86400000));
    cdH.textContent = pad(Math.floor(ms / 3600000) % 24);
    cdM.textContent = pad(Math.floor(ms / 60000) % 60);
  }
  tickAuction();
  setInterval(tickAuction, 20000);

  $('[data-subscribe]').addEventListener('submit', e => {
    e.preventDefault();
    if (state.subscribed) return;
    state.subscribed = true;
    $('[data-subscribe-label]').textContent = '¡Anotado!';
    flash('Te avisamos del próximo remate');
  });

  $('[data-bid]').addEventListener('click', () => flash('Demo: se abre el formulario de oferta'));

  /* ── Formulario de contacto ───────────────────────────── */

  const form = $('[data-contact-form]');
  const sent = $('[data-contact-sent]');
  const sentName = $('[data-contact-sent-name]');
  const errEl = $('[data-contact-error]');

  function setErr(msg) {
    errEl.textContent = msg || '';
    errEl.hidden = !msg;
  }
  $$('input, textarea', form).forEach(f => f.addEventListener('input', () => setErr('')));

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.nombre.value.trim();
    const mail = form.mail.value.trim();
    const msg  = form.consulta.value.trim();
    if (!name) { setErr('Nos falta tu nombre.'); form.nombre.focus(); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) { setErr('Revisá el correo, no parece válido.'); form.mail.focus(); return; }
    if (msg.length < 8) { setErr('Contanos un poco más de qué necesitás.'); form.consulta.focus(); return; }
    setErr('');
    sentName.textContent = name;
    form.hidden = true;
    sent.hidden = false;
    flash('Consulta enviada');
  });

  $('[data-contact-reset]').addEventListener('click', () => {
    form.reset();
    setErr('');
    sent.hidden = true;
    form.hidden = false;
    form.nombre.focus();
  });

  /* ── Marquesina: se duplica para que el loop cierre ───── */

  (function buildMarquee() {
    const track = $('[data-marquee]');
    if (!track) return;
    track.appendChild(track.firstElementChild.cloneNode(true));
  })();

  /* ── Revelados al hacer scroll ────────────────────────── */

  const revealIO = 'IntersectionObserver' in window && !REDUCED
    ? new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (!en.isIntersecting) return;
          en.target.classList.add('is-in');
          revealIO.unobserve(en.target);
          if (en.target.classList.contains('stats')) countUp(en.target);
        });
      }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 })
    : null;

  function observeReveal(node) {
    if (!revealIO) { node.classList.add('is-in'); return; }
    revealIO.observe(node);
  }

  function countUp(scope) {
    $$('[data-count]', scope).forEach(n => {
      const target = parseInt(n.getAttribute('data-count'), 10);
      const prefix = n.getAttribute('data-prefix') || '';
      const t0 = performance.now();
      const dur = 1300;
      (function step(t) {
        const k = clamp((t - t0) / dur, 0, 1);
        const eased = 1 - Math.pow(1 - k, 4);
        n.textContent = prefix + Math.round(target * eased);
        if (k < 1) requestAnimationFrame(step);
      })(t0);
    });
  }

  /* ── Parallax + preview: un solo bucle de rAF ─────────── */

  const parallaxEls = $$('[data-parallax]').map(node => ({
    node,
    f: parseFloat(node.getAttribute('data-parallax')) || 0.1,
    box: node.parentElement
  }));

  let lastFrameY = -1;
  let dirty = true;

  function updateParallax() {
    const vh = window.innerHeight;
    parallaxEls.forEach(item => {
      const r = item.box.getBoundingClientRect();
      if (r.bottom < -240 || r.top > vh + 240) return;
      // Positivo = la imagen baja mientras la página sube: se mueve
      // más lento que el resto. Se limita al sobrante disponible.
      const max = r.height * 0.15;
      const off = clamp((vh / 2 - (r.top + r.height / 2)) * item.f, -max, max);
      item.node.style.translate = '0 ' + off.toFixed(1) + 'px';
    });
  }

  function loop() {
    if (!REDUCED) {
      const y = window.scrollY;
      if (y !== lastFrameY || dirty) {
        lastFrameY = y;
        dirty = false;
        updateParallax();
      }

      // Inercia del preview del índice
      if (pk.on) {
        pk.x += (pk.tx - pk.x) * 0.13;
        pk.y += (pk.ty - pk.y) * 0.13;
        peek.style.transform =
          'translate3d(' + pk.x.toFixed(1) + 'px,' + pk.y.toFixed(1) + 'px,0) translate(-50%,-50%)';
      }
    }
    requestAnimationFrame(loop);
  }

  window.addEventListener('scroll', onNavScroll, { passive: true });
  window.addEventListener('resize', () => { dirty = true; }, { passive: true });

  /* ── Botones magnéticos ───────────────────────────────── */

  if (!REDUCED && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    $$('[data-magnetic]').forEach(btn => {
      btn.addEventListener('pointermove', e => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.32;
        btn.style.transform = 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px)';
      });
      btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });
  }

  /* ── Arranque ─────────────────────────────────────────── */

  renderIndex();
  renderChips();
  renderProducts();
  renderCart();

  $$('[data-reveal]').forEach(observeReveal);

  onNavScroll();
  if (!REDUCED) requestAnimationFrame(loop);

  function ready() {
    document.body.classList.add('is-ready');
  }
  if (document.fonts && document.fonts.ready) {
    // Esperamos a las fuentes para que el hero no salte, pero con techo.
    Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1200))]).then(ready);
  } else {
    ready();
  }
})();
