module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'arch_gatsby',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Spartan`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
