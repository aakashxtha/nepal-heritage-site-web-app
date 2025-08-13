import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nepal Heritage",
    short_name: "Heritage",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f0f",
    theme_color: "#b45309",
    icons: [
      { src: "/favicon.ico", sizes: "64x64", type: "image/x-icon" },
    ],
  };
}


