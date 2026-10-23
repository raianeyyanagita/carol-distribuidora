/**
 * Carol Distribuidora & Alumínios Carol — Catálogo Rústico Mineiro
 * Divinópolis - MG | WhatsApp Comercial: (37) 98852-8261
 */

const WHATSAPP_NUMBER = '5537988528261';

const PRODUCTS = [
  {
    id: 'cacarola-esmaltada-ferro',
    name: 'Caçarola Esmaltada em Ferro Fundido',
    category: 'esmaltadas',
    categoryLabel: 'Ferro Fundido • Acabamento Esmaltado',
    badge: 'Destaque do Instagram',
    badgeType: 'fab',
    image: 'assets/images/cacarola-esmaltada.png',
    description: 'Charmosas, eficientes e surpreendentemente econômicas! Caçarola em ferro fundido com acabamento esmaltado vitrificado e pomel em inox. Mantém o calor por muito mais tempo e vai direto do fogão à mesa.',
    colors: ['#C8281E', '#E85C1C', '#F2A922', '#1C1C1C'],
    specs: ['Ferro Fundido Esmaltado', 'Pomel Inox', 'Várias Litragem/Tamanhos', 'Atacado & Varejo']
  },
  {
    id: 'cacarola-aluminio-colorida',
    name: 'Kit & Caçarolas em Alumínio Colorido / Craquelado',
    category: 'aluminio',
    categoryLabel: 'Alumínio Carol • Fabricação Própria',
    badge: 'Fabricação Própria',
    badgeType: 'fab',
    image: 'assets/images/cacarola-aluminio-turquesa.png',
    description: 'Versáteis, práticas e cheias de estilo! Caçarolas em alumínio de fabricação própria com opção antiaderente, alças de baquelite antitérmico, borda polida e diversas opções de cores (turquesa, vermelho, preto, craquelado e polido).',
    colors: ['#1AA3B8', '#C8281E', '#2B2B2B', '#D9531E', '#C0C0C0'],
    specs: ['Antiaderente / Polida', 'Fabricação Própria', 'Opções de Cores', 'Alças Baquelite']
  },
  {
    id: 'cafeteira-italiana-moka',
    name: 'Cafeteira Italiana Tradicional em Alumínio',
    category: 'aluminio',
    categoryLabel: 'Hora do Café • Utilidades',
    badge: 'Sucesso de Vendas',
    badgeType: 'fab',
    image: 'assets/images/cafeteira-italiana.png',
    description: 'O verdadeiro café encorpado com aroma de fazenda mineira! Cafeteira Italiana oitavada em alumínio de alta resistência com cabo ergonômico em baquelite e válvula de segurança.',
    colors: ['#C0C0C0', '#C8281E', '#1C1C1C'],
    specs: ['3, 6, 9 e 12 Xícaras', 'Alumínio Oitavado', 'Cabo Baquelite']
  },
  {
    id: 'jogo-aluminio-batido-polido',
    name: 'Jogo de Panelas Alumínio Batido Grosso Polido (5 Peças)',
    category: 'aluminio',
    categoryLabel: 'Alumínio Carol • Fabricação Própria',
    badge: 'Fabricação Própria',
    badgeType: 'fab',
    image: 'assets/images/aluminio-collection.png',
    description: 'Conjunto tradicional mineiro do Nº 16 ao 24 em alumínio batido grosso de alto brilho. Não enferruja, distribui o calor por igual e dura gerações.',
    colors: ['#D6D6D6', '#2B2B2B'],
    specs: ['Nº 16 ao 24', 'Alumínio Batido Grosso', 'Tampas Inclusas']
  },
  {
    id: 'ferro-barro-tacho-cobre',
    name: 'Panelas de Ferro Fundido, Panelas de Barro & Tachos de Cobre',
    category: 'ferro-barro',
    categoryLabel: 'Tradição da Roça & Fogão a Lenha',
    badge: 'Raiz Mineira',
    badgeType: 'default',
    image: 'assets/images/ferro-barro-cobre.png',
    description: 'Linha rústica completa: panelas e chapas de ferro fundido, panelas de barro legítimas para feijoadas e moquecas, e tachos de cobre puro para doces.',
    colors: ['#1E1E1E', '#B85A28', '#8C4326'],
    specs: ['Fogão a Lenha & Gás', 'Ferro / Barro / Cobre', 'Atacado & Varejo']
  },
  {
    id: 'caldeirao-hotel-industrial',
    name: 'Caldeirões, Caçarolas Linha Hotel & Suprimentos de Fundição',
    category: 'fundicao',
    categoryLabel: 'Linha Industrial & Insumos p/ Fundição',
    badge: 'Polo Divinópolis',
    badgeType: 'default',
    image: 'assets/images/fundicao-acessorios.png',
    description: 'Caldeirões linha hotel de alta litragem e linha completa de acessórios para fundição e repuxo em geral: cabos de baquelite, alças, poméis, rebites e tampas.',
    colors: ['#C0C0C0', '#1C1C1C'],
    specs: ['Cabos & Poméis Baquelite', 'Insumos p/ Repuxo', 'Preços p/ Fábricas']
  }
];

let quoteCart = [];
let currentCategory = 'todos';
let searchQuery = '';

try {
  const saved = localStorage.getItem('carol_quote_cart_v2');
  if (saved) quoteCart = JSON.parse(saved);
} catch (e) {
  quoteCart = [];
}

function saveCart() {
  try {
    localStorage.setItem('carol_quote_cart_v2', JSON.stringify(quoteCart));
  } catch (e) {}
  updateCartUI();
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(item => {
    const matchesCategory = currentCategory === 'todos' || item.category === currentCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = !q ||
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.categoryLabel.toLowerCase().includes(q) ||
      item.specs.some(s => s.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--bg-brick-white); border-radius: 14px; border: 2px dashed var(--border-dashed);">
        <h3 style="font-family: var(--font-display); margin-bottom: 8px;">Não encontrou "${searchQuery}" listado aqui?</h3>
        <p style="color: var(--text-brown); margin-bottom: 18px;">Temos centenas de modelos na loja física em Divinópolis! Chame no WhatsApp que enviamos foto e preço na hora.</p>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Carol Distribuidora! Procuro por: ' + searchQuery)}" target="_blank" rel="noopener" class="btn btn-mustard-wa">
          Consultar "${searchQuery}" no WhatsApp (37) 98852-8261
        </a>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const inCart = quoteCart.find(i => i.id === product.id);
    const specsHtml = product.specs.map(s => `<span class="spec-pill">${s}</span>`).join('');
    const colorsHtml = (product.colors || []).map(c => `<span class="color-dot" style="background:${c};"></span>`).join('');
    const waText = encodeURIComponent(`Olá Carol Distribuidora! Vi no site o produto "${product.name}" e gostaria de fazer um orçamento.`);

    return `
      <article class="product-card" data-category="${product.category}">
        <div class="product-thumb">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <span class="product-tag ${product.badgeType === 'fab' ? 'tag-fab' : ''}">${product.badge}</span>
        </div>
        <div class="product-body">
          <div class="product-category">${product.categoryLabel}</div>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          <div class="product-colors">
            <span>Opções de Acabamento/Cor:</span>
            <div class="color-dots-row" style="margin-top:0;">${colorsHtml}</div>
          </div>
          <div class="product-specs">${specsHtml}</div>
          <div class="product-actions">
            <button type="button" class="btn-add-quote ${inCart ? 'added' : ''}" onclick="addToQuote('${product.id}')">
              ${inCart ? `✓ No Orçamento (${inCart.qty})` : '+ Incluir no Orçamento'}
            </button>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waText}" target="_blank" rel="noopener" class="btn-direct-wa" title="Pedir direto no WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

window.addToQuote = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = quoteCart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    quoteCart.push({
      id: product.id,
      name: product.name,
      categoryLabel: product.categoryLabel,
      qty: 1
    });
  }

  saveCart();
  renderProducts();
};

window.changeQuoteQty = function(productId, delta) {
  const idx = quoteCart.findIndex(i => i.id === productId);
  if (idx === -1) return;

  quoteCart[idx].qty += delta;
  if (quoteCart[idx].qty <= 0) {
    quoteCart.splice(idx, 1);
  }
  saveCart();
  renderProducts();
};

window.filterCatalogSection = function(category) {
  currentCategory = category;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });
  renderProducts();
  const catEl = document.getElementById('catalogo');
  if (catEl) catEl.scrollIntoView({ behavior: 'smooth' });
};

function updateCartUI() {
  const totalCount = quoteCart.reduce((acc, item) => acc + item.qty, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = totalCount;

  const listEl = document.getElementById('quoteItemsList');
  if (!listEl) return;

  if (quoteCart.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 40px 14px; color: var(--text-brown);">
        <p style="font-weight: 800; color: var(--text-espresso); margin-bottom: 6px;">Sua lista de orçamento está vazia</p>
        <p style="font-size: 0.86rem;">Adicione Caçarolas Esmaltadas, Caçarolas de Alumínio Coloridas, Cafeteiras Italianas ou Suprimentos para enviar seu pedido no WhatsApp.</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = quoteCart.map(item => `
    <div class="quote-item">
      <div>
        <strong style="display:block; font-size:0.92rem;">${item.name}</strong>
        <span style="font-size:0.76rem; color:var(--text-brown);">${item.categoryLabel}</span>
      </div>
      <div class="quote-qty-controls">
        <button type="button" class="qty-btn" onclick="changeQuoteQty('${item.id}', -1)">−</button>
        <span style="min-width: 22px; text-align: center; font-weight: 800;">${item.qty}</span>
        <button type="button" class="qty-btn" onclick="changeQuoteQty('${item.id}', 1)">+</button>
      </div>
    </div>
  `).join('');
}

window.toggleQuoteDrawer = function(open) {
  const drawer = document.getElementById('quoteDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  if (!drawer || !backdrop) return;

  const shouldOpen = typeof open === 'boolean' ? open : !drawer.classList.contains('open');
  drawer.classList.toggle('open', shouldOpen);
  backdrop.classList.toggle('open', shouldOpen);
};

window.sendQuoteToWhatsApp = function(event) {
  if (event) event.preventDefault();

  const clientName = (document.getElementById('quoteClientName')?.value || '').trim();
  const clientCity = (document.getElementById('quoteClientCity')?.value || '').trim();
  const orderType = document.getElementById('quoteOrderType')?.value || 'Atacado / Revenda';
  const clientNotes = (document.getElementById('quoteClientNotes')?.value || '').trim();

  let lines = [
    `*OLÁ, CAROL DISTRIBUIDORA (ALUMÍNIOS CAROL)!* 🍲`,
    `Gostaria de fazer um orçamento pelo site:`,
    ``
  ];

  if (clientName) lines.push(`*Cliente/Loja:* ${clientName}`);
  if (clientCity) lines.push(`*Cidade/UF:* ${clientCity}`);
  lines.push(`*Modalidade:* ${orderType}`);
  lines.push(``);

  if (quoteCart.length > 0) {
    lines.push(`*ITENS SELECIONADOS:*`);
    quoteCart.forEach((item, idx) => {
      lines.push(`${idx + 1}. *${item.name}* (Qtd: ${item.qty})`);
    });
    lines.push(``);
  }

  if (clientNotes) {
    lines.push(`*Observações / Cores desejadas:* ${clientNotes}`);
  }

  const finalMessage = encodeURIComponent(lines.join('\n'));
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${finalMessage}`, '_blank', 'noopener');
};

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts();
    });
  });

  const searchInput = document.getElementById('catalogSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
    });
  }

  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
});
