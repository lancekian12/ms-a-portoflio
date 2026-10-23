import { ImageResponse } from "next/og";
import { site } from "./content";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F1E3D",
          color: "#FFFFFF",
          padding: "72px 88px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 999,
            border: "1.5px solid #C9A96E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 34,
            color: "#C9A96E",
          }}
        >
          MS.A
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 5, color: "#C9A96E" }}>
            CPA · CIA · FINANCE EXECUTIVE
          </div>
          <div style={{ fontSize: 76, marginTop: 20, lineHeight: 1.05 }}>{site.name}</div>
          <div style={{ width: 360, height: 1, background: "#C9A96E", marginTop: 36 }} />
          <div style={{ fontSize: 30, marginTop: 28, color: "#AEB6C8" }}>
            Finance that holds steady while the business moves.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
