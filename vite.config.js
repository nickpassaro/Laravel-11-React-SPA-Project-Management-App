import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/js/app.tsx",
                "resources/css/app.css",
                // additional files to input
            ],
            ssr: "resources/js/ssr.tsx",
            refresh: [
                "resources/js/**/*",
                "resources/css/**/*",
                // additional folders to watch for refresh
            ],
        }),
        react(),
    ],
    server: {
        host: "laravel11reactspa.thecodeholic.test",
        port: 8084,
        hmr: {
            host: "laravel11reactspa.thecodeholic.test",
            port: 8084,
        },
    },
});
