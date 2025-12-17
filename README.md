# Academic Paper Viewer

学術論文風のMarkdownビューアーコンポーネント。タイトル・要約部分は1カラム、本文は2カラムで美しく表示します。

## 特徴

- 📄 学術論文らしいレイアウト（タイトル・要約は1カラム、本文は2カラム）
- 🔢 数式のサポート（KaTeX）
- 📝 Markdownエディター付き
- 🎨 美しいタイポグラフィ

## インストール

### GitHubから直接インストール

```bash
npm install github:pikum99/academic-paper-viewer
```

## 使い方

```jsx
import AcademicPaperViewer from 'academic-paper-viewer';
import 'katex/dist/katex.min.css';

function App() {
  const myPaper = `# My Research Paper

**Author Name**
*Institution*
email@example.com

## Abstract

This is the abstract of my paper...

**Keywords:** React, Markdown, Academic

## Introduction

This is the introduction...
`;

  return (
    <AcademicPaperViewer
      initialMarkdown={myPaper}
      defaultShowEditor={false}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialMarkdown` | `string` | サンプル論文 | 表示するMarkdownテキスト |
| `defaultShowEditor` | `boolean` | `false` | エディターを最初から表示するか |

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build
```

## ライセンス

MIT
