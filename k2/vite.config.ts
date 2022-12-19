import { defineConfig, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/__tests__/setup.ts",
        exclude: [
            "**/e2e/**",
            "**/node_modules/**",
            "**/dist/**",
            "**/cypress/**",
            "**/.{idea,git,cache,output,temp}/**",
            "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress}.config.*",
        ],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
} as UserConfigExport);
