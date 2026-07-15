import type { Layer } from "../lib/data";

export function SealGlyph({ className = "" }: { className?: string }) {
  // Stylized square seal with 内 (inside China)
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="2" fill="#9E2B25" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontSize="18"
        fontFamily="'Noto Serif SC', 'Songti SC', serif"
        fontWeight="600"
        fill="#FDFAF3"
      >
        内
      </text>
    </svg>
  );
}

export function BridgeGlyph({ className = "" }: { className?: string }) {
  // Simple arch spanning a horizon line
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <path
        d="M3 24 Q16 4 29 24"
        stroke="#2A2A2A"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="2" y1="27" x2="30" y2="27" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="27" x2="10" y2="19" stroke="#2A2A2A" strokeWidth="1.25" />
      <line x1="22" y1="27" x2="22" y2="19" stroke="#2A2A2A" strokeWidth="1.25" />
    </svg>
  );
}

export function LayerGlyph({ layer, className = "h-5 w-5" }: { layer: Layer; className?: string }) {
  return layer === "ecosystem" ? <SealGlyph className={className} /> : <BridgeGlyph className={className} />;
}