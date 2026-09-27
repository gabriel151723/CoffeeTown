import React from 'react';
import { BrandSeal } from './BrandSeal';
import { STORE_INFO } from '../data/coffeetownData';

interface FooterProps {
  onOpenExport?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExport }) => {
  return (
    <footer className="bg-[#FAF6F0] border-t border-[#E8DFD5] py-8 text-[#7E6F65] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Linha do Rodapé Principal (100% PT-BR) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          <div className="flex items-center gap-3">
            <BrandSeal size={28} />
            <div>
              <span className="font-serif font-bold text-[#2C1E16] text-sm block">
                Coffeetown Salvador · Pituba
              </span>
              <span className="text-[11px] text-[#7E6F65]">
                {STORE_INFO.addressShort}
              </span>
            </div>
          </div>

          <div className="text-xs text-[#7E6F65]">
            © {new Date().getFullYear()} Coffeetown Salvador. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <a href="#por-que-nos" className="hover:text-[#2C1E16] transition-colors">
              Sobre a Cafeteria
            </a>
            <span>·</span>
            <a href="#cardapio" className="hover:text-[#2C1E16] transition-colors">
              Cardápio
            </a>
            <span>·</span>
            <a href="#visite-nos" className="hover:text-[#2C1E16] transition-colors">
              Localização
            </a>
            <span>·</span>
            <a href="#avaliacoes" className="hover:text-[#2C1E16] transition-colors">
              Depoimentos
            </a>
            {onOpenExport && (
              <>
                <span>·</span>
                <button
                  onClick={onOpenExport}
                  className="hover:text-[#2C1E16] cursor-pointer text-[#A8988B] transition-colors"
                  title="Exportar código HTML standalone"
                >
                  HTML Standalone
                </button>
              </>
            )}
          </div>

        </div>

      </div>
    </footer>
  );
};
