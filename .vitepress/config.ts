import timeline from "vitepress-markdown-timeline";

// .vitepress/config.ts
export default {
    base: '/sweet-home/',
    title: '李海成♥王芳',
    description: '李海成♥王芳',
    head: [
        ['link', {rel: 'icon', href: '/sweet-home/favicon.ico'}]
    ],
    markdown: {
        math: true,
        config: (md) => {
            md.use(timeline);
        },
        image: {
            // 默认禁用图片懒加载
            lazyLoading: true
        }
    }
}