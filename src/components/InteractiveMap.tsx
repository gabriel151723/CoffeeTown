import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Navigation, MapPin, Clock, Phone, ExternalLink, Coffee, Layers, Compass } from 'lucide-react';
import { STORE_INFO } from '../data/coffeetownData';
import { useTheme } from '../context/ThemeContext';

// Coordenadas exatas da Coffeetown Salvador na Pituba
const PITUBA_COORDS: [number, number] = [-13.0045325, -38.4602369];

// Componente para invalidar o tamanho do mapa ao montar e garantir renderização perfeita dos tiles
function MapResizer() {
  const map = useMap();
  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 250);
    return () => clearTimeout(timer);
  }, [map]);
  return null;
}

// Marcador estilizado da Coffeetown Salvador (Pin artesanal com ícone de café e anel pulsante)
const customMarkerIcon = L.divIcon({
  className: 'custom-coffeetown-pin',
  html: `
    <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 48px; height: 48px;">
      <div style="position: absolute; inset: -4px; border-radius: 9999px; background: rgba(200, 125, 50, 0.4); animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
      <div style="position: relative; width: 44px; height: 44px; border-radius: 9999px; background: #5C3A21; border: 3px solid #FAF7F2; box-shadow: 0 10px 25px -3px rgba(44, 30, 22, 0.4); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.2s;">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10 2v2"></path>
          <path d="M14 2v2"></path>
          <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Z"></path>
          <path d="M6 2v2"></path>
          <path d="M17 10h1a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-1"></path>
        </svg>
      </div>
      <div style="position: absolute; bottom: 0px; left: 50%; transform: translateX(-50%) rotate(45deg); width: 10px; height: 10px; background: #5C3A21; border-right: 2px solid #FAF7F2; border-bottom: 2px solid #FAF7F2;"></div>
    </div>
  `,
  iconSize: [48, 52],
  iconAnchor: [24, 50],
  popupAnchor: [0, -48],
});

interface InteractiveMapProps {
  className?: string;
  height?: string;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  className = '',
  height = '460px',
}) => {
  const { isDark } = useTheme();
  const [viewMode, setViewMode] = useState<'leaflet' | 'google'>('leaflet');

  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-md bg-[#EFE8DE] ${className}`}
      style={{ height }}
    >
      {viewMode === 'leaflet' ? (
        <MapContainer
          center={PITUBA_COORDS}
          zoom={16}
          scrollWheelZoom={false}
          className="w-full h-full z-0"
          style={{ height: '100%', width: '100%', background: isDark ? '#1A130E' : '#EFE8DE' }}
        >
          <MapResizer />

          {/* OpenStreetMap Oficial: 100% Gratuito, Global, Aberto e SEM necessidade de qualquer API Key */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> colaboradores'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
          />

          {/* Marcador Estilizado nas Coordenadas da Coffeetown Pituba */}
          <Marker position={PITUBA_COORDS} icon={customMarkerIcon}>
            <Popup className="coffeetown-leaflet-popup" autoPanPadding={[20, 20]}>
              <div className="p-3 text-[#2C1E16] max-w-[260px] font-sans">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#C87D32] uppercase tracking-wider mb-1">
                  <Coffee className="w-3.5 h-3.5 text-[#C87D32]" />
                  <span>The American Coffee & Cake</span>
                </div>

                <h4 className="font-serif text-base font-bold text-[#2C1E16] leading-tight mb-1">
                  Coffeetown Salvador
                </h4>

                <p className="text-xs text-[#6F6158] leading-relaxed mb-3">
                  {STORE_INFO.address}
                </p>

                <div className="space-y-1.5 text-[11px] text-[#4A3C34] mb-3 pb-2.5 border-b border-[#E8DFD5]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#5C3A21] shrink-0" />
                    <span>Seg a Dom: 08h30 às 21h00</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#5C3A21] shrink-0" />
                    <span>{STORE_INFO.phoneDisplay}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-full bg-[#5C3A21] hover:bg-[#452A18] text-white text-[11px] font-semibold tracking-wide uppercase transition-colors"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Abrir no Google Maps</span>
                  </a>

                  <a
                    href={STORE_INFO.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-full bg-[#FAF7F2] hover:bg-[#EFE8DE] text-[#5C3A21] border border-[#D9CEBF] text-[11px] font-semibold tracking-wide transition-colors"
                  >
                    <span>Navegar via Waze</span>
                    <ExternalLink className="w-3 h-3 text-[#5C3A21]" />
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        /* Visualização Alternativa: Google Maps Embed (Sem API Key) */
        <iframe
          title="Google Maps Coffeetown Salvador Pituba"
          src="https://maps.google.com/maps?q=-13.0045325,-38.4602369&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: isDark ? 'invert(90%) hue-rotate(180deg) contrast(95%)' : 'none',
          }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      )}

      {/* Selo de Status Superior Esquerdo */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E8DFD5] text-[#2C1E16] shadow-md text-xs font-semibold">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Pituba · Aberto Hoje</span>
        </div>
      </div>

      {/* Alternador de Modo de Mapa (OpenStreetMap vs Google Maps) */}
      <div className="absolute top-3 right-3 z-10">
        <div className="inline-flex items-center p-1 rounded-2xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E8DFD5] shadow-md">
          <button
            onClick={() => setViewMode('leaflet')}
            className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'leaflet'
                ? 'bg-[#5C3A21] text-white shadow-xs'
                : 'text-[#5C3A21] hover:bg-[#EFE8DE]'
            }`}
          >
            <Compass className="w-3 h-3" />
            <span>OpenStreet</span>
          </button>
          <button
            onClick={() => setViewMode('google')}
            className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'google'
                ? 'bg-[#5C3A21] text-white shadow-xs'
                : 'text-[#5C3A21] hover:bg-[#EFE8DE]'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>Google Maps</span>
          </button>
        </div>
      </div>

      {/* Botão de Centralização Rápida no Canto Inferior */}
      <div className="absolute bottom-3 right-3 z-10">
        <a
          href={STORE_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 hover:bg-white text-[#5C3A21] border border-[#D9CEBF] shadow-lg text-xs font-semibold transition-all cursor-pointer hover:scale-105"
        >
          <Navigation className="w-3.5 h-3.5 text-[#C87D32]" />
          <span>Abrir Rotas</span>
        </a>
      </div>
    </div>
  );
};
