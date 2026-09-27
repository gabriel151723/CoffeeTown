import React from 'react';
import { Flame, Award, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { BrandSeal } from './BrandSeal';
import { STORE_INFO } from '../data/coffeetownData';

export const RoasterySpotlight: React.FC = () => {
  return (
    <section id="torrefacao" className="py-16 md:py-24 border-b border-white/5 relative bg-[#151311]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D9893B] uppercase tracking-wider mb-2">
            <Flame className="w-3.5 h-3.5 text-[#D9893B]" />
            <span>Artisan Roastery · Estd. 2013</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAF6EE] tracking-tight">
            Torrefação Própria & Confeitaria Raiz
          </h2>
          <p className="text-sm sm:text-base text-[#A39B8F] mt-3 leading-relaxed">
            Na Coffeetown Salvador, todo café servido tem rastreabilidade total. Nós selecionamos os melhores microlotes de produtores parceiros da Bahia e desenvolvemos perfis de torra exclusivos para realçar doçura natural e notas sensoriais inconfundíveis.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: The Roastery Process (col-span-7) */}
          <div className="md:col-span-7 rounded-2xl bg-[#1C1815] border border-white/8 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-bold text-[#D9893B] uppercase tracking-wider">
                  01. Grãos Especiais 85+ Pontos
                </span>
                <span className="text-xs text-[#A39B8F]">Chapada Diamantina & Piatã</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Torra Fresca Semanal na Unidade Pituba
              </h3>
              <p className="text-sm text-[#A39B8F] leading-relaxed mb-6">
                Diferente das cafeterias industriais, não usamos café torrado há meses. Nossos lotes descansam o tempo exato para desgasificação ideal, garantindo uma xícara cremosa, aroma floral e acidez equilibrada que dispensa açúcar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/5">
                <div className="flex items-start gap-2.5 text-xs text-[#FAF6EE]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#C87D32] shrink-0 mt-0.5" />
                  <span>Extrações filtradas manuais: V60, Chemex, Aeropress e Prensa</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#FAF6EE]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#C87D32] shrink-0 mt-0.5" />
                  <span>Cold Brew com maceração a frio de 18 horas</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-[#A39B8F]">Disponível em grãos ou moído na hora para levar:</span>
              <a
                href="#cardapio"
                className="text-xs font-semibold text-[#D9893B] hover:text-white underline underline-offset-4"
              >
                Ver Pacotes de Café →
              </a>
            </div>
          </div>

          {/* Bento Card 2: Authentic American Cake Co. (col-span-5) */}
          <div className="md:col-span-5 rounded-2xl bg-[#1C1815] border border-white/8 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-bold text-[#D9893B] uppercase tracking-wider">
                  02. Receitas Originais dos EUA
                </span>
                <BrandSeal size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Bolos que Fizeram História
              </h3>
              <p className="text-sm text-[#A39B8F] leading-relaxed">
                Nossos bolos seguem a genuína tradição americana: massas densas e úmidas, camadas generosas e cream cheese autêntico. Sem pré-misturas industriais.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#241F1B] border border-white/5 space-y-2">
              <div className="flex justify-between text-xs text-white">
                <span className="font-medium">Red Velvet Clássico</span>
                <span className="text-[#D9893B] font-semibold">Frosting Artesanal</span>
              </div>
              <div className="flex justify-between text-xs text-white">
                <span className="font-medium">NY Style Cheesecake</span>
                <span className="text-[#D9893B] font-semibold">Coulis de Frutas Frescas</span>
              </div>
              <div className="flex justify-between text-xs text-white">
                <span className="font-medium">American Carrot Cake</span>
                <span className="text-[#D9893B] font-semibold">Nozes Pecã Tostadas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
