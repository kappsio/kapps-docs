module.exports = {
	
    title: 'docs.kapps.io',
    description: 'kapps.io documentation',

    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],

    plugins: [
        '@vuepress/nprogress',
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
    ],
  
    themeConfig: {

        lastUpdated: 'Last Updated',

        nav: [
            { text: 'Home', link: '/' },
            { text: 'CMS', link: '/cms/' },
            { text: 'kapps.io', link: 'http://kapps.io' },
        ],

        sidebar: {

            '/cms/': [
                {
                    title: 'Intro',   // required
                    path: "/cms/",
                    collapsable: false,
                },
                {
                    title: 'Basic',   // required
                    //path: "/cms/basic/",
                    collapsable: false, 
                    children: [
                        "/cms/basic/",
                        '/cms/basic/install.md',
                    ]
                },
            ],

        },

    },

}