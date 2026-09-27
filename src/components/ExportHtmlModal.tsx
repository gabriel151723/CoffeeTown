import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Download, ExternalLink, Code } from 'lucide-react';

interface ExportHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportHtmlModal: React.FC<ExportHtmlModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      fetch('/coffeetown-landing.html')
        .then((res) => res.text())
        .then((data) => {
          setHtmlCode(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cafe-coffeetown-salvador.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[85vh] bg-[#FAF7F2] text-[#2C1E16] rounded-3xl border border-[#E8DFD5] shadow-2xl flex flex-col z-10 overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-[#E8DFD5] flex items-center justify-between bg-[#F7F2EB]">
          <div className="flex items-center gap-2.5">
            <Code className="w-5 h-5 text-[#5C3A21]" />
            <div>
              <h3 className="font-serif font-bold text-lg text-[#2C1E16]">
                Código HTML Único (Modelo Pinterest Café)
              </h3>
              <p className="text-xs text-[#7E6F65]">
                Arquivo único autocontido: HTML5 + Tailwind CSS (CDN) + Vanilla JS + Lucide Icons
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#7E6F65] hover:text-[#2C1E16] rounded-full hover:bg-[#EFE8DE]"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar */}
        <div className="px-5 py-3 bg-[#EFE8DE] border-b border-[#E3D7C9] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-[#5C3A21] font-medium">
            Pronto para hospedar em qualquer servidor ou compartilhar
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#5C3A21] hover:bg-[#452A18] text-white font-semibold transition-colors shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Código Copiado!' : 'Copiar Código'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#D9CEBF] text-[#2C1E16] font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar .html</span>
            </button>
            <a
              href="/coffeetown-landing.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 rounded-full hover:bg-white/50 text-[#5C3A21] font-medium transition-colors"
            >
              <span>Abrir no Navegador</span>
              <ExternalLink className="w-3 h-3 text-[#7E6F65]" />
            </a>
          </div>
        </div>

        {/* Code View */}
        <div className="flex-1 overflow-auto p-4 bg-[#2C1E16] font-mono text-xs text-[#FAF7F2]">
          {loading ? (
            <div className="py-12 text-center text-[#A8988B]">Carregando código...</div>
          ) : (
            <pre className="whitespace-pre overflow-x-auto leading-relaxed">
              <code>{htmlCode}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};
