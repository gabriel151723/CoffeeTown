import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Clock, Phone, MessageCircle } from 'lucide-react';
import { STORE_INFO, VISIT_US_GALLERY } from '../data/coffeetownData';

export const VisitUsToday: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(STORE_INFO.pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  return (
    <section id="visite-nos" className="py-16 md:py-24 bg-[#F7F2EB] border-b border-[#E8DFD5] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout de 2 Colunas (Alinhamento e Responsividade Aprimorados) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Coluna Esquerda: Card com Endereço, Horários e Ações Rápidas */}
          <div className="lg:col-span-5 bg-[#FAF6F0] rounded-3xl border border-[#E8DFD5] p-6 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="font-script text-2xl sm:text-3xl text-[#5C3A21] block mb-1">
                Te esperamos na Pituba
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1E16] tracking-tight mb-2">
                Visite a Coffeetown Hoje
              </h2>

              <div className="text-sm text-[#5C3A21] mb-4">❦</div>

              <p className="text-xs sm:text-sm text-[#6F6158] leading-relaxed mb-6">
                Adoraríamos receber você em nossa casa. Venha pelo café especial da torrefação própria e fique pelo ambiente acolhedor e atendimento afetuoso!
              </p>

              {/* Informações Oficiais */}
              <div className="mb-6 space-y-3 text-xs text-[#2C1E16] bg-white/70 p-4 rounded-2xl border border-[#E8DFD5]">
                <div className="flex items-start gap-2.5 font-medium">
                  <MapPin className="w-4 h-4 text-[#5C3A21] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#2C1E16]">Endereço Oficial:</span>
                    <span className="text-[#6F6158]">{STORE_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-[#2C1E16]">
                  <Clock className="w-4 h-4 text-[#5C3A21] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#2C1E16]">Horário de Funcionamento:</span>
                    <span className="text-[#6F6158]">Segunda a Domingo: 08h30 às 21h00 (sem intervalo)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-[#2C1E16]">
                  <Phone className="w-4 h-4 text-[#5C3A21] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#2C1E16]">WhatsApp para Atendimento:</span>
                    <span className="text-[#6F6158]">{STORE_INFO.phoneDisplay}</span>
                  </div>
                </div>
              </div>

              {/* Botão de Rotas no Google Maps */}
              <div className="mb-5">
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-7 py-3.5 rounded-full bg-[#5C3A21] hover:bg-[#452A18] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-2xs cursor-pointer active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Traçar Rota no Google Maps</span>
                </a>
              </div>
            </div>

            {/* Micro-Interações de Cópia em 1 Clique (Endereço e Chave Pix) */}
            <div className="pt-5 border-t border-[#E8DFD5] grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={handleCopyAddress}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-[#D9CEBF] text-[#2C1E16] hover:bg-[#EFE8DE] transition-colors cursor-pointer shadow-2xs"
                title="Copiar endereço completo"
              >
                {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#5C3A21]" />}
                <span className="text-[11px] font-semibold">{copiedAddress ? 'Endereço Copiado!' : 'Copiar Endereço'}</span>
              </button>

              <button
                onClick={handleCopyPix}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-[#D9CEBF] text-[#2C1E16] hover:bg-[#EFE8DE] transition-colors cursor-pointer shadow-2xs"
                title="Copiar chave Pix para pagamentos"
              >
                {copiedPix ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#5C3A21]" />}
                <span className="text-[11px] font-semibold">{copiedPix ? 'Chave Pix Copiada!' : 'Copiar Chave Pix'}</span>
              </button>
            </div>
          </div>

          {/* Coluna Direita: Colagem de 3 Fotos Verticais (Responsiva) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 items-stretch">
            {/* Foto 1: Fachada e mesas externas */}
            <div className="rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-2xs bg-[#EFE8DE] group relative h-64 sm:h-[460px]">
              <img
                src={VISIT_US_GALLERY.facade}
                alt="Fachada arborizada e mesas externas da Coffeetown Salvador na Pituba"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 p-2 rounded-xl bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#E8DFD5] text-center">
                <span className="text-[10px] font-bold text-[#5C3A21] uppercase tracking-wider block">
                  Fachada na Pituba
                </span>
              </div>
            </div>

            {/* Foto 2: Torrefação & Barista */}
            <div className="rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-2xs bg-[#EFE8DE] group relative h-64 sm:h-[460px]">
              <img
                src={VISIT_US_GALLERY.roastery}
                alt="Balcão de confeitaria e torrefação artesanal da Coffeetown Salvador"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 p-2 rounded-xl bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#E8DFD5] text-center">
                <span className="text-[10px] font-bold text-[#5C3A21] uppercase tracking-wider block">
                  Balcão & Pâtisserie
                </span>
              </div>
            </div>

            {/* Foto 3: Interior Acolhedor Climatizado */}
            <div className="rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-2xs bg-[#EFE8DE] group relative h-64 sm:h-[460px]">
              <img
                src={VISIT_US_GALLERY.interior}
                alt="Ambiente interno acolhedor com mesas de madeira na Coffeetown Salvador"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 p-2 rounded-xl bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#E8DFD5] text-center">
                <span className="text-[10px] font-bold text-[#5C3A21] uppercase tracking-wider block">
                  Ambiente Aconchegante
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Link Direto para Álbum de Fotos Reais no Google Maps */}
        <div className="mt-8 pt-6 border-t border-[#E8DFD5] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF7F2] p-4 rounded-2xl border">
          <div className="flex items-center gap-3">
            <span className="text-xl">📍</span>
            <div>
              <span className="text-xs font-bold text-[#2C1E16] block">Galeria de Fotos do Google Maps</span>
              <span className="text-[11px] text-[#7E6F65]">Explore mais de 1.280 fotos reais publicadas por frequentadores na unidade Pituba</span>
            </div>
          </div>
          <a
            href={STORE_INFO.googleMapsPhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#EFE8DE] text-[#5C3A21] border border-[#D9CEBF] text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xs whitespace-nowrap"
          >
            <span>Ver Fotos no Google Maps</span>
            <span className="text-amber-600">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};
