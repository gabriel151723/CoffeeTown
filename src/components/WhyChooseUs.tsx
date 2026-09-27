import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US_ITEMS } from '../data/coffeetownData';
import { ArrowRight, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="por-que-nos" className="py-16 md:py-24 bg-[#F7F2EB] border-b border-[#E8DFD5] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção com Animação Editorial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-[11px] font-bold text-[#5C3A21] uppercase tracking-[0.25em] block mb-2">
            Tradição & Autenticidade · Desde 2013
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1E16] tracking-tight mb-2.5">
            Por Que a Coffeetown?
          </h2>

          <p className="text-xs sm:text-sm text-[#7E6F65] leading-relaxed max-w-md mx-auto">
            Somos apaixonados por café de verdade, confeitaria artesanal feita do zero e em criar momentos especiais para cada cliente em Salvador.
          </p>
        </motion.div>

        {/* Grade de 3 Cards com Alturas Uniformes, Elevação Hover e Shimmer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-[#FAF7F2] rounded-3xl border border-[#E8DFD5] p-5 sm:p-6 flex flex-col justify-between shadow-2xs hover:shadow-xl hover:border-amber-600/30 transition-all duration-300 group h-full relative"
            >
              {/* Moldura da Imagem */}
              <div>
                <div className="w-full h-52 sm:h-56 rounded-2xl overflow-hidden mb-5 bg-[#EFE8DE] relative shine-effect">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-sm text-[#5C3A21] text-[10px] font-bold px-3 py-1 rounded-full border border-[#E8DFD5] uppercase tracking-wider shadow-xs">
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

              {/* Botão Inferior Uniformizado com Micro-Interação */}
              <div className="text-center pt-2">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#cardapio"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#5C3A21] hover:bg-[#452A18] text-white text-[11px] font-semibold tracking-wider uppercase transition-colors shadow-2xs cursor-pointer shine-effect"
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
