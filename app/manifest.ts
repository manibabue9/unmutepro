import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Unmute Pro Learning",
    short_name: "Unmute Pro",
    id: "/app",\n    description: "Confidence-first English communication, interview preparation and mentor-guided learning.",
    start_url: "/app",\n    scope: "/",
    display: "standalone",\n    orientation: "portrait-primary",
    background_color: "#F4F8FC",
    theme_color: "#062B5C",\n    categories: ["education", "productivity"],
    icons: [\n      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },\n      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },\n    ],
  };
}
