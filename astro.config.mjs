// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon'
// https://astro.build/config
export default defineConfig({
    integrations: [
        icon()
    ],
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Roboto",
        cssVariable: "--font-roboto",
        weights: [100, 200, 300, 400, 500, 600],
        styles: ['normal']
    }, {
        provider: fontProviders.fontsource(),
        name: "Abril Fatface",
        cssVariable: "--font-abril-fatface",
        weights: ['200', '400']
    }],
    site: 'https://jenesuispas.dev'
});
