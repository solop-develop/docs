import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Solop",
  base: '/',
  description: "Documentación oficial de Solop ERP",
  lang: 'es-ES',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/logo_alone.png',
    // logoLink: 'https://solopsoftware.com/es/inicio/',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: 'https://solopsoftware.com/es/inicio/' },
      { text: 'Reglas Básicas', link: '/basic-rules' },
      { text: 'Funcionalidades', link: '/master-data' },
    ],



    sidebar: [
      {
        text: 'Funcionalidades',
        items: [
          { text: 'Reglas Básicas', link: '/basic-rules' },
          { text: 'Datos Maestros', link: '/master-data' },
          { text: 'Facturación Electrónica', link: '/electronic-billing' },
          { text: 'Gestión Contable', link: '/accounting-management' },
          { text: 'Gestión de Compras', link: '/purchase-management' },
          { text: 'Gestión de Devoluciones', link: '/return-management' },
          { text: 'Gestión de Distribución', link: '/distribution-management' },
          { text: 'Gestión de Materiales', link: '/material-management' },
          { text: 'Gestión de Producción', link: '/production-management' },
          { text: 'Gestión de PDV', link: '/pdv-management' },
          { text: 'Gestión Humana', link: '/human-management' },
          { text: 'Gestión de Relación con Clientes', link: '/customer-relationship-management' },
          { text: 'Gestión de Saldos Pendientes', link: '/balance-management' },
          { text: 'Gestión de Ventas', link: '/sales-management' },
          { text: 'Gestión Financiera', link: '/financial-management' },
          { text: 'Gestión de Activos', link: '/asset-management' },
          { text: 'Dashboards', link: '/dashboards' },
          { text: 'Integración Mercado Libre', link: '/mercado-libre' },
          { text: 'Preguntas Frecuentes', link: '/frequently-asked-questions' },
          { text: 'Verticales Oficiales de Solop ERP', link: '/verticals' },
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/solop-develop/docs' }
    ],
    footer: {
      copyright: 'Copyright © 2024-present Solop Software'
    }
  }
})