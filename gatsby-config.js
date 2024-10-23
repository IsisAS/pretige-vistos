/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Prestige Vistos",
    description: "Inicie seu próximo grande projeto com um site que reflete a excelência da Prestige Vistos. Com mais de 4 anos de experiência, a Prestige Vistos é especializada na obtenção e renovação de vistos americanos, além de serviços complementares como emissão de passaportes e apostilamento. Oferecemos atendimento ágil e personalizado, garantindo alta taxa de aprovação e segurança em todas as etapas do processo. Nossa missão é facilitar sua viagem internacional com cuidado, compromisso e confiança.",
    author: "@IsisAS",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
    menus: [
      {
        title: "Início",
        route: "/home",
        activated: true,
      },
      {
        title: "Depoimentos",
        route: "/testimony",
        activated: false,
      },
      {
        title: "Quem Somos",
        route: "/whoWeAre",
        activated: false,
      },
      {
        title: "Serviços",
        route: "/services",
        activated: false,
      },
      {
        title: "Perguntas Frequentes",
        route: "/commonQuestions",
        activated: false,
      },
      {
        title: "Contato",
        route: "/contact",
        activated: false,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Montserrat\:300,400,500,600,700",
          "Playfair Display\:400,700,900",  
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: "minimal-ui",
        icon: "src/assets/images/logo-icon.png", // This path is relative to the root of the site.
      },
    },
  ],
}
