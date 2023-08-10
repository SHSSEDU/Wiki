---
sidebar_position: 2
---
# 创建文档

Create your first Doc

文档是**页面组**，通过以下方式连接：

- **侧边栏**
- **上一个/下一个导航**
- **版本控制**

在 `docs/hello.md` 创建一个 Markdown 文件：

```md
# Hello

This is my **first Docusaurus document**!
```

现在可以在 [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello) 上找到新文档。

## 配置侧边栏

系统会自动从“docs”文件夹**创建侧边栏**。

添加元数据以自定义侧边栏标签和位置：

```md
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

也可以在“sidebars.js”中显式创建侧边栏：

```js
module.exports = {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
