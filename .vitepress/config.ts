import timeline from "vitepress-markdown-timeline";

// .vitepress/config.ts
export default {
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