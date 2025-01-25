// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react'
import { whyframe } from '@whyframe/core'
import { whyframeAstro } from '@whyframe/astro'


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    plugins: [
      whyframe({
        defaultSrc: "/frames/default"
      }),
      whyframeAstro({
        defaultFramework: 'react'
      })
    ]
  }
});