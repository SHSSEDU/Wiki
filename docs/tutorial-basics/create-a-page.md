---
sidebar_position: 1
---
# 创建页面

将 **Markdown 或 React** 文件添加到 `src/pages` 以创建 **独立页面**：

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## 创建您的第一个 React 页面

在 `src/pages/my-react-page.js` 创建一个文件：

```jsx
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

现在可以在 [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page) 上找到一个新页面。

## 创建您的第一个 Markdown 页面

在 `src/pages/my-markdown-page.md` 创建一个文件：

```mdx
# My Markdown page

This is a Markdown page
```

现在可以在 [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page) 上找到一个新页面。
