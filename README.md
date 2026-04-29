# Paper Reading Notes

这是一个适合部署到 GitHub Pages 的中英文论文阅读笔记站点。

仓库地址：

```txt
https://github.com/KeZhang19/paper
```

部署后的默认访问地址：

```txt
https://KeZhang19.github.io/paper/
```

## 文件结构

```txt
index.html      页面结构
styles.css      页面样式
app.js          论文数据、中英文切换、筛选、搜索和详情渲染
*.pdf           论文 PDF 文件
```

## 添加一篇论文

在 `app.js` 的 `papers` 数组里新增一个对象即可。建议同时补充 `zh` 和 `en` 两套内容，这样中英文切换最稳定。

```js
{
  id: "paper-id",
  pdf: "paper.pdf",
  project: "https://example.com",
  arxiv: "https://arxiv.org/abs/xxxx.xxxxx",
  year: "2026",
  venue: "arXiv",
  zh: {
    title: "中文或英文论文标题",
    authors: "作者",
    status: "已整理",
    categories: ["机器人学习"],
    tags: ["关键词"],
    summary: "主要内容",
    method: ["方法点 1", "方法点 2"],
    takeaways: ["阅读要点 1", "阅读要点 2"],
    notes: "自己的阅读笔记"
  },
  en: {
    title: "Paper title",
    authors: "Authors",
    status: "Summarized",
    categories: ["Robot Learning"],
    tags: ["Keyword"],
    summary: "Main idea",
    method: ["Method point 1", "Method point 2"],
    takeaways: ["Takeaway 1", "Takeaway 2"],
    notes: "Personal notes"
  }
}
```

## GitHub Pages 设置

进入仓库：

```txt
Settings -> Pages
```

选择：

```txt
Build and deployment: Deploy from a branch
Branch: main
Folder: /root
```

保存后等待一两分钟，页面会发布到：

```txt
https://KeZhang19.github.io/paper/
```
