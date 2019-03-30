const pkg = require('./package')
const trimEnd = require('lodash/trimEnd')
const url = require("url");
const fs = require('fs');

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat|Libre+Baskerville' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'swiper/dist/css/swiper.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  serverMiddleware: [
    {
      path: 'cover',
      handler: async (req, res, next) => {      
        fs.readFile(__dirname + '/assets/cover.json', 'utf8', (err, url) => {
          res.status(200).json({ url })
        })
      }
    },
    {
      path: '/updatecover',
      handler: async (req, res, next) => {
        fs.writeFile(__dirname + '/assets/cover.json', url.parse(req.url, true).query.url, function(err) {
          if(err) {
            return console.log(err);
            res.status(200).json({ok: false})
          }
          res.status(200).json({ok: true})
        }); 
      }
    },
    {
      path: '/api',
      handler: async (req, res, next) => {
        let list = []
      
        const testFolder = (__dirname + '/assets/img').replace('/api', '');
      
        fs.readdirSync(testFolder).forEach(file => {
          const column = file.split('_')
          list.push({
            path: file,
            date: column[0].replace(/:/g, '/'),
            location: column[1] ? (column[1] || '').substr(0, column[1].indexOf('.')) : ''
          })
        });
      
        res.status(200).json(list)
      }
    }
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
