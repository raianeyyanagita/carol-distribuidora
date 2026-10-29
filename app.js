/**
 * Carol Distribuidora — Catálogo Interativo, Orçamento & Back-End Cloud (Supabase REST API)
 * Divinópolis - MG | WhatsApp Comercial: (37) 98852-8261 | Instagram: @caroldistribuidora_oficial
 */

const WHATSAPP_NUMBER = '5537988528261';
const INSTAGRAM_URL = 'https://www.instagram.com/caroldistribuidora_oficial';

const STORAGE_PRODUCTS_KEY = 'carol_catalog_products_v4';
const STORAGE_HERO_KEY = 'carol_hero_photo_v4';
const STORAGE_CART_KEY = 'carol_quote_cart_v4';
const STORAGE_SUPABASE_CONFIG_KEY = 'carol_supabase_config_v1';

// Caso queira deixar as credenciais do Supabase fixas no código para todos os dispositivos,
// basta preencher abaixo ou configurar diretamente na aba "Banco na Nuvem" do Painel ADM:
const FIXED_SUPABASE_URL = '';
const FIXED_SUPABASE_ANON_KEY = '';

const DEFAULT_HERO_IMAGE = 'assets/images/hero-rustico-mineiro.png';

const DEFAULT_PRODUCTS = [
  {
    id: 'cacarola-esmaltada-ferro',
    name: 'Caçarola Esmaltada em Ferro Fundido',
    category: 'esmaltadas',
    categoryLabel: 'Carol Distribuidora • Linha Vitrificada',
    badge: 'Ferro Fundido Esmaltado',
    badgeType: 'default',
    featured: true,
    image: 'assets/images/cacarola-esmaltada.png',
    description: 'Charmosa, eficiente e econômica. Retém o calor por muito mais tempo, conta com pomel em aço inox e vai direto do fogão para a mesa posta.',
    colors: ['#C8281E', '#E85C1C', '#F2A922', '#1C1C1C'],
    specs: ['Ferro Fundido', 'Pomel em Inox', 'Retenção Térmica Nobre', 'Atacado & Varejo']
  },
  {
    id: 'cacarola-aluminio-colorida',
    name: 'Kit de Caçarolas em Alumínio Colorido',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Fabricação Própria',
    badge: 'Fabricação Própria',
    badgeType: 'fab',
    featured: true,
    image: 'assets/images/cacarola-aluminio-turquesa.png',
    description: 'Versátil e cheia de estilo. Disponível com acabamento antiaderente ou polido, alças anatômicas em baquelite antitérmico e variedade de cores exclusivas.',
    colors: ['#1AA3B8', '#C8281E', '#2B2B2B', '#D9531E', '#C0C0C0'],
    specs: ['Opção Antiaderente', 'Baquelite Antitérmico', 'Opções de Cores', 'Fabricação Própria']
  },
  {
    id: 'cafeteira-italiana-moka',
    name: 'Cafeteira Italiana Tradicional em Alumínio',
    category: 'aluminio',
    categoryLabel: 'Carol Distribuidora • Hora do Café',
    badge: 'Sucesso de Vendas',
    badgeType: 'default',
    featured: true,
    image: 'assets/images/cafeteira-italiana.png',
    description: 'O autêntico método por pressão de vapor que extrai o verdadeiro aroma e corpo do café. Estrutura oitavada duradoura com válvula de segurança.',
    colors: ['#C0C0C0', '#C8281E', '#1C1C1C'],
    specs: ['Alumínio Reforçado', 'Válvula de Segurança', '3, 6, 9 e 12 Xícaras']
  },
  {
    id: 'jogo-aluminio-batido-polido',
    name: 'Jogo de Panelas Alumínio Batido Grosso Polido (5 Peças)',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Fabricação Própria',
    badge: 'Fabricação Própria',
    badgeType: 'fab',
    featured: false,
    image: 'assets/images/aluminio-collection.png',
    description: 'Conjunto tradicional mineiro do Nº 16 ao 24 em alumínio batido grosso de alto brilho. Não enferruja, distribui o calor por igual e dura gerações.',
    colors: ['#D6D6D6', '#2B2B2B'],
    specs: ['Nº 16 ao 24', 'Alumínio Batido Grosso', 'Tampas Inclusas']
  },
  {
    id: 'ferro-barro-tacho-cobre',
    name: 'Panelas de Ferro Fundido, Barro & Tachos de Cobre',
    category: 'ferro-barro',
    categoryLabel: 'Tradição da Roça & Fogão a Lenha',
    badge: 'Raiz Mineira',
    badgeType: 'default',
    featured: false,
    image: 'assets/images/ferro-barro-cobre.png',
    description: 'Linha rústica completa: panelas e chapas de ferro fundido, panelas de barro legítimas para feijoadas e moquecas, e tachos de cobre puro para doces.',
    colors: ['#1E1E1E', '#B85A28', '#8C4326'],
    specs: ['Fogão a Lenha & Gás', 'Ferro / Barro / Cobre', 'Atacado & Varejo']
  },
  {
    id: 'caldeirao-hotel-industrial',
    name: 'Caldeirões Linha Hotel & Suprimentos de Fundição',
    category: 'fundicao',
    categoryLabel: 'Linha Industrial & Insumos p/ Fundição',
    badge: 'Polo Divinópolis',
    badgeType: 'default',
    featured: false,
    image: 'assets/images/fundicao-acessorios.png',
    description: 'Caldeirões linha hotel de alta litragem e linha completa de acessórios para fundição e repuxo em geral: cabos de baquelite, alças, poméis, rebites e tampas.',
    colors: ['#C0C0C0', '#1C1C1C'],
    specs: ['Cabos & Poméis Baquelite', 'Insumos p/ Repuxo', 'Preços p/ Fábricas']
  }
];

let productsList = [];
let quoteCart = [];
let currentCategory = 'todos';
let searchQuery = '';
let isAdminUnlocked = false;
let pendingAdminImageDataUrl = '';

/* ==========================================================================
   CAMADA DE BACK-END NA NUVEM (SUPABASE REST API) + FALLBACK LOCAL
   ========================================================================== */

function getSupabaseConfig() {
  if (FIXED_SUPABASE_URL && FIXED_SUPABASE_ANON_KEY) {
    return { url: FIXED_SUPABASE_URL.replace(/\/$/, ''), key: FIXED_SUPABASE_ANON_KEY };
  }
  try {
    const saved = localStorage.getItem(STORAGE_SUPABASE_CONFIG_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.url && parsed.key) {
        return { url: parsed.url.replace(/\/$/, ''), key: parsed.key.trim() };
      }
    }
  } catch (e) {}
  return null;
}

function updateCloudBadgeUI() {
  const badge = document.getElementById('cloudStatusBadge');
  if (!badge) return;
  const cfg = getSupabaseConfig();
  if (cfg) {
    badge.textContent = '☁️ Nuvem Conectada (Supabase)';
    badge.classList.add('connected');
  } else {
    badge.textContent = '💾 Modo Local (Configure a Nuvem)';
    badge.classList.remove('connected');
  }
}

async function fetchFromSupabase() {
  const cfg = getSupabaseConfig();
  if (!cfg) return false;

  try {
    const headers = {
      'apikey': cfg.key,
      'Authorization': `Bearer ${cfg.key}`
    };

    // 1. Busca produtos do banco na nuvem
    const res = await fetch(`${cfg.url}/rest/v1/products?select=*&order=created_at.asc`, { headers });
    if (res.ok) {
      const rows = await res.json();
      if (Array.isArray(rows) && rows.length > 0) {
        productsList = rows.map(r => ({
          id: r.id,
          name: r.name,
          category: r.category,
          categoryLabel: r.category_label || 'Carol Distribuidora',
          badge: r.badge || 'Destaque',
          badgeType: r.badge_type || 'fab',
          featured: Boolean(r.featured),
          image: r.image,
          description: r.description,
          colors: r.colors || ['#B85222', '#1C1510'],
          specs: r.specs || ['Atacado & Varejo']
        }));
        localStorage.setItem(STORAGE_PRODUCTS_KEY, JSON.stringify(productsList));
      } else if (Array.isArray(rows) && rows.length === 0) {
        // Se a tabela na nuvem estiver vazia, popula automaticamente com os produtos iniciais
        await syncAllProductsToSupabase(productsList);
      }
    }

    // 2. Busca foto de capa (hero) se houver
    const heroRes = await fetch(`${cfg.url}/rest/v1/store_settings?key=eq.hero_image&select=value`, { headers });
    if (heroRes.ok) {
      const settingsRows = await heroRes.json();
      if (settingsRows.length > 0 && settingsRows[0].value) {
        const heroImg = document.getElementById('heroMainImage');
        if (heroImg) heroImg.src = settingsRows[0].value;
        localStorage.setItem(STORAGE_HERO_KEY, settingsRows[0].value);
      }
    }

    return true;
  } catch (err) {
    console.warn('Erro ao sincronizar com Supabase:', err);
    return false;
  }
}

async function upsertProductToSupabase(product) {
  const cfg = getSupabaseConfig();
  if (!cfg) return;

  const payload = {
    id: product.id,
    name: product.name,
    category: product.category,
    category_label: product.categoryLabel,
    badge: product.badge,
    badge_type: product.badgeType || 'fab',
    featured: Boolean(product.featured),
    image: product.image,
    description: product.description,
    colors: product.colors || ['#B85222', '#1C1510'],
    specs: product.specs || ['Atacado & Varejo']
  };

  await fetch(`${cfg.url}/rest/v1/products`, {
    method: 'POST',
    headers: {
      'apikey': cfg.key,
      'Authorization': `Bearer ${cfg.key}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates'
    },
    body: JSON.stringify(payload)
  });
}

async function deleteProductFromSupabase(productId) {
  const cfg = getSupabaseConfig();
  if (!cfg) return;

  await fetch(`${cfg.url}/rest/v1/products?id=eq.${encodeURIComponent(productId)}`, {
    method: 'DELETE',
    headers: {
      'apikey': cfg.key,
      'Authorization': `Bearer ${cfg.key}`
    }
  });
}

async function syncAllProductsToSupabase(list) {
  const cfg = getSupabaseConfig();
  if (!cfg) return;

  const payloads = list.map(product => ({
    id: product.id,
    name: product.name,
    category: product.category,
    category_label: product.categoryLabel,
    badge: product.badge,
    badge_type: product.badgeType || 'fab',
    featured: Boolean(product.featured),
    image: product.image,
    description: product.description,
    colors: product.colors || ['#B85222', '#1C1510'],
    specs: product.specs || ['Atacado & Varejo']
  }));

  await fetch(`${cfg.url}/rest/v1/products`, {
    method: 'POST',
    headers: {
      'apikey': cfg.key,
      'Authorization': `Bearer ${cfg.key}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates'
    },
    body: JSON.stringify(payloads)
  });
}

async function saveHeroImageToSupabase(dataUrl) {
  const cfg = getSupabaseConfig();
  if (!cfg) return;

  await fetch(`${cfg.url}/rest/v1/store_settings`, {
    method: 'POST',
    headers: {
      'apikey': cfg.key,
      'Authorization': `Bearer ${cfg.key}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates'
    },
    body: JSON.stringify({ key: 'hero_image', value: dataUrl })
  });
}

// Inicialização de dados locais + sincronização com a nuvem
async function loadStoreData() {
  try {
    const savedProducts = localStorage.getItem(STORAGE_PRODUCTS_KEY);
    if (savedProducts) {
      productsList = JSON.parse(savedProducts);
    } else {
      productsList = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    }
  } catch (e) {
    productsList = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  }

  try {
    const savedHero = localStorage.getItem(STORAGE_HERO_KEY);
    const heroImg = document.getElementById('heroMainImage');
    if (heroImg && savedHero) {
      heroImg.src = savedHero;
    }
  } catch (e) {}

  try {
    const savedCart = localStorage.getItem(STORAGE_CART_KEY);
    if (savedCart) quoteCart = JSON.parse(savedCart);
  } catch (e) {
    quoteCart = [];
  }

  renderShowcase();
  renderProducts();
  updateCartUI();
  updateCloudBadgeUI();

  // Sincroniza em segundo plano com o Supabase (se configurado)
  const synced = await fetchFromSupabase();
  if (synced) {
    renderShowcase();
    renderProducts();
    renderAdminProductsList();
  }
}

function saveProductsData() {
  try {
    localStorage.setItem(STORAGE_PRODUCTS_KEY, JSON.stringify(productsList));
  } catch (e) {
    alert('Atenção: A imagem escolhida é muito grande. Tente uma foto menor.');
  }
  renderShowcase();
  renderProducts();
  renderAdminProductsList();
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(quoteCart));
  } catch (e) {}
  updateCartUI();
}

/* ==========================================================================
   RENDERIZAÇÃO DA VITRINE & CATÁLOGO (SEM ÍCONES DE WHATSAPP REPETIDOS)
   ========================================================================== */

function renderShowcase() {
  const showcaseGrid = document.getElementById('showcaseGrid');
  if (!showcaseGrid) return;

  const featuredItems = productsList.filter(p => p.featured);

  showcaseGrid.innerHTML = featuredItems.map(product => {
    const inCart = quoteCart.find(i => i.id === product.id);
    const specsHtml = (product.specs || []).map(s => `<span class="spec-chip">${s}</span>`).join('');

    const adminOverlay = isAdminUnlocked ? `
      <div class="admin-card-actions">
        <button type="button" class="btn-admin-edit" onclick="openEditProduct('${product.id}')">✎ Editar / Foto</button>
      </div>
    ` : '';

    return `
      <article class="showcase-card">
        <div class="showcase-media">
          ${adminOverlay}
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <span class="showcase-badge ${product.badgeType === 'fab' ? 'badge-copper' : ''}">${product.badge}</span>
        </div>
        <div class="showcase-body">
          <div class="showcase-brand-line">${product.categoryLabel}</div>
          <h3 class="showcase-title">${product.name}</h3>
          <p class="showcase-desc">${product.description}</p>
          <div class="showcase-specs">${specsHtml}</div>
          <div class="showcase-action-bar">
            <button type="button" class="btn-card-add ${inCart ? 'added' : ''}" onclick="addToQuote('${product.id}')">
              ${inCart ? `✓ Adicionado ao Orçamento (${inCart.qty})` : '+ Adicionar ao Orçamento'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = productsList.filter(item => {
    const matchesCategory = currentCategory === 'todos' || item.category === currentCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = !q ||
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.categoryLabel.toLowerCase().includes(q) ||
      (item.specs || []).some(s => s.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 44px 20px; background: #FFF; border-radius: 14px; border: 1px solid var(--border-light);">
        <h3 style="font-family: var(--font-serif); margin-bottom: 8px;">Nenhum modelo encontrado para "${searchQuery}"</h3>
        <p style="color: var(--text-secondary); margin-bottom: 18px;">Trabalhamos com centenas de itens na loja física em Divinópolis. Entre em contato na seção de atendimento abaixo!</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const inCart = quoteCart.find(i => i.id === product.id);
    const specsHtml = (product.specs || []).map(s => `<span class="spec-pill">${s}</span>`).join('');
    const colorsHtml = (product.colors || []).map(c => `<span class="color-dot" style="background:${c};"></span>`).join('');

    const adminOverlay = isAdminUnlocked ? `
      <div class="admin-card-actions">
        <button type="button" class="btn-admin-edit" onclick="openEditProduct('${product.id}')">✎ Editar</button>
        <button type="button" class="btn-admin-delete" onclick="deleteProduct('${product.id}')">🗑</button>
      </div>
    ` : '';

    return `
      <article class="product-card" data-category="${product.category}">
        <div class="product-thumb">
          ${adminOverlay}
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <span class="product-tag ${product.badgeType === 'fab' ? 'tag-fab' : ''}">${product.badge}</span>
        </div>
        <div class="product-body">
          <div class="product-category">${product.categoryLabel}</div>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          ${colorsHtml ? `
          <div class="product-colors">
            <span>Opções de Acabamento:</span>
            <div class="color-dots-row">${colorsHtml}</div>
          </div>` : ''}
          <div class="product-specs">${specsHtml}</div>
          <div class="product-actions">
            <button type="button" class="btn-add-quote ${inCart ? 'added' : ''}" onclick="addToQuote('${product.id}')">
              ${inCart ? `✓ Adicionado ao Orçamento (${inCart.qty})` : '+ Adicionar ao Orçamento'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

window.addToQuote = function(productId) {
  const product = productsList.find(p => p.id === productId);
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
  renderShowcase();
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
  renderShowcase();
  renderProducts();
};

function updateCartUI() {
  const totalCount = quoteCart.reduce((acc, item) => acc + item.qty, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = totalCount;

  const listEl = document.getElementById('quoteItemsList');
  if (!listEl) return;

  if (quoteCart.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 36px 14px; color: var(--text-secondary);">
        <p style="font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">Sua lista de orçamento está vazia</p>
        <p style="font-size: 0.85rem;">Clique em "+ Adicionar ao Orçamento" nas panelas desejadas para montar seu pedido.</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = quoteCart.map(item => `
    <div class="quote-item">
      <div>
        <strong style="display:block; font-size:0.9rem;">${item.name}</strong>
        <span style="font-size:0.75rem; color:var(--text-muted);">${item.categoryLabel}</span>
      </div>
      <div class="quote-qty-controls">
        <button type="button" class="qty-btn" onclick="changeQuoteQty('${item.id}', -1)">−</button>
        <span style="min-width: 22px; text-align: center; font-weight: 700;">${item.qty}</span>
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
    `*OLÁ, CAROL DISTRIBUIDORA!* 🍲`,
    `Gostaria de solicitar um orçamento pelo site oficial:`,
    ``
  ];

  if (clientName) lines.push(`*Cliente/Empresa:* ${clientName}`);
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
    lines.push(`*Observações / Cores:* ${clientNotes}`);
  }

  const finalMessage = encodeURIComponent(lines.join('\n'));
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${finalMessage}`, '_blank', 'noopener');
};

/* ==========================================================================
   SISTEMA ADMINISTRATIVO & CONEXÃO COM BACK-END SUPABASE
   ========================================================================== */

function compressImageFile(file, callback) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const maxDim = 900;
      let w = img.width;
      let h = img.height;
      if (w > h && w > maxDim) {
        h = Math.round((h * maxDim) / w);
        w = maxDim;
      } else if (h > maxDim) {
        w = Math.round((w * maxDim) / h);
        h = maxDim;
      }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
      callback(dataUrl);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

window.openAdminModal = function() {
  isAdminUnlocked = true;
  renderShowcase();
  renderProducts();
  renderAdminProductsList();
  updateCloudBadgeUI();

  const cfg = getSupabaseConfig();
  const urlInput = document.getElementById('supabaseUrlInput');
  const keyInput = document.getElementById('supabaseKeyInput');
  if (cfg && urlInput && keyInput) {
    urlInput.value = cfg.url;
    keyInput.value = cfg.key;
  }

  const modal = document.getElementById('adminModalBackdrop');
  if (modal) modal.classList.add('open');
};

window.closeAdminModal = function() {
  const modal = document.getElementById('adminModalBackdrop');
  if (modal) modal.classList.remove('open');
};

window.switchAdminTab = function(tabName) {
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  document.getElementById('adminTabForm').style.display = tabName === 'form' ? 'block' : 'none';
  document.getElementById('adminTabList').style.display = tabName === 'list' ? 'block' : 'none';
  document.getElementById('adminTabHero').style.display = tabName === 'hero' ? 'block' : 'none';
  document.getElementById('adminTabCloud').style.display = tabName === 'cloud' ? 'block' : 'none';
};

window.saveSupabaseConnection = async function(event) {
  event.preventDefault();
  const url = document.getElementById('supabaseUrlInput').value.trim();
  const key = document.getElementById('supabaseKeyInput').value.trim();

  if (!url || !key) {
    localStorage.removeItem(STORAGE_SUPABASE_CONFIG_KEY);
    updateCloudBadgeUI();
    alert('Configuração de nuvem removida. O site está usando armazenamento local.');
    return;
  }

  localStorage.setItem(STORAGE_SUPABASE_CONFIG_KEY, JSON.stringify({ url, key }));
  updateCloudBadgeUI();

  await syncAllProductsToSupabase(productsList);
  const ok = await fetchFromSupabase();
  if (ok) {
    alert('Conectado ao Supabase com sucesso! Todos os produtos e fotos foram sincronizados na nuvem.');
  } else {
    alert('Credenciais salvas! Certifique-se de ter executado o arquivo supabase-setup.sql no SQL Editor do seu Supabase.');
  }
};

window.resetProductForm = function() {
  document.getElementById('adminProductId').value = '';
  document.getElementById('adminProductName').value = '';
  document.getElementById('adminProductCategory').value = 'esmaltadas';
  document.getElementById('adminProductCategoryLabel').value = 'Carol Distribuidora • Linha Especial';
  document.getElementById('adminProductBadge').value = 'Lançamento';
  document.getElementById('adminProductFeatured').value = 'true';
  document.getElementById('adminProductSpecs').value = 'Alta Durabilidade, Atacado & Varejo';
  document.getElementById('adminProductDesc').value = '';
  document.getElementById('adminProductImageUrl').value = '';
  pendingAdminImageDataUrl = '';
  const preview = document.getElementById('adminPhotoPreview');
  if (preview) preview.src = 'assets/images/cacarola-esmaltada.png';
  document.getElementById('adminFormTitle').textContent = 'Adicionar Novo Modelo de Panela / Produto';
};

window.openEditProduct = function(productId) {
  const prod = productsList.find(p => p.id === productId);
  if (!prod) return;

  openAdminModal();
  switchAdminTab('form');

  document.getElementById('adminProductId').value = prod.id;
  document.getElementById('adminProductName').value = prod.name;
  document.getElementById('adminProductCategory').value = prod.category;
  document.getElementById('adminProductCategoryLabel').value = prod.categoryLabel;
  document.getElementById('adminProductBadge').value = prod.badge;
  document.getElementById('adminProductFeatured').value = prod.featured ? 'true' : 'false';
  document.getElementById('adminProductSpecs').value = (prod.specs || []).join(', ');
  document.getElementById('adminProductDesc').value = prod.description;
  document.getElementById('adminProductImageUrl').value = prod.image.startsWith('data:') ? '' : prod.image;
  pendingAdminImageDataUrl = prod.image;

  const preview = document.getElementById('adminPhotoPreview');
  if (preview) preview.src = prod.image;
  document.getElementById('adminFormTitle').textContent = 'Editando: ' + prod.name;
};

window.saveAdminProduct = async function(event) {
  event.preventDefault();

  const existingId = document.getElementById('adminProductId').value;
  const name = document.getElementById('adminProductName').value.trim();
  const category = document.getElementById('adminProductCategory').value;
  const categoryLabel = document.getElementById('adminProductCategoryLabel').value.trim() || 'Carol Distribuidora';
  const badge = document.getElementById('adminProductBadge').value.trim() || 'Destaque';
  const featured = document.getElementById('adminProductFeatured').value === 'true';
  const specsRaw = document.getElementById('adminProductSpecs').value;
  const description = document.getElementById('adminProductDesc').value.trim();
  const imageUrlInput = document.getElementById('adminProductImageUrl').value.trim();

  const finalImage = pendingAdminImageDataUrl || imageUrlInput || 'assets/images/cacarola-esmaltada.png';
  const specs = specsRaw.split(',').map(s => s.trim()).filter(Boolean);

  let savedItem = null;

  if (existingId) {
    const idx = productsList.findIndex(p => p.id === existingId);
    if (idx !== -1) {
      productsList[idx] = {
        ...productsList[idx],
        name,
        category,
        categoryLabel,
        badge,
        featured,
        specs,
        description,
        image: finalImage
      };
      savedItem = productsList[idx];
    }
  } else {
    const newId = 'prod-' + Date.now();
    savedItem = {
      id: newId,
      name,
      category,
      categoryLabel,
      badge,
      badgeType: 'fab',
      featured,
      image: finalImage,
      description,
      colors: ['#B85222', '#1C1510', '#C0C0C0'],
      specs: specs.length ? specs : ['Atacado & Varejo']
    };
    productsList.unshift(savedItem);
  }

  saveProductsData();
  if (savedItem) {
    await upsertProductToSupabase(savedItem);
  }
  resetProductForm();
  switchAdminTab('list');
};

window.deleteProduct = async function(productId) {
  const prod = productsList.find(p => p.id === productId);
  if (!prod) return;
  if (!confirm(`Deseja realmente remover "${prod.name}" do catálogo?`)) return;

  productsList = productsList.filter(p => p.id !== productId);
  saveProductsData();
  await deleteProductFromSupabase(productId);
};

window.restoreDefaultCatalog = async function() {
  if (!confirm('Deseja restaurar o catálogo e fotos originais de fábrica?')) return;
  localStorage.removeItem(STORAGE_PRODUCTS_KEY);
  localStorage.removeItem(STORAGE_HERO_KEY);
  const heroImg = document.getElementById('heroMainImage');
  if (heroImg) heroImg.src = DEFAULT_HERO_IMAGE;
  productsList = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  saveProductsData();
  await syncAllProductsToSupabase(productsList);
};

function renderAdminProductsList() {
  const container = document.getElementById('adminProductsListContainer');
  if (!container) return;

  container.innerHTML = productsList.map(p => `
    <div class="admin-product-row">
      <img src="${p.image}" alt="${p.name}" />
      <div class="admin-product-info">
        <strong>${p.name}</strong>
        <span>${p.categoryLabel} ${p.featured ? '• ★ Destaque' : ''}</span>
      </div>
      <div style="display:flex; gap:6px;">
        <button type="button" class="btn-admin-edit" onclick="openEditProduct('${p.id}')">✎ Editar / Foto</button>
        <button type="button" class="btn-admin-delete" onclick="deleteProduct('${p.id}')">🗑</button>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  loadStoreData();

  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.filter;
      document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
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

  const fileInput = document.getElementById('adminProductPhotoFile');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      compressImageFile(file, (dataUrl) => {
        pendingAdminImageDataUrl = dataUrl;
        const preview = document.getElementById('adminPhotoPreview');
        if (preview) preview.src = dataUrl;
      });
    });
  }

  const heroFileInput = document.getElementById('adminHeroPhotoFile');
  if (heroFileInput) {
    heroFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      compressImageFile(file, async (dataUrl) => {
        try {
          localStorage.setItem(STORAGE_HERO_KEY, dataUrl);
          const heroImg = document.getElementById('heroMainImage');
          if (heroImg) heroImg.src = dataUrl;
          const heroPreview = document.getElementById('adminHeroPreview');
          if (heroPreview) heroPreview.src = dataUrl;
          await saveHeroImageToSupabase(dataUrl);
          alert('Foto de capa principal atualizada com sucesso!');
        } catch (err) {
          alert('Não foi possível salvar a foto. Tente uma imagem menor.');
        }
      });
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
