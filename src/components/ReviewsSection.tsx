import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { REVIEWS, STORE_INFO } from '../data/coffeetownData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFD5] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header com Animação */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5C3A21] uppercase tracking-wider mb-2">
              <span className="text-base">☕</span>
              <span>Avaliações Reais do Google Maps</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1E16] tracking-tight">
              A Queridinha dos Clientes na Pituba
            </h2>
            <p className="text-xs sm:text-sm text-[#7E6F65] mt-2 max-w-xl">
              Mais de uma década servindo com carinho clientes apaixonados por café especial, bolos novaiorquinos e momentos acolhedores.
            </p>
          </motion.div>

          {/* Google Score Badge com Brilho Suave */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-[#F7F2EB] border border-[#E8DFD5] shrink-0 shadow-sm hover:border-amber-500/40 transition-colors"
          >
            <div className="text-center pr-4 border-r border-[#D9CEBF]">
              <span className="font-serif text-3xl font-bold text-[#2C1E16] block leading-none">
                4.9
              </span>
              <div className="flex items-center text-amber-500 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-xs">
              <span className="font-bold text-[#2C1E16] flex items-center gap-1">
                <span>Google Maps Verified</span>
                <Sparkles className="w-3 h-3 text-amber-500" />
              </span>
              <span className="text-[#7E6F65]">{STORE_INFO.reviewsCount} avaliações</span>
            </div>
          </motion.div>
        </div>

        {/* Reviews Grid com Animação Staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="rounded-3xl bg-[#F7F2EB] border border-[#E8DFD5] p-6 flex flex-col justify-between hover:shadow-xl hover:border-amber-600/30 transition-all duration-300 group shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EFE8DE] text-[#5C3A21] border border-[#D9CEBF] flex items-center justify-center font-bold text-sm shadow-2xs group-hover:scale-105 transition-transform">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#2C1E16] flex items-center gap-1.5">
                        {rev.author}
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 inline" aria-label="Verificado" />
                      </h4>
                      <span className="text-[11px] text-[#7E6F65]">{rev.role}</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#7E6F65]">{rev.date}</span>
                </div>

                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform duration-200" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#4A3C34] leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E8DFD5] flex items-center justify-between text-[11px] text-[#7E6F65]">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  Avaliação autêntica no Google
                </span>
                <span className="text-[#5C3A21] font-semibold">Coffeetown Salvador</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View on Google Link com Animação Hover */}
        <div className="mt-8 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-white hover:bg-[#EFE8DE] text-[#5C3A21] border border-[#D9CEBF] text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xs cursor-pointer"
          >
            <span>Ver todas as avaliações no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </div>

      </div>
    </section>
  );
};
