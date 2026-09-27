/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MenuSection } from './components/MenuSection';
import { VisitUsToday } from './components/VisitUsToday';
import { ReviewsSection } from './components/ReviewsSection';
import { NewsletterSocialBar } from './components/NewsletterSocialBar';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { ExportHtmlModal } from './components/ExportHtmlModal';
import { CartToast } from './components/CartToast';
import { MenuItem, STORE_INFO } from './data/coffeetownData';

export default function App() {
  const [cart, setCart] = useState<{ [itemId: string]: number }>(() => {
    try {
      const saved = localStorage.getItem('coffeetown_cart');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('coffeetown_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
    setLastAddedItem(item);
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart((prev) => {
      const current = prev[itemId] || 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[itemId];
        return next;
      }
      return {
        ...prev,
        [itemId]: current - 1,
      };
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  const totalCartCount = Object.values(cart).reduce((sum, count) => sum + count, 0);

  const scrollToMenu = () => {
    const el = document.getElementById('cardapio');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const openDirectWhatsApp = () => {
    window.open(
      `${STORE_INFO.whatsappUrl}?text=${encodeURIComponent(
        'Olá, equipe Coffeetown Salvador! Gostaria de consultar o cardápio da Pituba ou fazer um pedido.'
      )}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-[#F7F2EB] text-[#2C1E16] flex flex-col selection:bg-[#5C3A21]/20 selection:text-[#2C1E16]">
      {/* 1. Cabeçalho Adaptativo com Vidro Escuro no Hero e Claro no Scroll (100% PT-BR) */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Seções Principais da Landing Page */}
      <main className="flex-1">
        {/* 2. Hero Section Cinematográfico: A Imagem Cobre 100% da Primeira Página (Full Cover Hero) */}
        <Hero
          onExploreMenu={scrollToMenu}
          onOpenWhatsApp={openDirectWhatsApp}
        />

        {/* 3. Por Que a Coffeetown? (Cards de Tradição, Café 85+ e Confeitaria) */}
        <WhyChooseUs />

        {/* 4. Destaques do Cardápio (Fileira Superior + Cardápio Completo e Comanda) */}
        <MenuSection
          cart={cart}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* 5. Visite a Cafeteria na Pituba (Informações, Horários, Chave Pix e Fotos Reais) */}
        <VisitUsToday />

        {/* 6. Avaliações Reais do Google Maps (Nota 4.9 com Depoimentos Verificados) */}
        <ReviewsSection />

        {/* 7. Newsletter & Redes Sociais */}
        <NewsletterSocialBar />
      </main>

      {/* 8. Rodapé Autêntico com Link Discreto de Standalone */}
      <Footer onOpenExport={() => setIsExportOpen(true)} />

      {/* CTA Flutuante Mobile Otimizado para WhatsApp */}
      <MobileStickyCTA
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Drawer de Comanda com Envio Formatado para WhatsApp */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Modal para Exportação do Código HTML Único */}
      <ExportHtmlModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

      {/* Notificação Flutuante Animada de Item Adicionado (Toast Premium) */}
      <CartToast
        lastAddedItem={lastAddedItem}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onClose={() => setLastAddedItem(null)}
      />
    </div>
  );
}
