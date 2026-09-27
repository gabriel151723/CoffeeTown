import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight, Store, Bike } from 'lucide-react';
import { MenuItem, STORE_INFO, MENU_ITEMS } from '../data/coffeetownData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { [itemId: string]: number };
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (itemId: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'takeout' | 'delivery'>('takeout');
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const cartEntries = Object.entries(cart).filter(([_, qty]) => qty > 0);
  const cartItemsWithDetails = cartEntries.map(([id, qty]) => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return {
      item,
      qty,
      total: (item?.price || 0) * qty,
    };
  }).filter((entry): entry is { item: MenuItem; qty: number; total: number } => !!entry.item);

  const subtotal = cartItemsWithDetails.reduce((sum, entry) => sum + entry.total, 0);

  const handleCheckoutWhatsApp = () => {
    let message = `☕ *PEDIDO ONLINE - CAFÉ COFFEETOWN SALVADOR*\n`;
    message += `📍 *Modalidade:* ${orderType === 'takeout' ? 'Retirada no Balcão (Pituba)' : 'Entrega / Delivery (Salvador)'}\n`;
    if (customerName.trim()) {
      message += `👤 *Cliente:* ${customerName.trim()}\n`;
    }
    if (orderType === 'delivery' && deliveryAddress.trim()) {
      message += `🏠 *Endereço:* ${deliveryAddress.trim()}\n`;
    }
    message += `\n*ITENS DO PEDIDO:*\n`;

    cartItemsWithDetails.forEach(({ item, qty, total }) => {
      message += `• ${qty}x ${item.name} — R$ ${total.toFixed(2).replace('.', ',')}\n`;
    });

    message += `\n--------------------------------\n`;
    message += `💰 *SUBTOTAL:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;

    if (notes.trim()) {
      message += `📝 *Observações:* ${notes.trim()}\n`;
    }

    message += `\n_Pedido gerado via Cardápio Coffeetown Salvador (Pituba)_`;

    const encoded = encodeURIComponent(message);
    window.open(`${STORE_INFO.whatsappUrl}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-[#FAF7F2] text-[#2C1E16] shadow-2xl flex flex-col h-full border-l border-[#E8DFD5] z-10">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E8DFD5] flex items-center justify-between bg-[#F7F2EB]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#5C3A21]" />
            <div>
              <h3 className="font-serif text-lg font-bold text-[#2C1E16]">Comanda do Seu Pedido</h3>
              <span className="text-[11px] text-[#7E6F65]">Coffeetown Pituba</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#7E6F65] hover:text-[#2C1E16] rounded-full hover:bg-[#EFE8DE] transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {cartItemsWithDetails.length === 0 ? (
            <div className="py-16 text-center">
              <span className="text-4xl block mb-3">☕</span>
              <p className="text-sm font-bold text-[#2C1E16] mb-1">Sua comanda está vazia</p>
              <p className="text-xs text-[#7E6F65] max-w-xs mx-auto mb-6">
                Adicione cafés artesanais, bolos novaiorquinos ou itens de brunch no cardápio.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-[#5C3A21] text-white text-xs font-semibold hover:bg-[#452A18] transition-colors"
              >
                Voltar ao Cardápio
              </button>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#7E6F65]">
                  <span>Itens selecionados</span>
                  <button
                    onClick={onClearCart}
                    className="hover:text-red-600 transition-colors flex items-center gap-1 font-medium"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Limpar comanda</span>
                  </button>
                </div>

                {cartItemsWithDetails.map(({ item, qty, total }) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-xl object-cover bg-[#EFE8DE] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#2C1E16] truncate">{item.name}</h4>
                      <span className="text-[11px] text-[#7E6F65] block">
                        R$ {item.price.toFixed(2).replace('.', ',')} un
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 bg-[#F7F2EB] px-2 py-1 rounded-full border border-[#D9CEBF]">
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="w-5 h-5 flex items-center justify-center text-xs text-[#7E6F65] hover:text-[#2C1E16]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-[#2C1E16] w-4 text-center">
                        {qty}
                      </span>
                      <button
                        onClick={() => onAddToCart(item)}
                        className="w-5 h-5 flex items-center justify-center text-xs text-[#5C3A21] hover:text-[#2C1E16]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right shrink-0 min-w-[65px]">
                      <span className="text-xs font-bold text-[#2C1E16]">
                        R$ {total.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Mode Toggle */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#2C1E16] block">
                  Como deseja receber seu pedido?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('takeout')}
                    className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                      orderType === 'takeout'
                        ? 'border-[#5C3A21] bg-[#5C3A21] text-white shadow-xs'
                        : 'border-[#D9CEBF] bg-white text-[#7E6F65] hover:bg-[#EFE8DE]'
                    }`}
                  >
                    <Store className="w-3.5 h-3.5" />
                    <span>Retirada (Pituba)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                      orderType === 'delivery'
                        ? 'border-[#5C3A21] bg-[#5C3A21] text-white shadow-xs'
                        : 'border-[#D9CEBF] bg-white text-[#7E6F65] hover:bg-[#EFE8DE]'
                    }`}
                  >
                    <Bike className="w-3.5 h-3.5" />
                    <span>Delivery (Salvador)</span>
                  </button>
                </div>
              </div>

              {/* Customer Inputs */}
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-[#7E6F65] block mb-1">
                    Seu Nome (para identificação)
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ex: Amanda Silva"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D9CEBF] rounded-xl text-[#2C1E16] placeholder:text-[#7E6F65]/60 focus:outline-none focus:border-[#5C3A21]"
                  />
                </div>

                {orderType === 'delivery' && (
                  <div>
                    <label className="text-xs font-semibold text-[#7E6F65] block mb-1">
                      Endereço de Entrega em Salvador
                    </label>
                    <input
                      type="text"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="Rua, número, apto e bairro"
                      className="w-full px-3.5 py-2 text-xs bg-white border border-[#D9CEBF] rounded-xl text-[#2C1E16] placeholder:text-[#7E6F65]/60 focus:outline-none focus:border-[#5C3A21]"
                    />
                  </div>
                )}

                <div>
                  <label className="text-xs font-semibold text-[#7E6F65] block mb-1">
                    Observações do Pedido (opcional)
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ex: Leite de aveia, sem açúcar, talheres..."
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D9CEBF] rounded-xl text-[#2C1E16] placeholder:text-[#7E6F65]/60 focus:outline-none focus:border-[#5C3A21]"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer with Checkout CTA */}
        {cartItemsWithDetails.length > 0 && (
          <div className="p-5 border-t border-[#E8DFD5] bg-[#F7F2EB] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#7E6F65]">Subtotal</span>
              <span className="text-lg font-bold text-[#2C1E16]">
                R$ {subtotal.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#5C3A21] hover:bg-[#452A18] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Finalizar e Enviar no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-[#7E6F65]">
              Uma mensagem formatada será gerada instantaneamente no WhatsApp da Coffeetown Pituba.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
