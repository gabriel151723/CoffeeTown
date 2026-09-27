import React from 'react';

interface BrandSealProps {
  className?: string;
  size?: number;
}

export const BrandSeal: React.FC<BrandSealProps> = ({ className = '', size = 48 }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="Coffeetown, Co. Artisan Roastery Logo"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Outer Dark Ring */}
        <circle cx="100" cy="100" r="96" fill="#181513" stroke="#C87D32" strokeWidth="2.5" />
        <circle cx="100" cy="100" r="91" fill="none" stroke="#FAF6EE" strokeWidth="1" strokeDasharray="3 2" />

        {/* Inner concentric ring */}
        <circle cx="100" cy="100" r="66" fill="#24201D" stroke="#FAF6EE" strokeWidth="1.5" />

        {/* Center circular silhouette background */}
        <circle cx="100" cy="100" r="44" fill="#FAF6EE" />

        {/* Silhouette of Gentleman Barista with Fedora & Bow Tie */}
        <g fill="#181513">
          {/* Hat Crown */}
          <path d="M86 78 C86 70, 114 70, 114 78 Z" />
          <path d="M82 78 C82 72, 92 65, 100 65 C108 65, 118 72, 118 78 Z" />
          {/* Hat Brim */}
          <ellipse cx="100" cy="79" rx="24" ry="4" />
          {/* Head & Neck */}
          <ellipse cx="100" cy="88" rx="8" ry="7" />
          <path d="M96 95 L104 95 L106 101 L94 101 Z" />
          {/* Collar & Bow tie */}
          <polygon points="95,101 100,104 95,107" fill="#C87D32" />
          <polygon points="105,101 100,104 105,107" fill="#C87D32" />
          <circle cx="100" cy="104" r="1.5" fill="#FAF6EE" />
          {/* Torso/Coat */}
          <path d="M88 108 C88 103, 112 103, 112 108 L116 126 C110 128, 90 128, 84 126 Z" />
          <polygon points="100,106 97,118 103,118" fill="#FAF6EE" />
        </g>

        {/* Text Curvature Definitions */}
        <defs>
          <path
            id="textPathTop"
            d="M 28,100 A 72,72 0 0,1 172,100"
            fill="none"
          />
          <path
            id="textPathBottom"
            d="M 172,100 A 72,72 0 0,1 28,100"
            fill="none"
          />
        </defs>

        {/* Top Arc: COFFEETOWN, CO. */}
        <text
          fill="#FAF6EE"
          fontSize="14.5"
          fontWeight="700"
          letterSpacing="0.18em"
          fontFamily="'Plus Jakarta Sans', sans-serif"
        >
          <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
            COFFEETOWN, CO.
          </textPath>
        </text>

        {/* Bottom Arc: ARTISAN ROASTERY */}
        <text
          fill="#C87D32"
          fontSize="11.5"
          fontWeight="800"
          letterSpacing="0.22em"
          fontFamily="'Plus Jakarta Sans', sans-serif"
        >
          <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">
            ARTISAN ROASTERY
          </textPath>
        </text>

        {/* Estd 2013 & Stars */}
        <text x="36" y="103" fill="#A39B8F" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">ESTD.</text>
        <text x="56" y="103" fill="#C87D32" fontSize="8">★</text>

        <text x="138" y="103" fill="#C87D32" fontSize="8">★</text>
        <text x="146" y="103" fill="#A39B8F" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">2013</text>
      </svg>
    </div>
  );
};
