import React from 'react';
import { ArrowDown, Star, MessageCircle, ChevronDown, Coffee, Award, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/coffeetownData';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenWhatsApp }) => {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden scroll-mt-0"
    >
      {/* Imagem em Tela Cheia Cobrindo 100% da Primeira Página (Full Cover Hero) */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <img
          src="/src/assets/images/hero_flatlay_coffee_1790529629197.jpg"
          alt="Coffeetown Salvador - Mesa com café especial, croissant folhado dourado, confeitaria artesanal e grãos na Pituba"
          className="w-full h-full object-cover object-center scale-100"
          loading="eager"
        />

        {/* Gradiente Fotográfico Cinematográfico Escuro para Legibilidade Perfeita */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/65" />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* Conteúdo Central da Primeira Página (Tipografia Editorial & Autêntica de Cafeteria) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center flex flex-col items-center justify-center">
        
        {/* Selo de Tradição e Excelência */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-amber-200/90 mb-6 shadow-lg">
          <Coffee className="w-3.5 h-3.5 text-amber-300" />
          <span>The American Coffee & Cake, Co. · Estd. 2013</span>
        </div>

        {/* Tag Cursiva Elegante */}
        <span className="font-script text-3xl sm:text-5xl md:text-6xl text-[#F2E8DC] font-normal tracking-wide mb-3 drop-shadow-md">
          Bem-vindo à Coffeetown Salvador
        </span>

        {/* Manchete Principal de Alto Impacto */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.06] mb-6 drop-shadow-lg text-balance">
          Bom Café,<br />Bons Momentos.
        </h1>

        {/* Subtítulo Persuasivo & Autêntico */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 font-light drop-shadow">
          Microlotes especiais da Chapada Diamantina com torrefação própria semanal, croissants folhados de manteiga e o autêntico Red Velvet nova-iorquino. O refúgio mais aconchegante da Rua Amazonas, na Pituba.
        </p>

        {/* Botões de Conversão (CRO Primário & WhatsApp Direto) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C87D32] hover:bg-[#B36B25] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl shadow-black/40 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Explorar Nosso Cardápio</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/30 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/30" />
            <span>Fazer Pedido no WhatsApp</span>
          </button>
        </div>

        {/* Prova Social do Google Maps (Boutique Cafe Standard) */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-xs text-white/90 shadow-md">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="font-bold text-white">4.9 / 5.0</span>
          <span className="text-white/70">· Mais de 1.280 avaliações no Google Maps (Pituba)</span>
        </div>

      </div>

      {/* Indicador Elegante de Rolagem no Rodapé da 1ª Página */}
      <button
        onClick={onExploreMenu}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/75 hover:text-white transition-colors cursor-pointer group"
        aria-label="Rolar para baixo e ver o cardápio"
      >
        <span className="text-[11px] font-medium tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">
          Rolar para Conhecer
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-amber-300" />
      </button>
    </section>
  );
};
