import { defineConfig } from 'vitepress';
import markdownItInclude from 'markdown-it-include';

export default defineConfig({
  title: 'Frontend Standards',
  description: 'Padrões e decisões de Frontend',

  base: '/frontend-standards/',

  markdown: {
    config: (md) => {
      md.use(markdownItInclude, {
        // Root relativo ao CWD do VitePress (repo) -> aponta para a pasta docs
        root: 'docs'
      });
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: false,

    nav: [
      { text: 'Standards', link: '/' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'ADRs', link: '/decision-records/' }
    ],

    sidebar: {
      '/standards/': [
        {
          text: 'Standards',
          items: [
            { text: 'Nomenclatura', link: '/standards/naming' },
            { text: 'Exports', link: '/standards/exports' }
          ]
        }
      ],
      '/faq/': [
        {
          text: 'FAQ',
          items: [{ text: 'Visão geral', link: '/faq/' }]
        }
      ],
      '/decision-records/': [
        {
          text: 'ADRs',
          items: [{ text: 'Índice', link: '/decision-records/' }]
        }
      ]
    },

    search: {
      provider: 'local'
    }
  }
});
