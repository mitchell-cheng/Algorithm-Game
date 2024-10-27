import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';

const purgecssPlugin = purgecss({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!(|.*?:)cursor-move).+-move$/,
    /^router-link(|-exact)-active$/,
    /data-v-.*/,
  ],
});

export default ({ mode }) => ({
  plugins: [
    tailwindcss,
    autoprefixer,
    ...(mode === 'production' ? [purgecssPlugin] : []),
  ]
});