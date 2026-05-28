## このリポジトリについて

このリポジトリは、GitHub Pages で公開している個人プロフィールサイトのソースコードです。

Start Bootstrap の Resume テーマをベースに、Android アプリ開発者としての経歴、スキル、連絡先、LinkedIn / GitHub などのプロフィール情報を掲載しています。

ページ本文は主に `src/pug/index.pug`、スタイルは `src/scss/`、画像は `src/assets/` で管理しています。公開用の `index.html` や `css/`、`js/`、`assets/` はビルドによって生成され、GitHub Pages から配信されます。

## 使い方

### 基本的な編集方法

ページ内容を変更する場合は、主に `src/pug/index.pug` を編集します。

スタイルを変更する場合は `src/scss/` 配下の SCSS ファイルを編集します。画像を差し替える場合は `src/assets/` 配下のファイルを更新します。

リポジトリ直下の `index.html` は GitHub Pages で表示するための生成ファイルです。直接編集すると、次回ビルド時に `src/pug/index.pug` の内容で上書きされます。

### ローカルで確認する

初回は依存パッケージをインストールします。

```bash
npm install
```

ローカルでプレビューしながら編集する場合は、以下を実行します。

```bash
npm start
```

このコマンドはブラウザでプレビューを開き、`src` 配下の変更を監視して自動で再読み込みします。

### GitHub Pages 用にビルドする

GitHub Pages に反映する前は、以下を実行します。

```bash
npm run build:pages
```

このコマンドは、まず `dist/` に HTML、CSS、JavaScript、画像を生成し、その後 GitHub Pages が読み込むリポジトリ直下へコピーします。

生成・更新される主なファイルは以下です。

```text
dist/
index.html
css/
js/
assets/
```

`npm run build` は `dist/` だけを更新します。GitHub Pages へ公開するためにリポジトリ直下の `index.html` も更新したい場合は、`npm run build:pages` を使います。

### npm scripts

- `npm run build`: HTML、CSS、JavaScript、画像を `dist/` に生成
- `npm run build:pages`: `dist/` を生成し、GitHub Pages 用にリポジトリ直下へコピー
- `npm run build:assets`: `src/assets/` のファイルを `dist/` にコピー
- `npm run build:pug`: `src/pug/` の Pug を HTML に変換して `dist/` に出力
- `npm run build:scripts`: `src/js/scripts.js` を `dist/` に出力
- `npm run build:scss`: `src/scss/` の SCSS を CSS に変換して `dist/` に出力
- `npm run clean`: 再ビルド前に `dist/` を削除
- `npm run start:debug`: デバッグモードで起動
- `npm start`: ローカルプレビューを起動し、`src` 配下の変更を監視

このビルド環境を使うには、npm が必要です。

## 不具合・課題

このリポジトリ固有の修正や改善は、通常の GitHub フローに従って issue または pull request で管理します。

テンプレート本体に関する不具合は、Start Bootstrap の公式リポジトリまたはテーマページを参照してください。

- <https://github.com/StartBootstrap/startbootstrap-resume>
- <https://startbootstrap.com/theme/resume/>

## テーマについて

このサイトは、Start Bootstrap が提供する Resume テーマをベースにしています。

Start Bootstrap は Bootstrap ベースの無料テーマやテンプレートを提供しているオープンソースプロジェクトです。各テンプレートは MIT ライセンスで公開されています。

- <https://startbootstrap.com>
- <https://github.com/StartBootstrap/startbootstrap-resume>

## 著作権とライセンス

Copyright 2013-2023 Start Bootstrap LLC.

このテンプレートのコードは [MIT License](https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE) のもとで公開されています。
