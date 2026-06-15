import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS home-screen icon — white steeple on navy (iOS masks the corners itself).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14233f",
        }}
      >
        <svg width="118" height="118" viewBox="0 0 64 64" fill="none">
          <g fill="#f3ece0">
            <rect x="22" y="36" width="20" height="16" />
            <polygon points="19,36 32,26 45,36" />
            <rect x="29" y="18" width="6" height="9" />
            <polygon points="27.5,18 32,10 36.5,18" />
          </g>
          <path
            d="M32 3 L32 11 M28.5 6 L35.5 6"
            stroke="#ccb277"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <rect x="29" y="44" width="6" height="8" rx="1" fill="#ccb277" />
          <rect x="24" y="40" width="3.5" height="4.5" rx="0.6" fill="#ccb277" />
          <rect x="36.5" y="40" width="3.5" height="4.5" rx="0.6" fill="#ccb277" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
