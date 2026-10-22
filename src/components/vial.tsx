"use client";

import { useId } from "react";

export function Vial({
  name,
  formula,
  capColor,
  dark,
  large = false,
}: {
  name: string;
  formula?: string;
  capColor: string;
  dark: boolean;
  large?: boolean;
}) {
  const id = useId().replace(/:/g, "");
  const label = name.split(" ")[0] ?? name;
  const shownFormula = formula && formula.length > 18 ? `${formula.slice(0, 16)}…` : formula;

  return (
    <svg
      viewBox="0 0 180 220"
      className={large ? "mx-auto h-64 w-52" : "mx-auto h-40 w-32"}
      role="img"
      aria-label={name}
    >
      <defs>
        <linearGradient id={`glass-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={dark ? "#1e293b" : "#e2e8f0"} />
          <stop offset="45%" stopColor={dark ? "#334155" : "#ffffff"} />
          <stop offset="100%" stopColor={dark ? "#0f172a" : "#cbd5e1"} />
        </linearGradient>
      </defs>
      <ellipse cx="90" cy="206" rx="48" ry="6" fill={dark ? "#020617" : "#94a3b8"} opacity="0.35" />
      <path
        d="M52 68 C52 56, 65 52, 65 44 L115 44 C115 52, 128 56, 128 68 L128 192 C128 200, 120 204, 112 204 L68 204 C60 204, 52 200, 52 192 Z"
        fill={`url(#glass-${id})`}
        stroke={dark ? "#475569" : "#cbd5e1"}
      />
      <path d="M56 168 Q90 174 124 168 L124 190 C124 198, 116 201, 108 201 L72 201 C64 201, 56 198, 56 190 Z" fill="#e2e8f0" />
      <rect x="63" y="26" width="54" height="16" rx="3" fill="#cbd5e1" stroke="#64748b" />
      <rect x="61" y="12" width="58" height="16" rx="4" fill={capColor} />
      <rect x="58" y="78" width="64" height="78" rx="3" fill={dark ? "#0f172a" : "#ffffff"} stroke={dark ? "#334155" : "#e2e8f0"} />
      <rect x="58" y="78" width="64" height="6" fill={capColor} />
      <text x="90" y="98" textAnchor="middle" fill={capColor} fontSize="7" fontFamily="sans-serif">
        PEPTIDEYAR
      </text>
      <text x="90" y="116" textAnchor="middle" fill={dark ? "#f8fafc" : "#0f172a"} fontSize={label.length > 12 ? "8" : "11"} fontWeight="700" fontFamily="sans-serif">
        {label.slice(0, 14)}
      </text>
      <text x="90" y="132" textAnchor="middle" fill="#64748b" fontSize="6" fontFamily="monospace">
        {shownFormula ?? "RESEARCH REF"}
      </text>
      <text x="90" y="148" textAnchor="middle" fill={capColor} fontSize="6" fontFamily="sans-serif">
        RESEARCH ONLY
      </text>
    </svg>
  );
}

export const sectionColor: Record<string, string> = {
  peptide: "#0d9488",
  oral: "#d97706",
  oil: "#e11d48",
  raw: "#7c3aed",
};
