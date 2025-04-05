import type { Config } from "tailwindcss";

import relumeTailwindPreset from "@relume_io/relume-tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [relumeTailwindPreset]
};
export default config;
