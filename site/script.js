(() => {
  'use strict';

  const WHATSAPP = '5493516108414';

  const CAT_ICONS = {
    equino: ['M3 3h.01', 'M7 5h.01', 'M11 7h.01', 'M3 7h.01', 'M7 9h.01', 'M3 11h.01', 'M17 21a5 5 0 0 0 5-5c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3a5 5 0 0 0 5 5Z', 'M15 3h.01', 'M15 6.5V7'],
    cuero: ['M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z', 'M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12', 'M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17'],
    aperos: ['M7 22a5 5 0 0 1-2-4', 'M7 16.93c.96.43 1.96.74 2.99.91', 'M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8-4.48 8-10 8a12 12 0 0 1-1.5-.09', 'M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'],
    mates: ['m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8', 'M5 8h14', 'M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0', 'm12 8 1-6h2'],
    ropa: ['M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z']
  };

  const CATS = [
    { id: 'equino', label: 'Cuidado equino' },
    { id: 'cuero', label: 'Cuero' },
    { id: 'aperos', label: 'Aperos' },
    { id: 'mates', label: 'Mates' },
    { id: 'ropa', label: 'Indumentaria' }
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
    { id: 'montura', cat: 'aperos', name: 'Montura Criolla de Cuero', price: 890000, stock: 3, short: 'Basto de algarrobo, cosida a mano, hecha para durar.', badge: 'Hecho a mano',
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
      desc: 'Chaleco acolchado en microfibra con cuello alto, vivos de corderoy y escudo Decampo en cuero. Abriga sin abultar: se usa arriba de la camisa y deja el brazo libre. Talles S al XXL.', tags: ['Microfibra', 'Escudo de cuero', 'S–XXL'] },
    { id: 'chaleco-gamuza', cat: 'ropa', name: 'Chaleco de Gamuza', price: 185000, stock: 6, short: 'Gamuza natural, entallado, para montar y para salir.',
      desc: 'Chaleco de gamuza natural con hebilla de ajuste en la espalda y costura reforzada en las sisas. El cuero se ablanda con el uso y toma la forma del cuerpo. Talles XS al XL.', tags: ['Gamuza', 'Ajuste en espalda', 'XS–XL'] },
    { id: 'poncho-rojo', cat: 'ropa', name: 'Poncho Criollo Rojo', price: 210000, stock: 4, short: 'El rojo de siempre, con guarda negra.', badge: 'Clásico',
      desc: 'Poncho criollo de lana en rojo con guarda negra, tejido en telar. Prenda de fiesta y de trabajo: pesa lo justo y corta el viento de la mañana.', tags: ['Lana', 'Telar', 'Tamaño único'] },
    { id: 'botas', cat: 'ropa', name: 'Botas de Cuero Media Caña', price: 245000, stock: 8, short: 'Caña alta, suela cosida, para el estribo.',
      desc: 'Bota de caña alta en cuero vacuno con suela cosida y refuerzo interno para el estribo. Se entrega con crema de mantenimiento. Del 38 al 45.', tags: ['Cuero vacuno', 'Suela cosida', '38–45'] },
    { id: 'poncho', cat: 'ropa', name: 'Poncho de Lana Merino', price: 165000, stock: 5, short: 'Tejido en telar, abriga de verdad.',
      desc: 'Poncho de lana merino tejido en telar por artesanas de Malargüe. Tamaño único, con fleco tejido a mano.', tags: ['Lana merino', 'Telar', 'Tamaño único'] }
  ];

  const AUCTION_END = new Date('2026-08-04T21:00:00-03:00').getTime();

  const state = {
    filter: 'todos',
    cart: {}, // id -> qty
    subscribed: false,
    checkedOut: false,
    openId: null
  };

  const money = n => '$ ' + n.toLocaleString('es-AR');
  const catLabel = id => (CATS.find(c => c.id === id) || {}).label || '';
  const productById = id => PRODUCTS.find(p => p.id === id);

  function svgIcon(paths, size) {
    const s = size || 34;
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('width', s);
    svg.setAttribute('height', s);
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2.75');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    paths.forEach(d => {
      const p = document.createElementNS(ns, 'path');
      p.setAttribute('d', d);
      svg.appendChild(p);
    });
    return svg;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    for (const k in attrs || {}) {
      if (k === 'text') node.textContent = attrs[k];
      else if (k === 'html') node.innerHTML = attrs[k];
      else node.setAttribute(k, attrs[k]);
    }
    (children || []).forEach(c => c && node.appendChild(c));
    return node;
  }

  // ── Toast ──────────────────────────────────────────────────────────────
  const toastEl = document.querySelector('[data-toast]');
  let toastTimer = null;
  function flash(msg) {
    clearTimeout(toastTimer);
    toastEl.textContent = msg;
    toastEl.hidden = false;
    toastTimer = setTimeout(() => { toastEl.hidden = true; }, 2600);
  }

  // ── Mobile nav ────────────────────────────────────────────────────────
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navPanel = document.querySelector('[data-nav-panel]');
  function setMenuOpen(open) {
    navPanel.setAttribute('data-open', open ? '1' : '0');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  navToggle.addEventListener('click', () => {
    setMenuOpen(navPanel.getAttribute('data-open') !== '1');
  });
  document.querySelectorAll('[data-close-menu]').forEach(a => {
    a.addEventListener('click', () => setMenuOpen(false));
  });

  // ── Cart ──────────────────────────────────────────────────────────────
  const cartWrap = document.querySelector('[data-cart-wrap]');
  const cartItemsEl = document.querySelector('[data-cart-items]');
  const cartCountEl = document.querySelector('[data-cart-count]');
  const cartSubtotalEl = document.querySelector('[data-cart-subtotal]');
  const cartShippingEl = document.querySelector('[data-cart-shipping]');
  const cartTotalEl = document.querySelector('[data-cart-total]');
  const checkoutBtn = document.querySelector('[data-checkout]');

  function openCart() { cartWrap.style.display = 'flex'; setMenuOpen(false); }
  function closeCart() { cartWrap.style.display = 'none'; }
  document.querySelector('[data-open-cart]').addEventListener('click', openCart);
  document.querySelectorAll('[data-close-cart]').forEach(b => b.addEventListener('click', closeCart));

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

    cartItemsEl.innerHTML = '';
    if (ids.length === 0) {
      cartItemsEl.appendChild(el('div', { style: 'text-align:center; padding:56px 12px; color:#82796a' }, [
        el('div', { style: 'width:72px; height:72px; border-radius:999px; background:#ebddc5; margin:0 auto 20px' }),
        el('p', { style: 'font-size:15px; line-height:1.55; margin:0', html: 'Todavía no agregaste nada.<br>Volvé a la tienda y elegí algo lindo.' })
      ]));
    } else {
      ids.forEach(id => {
        const p = productById(id);
        const qty = state.cart[id];
        const row = el('div', { style: 'display:flex; gap:14px; align-items:flex-start' }, [
          el('span', { style: "width:64px; height:64px; border-radius:16px; background:#0b3325; color:#f7c9df; display:flex; align-items:center; justify-content:center; font-family:'Cinzel',serif; font-size:22px; flex-shrink:0", text: p.name.charAt(0) }),
          el('div', { style: 'flex:1; min-width:0' }, [
            el('div', { style: "font-family:'Cinzel',serif; font-size:15px; font-weight:600; color:#0b3325; line-height:1.3", text: p.name }),
            el('div', { style: 'font-size:12.5px; color:#82796a; margin-top:3px', text: money(p.price) + ' c/u' }),
            el('div', { style: 'display:flex; align-items:center; gap:10px; margin-top:10px' }, [
              el('button', { type: 'button', class: 'btn btn-secondary btn-icon cart-qty-btn', 'aria-label': 'Quitar uno', text: '−' }),
              el('span', { style: 'font-size:14px; font-weight:700; color:#0b3325; min-width:18px; text-align:center', text: String(qty) }),
              el('button', { type: 'button', class: 'btn btn-secondary btn-icon cart-qty-btn', 'aria-label': 'Sumar uno', text: '+' }),
              el('button', { type: 'button', style: 'margin-left:auto; background:none; border:0; cursor:pointer; font-family:inherit; font-size:12.5px; color:#8c491a; text-decoration:underline', text: 'Quitar' })
            ])
          ]),
          el('div', { style: "font-family:'Cinzel',serif; font-size:15px; font-weight:600; color:#0b3325; white-space:nowrap", text: money(p.price * qty) })
        ]);
        const [decBtn, incBtn, removeBtn] = row.querySelectorAll('button');
        decBtn.addEventListener('click', () => setQty(id, qty - 1));
        incBtn.addEventListener('click', () => setQty(id, qty + 1));
        removeBtn.addEventListener('click', () => setQty(id, 0));
        cartItemsEl.appendChild(row);
      });
    }

    cartSubtotalEl.textContent = money(subtotal);
    cartShippingEl.textContent = subtotal === 0 ? '—' : (shipping === 0 ? 'Gratis' : money(shipping));
    cartTotalEl.textContent = money(subtotal + shipping);
    checkoutBtn.textContent = state.checkedOut ? 'Redirigiendo a Mercado Pago…' : 'Finalizar compra';
  }

  checkoutBtn.addEventListener('click', () => {
    const { ids } = cartTotals();
    if (ids.length === 0) { flash('El carrito está vacío'); return; }
    state.checkedOut = true;
    renderCart();
    flash('Demo: acá arranca el checkout');
  });

  // ── Categories ────────────────────────────────────────────────────────
  const catGrid = document.querySelector('[data-cat-grid]');
  function renderCategories() {
    catGrid.innerHTML = '';
    CATS.forEach(cat => {
      const count = PRODUCTS.filter(p => p.cat === cat.id).length;
      const btn = el('button', { type: 'button', class: 'cat-btn' }, [
        el('span', { style: 'width:100%; aspect-ratio:1; border-radius:999px; display:flex; align-items:center; justify-content:center; background:#e1eecc; color:#3d472b; box-shadow:0 3px 10px rgba(46,43,37,.16)' }, [svgIcon(CAT_ICONS[cat.id])]),
        el('span', { style: "font-family:'Cinzel',serif; font-size:16px; font-weight:600; color:#0b3325; letter-spacing:.03em; text-align:center", text: cat.label }),
        el('span', { style: 'font-size:12px; color:#82796a; margin-top:-8px', text: count + ' productos' })
      ]);
      btn.addEventListener('click', () => {
        state.filter = cat.id;
        renderChips();
        renderProducts();
        const target = document.getElementById('productos');
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      });
      catGrid.appendChild(btn);
    });
  }

  // ── Filter chips ──────────────────────────────────────────────────────
  const chipsWrap = document.querySelector('[data-filter-chips]');
  function renderChips() {
    chipsWrap.innerHTML = '';
    const items = [{ id: 'todos', label: 'Todo' }].concat(CATS);
    items.forEach(c => {
      const active = state.filter === c.id;
      const btn = el('button', {
        type: 'button',
        class: 'btn ' + (active ? 'btn-primary' : 'btn-secondary'),
        style: 'padding:9px 20px; font-size:14px',
        text: c.label
      });
      btn.addEventListener('click', () => {
        state.filter = c.id;
        renderChips();
        renderProducts();
      });
      chipsWrap.appendChild(btn);
    });
  }

  // ── Products ──────────────────────────────────────────────────────────
  const productGrid = document.querySelector('[data-product-grid]');
  const resultsLabel = document.querySelector('[data-results-label]');

  function stockLabel(p, big) {
    if (big) return p.stock > 8 ? 'En stock — envío inmediato' : 'Quedan ' + p.stock + ' unidades';
    return p.stock > 8 ? 'En stock' : 'Quedan ' + p.stock;
  }

  function renderProducts() {
    const list = state.filter === 'todos' ? PRODUCTS : PRODUCTS.filter(p => p.cat === state.filter);
    resultsLabel.textContent = list.length + (list.length === 1 ? ' producto disponible' : ' productos disponibles');

    productGrid.innerHTML = '';
    list.forEach(p => {
      const imgBtn = el('button', { type: 'button', style: 'border:0; padding:0; background:#ebddc5; cursor:pointer; display:block; position:relative; aspect-ratio:1' }, [
        el('img', { src: PRODUCT_IMAGES[p.id], alt: p.name, style: 'width:100%; height:100%; object-fit:cover' }),
        p.badge ? el('span', { style: 'position:absolute; top:14px; left:14px; background:#ee8fbe; color:#0b3325; font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; padding:6px 12px; border-radius:999px; pointer-events:none', text: p.badge }) : null
      ]);
      imgBtn.addEventListener('click', () => openProductModal(p.id));

      const addBtn = el('button', { type: 'button', class: 'btn btn-primary', style: 'background:#0b3325; border-color:#0b3325; width:100%; margin-top:12px; padding:11px 16px; font-size:14px', text: 'Agregar al carrito' });
      addBtn.addEventListener('click', () => addToCart(p.id));

      const card = el('article', { class: 'card product-card' }, [
        imgBtn,
        el('div', { style: 'padding:20px 20px 22px; display:flex; flex-direction:column; gap:9px; flex:1' }, [
          el('div', { style: 'font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:#82796a; font-weight:700', text: catLabel(p.cat) }),
          el('h3', { style: "font-family:'Cinzel',serif; font-weight:600; font-size:17.5px; line-height:1.25; color:#0b3325; margin:0; letter-spacing:.01em; text-wrap:pretty", text: p.name }),
          el('div', { style: 'font-size:13px; color:#645c50; line-height:1.45', text: p.short }),
          el('div', { style: 'margin-top:auto; padding-top:14px; display:flex; align-items:baseline; justify-content:space-between; gap:10px' }, [
            el('span', { style: "font-family:'Cinzel',serif; font-size:20px; font-weight:600; color:#0b3325", text: money(p.price) }),
            el('span', { style: 'font-size:11.5px; color:#728157; font-weight:600', text: stockLabel(p, false) })
          ]),
          addBtn
        ])
      ]);
      productGrid.appendChild(card);
    });
  }

  // ── Product modal ────────────────────────────────────────────────────
  const modalWrap = document.querySelector('[data-product-modal-wrap]');
  const modalImg = document.querySelector('[data-modal-img]');
  const modalCategory = document.querySelector('[data-modal-category]');
  const modalName = document.querySelector('[data-modal-name]');
  const modalPrice = document.querySelector('[data-modal-price]');
  const modalStock = document.querySelector('[data-modal-stock]');
  const modalDesc = document.querySelector('[data-modal-desc]');
  const modalTags = document.querySelector('[data-modal-tags]');
  const modalAdd = document.querySelector('[data-modal-add]');
  const modalSku = document.querySelector('[data-modal-sku]');

  function openProductModal(id) {
    const p = productById(id);
    if (!p) return;
    state.openId = id;
    modalImg.src = PRODUCT_IMAGES[p.id];
    modalImg.alt = p.name;
    modalCategory.textContent = catLabel(p.cat);
    modalName.textContent = p.name;
    modalPrice.textContent = money(p.price);
    modalStock.textContent = stockLabel(p, true);
    modalDesc.textContent = p.desc;
    modalTags.innerHTML = '';
    p.tags.forEach(t => modalTags.appendChild(el('span', { class: 'tag tag-neutral', text: t })));
    modalSku.textContent = 'Código LP-' + p.id.toUpperCase() + ' · Envío en 48–72 h a todo el país · Retiro sin cargo en el local.';
    modalWrap.style.display = 'flex';
  }
  function closeProductModal() { modalWrap.style.display = 'none'; state.openId = null; }
  document.querySelectorAll('[data-close-product]').forEach(b => b.addEventListener('click', closeProductModal));
  modalAdd.addEventListener('click', () => {
    if (!state.openId) return;
    addToCart(state.openId);
    closeProductModal();
    openCart();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (modalWrap.style.display !== 'none') closeProductModal();
    else if (cartWrap.style.display !== 'none') closeCart();
  });

  // ── Auction countdown ─────────────────────────────────────────────────
  const auctionEl = document.querySelector('[data-auction-countdown]');
  function tickAuction() {
    const ms = Math.max(0, AUCTION_END - Date.now());
    if (ms <= 0) { auctionEl.textContent = 'Cerrada'; return; }
    const d = Math.floor(ms / 86400000);
    const h = Math.floor(ms / 3600000) % 24;
    auctionEl.textContent = 'Cierra en ' + d + ' d ' + h + ' h';
  }
  tickAuction();
  setInterval(tickAuction, 30000);

  document.querySelector('[data-subscribe-form]').addEventListener('submit', e => {
    e.preventDefault();
    if (state.subscribed) return;
    state.subscribed = true;
    document.querySelector('[data-subscribe-label]').textContent = '¡Anotado!';
    flash('Te avisamos del próximo remate');
  });
  document.querySelector('[data-bid]').addEventListener('click', () => {
    flash('Demo: se abre el formulario de oferta');
  });

  // ── Contact form ──────────────────────────────────────────────────────
  const contactForm = document.querySelector('[data-contact-form]');
  const contactSent = document.querySelector('[data-contact-sent]');
  const contactSentName = document.querySelector('[data-contact-sent-name]');
  const contactError = document.querySelector('[data-contact-error]');

  function setContactError(msg) {
    if (msg) { contactError.textContent = msg; contactError.hidden = false; }
    else { contactError.hidden = true; contactError.textContent = ''; }
  }
  contactForm.querySelectorAll('input, textarea').forEach(f => {
    f.addEventListener('input', () => setContactError(''));
  });

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm.nombre.value.trim();
    const mail = contactForm.mail.value.trim();
    const msg = contactForm.consulta.value.trim();
    if (!name) return setContactError('Nos falta tu nombre.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) return setContactError('Revisá el correo, no parece válido.');
    if (msg.length < 8) return setContactError('Contanos un poco más de qué necesitás.');
    setContactError('');
    contactSentName.textContent = name;
    contactForm.style.display = 'none';
    contactSent.hidden = false;
    flash('Consulta enviada');
  });
  document.querySelector('[data-contact-reset]').addEventListener('click', () => {
    contactForm.reset();
    setContactError('');
    contactSent.hidden = true;
    contactForm.style.display = 'flex';
  });

  // ── Init ──────────────────────────────────────────────────────────────
  renderCategories();
  renderChips();
  renderProducts();
  renderCart();
})();
