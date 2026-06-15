// Mountain-line motif used throughout the site.
//   <Ridge>  — a full-width ridgeline transition between two section colors.
//   <Peaks>  — a small ridge accent used under section kickers/headings.

// Key palette hexes (mirror globals.css) for the self-contained Ridge band.
export const c = {
  warmWhite: "#faf6ee",
  cream: "#f3ece0",
  creamDark: "#e7dcc6",
  pine: "#1f3354",
  pineDeep: "#14233f",
} as const;

export function Ridge({
  top,
  bottom,
  className = "",
}: {
  top: string;
  bottom: string;
  className?: string;
}) {
  return (
    <div aria-hidden className={`relative leading-none ${className}`} style={{ background: bottom }}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block w-full h-[48px] md:h-[84px]"
      >
        <rect width="1440" height="100" fill={top} />
        <path
          d="M0,100 L0,70 L150,50 L320,72 L480,46 L660,70 L820,48 L1000,70 L1160,50 L1320,70 L1440,54 L1440,100 Z"
          fill={bottom}
          opacity="0.5"
        />
        <path
          d="M0,100 L0,58 L120,34 L260,58 L400,28 L560,56 L720,24 L880,56 L1040,30 L1200,58 L1340,36 L1440,56 L1440,100 Z"
          fill={bottom}
        />
      </svg>
    </div>
  );
}

export function Peaks({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 24"
      className={`w-20 h-6 ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 22 L22 6 L34 16 L50 2 L66 16 L78 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
