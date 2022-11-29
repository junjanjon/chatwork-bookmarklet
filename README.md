# chatwork-bookmarklet

チャットワークのブックマークレットを保存します。

# 内容

bookmarklets ディレクトリ以下のファイルがブックマークレットです。

## read_room.js

部屋一覧を「未読があるチャット」にしてから実行することで、すべてのチャット部屋を既読にします。

# 開発方法

bookmarklets_src ディレクトリ以下のファイルがブックマークレットのソースコードです。

## ビルド

`npm run build` を実行すると、ソースコードをブックマークレットに変換します。

```
npm install
npm run build
```

以下のコマンドでソースコードに対して lint を実行できます。

```
npm run lint
npm run fixlint
```
