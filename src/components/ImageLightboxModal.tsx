import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, ZoomIn } from 'lucide-react';
import { STORE_INFO } from '../data/coffeetownData';

interface ImageLightboxModalProps {
  isOpen: boolean;
  imageSrc: string | null;
  imageTitle: string;
  imageCaption: string;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  imageSrc,
  imageTitle,
  imageCaption,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop com Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-4xl w-full bg-[#1C1815] text-[#FAF7F2] rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10 flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          {/* Botão Fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer shadow-lg border border-white/20"
            aria-label="Fechar foto"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Imagem em Destaque */}
          <div className="relative w-full max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
            <img
              src={imageSrc}
              alt={imageTitle}
              className="w-full h-full object-contain max-h-[70vh]"
            />
          </div>

          {/* Rodapé com Informações da Foto */}
          <div className="p-5 sm:p-6 bg-[#25201C] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Coffeetown Salvador · Rua Amazonas, Pituba</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                {imageTitle}
              </h3>
              <p className="text-xs text-[#A39B8F] mt-1">
                {imageCaption}
              </p>
            </div>

            <a
              href={STORE_INFO.googleMapsPhotosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 border border-white/15"
            >
              <span>Ver no Google Maps</span>
              <span className="text-amber-400">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
