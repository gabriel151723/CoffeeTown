export interface MenuItem {
  id: string;
  name: string;
  category: 'cafes' | 'cakes' | 'brunch' | 'salgados' | 'gelados';
  categoryLabel: string;
  price: number;
  description: string;
  highlightTag?: string;
  image: string;
  calories?: string;
  isPopular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  date: string;
  rating: number;
  text: string;
  avatarBg: string;
}

export const STORE_INFO = {
  name: 'Coffeetown Salvador',
  brandName: 'Coffeetown, Co.',
  tagline: 'The American Coffee & Cake, Co. · Estd. 2013',
  complexName: 'Villa San Luigi',
  address: 'Rua Amazonas, 1111 - Gourmet 01 - Pituba, Salvador - BA, 41830-380',
  addressShort: 'Villa San Luigi, Rua Amazonas · Pituba, Salvador',
  phoneDisplay: '(71) 99991-4478',
  phoneLandline: '(71) 3329-6817',
  phoneRaw: '5571999914478',
  whatsappUrl: 'https://wa.me/5571999914478',
  instagramUrl: 'https://www.instagram.com/coffeetownsalvadorr',
  instagramHandle: '@coffeetownsalvadorr',
  hours: 'Segunda a Domingo: 08h30 às 21h00',
  rating: '4.9',
  reviewsCount: '1.280+',
  pixKey: '5571999914478',
  pixBeneficiary: 'Coffeetown Salvador Cafeteria Ltda',
  geo: {
    lat: -13.0045325,
    lng: -38.4602369,
  },
  googleMapsUrl: 'https://maps.google.com/?q=Coffeetown+Salvador+Rua+Amazonas+Pituba+Salvador+BA',
  googleMapsPhotosUrl: 'https://maps.google.com/?q=Coffeetown+Salvador+Rua+Amazonas+Pituba+Salvador+BA',
  wazeUrl: 'https://waze.com/ul?q=Coffeetown+Salvador+Pituba',
};

export const MENU_CATEGORIES = [
  { id: 'todos', label: 'Todos os Destaques' },
  { id: 'cafes', label: 'Cafés Especiais' },
  { id: 'cakes', label: 'American Cakes' },
  { id: 'brunch', label: 'Brunch & Toasts' },
  { id: 'salgados', label: 'Pâtisserie & Salgados' },
  { id: 'gelados', label: 'Bebidas Geladas' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'red-velvet',
    name: 'Classic Red Velvet Cake',
    category: 'cakes',
    categoryLabel: 'American Cakes',
    price: 24.90,
    description: 'Fatia generosa do lendário bolo aveludado com cacau alcalino e autêntico cream cheese frosting artesanal suave com baunilha.',
    highlightTag: 'O Mais Pedido',
    image: '/src/assets/images/product_red_velvet_cake_1790528609076.jpg',
    isPopular: true,
  },
  {
    id: 'ny-cheesecake',
    name: 'New York Cheesecake de Frutas Vermelhas',
    category: 'cakes',
    categoryLabel: 'American Cakes',
    price: 26.90,
    description: 'Receita original de Nova York: base amanteigada crocante, recheio denso assado e coulis artesanal de framboesas e amoras frescas.',
    highlightTag: 'Receita Clássica NY',
    image: '/src/assets/images/ny_cheesecake_berries_1790533674218.jpg',
    isPopular: true,
  },
  {
    id: 'devils-food-cake',
    name: "Devil's Food Cake com Ganache & Café",
    category: 'cakes',
    categoryLabel: 'American Cakes',
    price: 25.90,
    description: 'Bolo de chocolate intenso e macio com infusão de café especial da casa, recheado e coberto com ganache artesanal de chocolate belga.',
    highlightTag: 'Chocolate Intenso',
    image: '/src/assets/images/devils_food_cake_1790533697148.jpg',
    isPopular: true,
  },
  {
    id: 'specialty-flat-white',
    name: 'Cappuccino & Flat White Especial',
    category: 'cafes',
    categoryLabel: 'Cafés Especiais',
    price: 16.90,
    description: 'Double shot de espresso de microlote arábica da Chapada Diamantina com microespuma sedosa de leite vaporizado e latte art.',
    highlightTag: 'Torra da Casa 85+ Pts',
    image: '/src/assets/images/barista_milk_pour_1790529660429.jpg',
    isPopular: true,
  },
  {
    id: 'v60-specialty',
    name: 'Pour-Over V60 Chapada Diamantina',
    category: 'cafes',
    categoryLabel: 'Cafés Especiais',
    price: 18.50,
    description: 'Café filtrado na hora pelo método japonês V60. Notas sensoriais elegantes de caramelo, chocolate e acidez cítrica viva equilibrada.',
    highlightTag: 'Origem Piatã Bahia',
    image: '/src/assets/images/product_specialty_espresso_1790528618744.jpg',
  },
  {
    id: 'avocado-toast-levain',
    name: 'Avocado Toast no Pão Sourdough',
    category: 'brunch',
    categoryLabel: 'Brunch & Toasts',
    price: 32.90,
    description: 'Pão de fermentação natural tostado no azeite extravirgem, abacate hass fresco fatiado, ovo poché com gema mole e mix de sementes.',
    highlightTag: 'Brunch Clássico',
    image: '/src/assets/images/product_brunch_avocado_toast_1790528628223.jpg',
    isPopular: true,
  },
  {
    id: 'croissant-manteiga',
    name: 'Croissant Francês com Geléia Artesanal',
    category: 'salgados',
    categoryLabel: 'Pâtisserie & Salgados',
    price: 15.90,
    description: 'Massa folhada fermentada lentamente por 72h com manteiga nobre, dourado e crocante por fora, macio por dentro. Servido quentinho.',
    highlightTag: 'Fornada Diária',
    image: '/src/assets/images/croissant_folhado_manteiga_1790533662196.jpg',
    isPopular: true,
  },
  {
    id: 'eggs-benedict',
    name: 'Eggs Benedict no Brioche Artesanal',
    category: 'brunch',
    categoryLabel: 'Brunch & Toasts',
    price: 38.90,
    description: 'Pão brioche fatiado dourado na manteiga, bacon artesanal defumado em lenha nobre, dois ovos pochés e molho hollandaise fresco.',
    highlightTag: 'Favorito do Fim de Semana',
    image: '/src/assets/images/eggs_benedict_brioche_1790535552657.jpg',
  },
  {
    id: 'iced-caramel-latte',
    name: 'Iced Toffee Caramel Macchiato',
    category: 'gelados',
    categoryLabel: 'Bebidas Geladas',
    price: 22.00,
    description: 'Espresso duplo gelado em camadas, leite cremoso com infusão de baunilha de Madagascar e finalizado com calda toffee artesanal e flor de sal.',
    highlightTag: 'Refrescante',
    image: '/src/assets/images/iced_toffee_macchiato_1790535562676.jpg',
    isPopular: true,
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Mariana Sampaio',
    role: 'Local Guide · 45 avaliações no Google',
    date: 'há 2 semanas',
    rating: 5,
    text: 'O melhor Red Velvet de Salvador sem nenhuma dúvida! A unidade no Villa San Luigi na Rua Amazonas é linda, aconchegante e o café coado na V60 tem notas sensacionais. Vale cada visita.',
    avatarBg: 'bg-amber-800',
  },
  {
    id: 'rev-2',
    author: 'Rodrigo Vasconcelos',
    role: 'Cliente Frequente na Pituba',
    date: 'há 1 mês',
    rating: 5,
    text: 'Lugar perfeito na Pituba para fazer reuniões ou saborear um café artesanal de verdade. O Avocado Toast e o Croissant quentinho são espetaculares. O atendimento é sempre carinhoso e ágil.',
    avatarBg: 'bg-stone-700',
  },
  {
    id: 'rev-3',
    author: 'Camila Prado',
    role: 'Avaliação no Google Maps',
    date: 'há 3 semanas',
    rating: 5,
    text: 'Cardápio com alma nova-iorquina em pleno coração da Pituba. O ambiente na Vila San Luigi parece um pedaço da Toscana em Salvador. Os bolos são impecáveis e frescos.',
    avatarBg: 'bg-amber-900',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'Como funciona o pedido pelo WhatsApp?',
    a: 'Você escolhe seus itens favoritos no cardápio interativo, clica em "Adicionar ao Pedido", revisa os itens na comanda e clica em "Finalizar no WhatsApp". Uma mensagem detalhada e formatada é gerada pronta para envio!',
  },
  {
    q: 'A Coffeetown Salvador faz entregas na Pituba e região?',
    a: 'Sim! Entregamos na Pituba, Itaigara, Horto Florestal, Rio Vermelho, Barra e arredores. Também aceitamos pedidos antecipados para Retirada Rápida sem filas na Rua Amazonas.',
  },
  {
    q: 'É possível encomendar bolos inteiros para aniversários?',
    a: 'Sim! Produzimos bolos inteiros (Red Velvet, Devil\'s Food Cake, Cheesecake e Carrot Cake) sob encomenda com 24h a 48h de antecedência. Solicite pelo WhatsApp.',
  },
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    id: 'quality-coffee',
    title: 'Café de Alta Especialidade',
    subtitle: 'Microlotes 85+ Pontos',
    description: 'Selecionamos os grãos mais premiados da Chapada Diamantina com torrefação própria semanal na unidade Pituba, garantindo uma xícara pura, aromática e sem amargor.',
    image: '/src/assets/images/product_specialty_espresso_1790528618744.jpg',
    tag: 'Torra da Casa',
    cta: 'Ver Métodos de Café',
  },
  {
    id: 'fresh-delicious',
    title: 'Doces & Bolos Artesanais',
    subtitle: 'Confeitaria Americana Raiz',
    description: 'Receitas autênticas preparadas do zero todos os dias: o lendário Devil\'s Food com chocolate intenso e café, e o tradicional Red Velvet com cream cheese suave.',
    image: '/src/assets/images/devils_food_cake_1790533697148.jpg',
    tag: 'Receitas Originais',
    cta: 'Ver Bolos e Tortas',
  },
  {
    id: 'cozy-atmosphere',
    title: 'Vila San Luigi na Pituba',
    subtitle: 'Charme & Refúgio Urbano',
    description: 'Instalada no charmoso complexo Villa San Luigi na Rua Amazonas, nossa cafeteria combina estilo italiano toscano, luz natural, mesas confortáveis e tomadas para relaxar ou trabalhar.',
    image: '/src/assets/images/villa_san_luigi_courtyard.jpg',
    tag: 'Villa San Luigi · Pituba',
    cta: 'Conhecer Espaço',
  },
];

export const VISIT_US_GALLERY = {
  interior: '/src/assets/images/cozy_interior_coffeetown_1790536113024.jpg',
  roastery: '/src/assets/images/hero_coffeetown_artisan_1790528597712.jpg',
  facade: '/src/assets/images/villa_san_luigi_real_1790534526286.jpg',
};
