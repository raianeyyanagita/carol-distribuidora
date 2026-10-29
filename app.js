/**
 * Carol Distribuidora — Catálogo Interativo, Orçamento & Back-End Cloud (Supabase REST API)
 * Divinópolis - MG | WhatsApp Comercial: (37) 98852-8261 | Instagram: @caroldistribuidora_oficial
 */

const WHATSAPP_NUMBER = '5537988528261';
const INSTAGRAM_URL = 'https://www.instagram.com/caroldistribuidora_oficial';

const STORAGE_PRODUCTS_KEY = 'carol_catalog_products_v8';
const STORAGE_HERO_KEY = 'carol_hero_photo_v8';
const STORAGE_CART_KEY = 'carol_quote_cart_v7';
const STORAGE_SUPABASE_CONFIG_KEY = 'carol_supabase_config_v1';

// Credenciais de Acesso Administrativo (Login e Senha)
const VALID_ADMIN_LOGINS = ['carol', 'admin', 'caroldistribuidora'];
const ADMIN_PASSWORD = 'carol2026';

// Caso queira deixar as credenciais do Supabase fixas no código para todos os dispositivos,
// basta preencher abaixo ou configurar diretamente na aba "Banco na Nuvem" do Painel ADM:
const FIXED_SUPABASE_URL = '';
const FIXED_SUPABASE_ANON_KEY = '';

const DEFAULT_HERO_IMAGE = 'cacarola-esmaltada-real.jpg';

const DEFAULT_PRODUCTS = [
  {
    id: 'pipoqueira-usinada-color-24',
    name: 'Pipoqueira Usinada Color - 24',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Fabricação Própria',
    badge: 'Fabricação Própria',
    badgeType: 'fab',
    featured: true,
    image: 'pipoqueira-usinada-color-24.jpg',
    description: 'Pipoqueira em alumínio usinado de alta espessura com manivela anatômica, giro suave e pintura eletrostática resistente.',
    colors: ['#C8281E', '#1C1C1C', '#C0C0C0'],
    specs: ['Nº 24', 'Manivela Reforçada', 'Alumínio Grosso', 'Fabricação Própria']
  },
  {
    id: 'cacarola-esmaltada-vermelha',
    name: 'Caçarola Esmaltada em Ferro Fundido Vermelha',
    category: 'esmaltadas',
    categoryLabel: 'Carol Distribuidora • Linha Vitrificada',
    badge: 'Ferro Esmaltado',
    badgeType: 'default',
    featured: true,
    image: 'cacarola-esmaltada-real.jpg',
    description: 'Charmosa, eficiente e econômica. Retém o calor por muito mais tempo, conta com pomel em aço inox maciço e vai direto do fogão para a mesa.',
    colors: ['#C8281E', '#E85C1C', '#1C1C1C'],
    specs: ['Ferro Fundido Esmaltado', 'Pomel Inox Maciço', 'Retenção Térmica Alta', 'Atacado & Varejo']
  },
  {
    id: 'cacarola-aluminio-turquesa-craquelada',
    name: 'Caçarola em Alumínio Turquesa Antiaderente',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Fabricação Própria',
    badge: 'Fabricação Própria',
    badgeType: 'fab',
    featured: true,
    image: 'cacarola-aluminio-turquesa-real.jpg',
    description: 'Acabamento craquelado turquesa exclusivo, alças em baquelite antitérmico e excelente durabilidade para uso diário.',
    colors: ['#1AA3B8', '#C8281E', '#2B2B2B'],
    specs: ['Alumínio Grosso', 'Baquelite Antitérmico', 'Cores Exclusivas', 'Fabricação Própria']
  },
  {
    id: 'cacarola-esmaltada-laranja-degrade',
    name: 'Caçarola Esmaltada Degradê Laranja',
    category: 'esmaltadas',
    categoryLabel: 'Carol Distribuidora • Linha Vitrificada',
    badge: 'Destaque de Vendas',
    badgeType: 'default',
    featured: true,
    image: 'cacarola-laranja-degrade-real.jpg',
    description: 'Acabamento vítreo nobre em degradê laranja e vermelho. Design clássico com robustez comprovada.',
    colors: ['#E85C1C', '#C8281E', '#F2A922'],
    specs: ['Acabamento Vítreo', 'Pomel Inox Maciço', 'Alças Anatômicas', 'Fácil Limpeza']
  },
  {
    id: 'churrasqueira-de-carrinho',
    name: 'Churrasqueira de Carrinho com Rodas',
    category: 'utilidades',
    categoryLabel: 'Carol Distribuidora • Linha Churrasco',
    badge: 'Mais Vendida',
    badgeType: 'default',
    featured: true,
    image: 'churrasqueira-de-carrinho.jpg',
    description: 'Churrasqueira metálica de carrinho com rodas de locomoção, tábua lateral de apoio, cabos de madeira e grelha reforçada.',
    colors: ['#1C1C1C'],
    specs: ['Com Rodas', 'Apoio Lateral', 'Grelha Reforçada', 'Cabos de Madeira']
  },
  {
    id: 'churrasqueira-abafo',
    name: 'Churrasqueira a Bafo em Alumínio Fundido',
    category: 'utilidades',
    categoryLabel: 'Carol Distribuidora • Linha Churrasco',
    badge: 'Alumínio Fundido',
    badgeType: 'default',
    featured: true,
    image: 'churrasqueira-abafo.jpg',
    description: 'Conjunto de churrasqueiras a bafo em alumínio fundido grosso. Ideal para carnes suculentas com economia máxima de carvão.',
    colors: ['#C0C0C0'],
    specs: ['Alumínio Fundido Maciço', 'Retém Calor a Bafo', 'Diversos Tamanhos', 'Grelha Inclusa']
  },
  {
    id: 'panela-de-pressao-pedra-sabao',
    name: 'Panela de Pressão em Pedra Sabão',
    category: 'ferro-barro',
    categoryLabel: 'Carol Distribuidora • Tradição Mineira',
    badge: 'Pedra Sabão',
    badgeType: 'default',
    featured: true,
    image: 'panela-de-pressao-pedra-sabao.jpg',
    description: 'Autêntica panela de pressão esculpida em pedra sabão legítima de Minas Gerais com cinta e alças de cobre puro.',
    colors: ['#7A8288', '#B85A28'],
    specs: ['Pedra Sabão Legítima', 'Cobre Puro', 'Mantém o Calor', 'Sabor Mineiro Inigualável']
  },
  {
    id: 'cuba-e-torneira-de-cobre',
    name: 'Cuba e Torneira Artesanal em Cobre Puro',
    category: 'ferro-barro',
    categoryLabel: 'Carol Distribuidora • Arte em Cobre',
    badge: 'Cobre Puro',
    badgeType: 'default',
    featured: true,
    image: 'cuba-e-torneira-de-cobre.jpg',
    description: 'Cuba redonda martelada à mão e torneira alta em cobre legítimo. Peça artesanal exclusiva para lavabos e áreas gourmet.',
    colors: ['#B85A28'],
    specs: ['100% Cobre Puro', 'Martelado Artesanal', 'Torneira Inclusa', 'Alta Durabilidade']
  },
  {
    id: 'petisqueira-com-madeira',
    name: 'Petisqueira de Ferro com Base em Madeira (7335)',
    category: 'ferro-barro',
    categoryLabel: 'Carol Distribuidora • Servir & Mesa Posta',
    badge: 'Ferro & Madeira',
    badgeType: 'default',
    featured: false,
    image: 'petisqueira-com-madeira.jpg',
    description: 'Chapa petisqueira redonda em ferro fundido com base tábua de madeira maciça. Conserva a temperatura de porções do início ao fim.',
    colors: ['#1C1C1C', '#D4A373'],
    specs: ['Ferro Fundido', 'Tábua de Madeira Torneada', 'Código 7335', 'Uso Comercial & Residencial']
  },
  {
    id: 'moedor-gourmet-eletrico-b05',
    name: 'Moedor Gourmet Elétrico - B05',
    category: 'fundicao',
    categoryLabel: 'Carol Distribuidora • Máquinas & Insumos',
    badge: 'Linha Gourmet',
    badgeType: 'default',
    featured: true,
    image: 'moedor-gourmet-eletrico-b05.jpg',
    description: 'Moedor e picador de carne elétrico de alto rendimento Botini. Ideal para açougues, hamburguerias e cozinhas artesanais.',
    colors: ['#E0E0E0', '#1C1C1C'],
    specs: ['Motor Elétrico B05', 'Bandeja Inox', 'Alta Produtividade', 'Garantia Botini']
  },
  {
    id: 'forma-de-bolo-piscina',
    name: 'Forma de Bolo Piscina (Ballerine) em Alumínio',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Linha Confeitaria',
    badge: 'Fabricação Própria',
    badgeType: 'fab',
    featured: false,
    image: 'forma-de-bolo-piscina.jpg',
    description: 'Forma ballerine em alumínio puro com rebaixo central perfeito para calda generosa de bolos piscina.',
    colors: ['#C0C0C0'],
    specs: ['Alumínio Polido', 'Fundo com Rebaixo', 'Desenforme Perfeito', 'Fabricação Própria']
  },
  {
    id: 'cacarola-reta-extra-forte-hotel',
    name: 'Caçarola Reta Extra Forte Linha Hotel (20 - 60)',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Linha Hoteleira & Industrial',
    badge: 'Extra Forte',
    badgeType: 'fab',
    featured: false,
    image: 'cacarola-reta-extra-forte-hotel.jpg',
    description: 'Linha profissional reforçada do Nº 20 ao 60 em alumínio grosso. Especial para restaurantes, cozinhas industriais e buffets.',
    colors: ['#C0C0C0'],
    specs: ['Nº 20 ao 60', 'Espessura Reforçada', 'Alças Arrebites Duplos', 'Linha Hotel']
  },
  {
    id: 'cuscuzeiro-multi-uso',
    name: 'Cuscuzeiro Multi-Uso em Alumínio',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Linha Especial',
    badge: 'Multi-Uso',
    badgeType: 'fab',
    featured: false,
    image: 'cuscuzeiro-multi-uso.jpg',
    description: 'Cuscuzeiro inteligente versátil para preparo a vapor, legumes e cuscuz. Acabamento polido ou colorido.',
    colors: ['#C8281E', '#1C1C1C', '#C0C0C0'],
    specs: ['Grelha Interna Vapor', 'Baquelite Antitérmico', 'Rápido Cozimento', 'Fabricação Própria']
  },
  {
    id: 'kit-vapor-3-em-1',
    name: 'Kit Vapor 3 em 1 em Alumínio',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Utensílios Práticos',
    badge: '3 em 1',
    badgeType: 'fab',
    featured: false,
    image: 'kit-vapor-3-em-1.jpg',
    description: 'Conjunto completo composto por panela base com tampa, acessório vapor furado e forma pudim/banho-maria.',
    colors: ['#C0C0C0'],
    specs: ['3 Peças Integradas', 'Alumínio de Primeira Linha', 'Tampa com Pomel', 'Fabricação Própria']
  },
  {
    id: 'queijeira',
    name: 'Queijeira Mineira Tradicional com Tábua',
    category: 'utilidades',
    categoryLabel: 'Carol Distribuidora • Tradição de Minas',
    badge: 'Queijo Canastra',
    badgeType: 'default',
    featured: false,
    image: 'queijeira.jpg',
    description: 'Queijeira autêntica para maturação e conservação de queijo Minas e Canastra, com base higiênica e tampa protetora.',
    colors: ['#D4A373', '#FFFFFF'],
    specs: ['Base Especial', 'Tampa Protetora', 'Ideal para Queijo Minas', 'Tradição Artesanal']
  },
  {
    id: 'frita-ovo-antiaderente',
    name: 'Frigideira Frita Ovo Antiaderente',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Praticidade Diária',
    badge: 'Antiaderente',
    badgeType: 'fab',
    featured: false,
    image: 'frita-ovo-antiaderente.jpg',
    description: 'Frigideira individual compacta com revestimento antiaderente premium. Ovos fritos sem grudar com mínimo de óleo.',
    colors: ['#1C1C1C', '#C8281E'],
    specs: ['Antiaderente', 'Cabo Baquelite Seguro', 'Tamanho Perfeito', 'Fabricação Própria']
  },
  {
    id: 'jogo-cacarola-antiaderente',
    name: 'Jogo de Caçarolas Antiaderente (5 Peças)',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Conjuntos Completos',
    badge: 'Kit Completo',
    badgeType: 'fab',
    featured: true,
    image: 'jogo-cacarola-antiaderente.jpg',
    description: 'Jogo completo de caçarolas com revestimento interno e externo antiaderente de alta performance.',
    colors: ['#1C1C1C', '#C8281E', '#1AA3B8'],
    specs: ['5 Caçarolas', 'Tampas Inclusas', 'Antiaderente', 'Fabricação Própria']
  },
  {
    id: 'ralador-de-coco-e-queijo',
    name: 'Ralador de Coco e Queijo em Inox / Ferro',
    category: 'fundicao',
    categoryLabel: 'Carol Distribuidora • Maquinários & Lâminas',
    badge: 'Uso Comercial',
    badgeType: 'default',
    featured: false,
    image: 'ralador-de-coco-e-queijo.jpg',
    description: 'Ralador rotativo manual de mesa para coco e queijo. Fixação por morsa com tambor cortante em aço.',
    colors: ['#E0E0E0', '#1C1C1C'],
    specs: ['Fixação por Morsa', 'Tambor Aço Inox', 'Rápido e Preciso', 'Durabilidade Extrema']
  },
  {
    id: 'porta-litrao-bar-time',
    name: 'Porta Litrão Térmico Bar & Time Color',
    category: 'utilidades',
    categoryLabel: 'Carol Distribuidora • Linha Bar & Lazer',
    badge: 'Térmico',
    badgeType: 'default',
    featured: false,
    image: 'porta-litrao-bar-time.jpg',
    description: 'Porta garrafa térmico para cerveja litrão (1.000ml) em alumínio com isolamento térmico e estampas personalizadas.',
    colors: ['#C0C0C0', '#1C1C1C', '#C8281E'],
    specs: ['Capacidade 1 Litro', 'Isolamento Térmico', 'Alumínio de Alta Resistência', 'Várias Cores']
  },
  {
    id: 'placa-decorativa-com-canecas',
    name: 'Placa Decorativa Rústica c/ 5 Canecas Esmaltadas',
    category: 'utilidades',
    categoryLabel: 'Carol Distribuidora • Decoração Rústica',
    badge: 'Artesanato Mineiro',
    badgeType: 'default',
    featured: false,
    image: 'placa-decorativa-com-canecas.jpg',
    description: 'Porta canecas em madeira de demolição rústica acompanhado de 5 canecas esmaltadas vintage coloridas.',
    colors: ['#8C4326', '#E85C1C'],
    specs: ['Madeira Maciça', '5 Canecas Esmaltadas', 'Ganchos Reforçados', 'Decoração de Fazenda']
  },
  {
    id: 'cristaleira-mini-com-chaleira',
    name: 'Mini Cristaleira Rústica com Mini Chaleira',
    category: 'utilidades',
    categoryLabel: 'Carol Distribuidora • Decoração Gourmet',
    badge: 'Peça Decorativa',
    badgeType: 'default',
    featured: false,
    image: 'cristaleira-mini-com-chaleira.jpg',
    description: 'Charmosa mini cristaleira em madeira artesanal com chaleirinha esmaltada em miniatura para bancadas e cantinhos do café.',
    colors: ['#8C4326', '#C8281E'],
    specs: ['Madeira Artesanal', 'Mini Chaleira Esmaltada', 'Cantinho do Café', 'Excelente Presente']
  },
  {
    id: 'ralador-galvanizado',
    name: 'Ralador Galvanizado Multiuso com Cabo de Madeira',
    category: 'fundicao',
    categoryLabel: 'Carol Distribuidora • Cozinha Prática',
    badge: 'Aço Galvanizado',
    badgeType: 'default',
    featured: false,
    image: 'ralador-galvanizado.jpg',
    description: 'Tradicional ralador mineiro em chapa galvanizada furada com cabo ergonômico de madeira.',
    colors: ['#C0C0C0'],
    specs: ['Chapa Galvanizada', 'Cabo Madeira', 'Furos Precisos', 'Cozinha Tradicional']
  },
  {
    id: 'picador-de-carne-03',
    name: 'Picador e Moedor de Carne Manual Nº 03',
    category: 'fundicao',
    categoryLabel: 'Carol Distribuidora • Máquinas Manuais',
    badge: 'Ferro Estanhado',
    badgeType: 'default',
    featured: false,
    image: 'picador-de-carne-03.jpg',
    description: 'Moedor de carne manual Nº 03 em ferro fundido estanhado. Acompanha navalha e disco cortante para carnes e massas.',
    colors: ['#D6D6D6'],
    specs: ['Nº 03 Compacto', 'Ferro Estanhado', 'Morsa de Bancada', 'Durabilidade Eterna']
  },
  {
    id: 'moinho-de-cafe',
    name: 'Moinho de Café Manual Botini em Ferro Fundido',
    category: 'fundicao',
    categoryLabel: 'Carol Distribuidora • Linha Café Mineiro',
    badge: 'Original Botini',
    badgeType: 'default',
    featured: false,
    image: 'moinho-de-cafe.jpg',
    description: 'Moinho manual para moer grãos de café na hora. Regulagem de moagem fina ou grossa com estrutura maciça.',
    colors: ['#C8281E', '#1C1C1C'],
    specs: ['Ferro Fundido', 'Regulagem de Moagem', 'Fixação em Parede/Mesa', 'Tradição do Café']
  },
  {
    id: 'picador-de-carne-10',
    name: 'Picador e Moedor de Carne Manual Nº 10',
    category: 'fundicao',
    categoryLabel: 'Carol Distribuidora • Linha Comercial',
    badge: 'Robusto',
    badgeType: 'default',
    featured: false,
    image: 'picador-de-carne-10.jpg',
    description: 'Modelo tamanho 10 para moagem rápida de carnes, linguiças e biscoitos. Maior boca de alimentação e rendimento.',
    colors: ['#D6D6D6'],
    specs: ['Nº 10 Grande', 'Boca Larga', 'Para Açougues & Casas', 'Ferro Fundido Estanhado']
  },
  {
    id: 'chapa-de-arado',
    name: 'Chapa Disco de Arado com Alças e Borda',
    category: 'ferro-barro',
    categoryLabel: 'Carol Distribuidora • Linha Caipira',
    badge: 'Aço Arado Genuíno',
    badgeType: 'default',
    featured: true,
    image: 'chapa-de-arado.jpg',
    description: 'Legítimo disco de arado em aço maciço com alças anatômicas. O preferido para costela, tropeiro e churrasco de chão.',
    colors: ['#1C1C1C'],
    specs: ['Aço Carbono Maciço', 'Alças Soldadas', 'Uso Fogão a Lenha & Gás', 'Tradição do Interior']
  },
  {
    id: 'kit-bule-mini-com-bandeja',
    name: 'Kit Mini Bule com Suporte e Xícaras',
    category: 'utilidades',
    categoryLabel: 'Carol Distribuidora • Cantinho do Café',
    badge: 'Café da Fazenda',
    badgeType: 'default',
    featured: false,
    image: 'kit-bule-mini-com-bandeja.jpg',
    description: 'Suporte aramado ou de madeira com bule de café esmaltado e xícaras para servir com charme afetuoso.',
    colors: ['#C8281E', '#1C1C1C', '#F2A922'],
    specs: ['Bule Esmaltado', 'Suporte Inclusivo', 'Xícaras Retrô', 'Decoração & Uso']
  },
  {
    id: 'linha-de-barro',
    name: 'Linha Tradicional de Panelas de Barro',
    category: 'ferro-barro',
    categoryLabel: 'Carol Distribuidora • Tradição da Terra',
    badge: 'Barro Natural',
    badgeType: 'default',
    featured: true,
    image: 'linha-de-barro.jpg',
    description: 'Panelas e caçarolas de barro legítimas curadas com resina natural. Perfeitas para feijão gordo, moquecas e peixadas.',
    colors: ['#1C1C1C', '#8C4326'],
    specs: ['Barro Genuíno', 'Cura Tradicional', 'Retenção Prolongada de Calor', 'Fogão a Lenha & Gás']
  },
  {
    id: 'rechaud',
    name: 'Rechaud em Ferro Fundido com Chapa e Queimador',
    category: 'ferro-barro',
    categoryLabel: 'Carol Distribuidora • Linha Restaurante',
    badge: 'Rechaud Gourmet',
    badgeType: 'default',
    featured: false,
    image: 'rechaud.jpg',
    description: 'Rechaud de mesa em ferro fundido com chapa estriada ou lisa e réchaud queimador a álcool gel.',
    colors: ['#1C1C1C'],
    specs: ['Ferro Fundido', 'Queimador Regulável', 'Mantém Carnes Fervendo na Mesa', 'Uso em Bares & Casas']
  },
  {
    id: 'kit-molheira',
    name: 'Kit Molheira com Tigelas e Suporte',
    category: 'utilidades',
    categoryLabel: 'Carol Distribuidora • Acessórios de Mesa',
    badge: 'Acessório Gourmet',
    badgeType: 'default',
    featured: false,
    image: 'kit-molheira.jpg',
    description: 'Kit de molheiras com tigelas e suporte ergonômico para servir molhos, patês e temperos à mesa.',
    colors: ['#FFFFFF', '#1C1C1C'],
    specs: ['Potes Removíveis', 'Suporte Firme', 'Fácil Lavagem', 'Mesa Sofisticada']
  },
  {
    id: 'forma-de-pizza-com-faca',
    name: 'Forma de Pizza em Alumínio c/ Cortador de Pizza',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Linha Pizzaria',
    badge: 'Fabricação Própria',
    badgeType: 'fab',
    featured: false,
    image: 'forma-de-pizza-com-faca.jpg',
    description: 'Forma redonda para pizza em alumínio resistente com borda vincada e cortador carretilha profissional.',
    colors: ['#C0C0C0'],
    specs: ['Alumínio de Alta Condução', 'Bordas Dobradas', 'Cortador Incluso', 'Fabricação Própria']
  },
  {
    id: 'forma-com-alca',
    name: 'Assadeira Retangular com Alças Reforçadas',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Linha Forno',
    badge: 'Fabricação Própria',
    badgeType: 'fab',
    featured: false,
    image: 'forma-com-alca.jpg',
    description: 'Assadeira alta em alumínio reforçado com alças laterais que facilitam a retirada segura do forno.',
    colors: ['#C0C0C0'],
    specs: ['Alumínio Grosso', 'Alças Anatômicas', 'Carnes e Assados', 'Fabricação Própria']
  },
  {
    id: 'jogo-agua-moringa-copos',
    name: 'Jogo de Água em Alumínio (8 Peças - Moringa + 6 Copos + Bandeja)',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Linha Vintage Colorida',
    badge: 'Jogo 8 Peças',
    badgeType: 'fab',
    featured: false,
    image: 'jogo-agua-moringa-copos.jpg',
    description: 'Clássico conjunto de moringa de água com tampa, 6 copos altos e bandeja redonda em alumínio pintado.',
    colors: ['#1AA3B8', '#C8281E', '#F2A922'],
    specs: ['01 Moringa 02', '06 Copos Retos', '01 Bandeja Nº 30', 'Conserva Água Fresca']
  },
  {
    id: 'velador-mini-com-chaleira',
    name: 'Mini Velador Artesanal com Chaleira Esmaltada',
    category: 'utilidades',
    categoryLabel: 'Carol Distribuidora • Decoração Rústica',
    badge: 'Peça de Época',
    badgeType: 'default',
    featured: false,
    image: 'velador-mini-com-chaleira.jpg',
    description: 'Velador rústico em ferro trabalhado para manter pequenos bules aquecidos com charme de fazenda.',
    colors: ['#1C1C1C', '#C8281E'],
    specs: ['Ferro Trabalhado', 'Chaleira Inclusa', 'Iluminação Suave & Calor', 'Peça Colecionável']
  },
  {
    id: 'escorredor-prato-tubular',
    name: 'Escorredor de Pratos Tubular com Porta Copos',
    category: 'utilidades',
    categoryLabel: 'Carol Distribuidora • Organização da Pia',
    badge: 'Alta Resistência',
    badgeType: 'default',
    featured: false,
    image: 'escorredor-prato-tubular.jpg',
    description: 'Escorredor robusto em tubos de alumínio que não enferruja. Espaço para pratos, talheres e copos.',
    colors: ['#C0C0C0', '#1C1C1C'],
    specs: ['Não Enferruja', 'Porta Copos Integrado', 'Capacidade Elevada', 'Excelente Estabilidade']
  },
  {
    id: 'kit-infantil-aluminio',
    name: 'Kit de Panelinhas Infantis em Alumínio',
    category: 'utilidades',
    categoryLabel: 'Alumínios Carol • Linha Kids & Memória',
    badge: 'Brinquedo Clássico',
    badgeType: 'fab',
    featured: false,
    image: 'kit-infantil-aluminio.jpg',
    description: 'Mini panelinhas em alumínio de verdade para brincar de casinha. O clássico brinquedo artesanal da infância mineira.',
    colors: ['#C0C0C0', '#C8281E'],
    specs: ['Alumínio Autêntico', 'Mini Caçarolas e Frigideiras', 'Seguro & Durável', 'Fabricação Própria']
  },
  {
    id: 'kit-pipoca-completo',
    name: 'Kit Pipoca Completo (Pipoqueira 20 + Porta Milho + 6 Potes)',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Noite de Cinema',
    badge: 'Kit Pipoca',
    badgeType: 'fab',
    featured: true,
    image: 'kit-pipoca-completo.jpg',
    description: 'O combo mais querido: Pipoqueira de manivela Nº 20, pote porta-milho temático e 6 baldes individuais de pipoca.',
    colors: ['#C8281E', '#F2A922'],
    specs: ['Pipoqueira Nº 20', 'Porta Milho Hermético', '6 Potes Individuais', 'Fabricação Própria']
  },
  {
    id: 'jogo-cacarola-fundida-16-24',
    name: 'Jogo de Caçarolas em Alumínio Fundido Grosso (16 a 24)',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Linha Pesada Tradicional',
    badge: 'Alumínio Grosso',
    badgeType: 'fab',
    featured: true,
    image: 'jogo-cacarola-fundida-16-24.jpg',
    description: 'Jogo com 5 caçarolas de espessura grossa (3 a 4mm) do Nº 16 ao 24 com tampas pesadas e alças inteiriças.',
    colors: ['#C0C0C0'],
    specs: ['Nº 16 ao 24', 'Alumínio Grosso Maciço', 'Alças Fundidas', 'Panela para a Vida Toda']
  },
  {
    id: 'forma-meia-pressao',
    name: 'Forma de Pudim Banho-Maria Meia Pressão',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Praticidade no Forno & Fogão',
    badge: 'Cozimento Rápido',
    badgeType: 'fab',
    featured: false,
    image: 'forma-meia-pressao.jpg',
    description: 'Forma de pudim hermética de meia pressão que assa pudins no fogão em menos de 25 minutos com economia de gás.',
    colors: ['#C0C0C0'],
    specs: ['Tampa Hermética com Travas', 'Economia de Gás', 'Pudim Perfeito', 'Fabricação Própria']
  },
  {
    id: 'forma-de-empada',
    name: 'Jogo de Forminhas para Empada em Alumínio',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Linha Padaria & Salgados',
    badge: 'Atacado & Varejo',
    badgeType: 'fab',
    featured: false,
    image: 'forma-de-empada.jpg',
    description: 'Kit de forminhas caneladas em alumínio puro com bordas arredondadas para empadas, empadões e tarteletes.',
    colors: ['#C0C0C0'],
    specs: ['Borda Canelada', 'Diversos Diâmetros', 'Pacotes Atacado', 'Fabricação Própria']
  },
  {
    id: 'pecas-de-cobre',
    name: 'Coleção Nobre de Peças & Tachos em Cobre Puro',
    category: 'ferro-barro',
    categoryLabel: 'Carol Distribuidora • Tradição dos Doces Mineiros',
    badge: 'Cobre Puro',
    badgeType: 'default',
    featured: true,
    image: 'pecas-de-cobre.jpg',
    description: 'Tachos para doce de leite, panelas e chaleiras marteladas em cobre puro maciço. O sabor inigualável dos doces de Minas.',
    colors: ['#B85A28'],
    specs: ['Cobre Legítimo Maciço', 'Martelado à Mão', 'Alças em Bronze/Latão', 'Doces Perfeitos']
  },
  {
    id: 'fervedor-inderramavel',
    name: 'Fervedor / Leiteira Inderramável em Alumínio',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Linha Leite Quente',
    badge: 'Anti-Vazamento',
    badgeType: 'fab',
    featured: false,
    image: 'fervedor-inderramavel.jpg',
    description: 'Fervedor com aba afunilada interna e tampa especial que impede o leite de transbordar ou derramar sobre o fogão.',
    colors: ['#C0C0C0', '#C8281E'],
    specs: ['Não Derrama o Leite', 'Cabo Baquelite Longo', 'Alumínio de Qualidade', 'Fabricação Própria']
  },
  {
    id: 'jogo-cacarola-color-16-24',
    name: 'Jogo de Caçarolas Coloridas Alumínio Grosso (16 a 24)',
    category: 'aluminio',
    categoryLabel: 'Alumínios Carol • Linha Gourmet Color',
    badge: 'Mais Vendido',
    badgeType: 'fab',
    featured: true,
    image: 'jogo-cacarola-color-16-24.jpg',
    description: 'Jogo completo com 5 caçarolas do Nº 16 ao 24 com pintura craquelada e esmaltada de alto brilho e alças em baquelite.',
    colors: ['#C8281E', '#1AA3B8', '#1C1C1C', '#E85C1C'],
    specs: ['5 Panelas (16 ao 24)', 'Pintura Eletrostática', 'Baquelite Antitérmico', 'Fabricação Própria']
  },
  {
    id: 'panela-pressao-new-line-red',
    name: 'Panela de Pressão New Line Red 5,0 Litros',
    category: 'aluminio',
    categoryLabel: 'Carol Distribuidora • Linha Segurança',
    badge: 'Selo INMETRO',
    badgeType: 'default',
    featured: true,
    image: 'panela-pressao-new-line-red.jpg',
    description: 'Panela de pressão moderna de 5,0 litros com pintura vermelha metálica, múltiplas válvulas de segurança e trava na tampa.',
    colors: ['#C8281E', '#1C1C1C'],
    specs: ['Capacidade 5,0L', 'Válvula Dupla de Segurança', 'Cabo com Trava', 'Certificada INMETRO']
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

window.handleImageFallback = function(img) {
  if (!img || img.dataset.hasFailed) return;
  img.dataset.hasFailed = 'true';
  const currentSrc = img.getAttribute('src') || '';
  const cleanName = currentSrc.split('/').pop().split('?')[0];
  if (currentSrc.includes('assets/images/')) {
    img.src = cleanName;
  } else {
    img.src = 'assets/images/' + cleanName;
  }
};

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
          <img src="${product.image}" alt="${product.name}" onerror="handleImageFallback(this)" loading="lazy" />
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
          <img src="${product.image}" alt="${product.name}" onerror="handleImageFallback(this)" loading="lazy" />
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

function updateAdminAuthUI() {
  const loginScreen = document.getElementById('adminLoginScreen');
  const panelContent = document.getElementById('adminPanelContent');
  const logoutBtn = document.getElementById('adminLogoutBtn');
  const cloudBadge = document.getElementById('cloudStatusBadge');

  if (isAdminUnlocked) {
    if (loginScreen) loginScreen.style.display = 'none';
    if (panelContent) panelContent.style.display = 'block';
    if (logoutBtn) logoutBtn.style.display = 'inline-flex';
    if (cloudBadge) cloudBadge.style.display = 'inline-flex';
  } else {
    if (loginScreen) loginScreen.style.display = 'block';
    if (panelContent) panelContent.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'none';
    if (cloudBadge) cloudBadge.style.display = 'none';
  }
}

window.handleAdminLogin = function(event) {
  event.preventDefault();
  const userField = document.getElementById('adminLoginUser');
  const passField = document.getElementById('adminLoginPass');
  const errorMsg = document.getElementById('adminLoginError');

  const enteredUser = (userField ? userField.value : '').trim().toLowerCase();
  const enteredPass = (passField ? passField.value : '').trim();

  if (VALID_ADMIN_LOGINS.includes(enteredUser) && enteredPass === ADMIN_PASSWORD) {
    isAdminUnlocked = true;
    if (errorMsg) errorMsg.style.display = 'none';
    if (passField) passField.value = '';
    updateAdminAuthUI();
    renderShowcase();
    renderProducts();
    renderAdminProductsList();
    updateCloudBadgeUI();
  } else {
    if (errorMsg) errorMsg.style.display = 'block';
  }
};

window.logoutAdmin = function() {
  isAdminUnlocked = false;
  updateAdminAuthUI();
  renderShowcase();
  renderProducts();
  closeAdminModal();
};

window.openAdminModal = function() {
  updateAdminAuthUI();
  if (isAdminUnlocked) {
    renderShowcase();
    renderProducts();
    renderAdminProductsList();
    updateCloudBadgeUI();
  }

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
  if (preview) preview.src = 'cacarola-esmaltada.png';
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

  const finalImage = pendingAdminImageDataUrl || imageUrlInput || 'cacarola-esmaltada.png';
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
