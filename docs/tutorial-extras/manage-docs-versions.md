---
sidebar_position: 1
---
# 管理文档版本

知识库可以管理文档的多个版本。

## 创建文档版本

发布项目的 1.0 版本：

```bash
npm run docusaurus docs:version 1.0
```

将“docs”文件夹复制到“versioned_docs/version-1.0”并创建“versions.json”。

您的文档现在有 2 个版本：

- 1.0 版本文档的“1.0”位于“http://localhost:3000/docs/”
- “http://localhost:3000/docs/next/” 处的“current”，用于**即将发布的未发布文档**

## 添加版本下拉列表

要跨版本无缝导航，请添加版本下拉列表。

修改 `docusaurus.config.js` 文件：

```js
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

文档版本下拉列表出现在您的导航栏中：

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## 更新现有版本


可以在各自的文件夹中编辑版本化文档：

- `versioned_docs/version-1.0/hello.md` 更新 `http://localhost:3000/docs/hello`
- `docs/hello.md` 更新 `http://localhost:3000/docs/next/hello`
