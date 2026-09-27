import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag, Sparkles, Coffee, Heart, Check, MessageCircle } from 'lucide-react';
import { MenuItem, STORE_INFO } from '../data/coffeetownData';

interface ProductQuickViewModalProps {
  item: MenuItem | null;
  currentQty: number;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (itemId: string) => void;
  onOpenCart: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  item,
  currentQty,
  onClose,
  onAddToCart,
  onRemoveFromCart,
  onOpenCart,
}) => {
  // Fecha com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  if (!item) return null;

  const getArtisanNote = (category: string) => {
    switch (category) {
      case 'cafes':
        return 'Microlote especial da Bahia (85+ pontos SCA) com torrefação própria na cafeteria da Pituba. Extraído com precisão para realçar doçura natural e notas sensoriais puras.';
      case 'cakes':
        return 'Receita clássica nova-iorquina feita do zero em nossa confeitaria. Camadas generosas, cream cheese autêntico e sem pré-misturas industriais.';
      case 'brunch':
        return 'Pães de fermentação natural (levain rústico), abacates frescos selecionados e ovos caipiras preparados no ponto perfeito.';
      default:
        return 'Feito com ingredientes nobres, 100% de manteiga pura e dedicação artesanal diária pela equipe Coffeetown.';
    }
  };

  const handleAskWhatsApp = () => {
    const text = `Olá! Gostaria de saber mais sobre o item "${item.name}" do cardápio da Coffeetown Pituba.`;
    window.open(`${STORE_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop com Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Card com Animação Spring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative w-full max-w-2xl bg-[#FAF7F2] text-[#2C1E16] rounded-3xl shadow-2xl border border-[#E8DFD5] overflow-hidden z-10 my-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Botão Fechar no Topo Direito */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer shadow-md"
            aria-label="Fechar detalhes"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Imagem com Efeito de Luz e Zoom */}
            <div className="relative h-64 sm:h-full min-h-[260px] bg-[#EFE8DE] overflow-hidden group">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:hidden" />
              
              {/* Badges Flutuantes */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-[#FAF7F2]/95 backdrop-blur-md text-[#5C3A21] text-[10px] font-bold px-3 py-1 rounded-full border border-[#E8DFD5] uppercase tracking-wider shadow-sm">
                  {item.categoryLabel}
                </span>
                {item.highlightTag && (
                  <span className="bg-[#C87D32] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm animate-pulse">
                    ★ {item.highlightTag}
                  </span>
                )}
              </div>
            </div>

            {/* Conteúdo Editorial e Controles */}
            <div className="p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#5C3A21] uppercase tracking-[0.2em] block mb-1">
                  Coffeetown Salvador · Pituba
                </span>

                <h3 className="font-serif text-2xl font-bold text-[#2C1E16] mb-2 leading-snug">
                  {item.name}
                </h3>

                <div className="text-xl font-extrabold text-[#5C3A21] mb-3">
                  R$ {item.price.toFixed(2).replace('.', ',')}
                </div>

                <p className="text-xs sm:text-sm text-[#4A3C34] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Nota do Barista / Confeiteiro */}
                <div className="bg-[#EFE8DE]/70 border border-[#D9CEBF] p-3 rounded-2xl mb-6">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#5C3A21] uppercase tracking-wider mb-1">
                    <Sparkles className="w-3 h-3 text-[#C87D32]" />
                    <span>Padrão Artesanal da Casa</span>
                  </div>
                  <p className="text-[11px] text-[#6F6158] leading-relaxed">
                    {getArtisanNote(item.category)}
                  </p>
                </div>
              </div>

              {/* Controles de Pedido */}
              <div className="space-y-3 pt-3 border-t border-[#E8DFD5]">
                {currentQty === 0 ? (
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={() => onAddToCart(item)}
                    className="w-full py-3.5 px-6 rounded-full bg-[#5C3A21] hover:bg-[#452A18] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Adicionar à Comanda</span>
                  </motion.button>
                ) : (
                  <div className="flex items-center justify-between gap-3 bg-[#EFE8DE] rounded-full p-1.5 border border-[#D9CEBF]">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="w-8 h-8 rounded-full bg-white text-[#2C1E16] flex items-center justify-center hover:bg-white/80 transition-colors shadow-sm cursor-pointer"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-xs font-bold text-[#2C1E16] px-2 tabular-nums">
                        {currentQty} {currentQty === 1 ? 'unidade' : 'unidades'}
                      </span>
                      <button
                        onClick={() => onAddToCart(item)}
                        className="w-8 h-8 rounded-full bg-[#5C3A21] text-white flex items-center justify-center hover:bg-[#452A18] transition-colors shadow-sm cursor-pointer"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        onOpenCart();
                      }}
                      className="px-4 py-2 rounded-full bg-[#5C3A21] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#452A18] transition-colors cursor-pointer"
                    >
                      Ver Comanda
                    </button>
                  </div>
                )}

                {/* Pergunta Rápida no WhatsApp */}
                <button
                  onClick={handleAskWhatsApp}
                  className="w-full py-2 px-4 text-[11px] font-semibold text-[#5C3A21] hover:text-[#2C1E16] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Dúvida sobre ingredientes ou encomenda inteira? Fale no WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
