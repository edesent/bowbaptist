import { ImageResponse } from "next/og";

export const alt = "Bow Baptist Church — Weathersfield Bow, Vermont";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 80px",
          color: "#f3ece0",
          fontFamily: "serif",
          background:
            "linear-gradient(180deg, #15273f 0%, #34507d 42%, #9c7c3e 72%, #c98a4e 100%)",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#e6cb9c",
          }}
        >
          Weathersfield Bow · Vermont
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 22, lineHeight: 1.05 }}>
          Bow Baptist Church
        </div>
        <div
          style={{
            width: 96,
            height: 5,
            background: "#ccb277",
            borderRadius: 4,
            marginTop: 26,
            marginBottom: 26,
          }}
        />
        <div style={{ fontSize: 34, fontStyle: "italic", color: "#efe4d2" }}>
          A gospel light in the hills of Vermont since 1837
        </div>
      </div>
    ),
    { ...size }
  );
}
