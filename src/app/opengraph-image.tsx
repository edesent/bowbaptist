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
          color: "#f5eede",
          fontFamily: "serif",
          background:
            "linear-gradient(180deg, #15323a 0%, #33514a 42%, #7d6446 72%, #c98a4e 100%)",
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
            background: "#b98344",
            borderRadius: 4,
            marginTop: 26,
            marginBottom: 26,
          }}
        />
        <div style={{ fontSize: 34, fontStyle: "italic", color: "#f1e7d3" }}>
          A gospel light in the hills of Vermont since 1837
        </div>
      </div>
    ),
    { ...size }
  );
}
