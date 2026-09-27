import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ShoppingBag, X, ArrowRight, Sparkles } from 'lucide-react';
import { MenuItem } from '../data/coffeetownData';

interface CartToastProps {
  lastAddedItem: MenuItem | null;
  cartCount: number;
  onOpenCart: () => void;
  onClose: () => void;
}

export const CartToast: React.FC<CartToastProps> = ({
  lastAddedItem,
  cartCount,
  onOpenCart,
  onClose,
}) => {
  useEffect(() => {
    if (!lastAddedItem) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3800);
    return () => clearTimeout(timer);
  }, [lastAddedItem, onClose]);

  return (
    <AnimatePresence>
      {lastAddedItem && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-50 max-w-sm w-[calc(100vw-2rem)] sm:w-auto bg-[#2C1E16] text-[#FAF7F2] p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-amber-600/30 backdrop-blur-lg"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-3">
            {/* Imagem do Produto com Indicador de Sucesso */}
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-[#3D2C20]">
              <img
                src={lastAddedItem.image}
                alt={lastAddedItem.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-sm border border-[#2C1E16]">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
            </div>

            {/* Detalhes do Item */}
            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-0.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Adicionado ao Pedido</span>
              </div>
              <p className="text-xs font-bold text-white truncate">
                {lastAddedItem.name}
              </p>
              <p className="text-[11px] text-[#D9CEBF]">
                R$ {lastAddedItem.price.toFixed(2).replace('.', ',')}
              </p>
            </div>

            {/* Botão de Fechar */}
            <button
              onClick={onClose}
              className="text-[#D9CEBF] hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              aria-label="Fechar notificação"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Botão de Ação Rápida: Ver Comanda */}
          <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] text-amber-200/80 font-medium">
              Total na comanda: <strong className="text-white">{cartCount} {cartCount === 1 ? 'item' : 'itens'}</strong>
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenCart();
              }}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-wider cursor-pointer"
            >
              <span>Ver Comanda</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
