# websites

## Create a Project

Remove all generated files of Next.js

```
npx create-next-app@latest
```

## Downgrade Tailwind v4 to v3

```
npm uninstall tailwindcss
npm install -D tailwindcss@3.4.17 postcss autoprefixer 
npx tailwindcss init -p  
```

Adjust package.json

```
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
  }
```

# Install Relume

```
npm i @relume_io/relume-ui @relume_io/relume-tailwind   
```

Adjust tailwind.config.js

```ts
import type { Config } from "tailwindcss";

import relumeTailwindPreset from "@relume_io/relume-tailwind";

const config: Config = {
	content: [
		"./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	presets: [relumeTailwindPreset]
};
export default config;
```
