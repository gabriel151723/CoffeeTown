import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Copy, Check, Clock, Phone, MessageCircle, ZoomIn, Camera, ExternalLink } from 'lucide-react';
import { STORE_INFO, VISIT_US_GALLERY } from '../data/coffeetownData';
import { ImageLightboxModal } from './ImageLightboxModal';
import { InteractiveMap } from './InteractiveMap';

export const VisitUsToday: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageSrc: string | null;
    imageTitle: string;
    imageCaption: string;
  }>({
    isOpen: false,
    imageSrc: null,
    imageTitle: '',
    imageCaption: '',
  });

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

  const openLightbox = (src: string, title: string, caption: string) => {
    setLightboxData({
      isOpen: true,
      imageSrc: src,
      imageTitle: title,
      imageCaption: caption,
    });
  };

  const closeLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <section id="visite-nos" className="py-16 md:py-24 bg-[#F7F2EB] border-b border-[#E8DFD5] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-script text-2xl sm:text-3xl text-[#5C3A21] block mb-1">
            Te esperamos na Pituba
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1E16] tracking-tight mb-2.5">
            Visite a Coffeetown Hoje
          </h2>
          <div className="text-sm text-[#5C3A21] mb-3">❦</div>
          <p className="text-xs sm:text-sm text-[#6F6158] leading-relaxed">
            Localizada em uma das esquinas mais nobres e arborizadas da Pituba. Venha pelo café especial da torrefação própria semanal e fique pelo ambiente acolhedor e atendimento afetuoso.
          </p>
        </div>

        {/* 1. Grade Principal: Informações & Mapa Interativo React-Leaflet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-14">
          
          {/* Coluna Esquerda: Card com Endereço, Horários e Ações Rápidas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-[#FAF6F0] rounded-3xl border border-[#E8DFD5] p-6 sm:p-8 flex flex-col justify-between shadow-2xs"
          >
            <div>
              <span className="text-[11px] font-bold text-[#5C3A21] uppercase tracking-[0.2em] block mb-2">
                Informações de Atendimento
              </span>

              <h3 className="font-serif text-2xl font-bold text-[#2C1E16] mb-4">
                Cafeteria & Pâtisserie Pituba
              </h3>

              {/* Informações Oficiais */}
              <div className="mb-6 space-y-3.5 text-xs text-[#2C1E16] bg-white/70 p-4 sm:p-5 rounded-2xl border border-[#E8DFD5]">
                <div className="flex items-start gap-3 font-medium">
                  <MapPin className="w-4 h-4 text-[#5C3A21] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#2C1E16]">Endereço Oficial:</span>
                    <span className="text-[#6F6158] leading-relaxed">{STORE_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#2C1E16]">
                  <Clock className="w-4 h-4 text-[#5C3A21] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#2C1E16]">Horário de Funcionamento:</span>
                    <span className="text-[#6F6158]">Segunda a Domingo: 08h30 às 21h00 (aberto direto)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#2C1E16]">
                  <Phone className="w-4 h-4 text-[#5C3A21] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#2C1E16]">WhatsApp para Pedidos & Reservas:</span>
                    <span className="text-[#6F6158]">{STORE_INFO.phoneDisplay}</span>
                  </div>
                </div>
              </div>

              {/* Botão de Rotas no Google Maps */}
              <div className="mb-5">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-7 py-3.5 rounded-full bg-[#5C3A21] hover:bg-[#452A18] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-2xs cursor-pointer shine-effect"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Traçar Rota no Google Maps</span>
                </motion.a>
              </div>
            </div>

            {/* Micro-Interações de Cópia em 1 Clique (Endereço e Chave Pix) */}
            <div className="pt-5 border-t border-[#E8DFD5] grid grid-cols-2 gap-2 text-xs">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyAddress}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-[#D9CEBF] text-[#2C1E16] hover:bg-[#EFE8DE] transition-colors cursor-pointer shadow-2xs"
                title="Copiar endereço completo"
              >
                {copiedAddress ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#5C3A21]" />
                )}
                <span className="text-[11px] font-semibold">
                  {copiedAddress ? 'Endereço Copiado!' : 'Copiar Endereço'}
                </span>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyPix}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-[#D9CEBF] text-[#2C1E16] hover:bg-[#EFE8DE] transition-colors cursor-pointer shadow-2xs"
                title="Copiar chave Pix para pagamentos"
              >
                {copiedPix ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#5C3A21]" />
                )}
                <span className="text-[11px] font-semibold">
                  {copiedPix ? 'Chave Pix Copiada!' : 'Copiar Chave Pix'}
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Coluna Direita: Componente de Mapa Interativo React-Leaflet */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <InteractiveMap height="100%" className="min-h-[440px] sm:min-h-[460px] h-full" />
          </motion.div>

        </div>

        {/* 2. Galeria de Fotos Autênticas da Unidade Pituba */}
        <div className="pt-8 border-t border-[#E8DFD5]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] font-bold text-[#5C3A21] uppercase tracking-[0.2em] block mb-1">
                Conheça Nossa Casa
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C1E16]">
                Espaços & Ambiente da Unidade Pituba
              </h3>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#7E6F65]">
              <Camera className="w-4 h-4 text-[#5C3A21]" />
              <span>Clique nas fotos para ampliar</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Foto 1: Fachada e mesas externas */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() =>
                openLightbox(
                  VISIT_US_GALLERY.facade,
                  'Fachada Arborizada na Pituba',
                  'Mesas ao ar livre protegidas por ombrelones na Rua Amazonas, 480. Perfeito para manhãs ensolaradas e fins de tarde acolhedores.'
                )
              }
              className="rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-2xs bg-[#EFE8DE] group relative h-60 sm:h-72 cursor-pointer shine-effect"
            >
              <img
                src={VISIT_US_GALLERY.facade}
                alt="Fachada arborizada e mesas externas da Coffeetown Salvador na Pituba"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3 rounded-full bg-white/90 text-[#2C1E16] shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-5 h-5 text-[#5C3A21]" />
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 p-2 rounded-xl bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#E8DFD5] text-center">
                <span className="text-[10px] font-bold text-[#5C3A21] uppercase tracking-wider block">
                  Fachada na Pituba
                </span>
              </div>
            </motion.div>

            {/* Foto 2: Torrefação & Barista */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() =>
                openLightbox(
                  VISIT_US_GALLERY.roastery,
                  'Balcão de Torrefação & Pâtisserie',
                  'Nosso torrador de cafés especiais e vitrine refrigerada com bolos americanos e croissants assados diariamente.'
                )
              }
              className="rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-2xs bg-[#EFE8DE] group relative h-60 sm:h-72 cursor-pointer shine-effect"
            >
              <img
                src={VISIT_US_GALLERY.roastery}
                alt="Balcão de confeitaria e torrefação artesanal da Coffeetown Salvador"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3 rounded-full bg-white/90 text-[#2C1E16] shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-5 h-5 text-[#5C3A21]" />
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 p-2 rounded-xl bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#E8DFD5] text-center">
                <span className="text-[10px] font-bold text-[#5C3A21] uppercase tracking-wider block">
                  Balcão & Pâtisserie
                </span>
              </div>
            </motion.div>

            {/* Foto 3: Interior Acolhedor Climatizado */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() =>
                openLightbox(
                  VISIT_US_GALLERY.interior,
                  'Salão Interno Climatizado',
                  'Ambiente com iluminação intimista, mesas em madeira nobre, tomadas para coworking e trilha sonora de jazz e indie folk.'
                )
              }
              className="rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-2xs bg-[#EFE8DE] group relative h-60 sm:h-72 cursor-pointer shine-effect"
            >
              <img
                src={VISIT_US_GALLERY.interior}
                alt="Ambiente interno acolhedor com mesas de madeira na Coffeetown Salvador"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3 rounded-full bg-white/90 text-[#2C1E16] shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-5 h-5 text-[#5C3A21]" />
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 p-2 rounded-xl bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#E8DFD5] text-center">
                <span className="text-[10px] font-bold text-[#5C3A21] uppercase tracking-wider block">
                  Ambiente Aconchegante
                </span>
              </div>
            </motion.div>
          </div>

          {/* Link Direto para Álbum de Fotos Reais no Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD5]"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              <div>
                <span className="text-xs font-bold text-[#2C1E16] block">Galeria de Fotos no Google Maps</span>
                <span className="text-[11px] text-[#7E6F65]">Explore mais de 1.280 fotos reais publicadas por clientes na unidade Pituba</span>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={STORE_INFO.googleMapsPhotosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#EFE8DE] text-[#5C3A21] border border-[#D9CEBF] text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xs whitespace-nowrap cursor-pointer"
            >
              <span>Ver Fotos no Google Maps</span>
              <span className="text-amber-600">↗</span>
            </motion.a>
          </motion.div>
        </div>

      </div>

      {/* Modal de Lightbox para Fotos em Alta Definição */}
      <ImageLightboxModal
        isOpen={lightboxData.isOpen}
        imageSrc={lightboxData.imageSrc}
        imageTitle={lightboxData.imageTitle}
        imageCaption={lightboxData.imageCaption}
        onClose={closeLightbox}
      />
    </section>
  );
};
