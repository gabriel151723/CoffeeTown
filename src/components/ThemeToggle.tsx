import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  variant?: 'icon' | 'pill' | 'menu';
  className?: string;
  isScrolled?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'icon',
  className = '',
  isScrolled = true,
}) => {
  const { isDark, toggleTheme } = useTheme();

  if (variant === 'menu') {
    return (
      <button
        onClick={toggleTheme}
        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
          isDark
            ? 'bg-[#2A1E17] text-[#F5EFEB] hover:bg-[#38281F]'
            : 'bg-[#FAF7F2] text-[#2C1E16] hover:bg-[#EFE8DE]'
        } ${className}`}
        aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      >
        <div className="flex items-center gap-2.5">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center ${
              isDark ? 'bg-[#C87D32]/20 text-[#E5A768]' : 'bg-[#5C3A21]/10 text-[#5C3A21]'
            }`}
          >
            {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </div>
          <div className="text-left">
            <span className="block font-medium">Tema Visual</span>
            <span className={`text-[10px] ${isDark ? 'text-[#C9BDB3]' : 'text-[#7E6F65]'}`}>
              {isDark ? 'Modo Noturno (Café Torrado)' : 'Modo Diurno (Suave)'}
            </span>
          </div>
        </div>

        {/* Chave de Alternância (Toggle Switch Visual) */}
        <div
          className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-300 relative flex items-center ${
            isDark ? 'bg-[#C87D32]' : 'bg-[#D9CEBF]'
          }`}
        >
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className={`w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center ${
              isDark ? 'translate-x-5' : 'translate-x-0'
            }`}
          >
            {isDark ? (
              <Moon className="w-2.5 h-2.5 text-[#5C3A21]" />
            ) : (
              <Sun className="w-2.5 h-2.5 text-[#C87D32]" />
            )}
          </motion.div>
        </div>
      </button>
    );
  }

  if (variant === 'pill') {
    return (
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={toggleTheme}
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
          isDark
            ? 'bg-[#2A1E17] hover:bg-[#38281F] text-[#F5EFEB] border-[#443226] shadow-sm'
            : 'bg-[#FAF7F2] hover:bg-[#EFE8DE] text-[#2C1E16] border-[#D9CEBF] shadow-xs'
        } ${className}`}
        aria-label={isDark ? 'Ativar modo diurno' : 'Ativar modo noturno'}
        title={isDark ? 'Alternar para Modo Diurno' : 'Alternar para Modo Noturno'}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? 'dark' : 'light'}
            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5"
          >
            {isDark ? (
              <>
                <Moon className="w-3.5 h-3.5 text-[#E5A768]" />
                <span className="text-[11px] font-medium text-[#C9BDB3]">Tema Noturno</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-[#C87D32]" />
                <span className="text-[11px] font-medium text-[#5C3A21]">Tema Diurno</span>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    );
  }

  // Variante Padrão: Ícone Circular Elegante para a Barra Superior
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      className={`relative p-2 sm:p-2.5 rounded-full border transition-all focus-visible:outline-none cursor-pointer ${
        isScrolled
          ? isDark
            ? 'bg-[#2A1E17] hover:bg-[#38281F] text-[#E5A768] border-[#443226] shadow-sm'
            : 'bg-[#FAF7F2] hover:bg-[#EFE8DE] text-[#5C3A21] border-[#D9CEBF]'
          : 'bg-white/15 hover:bg-white/25 text-white border-white/25 backdrop-blur-md'
      } ${className}`}
      aria-label={isDark ? 'Alternar para Modo Diurno' : 'Alternar para Modo Noturno'}
      title={isDark ? 'Alternar para Modo Diurno' : 'Alternar para Modo Noturno (Tons Café Expresso)'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'moon' : 'sun'}
          initial={{ rotate: -70, opacity: 0, scale: 0.7 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 70, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-[#F3B069] drop-shadow-[0_0_6px_rgba(243,176,105,0.4)]" />
          ) : (
            <Sun className={`w-4 h-4 ${isScrolled ? 'text-[#C87D32]' : 'text-amber-300'}`} />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Sutil halo pulsante no escuro para indicar a presença da atmosfera noturna */}
      {isDark && (
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#E5A768] animate-ping opacity-60 pointer-events-none" />
      )}
    </motion.button>
  );
};
