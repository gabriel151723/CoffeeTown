import React from 'react';
import { WHY_CHOOSE_US_ITEMS } from '../data/coffeetownData';
import { ArrowRight } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="por-que-nos" className="py-16 md:py-24 bg-[#F7F2EB] border-b border-[#E8DFD5] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção com Estética de Cafeteria Boutique */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-bold text-[#5C3A21] uppercase tracking-[0.25em] block mb-2">
            Tradição & Autenticidade · Desde 2013
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1E16] tracking-tight mb-2.5">
            Por Que a Coffeetown?
          </h2>

          <p className="text-xs sm:text-sm text-[#7E6F65] leading-relaxed max-w-md mx-auto">
            Somos apaixonados por café de verdade, confeitaria artesanal feita do zero e em criar momentos especiais para cada cliente em Salvador.
          </p>
        </div>

        {/* Grade de 3 Cards com Alturas Uniformes e Alinhamento Perfeito */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {WHY_CHOOSE_US_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF7F2] rounded-3xl border border-[#E8DFD5] p-5 sm:p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300 group h-full"
            >
              {/* Moldura da Imagem */}
              <div>
                <div className="w-full h-52 sm:h-56 rounded-2xl overflow-hidden mb-5 bg-[#EFE8DE] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm text-[#5C3A21] text-[10px] font-bold px-3 py-1 rounded-full border border-[#E8DFD5] uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Textos */}
                <div className="text-center flex flex-col items-center">
                  <span className="text-[11px] font-semibold text-[#5C3A21] uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#2C1E16] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#6F6158] leading-relaxed mb-6 max-w-xs">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Botão Inferior Uniformizado */}
              <div className="text-center pt-2">
                <a
                  href="#cardapio"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#5C3A21] hover:bg-[#452A18] text-white text-[11px] font-semibold tracking-wider uppercase transition-colors shadow-2xs"
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
