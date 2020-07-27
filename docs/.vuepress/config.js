module.exports = {
  themeConfig: {
    logo: './img/logo.png',
    theme: 'vuepress-theme-gouv-fr',
    themeConfig: {
      '/fr/' : {navbar: true,
        nav: [
          { text: 'Home', link: '/' },
          { text: `Server's informations`, link: '/en/infos/serverinfo/' },
          { text: `Website's informations`, link: '/en/infos/websiteinfo/' },
          { text: 'Github', link: 'https://github.com/101dal/mysite.github.io' }
          {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'English', link: '/en/' },
              { text: 'French', link: '/fr/' }
            ]
          }
        ]}
    }
  }
}