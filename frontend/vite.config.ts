import { resolve } from "node:path";

import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
		}),
		react(),
	],
	// test: {
	//   globals: true,
	//   environment: "jsdom",
	// },
	resolve: {
		alias: {
			$shared: resolve(import.meta.dirname, "./src/shared"),
			$entities: resolve(import.meta.dirname, "./src/entities"),
			$features: resolve(import.meta.dirname, "./src/features"),
			$widgets: resolve(import.meta.dirname, "./src/widgets"),
			$pages: resolve(import.meta.dirname, "./src/pages"),
			$app: resolve(import.meta.dirname, "./src/app"),
			$: resolve(import.meta.dirname, "./src"),
		},
	},
});
