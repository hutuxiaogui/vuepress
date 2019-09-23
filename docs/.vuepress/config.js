module.exports = {
	title: 'Hello VuePress',
	description: 'Just playing around',
	base:'/vuepress/',
}
module.exports = {
  markdown: {
    lineNumbers: true
  },
}
module.exports = {
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-xxx'))
    }
  }
}
module.exports = {
       themeConfig: {
        nav: [
            { text: '主页', link: '/' },
			{ text: '博客', link: '/blog/' },
            { text: '笔记',
              items: [
                { text: 'Android', link: '/android/' },
                { text: 'ios', link: '/ios/' },
                { text: 'Web', link: '/web/' }
              ] 
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://www.github.com/hutuxiaogui' },
        ],
        sidebar: {
			   '/blog/': [
						"",
						"FirstBlog", 
			            ],
            '/android/': [
                        "",
                        "JVM", 
                        ],
                "/ios/":[
                        "",
                        "JVM",
                        ],
                "/web/":[
                        "",
                        "JVM",
                        ],
            },
        sidebarDepth: 4,
        lastUpdated: 'Last Updated', 
    },
}