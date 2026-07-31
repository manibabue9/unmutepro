import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Unmute Pro Learning",
    short_name: "Unmute Pro",
    description: "Confidence-first communication and interview learning.",
    start_url: "/app",
    display: "standalone",
    background_color: "#F4F8FC",
    theme_color: "#062B5C",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
