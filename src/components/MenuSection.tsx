import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Plus, Minus, ShoppingBag, Sparkles, ChevronDown, ChevronUp, Eye, Coffee } from 'lucide-react';
import { MenuItem, MENU_CATEGORIES, MENU_ITEMS } from '../data/coffeetownData';
import { ProductQuickViewModal } from './ProductQuickViewModal';

interface MenuSectionProps {
  cart: { [itemId: string]: number };
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (itemId: string) => void;
  onOpenCart: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  cart,
  onAddToCart,
  onRemoveFromCart,
  onOpenCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAllItems, setShowAllItems] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);

  // 4 Destaques Principais da Fileira Superior (100% Fotos Exclusivas e Não Repetidas)
  const highlightItems: {
    id: string;
    name: string;
    category: MenuItem['category'];
    categoryLabel: string;
    price: number;
    image: string;
    badge: string;
    isHotCoffee: boolean;
  }[] = [
    {
      id: 'specialty-flat-white',
      name: 'Cappuccino & Flat White Especial',
      category: 'cafes',
      categoryLabel: 'Café Especial',
      price: 16.90,
      image: '/src/assets/images/barista_milk_pour_1790529660429.jpg',
      badge: 'Torra Fresca Semanal',
      isHotCoffee: true,
    },
    {
      id: 'red-velvet',
      name: 'Classic Red Velvet Cake',
      category: 'cakes',
      categoryLabel: 'American Cake',
      price: 24.90,
      image: '/src/assets/images/product_red_velvet_cake_1790528609076.jpg',
      badge: 'Mais Pedido da Confeitaria',
      isHotCoffee: false,
    },
    {
      id: 'avocado-toast-levain',
      name: 'Toast Levain com Abacate & Ovo',
      category: 'brunch',
      categoryLabel: 'Brunch Artesanal',
      price: 32.90,
      image: '/src/assets/images/product_brunch_avocado_toast_1790528628223.jpg',
      badge: 'Pão de Fermentação Natural',
      isHotCoffee: false,
    },
    {
      id: 'croissant-manteiga',
      name: 'Croissant Francês com Geléia',
      category: 'salgados',
      categoryLabel: 'Pâtisserie',
      price: 15.90,
      image: '/src/assets/images/croissant_folhado_manteiga_1790533662196.jpg',
      badge: '100% Manteiga Pura',
      isHotCoffee: false,
    },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalCartItems = Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <section id="cardapio" className="py-16 md:py-24 bg-[#F7F2EB] border-b border-[#E8DFD5] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho com Tipografia de Cafeteria Boutique em PT-BR com Animação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-10 sm:mb-12"
        >
          <span className="text-[11px] font-bold text-[#5C3A21] uppercase tracking-[0.25em] block mb-2">
            Cardápio & Pâtisserie Artesanal
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1E16] tracking-tight mb-2">
            Destaques do Cardápio
          </h2>

          <p className="text-xs sm:text-sm text-[#7E6F65]">
            Preparado artesanalmente todos os dias com carinho para você. Clique em qualquer foto para ver ingredientes e detalhes.
          </p>
        </motion.div>

        {/* 1. FILEIRA DE 4 DESTAQUES PRINCIPAIS COM ANIMAÇÃO DE ELEVAÇÃO E SHIMMER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 items-stretch">
          {highlightItems.map((hItem, index) => {
            const currentQty = cart[hItem.id] || 0;
            const fullItem = MENU_ITEMS.find((m) => m.id === hItem.id) || {
              id: hItem.id,
              name: hItem.name,
              category: hItem.category,
              categoryLabel: hItem.categoryLabel,
              price: hItem.price,
              image: hItem.image,
              description: 'Item exclusivo da cafeteria Coffeetown Salvador na Pituba.',
            };

            return (
              <motion.div
                key={hItem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-[#FAF7F2] rounded-3xl border border-[#E8DFD5] p-4 sm:p-5 flex flex-col justify-between text-center group hover:shadow-xl hover:border-amber-600/30 transition-all duration-300 h-full shadow-2xs relative"
              >
                <div>
                  {/* Container da Imagem com Efeito de Brilho & Hover Zoom */}
                  <div
                    onClick={() => setSelectedProduct(fullItem)}
                    className="w-full h-40 sm:h-44 rounded-2xl overflow-hidden mb-3.5 bg-[#EFE8DE] relative cursor-pointer shine-effect"
                  >
                    <img
                      src={hItem.image}
                      alt={hItem.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Selo de Categoria */}
                    <span className="absolute top-2.5 left-2.5 bg-[#FAF7F2]/90 backdrop-blur-sm text-[#5C3A21] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#E8DFD5] shadow-xs">
                      {hItem.categoryLabel}
                    </span>

                    {/* Badge Animado de Café Quente com Vapor / Destaque */}
                    {hItem.isHotCoffee ? (
                      <span className="absolute top-2.5 right-2.5 bg-[#2C1E16]/80 backdrop-blur-sm text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1 shadow-xs">
                        <Coffee className="w-3 h-3 text-amber-300 animate-pulse" />
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                      </span>
                    ) : (
                      <span className="absolute top-2.5 right-2.5 bg-[#C87D32]/90 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                        ★ Artesanal
                      </span>
                    )}

                    {/* Botão de Ver Detalhes no Hover */}
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#2C1E16] text-[10px] font-bold uppercase tracking-wider shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5 text-[#5C3A21]" />
                        <span>Ver Detalhes</span>
                      </span>
                    </div>
                  </div>

                  <h3
                    onClick={() => setSelectedProduct(fullItem)}
                    className="font-serif text-base font-bold text-[#2C1E16] mb-1 line-clamp-1 cursor-pointer hover:text-[#5C3A21] transition-colors"
                  >
                    {hItem.name}
                  </h3>

                  <span className="text-sm sm:text-base font-extrabold text-[#5C3A21] block mb-4 tabular-nums">
                    R$ {hItem.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                {/* Controles de Quantidade e Adição */}
                <div className="pt-2">
                  {currentQty === 0 ? (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onAddToCart(fullItem)}
                      className="w-full py-2.5 px-4 rounded-full bg-[#5C3A21] hover:bg-[#452A18] text-white text-[11px] font-bold tracking-wider uppercase transition-colors shadow-2xs cursor-pointer shine-effect"
                    >
                      + Adicionar ao Pedido
                    </motion.button>
                  ) : (
                    <div className="flex items-center justify-between bg-[#EFE8DE] rounded-full p-1.5 border border-[#D9CEBF]">
                      <button
                        onClick={() => onRemoveFromCart(fullItem.id)}
                        className="w-7 h-7 rounded-full bg-white text-[#2C1E16] text-xs flex items-center justify-center hover:bg-white/80 transition-colors shadow-2xs cursor-pointer"
                        aria-label="Diminuir"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold text-[#2C1E16] px-2 tabular-nums">
                        {currentQty} no pedido
                      </span>
                      <button
                        onClick={() => onAddToCart(fullItem)}
                        className="w-7 h-7 rounded-full bg-[#5C3A21] text-white text-xs flex items-center justify-center hover:bg-[#452A18] transition-colors shadow-2xs cursor-pointer"
                        aria-label="Aumentar"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Botão de Alternância: Ver Cardápio Completo com Animação */}
        <div className="text-center mb-10">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowAllItems(!showAllItems)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#5C3A21] hover:bg-[#452A18] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-md cursor-pointer shine-effect"
          >
            <span>{showAllItems ? 'Ocultar Cardápio Detalhado' : 'Ver Cardápio Completo da Cafeteria'}</span>
            {showAllItems ? <ChevronUp className="w-4 h-4 animate-bounce" /> : <ChevronDown className="w-4 h-4 animate-bounce" />}
          </motion.button>
        </div>

        {/* 2. CARDÁPIO DETALHADO EXPANSÍVEL (Filtros, Busca e Carrinho Integrado) */}
        <AnimatePresence>
          {showAllItems && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="pt-8 border-t border-[#E8DFD5] overflow-hidden"
            >
              {/* Barra de Filtros e Busca */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
                
                {/* Abas de Categorias com Efeito Animado */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                  {MENU_CATEGORIES.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                          isActive
                            ? 'bg-[#5C3A21] text-white shadow-xs font-bold'
                            : 'bg-[#FAF7F2] text-[#6F6158] hover:bg-[#EFE8DE] border border-[#E8DFD5]'
                        }`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>

                {/* Campo de Busca em Tempo Real */}
                <div className="relative min-w-[240px]">
                  <Search className="w-4 h-4 text-[#7E6F65] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar bolo, café, toast..."
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#E8DFD5] rounded-full text-[#2C1E16] placeholder:text-[#7E6F65]/70 focus:outline-none focus:border-[#5C3A21] shadow-2xs transition-colors"
                  />
                </div>
              </div>

              {/* Grade de Itens Filtrados com Animação Suave */}
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center bg-[#FAF7F2] rounded-3xl border border-[#E8DFD5]">
                  <p className="text-sm text-[#7E6F65]">Nenhum item encontrado para esta busca.</p>
                  <button
                    onClick={() => {
                      setActiveCategory('todos');
                      setSearchQuery('');
                    }}
                    className="mt-3 text-xs font-bold text-[#5C3A21] hover:underline cursor-pointer"
                  >
                    Limpar busca e ver todos os itens
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item, idx) => {
                    const currentQty = cart[item.id] || 0;
                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.3) }}
                        whileHover={{ y: -5, transition: { duration: 0.25 } }}
                        className="bg-[#FAF7F2] rounded-3xl border border-[#E8DFD5] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-amber-600/30 transition-all duration-300 group shadow-2xs"
                      >
                        <div
                          onClick={() => setSelectedProduct(item)}
                          className="relative h-48 bg-[#EFE8DE] overflow-hidden cursor-pointer shine-effect"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                            loading="lazy"
                          />
                          {item.highlightTag && (
                            <span className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm text-[#5C3A21] text-[10px] font-bold px-3 py-1 rounded-full border border-[#E8DFD5] uppercase tracking-wide shadow-xs">
                              {item.highlightTag}
                            </span>
                          )}

                          {/* Overlay com Ícone de Olho para Ver Detalhes */}
                          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#2C1E16] text-[10px] font-bold uppercase tracking-wider shadow-lg">
                              <Eye className="w-3.5 h-3.5 text-[#5C3A21]" />
                              <span>Ver Detalhes</span>
                            </span>
                          </div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#7E6F65] block mb-1">
                              {item.categoryLabel}
                            </span>
                            <h4
                              onClick={() => setSelectedProduct(item)}
                              className="font-serif text-base font-bold text-[#2C1E16] mb-1.5 cursor-pointer hover:text-[#5C3A21] transition-colors"
                            >
                              {item.name}
                            </h4>
                            <p className="text-xs text-[#6F6158] leading-relaxed line-clamp-2">
                              {item.description}
                            </p>
                          </div>

                          <div className="mt-4 pt-3.5 border-t border-[#E8DFD5] flex items-center justify-between">
                            <span className="font-bold text-[#2C1E16] text-base tabular-nums">
                              R$ {item.price.toFixed(2).replace('.', ',')}
                            </span>

                            {currentQty === 0 ? (
                              <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onAddToCart(item)}
                                className="px-4 py-2 rounded-full bg-[#5C3A21] hover:bg-[#452A18] text-white text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer shadow-2xs shine-effect"
                              >
                                + Adicionar
                              </motion.button>
                            ) : (
                              <div className="flex items-center gap-2 bg-[#EFE8DE] rounded-full p-1 border border-[#D9CEBF]">
                                <button
                                  onClick={() => onRemoveFromCart(item.id)}
                                  className="w-6 h-6 rounded-full bg-white text-[#2C1E16] text-xs flex items-center justify-center hover:bg-white/80 transition-colors cursor-pointer"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-xs font-bold text-[#2C1E16] w-4 text-center tabular-nums">
                                  {currentQty}
                                </span>
                                <button
                                  onClick={() => onAddToCart(item)}
                                  className="w-6 h-6 rounded-full bg-[#5C3A21] text-white text-xs flex items-center justify-center hover:bg-[#452A18] transition-colors cursor-pointer"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* Botão de Finalização Flutuante se houver itens */}
              {totalCartItems > 0 && (
                <div className="mt-8 text-center">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={onOpenCart}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-colors cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Ver Comanda do Pedido ({totalCartItems} {totalCartItems === 1 ? 'item' : 'itens'})</span>
                  </motion.button>
                </div>
              )}

            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Modal de Detalhes do Produto Interativo */}
      <ProductQuickViewModal
        item={selectedProduct}
        currentQty={selectedProduct ? cart[selectedProduct.id] || 0 : 0}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
        onOpenCart={onOpenCart}
      />
    </section>
  );
};
