/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const path = require('path');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const getLocalIdent = require('css-loader/lib/getLocalIdent');
const envKeys = require('./envKeys.json');

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const nextConfig = {
  // @note: these vars are injected at build time and accessible anywhere in the
  // app via the global process.env variable.
  publicRuntimeConfig: (envKeys || []).reduce((acc, key) => {
    acc[key] = process.env[key];
    return acc;
  }, {}),
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[path][name]__[local]--[hash:base64:5]',
    camelCase: true,
    getLocalIdent: function(loaderContext, localIdentName, localName, options) {
      if (loaderContext.resourcePath.includes('node_modules')) {
        return localName;
      }

      return getLocalIdent(loaderContext, localIdentName, localName, options);
    },
  },
  sassLoaderOptions: {
    includePaths: [path.resolve(__dirname, 'src/styles')],
  },
  exclude: path.resolve(__dirname, 'src/assets/icons'),
  webpack: config => {
    // Resolve modules in src dir
    config.resolve.modules.push(path.resolve(__dirname, 'src'));
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
            },
          },
        ],
      },
      {
        exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.js(x)?$/],
        test: /\.js(x)?$/,
        use: [{ loader: 'babel-loader' }],
      }
    );
    return config;
  },
};

module.exports = compose(withImages, withSass, withCSS, withFonts)(nextConfig);
