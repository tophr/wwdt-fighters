import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

// import { viteStaticCopy } from 'vite-plugin-static-copy'

const pages = require('./src/assets/js/pages.js');
const path = require('path');

const helpers = require('helpers-for-handlebars')();

function getPageData(pages) {
  const pageData = {};
  Object.entries(pages).forEach(([path, metadata]) => {
    const pageName = metadata.title.toLowerCase();
    const fullPath = resolve(__dirname, path);
    pageData[pageName] = fullPath;
  });
  return pageData;
};

export default defineConfig(({ mode }) => ({
  build: {
    rollupOptions: {
      input: getPageData(pages),
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
            return 'assets/images/[name][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }

          // Add support for webfont formats
          if (/\.(woff|woff2|ttf|eot|otf)$/.test(name ?? '')) {
            return 'assets/fonts/[name][extname]';
          }

          // Default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    outDir: '../dist',
    sourcemap: false
  },
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true,
    // proxy: {
    //   '/': {
    //     target: 'http://localhost:3000', // Your Express server URL
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '') // Optional: adjust path if needed
    //   }
    // }
  },
  plugins: [
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: 'assets/json/*',
    //       dest: 'assets/json'
    //     }
    //   ]
    // }),
    handlebars({
      context(pagePath) {
        return pages[pagePath];
      },
      helpers: helpers,
      // If you want to make use of partials in your HTML files, you must define the partialDirectory option for the handlebars plugin.
      partialDirectory:[
        resolve(__dirname, 'src/layouts'),
        resolve(__dirname, 'src/components'),
        resolve(__dirname, 'src/pages'),
        resolve(__dirname, 'src/includes')
      ],
      compileOptions: {
        // Example config option: avoid auto-indenting partials
        preventIndent: true,
      },
      runtimeOptions: {
        // Example config option: define custom private @variables
        data: {
          mode: mode
        },
      },
    }),
  ]
}));