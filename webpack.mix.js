const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.setPublicPath('./');

mix.sass('./theme-style.scss', './style.css')
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./tailwind.config.js')
        ],
    })
    .version();