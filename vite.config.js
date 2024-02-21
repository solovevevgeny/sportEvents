import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel([
            'resources/js/index.jsx',
            'resources/js/uikit.min.js',
            'resources/js/uikit-icons.min.js',
        ]),
        react(),
    ],
});
