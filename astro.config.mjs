// @ts-check
import { defineConfig } from 'astro/config';
// const postcssCustomMedia = require('postcss-custom-media');
import postcssCustomMedia from 'postcss-custom-media'
import postcssLightDarkFunction from '@csstools/postcss-light-dark-function'

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react'
import { whyframe } from '@whyframe/core'
import { whyframeAstro } from '@whyframe/astro'


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    css: {
      postcss: {
        plugins: [
          postcssCustomMedia({
          preserve: true
        }), 
        postcssLightDarkFunction(),
      ]
      }
    },
    plugins: [
      // whyframe({
      //   defaultSrc: "/frames/default"
      // }),
      // whyframeAstro({
      //   defaultFramework: 'react'
      // })
    ]
  }
});