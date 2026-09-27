import React, { useState } from 'react';
import { MapPin, Clock, Phone, Copy, Check, Navigation, QrCode, Instagram, MessageCircle, ExternalLink } from 'lucide-react';
import { STORE_INFO, FAQ_ITEMS } from '../data/coffeetownData';

export const LocationSection: React.FC = () => {
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
    <section id="localizacao" className="py-16 md:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D9893B] uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização Privilegiada na Pituba</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAF6EE] tracking-tight">
            Visite a Coffeetown Salvador
          </h2>
          <p className="text-sm sm:text-base text-[#A39B8F] mt-2">
            Localizada em uma das ruas mais nobres e charmosas de Salvador. Ambiente climatizado, área externa aconchegante, estacionamento e wi-fi de alta velocidade.
          </p>
        </div>

        {/* Bento Grid: Map + Contact & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Info Cards & Quick Copy (col-span-5) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Address Card with Copy Micro-interaction */}
            <div className="rounded-2xl bg-[#1A1715] border border-white/8 p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5 text-[#D9893B]">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Endereço Oficial
                  </span>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-[#FAF6EE] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C87D32]"
                  aria-label="Copiar endereço completo"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#A39B8F]" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-sm font-medium text-[#FAF6EE] mb-1">
                {STORE_INFO.address}
              </p>
              <p className="text-xs text-[#A39B8F] mb-5">
                Pituba, Salvador - BA · Ponto de referência fácil acesso
              </p>

              <div className="flex items-center gap-2">
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#27221E] hover:bg-[#342D28] text-xs font-semibold text-white border border-white/10 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D9893B]" />
                  <span>Google Maps</span>
                </a>
                <a
                  href={STORE_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#27221E] hover:bg-[#342D28] text-xs font-semibold text-white border border-white/10 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Waze</span>
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="rounded-2xl bg-[#1A1715] border border-white/8 p-6">
              <div className="flex items-center gap-2.5 text-[#D9893B] mb-3">
                <Clock className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Horário de Funcionamento
                </span>
              </div>
              <div className="flex items-center justify-between text-sm py-1.5 border-b border-white/5">
                <span className="text-[#A39B8F]">Segunda a Sexta</span>
                <span className="font-semibold text-white">08h30 às 21h00</span>
              </div>
              <div className="flex items-center justify-between text-sm py-1.5 border-b border-white/5">
                <span className="text-[#A39B8F]">Sábados e Domingos</span>
                <span className="font-semibold text-white">08h30 às 21h00</span>
              </div>
              <div className="flex items-center justify-between text-sm pt-2 text-emerald-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                  Brunch & Confeitaria o dia todo
                </span>
                <span className="text-xs text-[#A39B8F]">Sem intervalo</span>
              </div>
            </div>

            {/* Pix & Direct Contact */}
            <div className="rounded-2xl bg-[#1A1715] border border-white/8 p-6">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5 text-[#D9893B]">
                  <QrCode className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Chave Pix Oficial
                  </span>
                </div>
                <button
                  onClick={handleCopyPix}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-[#FAF6EE] transition-colors focus-visible:outline-none"
                  aria-label="Copiar chave Pix"
                >
                  {copiedPix ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Pix Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#A39B8F]" />
                      <span>Copiar Pix</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-[#12100E] p-3 rounded-xl border border-white/5 text-xs font-mono text-[#D9893B] mb-2">
                {STORE_INFO.phoneDisplay} (Chave Celular)
              </div>
              <p className="text-[11px] text-[#A39B8F]">
                Favorecido: {STORE_INFO.pixBeneficiary}. Para agilizar encomendas de bolos ou pedidos antecipados.
              </p>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-3">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#241F1B] hover:bg-[#2F2924] border border-white/10 text-xs font-semibold text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>{STORE_INFO.instagramHandle}</span>
              </a>
              <a
                href={`${STORE_INFO.whatsappUrl}?text=${encodeURIComponent('Olá, equipe Coffeetown Salvador! Gostaria de falar sobre o atendimento na Pituba.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#241F1B] hover:bg-[#2F2924] border border-white/10 text-xs font-semibold text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>(71) 99991-4478</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Google Map (col-span-7) */}
          <div className="lg:col-span-7 h-full">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#1C1815] shadow-xl h-[460px] lg:h-[580px] relative">
              <iframe
                title="Localização Coffeetown Salvador na Pituba"
                src="https://maps.google.com/maps?q=Rua+Amazonas,+Pituba,+Salvador+-+BA,+Brasil&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              {/* Overlay card for map */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-xl bg-[#141210]/95 backdrop-blur-md border border-white/10 text-xs shadow-lg">
                <span className="font-bold text-white block">Coffeetown Salvador (Pituba)</span>
                <span className="text-[#A39B8F] text-[11px] block mt-0.5">Rua Amazonas · Pituba, Salvador - BA</span>
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 font-semibold text-[#D9893B] hover:underline"
                >
                  <span>Abrir aplicativo de mapas</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick FAQ Section */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <h3 className="font-display text-2xl font-bold text-white mb-6">
            Dúvidas Frequentes sobre Atendimento & Pedidos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQ_ITEMS.map((faq, index) => (
              <div key={index} className="p-5 rounded-2xl bg-[#1A1715] border border-white/5">
                <h4 className="text-sm font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-xs text-[#A39B8F] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
