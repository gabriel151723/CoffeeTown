import React, { useState } from 'react';
import { Instagram, MessageCircle, MapPin, Send, Check } from 'lucide-react';
import { STORE_INFO } from '../data/coffeetownData';

export const NewsletterSocialBar: React.FC = () => {
  const [contactValue, setContactValue] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactValue.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setContactValue('');
      }, 3500);
    }
  };

  return (
    <section className="py-10 bg-[#EFE8DE] border-b border-[#E3D7C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          
          {/* Lado Esquerdo: Texto & Ícone de Café (PT-BR) */}
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#D9CEBF] flex items-center justify-center text-xl shrink-0 shadow-2xs">
              ☕
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#2C1E16]">
                Fique por Dentro das Novidades
              </h3>
              <p className="text-xs text-[#6F6158]">
                Receba em primeira mão novidades de microlotes, bolos sazonais e convites especiais na Pituba.
              </p>
            </div>
          </div>

          {/* Centro: Formulário de Inscrição com Feedback Visual */}
          <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full max-w-md">
            <input
              type="text"
              value={contactValue}
              onChange={(e) => setContactValue(e.target.value)}
              placeholder="Seu e-mail ou WhatsApp..."
              required
              className="flex-1 px-4 py-2.5 rounded-full bg-[#FAF7F2] border border-[#D9CEBF] text-xs text-[#2C1E16] placeholder:text-[#7E6F65]/70 focus:outline-none focus:border-[#5C3A21] shadow-inner"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#5C3A21] hover:bg-[#452A18] text-white text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 shadow-2xs cursor-pointer active:scale-95"
            >
              {subscribed ? 'Inscrito! ✓' : 'Inscrever-se'}
            </button>
          </form>

          {/* Lado Direito: Redes Sociais com Acessibilidade (PT-BR) */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-[#5C3A21] tracking-wider uppercase">
              Siga a Cafeteria
            </span>
            <div className="flex items-center gap-2">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#5C3A21] hover:text-white text-[#5C3A21] border border-[#D9CEBF] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Instagram Coffeetown Salvador"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#5C3A21] hover:text-white text-[#5C3A21] border border-[#D9CEBF] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="WhatsApp Coffeetown Salvador"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#5C3A21] hover:text-white text-[#5C3A21] border border-[#D9CEBF] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Google Maps Coffeetown Salvador"
                title="Localização no Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
