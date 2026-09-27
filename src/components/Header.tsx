import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, MessageCircle, Clock, Menu, X, Instagram, MapPin } from 'lucide-react';
import { BrandSeal } from './BrandSeal';
import { STORE_INFO } from '../data/coffeetownData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export interface NavTab {
  id: string;
  label: string;
}

export const NAV_TABS: NavTab[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'por-que-nos', label: 'Por Que Nós' },
  { id: 'cardapio', label: 'Cardápio' },
  { id: 'visite-nos', label: 'Visite a Cafeteria' },
  { id: 'avaliacoes', label: 'Depoimentos' },
];

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitora a rolagem para adaptação visual do cabeçalho e aba ativa
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 60);

      const scrollPosition = scrollY + 120;
      for (let i = NAV_TABS.length - 1; i >= 0; i--) {
        const tab = NAV_TABS[i];
        const el = document.getElementById(tab.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(tab.id);
            return;
          }
        }
      }
      if (scrollY < 200) {
        setActiveTab('inicio');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rolagem suave precisa com compensação do cabeçalho fixo
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);

    if (tabId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(tabId);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD5] shadow-xs text-[#2C1E16]'
          : 'bg-black/40 backdrop-blur-md border-b border-white/10 text-white'
      }`}
    >
      {/* 1. Barra Superior de Horários e Localização (PT-BR) */}
      <div
        className={`w-full py-1.5 px-4 sm:px-6 lg:px-8 text-[11px] sm:text-xs border-b transition-colors ${
          isScrolled
            ? 'bg-[#EFE8DE] text-[#5C3A21] border-[#E3D7C9]'
            : 'bg-black/50 text-white/80 border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-script text-base font-semibold">Bom Café, Bons Momentos</span>
            <span className="hidden sm:inline opacity-50">·</span>
            <span className="hidden sm:inline font-normal">Torrefação Própria & Pâtisserie Artesanal na Pituba</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>Segunda a Domingo: 08:30 às 21:00</span>
            </div>

            <div
              className={`hidden md:flex items-center gap-2.5 pl-3 border-l ${
                isScrolled ? 'border-[#D9CEBF] text-[#5C3A21]' : 'border-white/20 text-white/80'
              }`}
            >
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
                aria-label="Instagram Coffeetown Salvador"
                title="Instagram @coffeetownsalvadorr"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
                aria-label="Google Maps"
                title="Ver no Google Maps"
              >
                <MapPin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Barra de Navegação Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logotipo e Identificação */}
          <button
            onClick={() => handleTabClick('inicio')}
            className="flex items-center gap-3 group focus-visible:outline-none text-left cursor-pointer"
            aria-label="Coffeetown Salvador Página Inicial"
          >
            <BrandSeal size={38} className="transition-transform group-hover:scale-105 duration-200" />
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg sm:text-xl font-bold tracking-tight leading-none transition-colors ${
                  isScrolled ? 'text-[#2C1E16] group-hover:text-[#5C3A21]' : 'text-white group-hover:text-amber-300'
                }`}
              >
                CAFÉ COFFEETOWN
              </span>
              <span
                className={`text-[10px] font-medium tracking-[0.2em] uppercase mt-1 ${
                  isScrolled ? 'text-[#7E6F65]' : 'text-white/70'
                }`}
              >
                SALVADOR · PITUBA
              </span>
            </div>
          </button>

          {/* Abas Clicáveis de Navegação do Topo (Segmented Tabs Interativas com Scroll Suave) */}
          <nav
            className={`hidden lg:flex items-center gap-1 p-1 rounded-full border transition-all ${
              isScrolled
                ? 'bg-[#EFE8DE]/70 border-[#D9CEBF]'
                : 'bg-white/10 border-white/20 backdrop-blur-md'
            }`}
            aria-label="Abas de Navegação Principal"
          >
            {NAV_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? isScrolled
                        ? 'bg-[#5C3A21] text-white shadow-xs font-bold scale-[1.02]'
                        : 'bg-[#C87D32] text-white shadow-md font-bold scale-[1.02]'
                      : isScrolled
                      ? 'text-[#5C3A21] hover:text-[#2C1E16] hover:bg-white/70'
                      : 'text-white/80 hover:text-white hover:bg-white/15'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Ações do Topo */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Botão da Comanda do Pedido */}
            <button
              onClick={onOpenCart}
              className={`relative flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-full border transition-all focus-visible:outline-none cursor-pointer active:scale-95 ${
                isScrolled
                  ? 'bg-[#FAF7F2] hover:bg-[#EFE8DE] text-[#2C1E16] border-[#D9CEBF]'
                  : 'bg-white/15 hover:bg-white/25 text-white border-white/25 backdrop-blur-md'
              }`}
              aria-label={`Ver comanda com ${cartCount} itens`}
            >
              <ShoppingBag className={`w-4 h-4 ${isScrolled ? 'text-[#5C3A21]' : 'text-amber-300'}`} />
              <span className="text-xs font-semibold hidden sm:inline">Comanda</span>
              {cartCount > 0 ? (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0.6 }}
                  animate={{ scale: [1.25, 1] }}
                  transition={{ duration: 0.25 }}
                  className={`inline-flex items-center justify-center text-[10px] font-bold rounded-full w-5 h-5 tabular-nums text-white ${
                    isScrolled ? 'bg-[#5C3A21]' : 'bg-[#C87D32]'
                  }`}
                >
                  {cartCount}
                </motion.span>
              ) : (
                <span className={`text-xs hidden sm:inline ${isScrolled ? 'text-[#7E6F65]' : 'text-white/70'}`}>0</span>
              )}
            </button>

            {/* CTA Principal de Conversão WhatsApp */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={`${STORE_INFO.whatsappUrl}?text=${encodeURIComponent('Olá, Coffeetown Salvador! Gostaria de consultar o cardápio ou fazer um pedido.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-md whitespace-nowrap cursor-pointer shine-effect ${
                isScrolled
                  ? 'bg-[#5C3A21] hover:bg-[#452A18] text-white shadow-[#5C3A21]/20'
                  : 'bg-[#C87D32] hover:bg-[#B36B25] text-white shadow-black/30'
              }`}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Fazer Pedido</span>
            </motion.a>

            {/* Menu Hambúrguer Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                isScrolled ? 'text-[#5C3A21] hover:text-[#2C1E16]' : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Dropdown Mobile com Abas Clicáveis e Scroll Suave com Animação */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`lg:hidden mt-3 pt-3 border-t pb-2 space-y-1.5 rounded-2xl p-3 shadow-xl ${
                isScrolled
                  ? 'bg-[#FAF7F2] border-[#E8DFD5]'
                  : 'bg-black/90 backdrop-blur-xl border-white/20'
              }`}
            >
            {NAV_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`w-full text-left px-4 py-2.5 text-xs font-semibold rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? isScrolled
                        ? 'bg-[#5C3A21] text-white font-bold'
                        : 'bg-[#C87D32] text-white font-bold'
                      : isScrolled
                      ? 'text-[#5C3A21] hover:bg-[#EFE8DE] bg-[#FAF7F2]'
                      : 'text-white/80 hover:bg-white/10 bg-white/5'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && <span className="text-[10px] uppercase tracking-wider font-bold">Ativo</span>}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </header>
);
};
