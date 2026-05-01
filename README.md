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
read/*.pdf      网页端可打开的论文 PDF 文件
unread/         暂不显示在网页端的论文 PDF 文件
```

## 当前分类

网页左侧固定保留这几个方向：

```txt
rl
真机rl
sim2real
仿真向实机的动力学辨识
遥操BC
世界模型
vla
vla框架
```

## 添加一篇论文

把论文 PDF 放到 `read` 文件夹后，在 `app.js` 的 `papers` 数组里新增一个对象即可。`pdf` 字段使用 `read/paper.pdf`，`categories` 使用固定分类的 id，建议同时补充 `zh` 和 `en` 两套内容，这样中英文切换最稳定。

```js
{
  id: "paper-id",
  categories: ["world-model"],
  pdf: "read/paper.pdf",
  project: "https://example.com",
  arxiv: "https://arxiv.org/abs/xxxx.xxxxx",
  year: "2026",
  venue: "arXiv",
  zh: {
    title: "中文或英文论文标题",
    authors: "作者",
    status: "已整理",
    tags: ["关键词"],
    mainContent: "主要内容",
    innovations: ["创新点 1", "创新点 2"],
    implementation: ["实现方法 1", "实现方法 2"]
  },
  en: {
    title: "Paper title",
    authors: "Authors",
    status: "Summarized",
    tags: ["Keyword"],
    mainContent: "Main content",
    innovations: ["Innovation 1", "Innovation 2"],
    implementation: ["Implementation 1", "Implementation 2"]
  }
}
```

分类 id 对应关系：

```txt
rl              -> rl
real-robot-rl   -> 真机rl
sim2real        -> sim2real
sim2real-dynamics-id -> 仿真向实机的动力学辨识
teleop-bc       -> 遥操BC
world-model     -> 世界模型
vla             -> vla
vla-framework   -> vla框架
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
