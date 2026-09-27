import React from 'react';
import { MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '../data/coffeetownData';

interface MobileStickyCTAProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({
  cartCount,
  onOpenCart,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 p-2.5 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8DFD5] shadow-lg">
      <div className="max-w-md mx-auto flex items-center gap-2">
        {cartCount > 0 ? (
          <button
            onClick={onOpenCart}
            className="flex-1 flex items-center justify-between py-3 px-4 rounded-full bg-[#5C3A21] text-white font-semibold text-xs shadow-md active:scale-95 transition-transform cursor-pointer"
            aria-label={`Ver comanda com ${cartCount} itens`}
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Ver Comanda ({cartCount})</span>
            </div>
            <span className="flex items-center gap-1 font-bold uppercase tracking-wider text-[11px]">
              <span>Finalizar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        ) : (
          <a
            href={`${STORE_INFO.whatsappUrl}?text=${encodeURIComponent('Olá, Coffeetown Salvador! Gostaria de consultar o cardápio da Pituba ou fazer um pedido.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#5C3A21] text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Pedir no WhatsApp · (71) 99991-4478</span>
          </a>
        )}
      </div>
    </div>
  );
};
