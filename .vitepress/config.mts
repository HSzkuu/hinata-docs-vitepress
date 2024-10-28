import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HINATA 使用文档",
  description: "泛用多功能街机游戏读卡器",
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '介绍 & 初次使用', link: '/quickstart' },
          {
            text: '配置游戏',
            items: [
              {
                text: 'SEGA 游戏',
                items: [
                  { text: '配置说明', link: '/SEGA/' },
                  { text: '串口方式连接', link: '/SEGA/serial' },
                  { text: 'AimeIO 连接', link: '/SEGA/aimeio' },
                  { text: '游戏内测试读卡器', link: '/SEGA/in_game_test' },
                  { text: '常见问题', link: '/SEGA/qa' }
                ]
                
              },
              { text: 'KONAMI 游戏', link: '/KONAMI/' },
              { text: 'HINATA 控制中心', link: '/HCP/' },
              { text: '固件更新说明', link: '/Update/' }
            ]
            
          }
        ]
        
      },
      { text: '购买 & 售后', link: '/purchase_contact' }
    ],

    socialLinks: [
    ]
  }
})
