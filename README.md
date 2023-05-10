# FOIP typescriptチュートリアル
これはFOIPの新入生向け講座のTypescript課題のチュートリアル用リポジトリです
## 演習の進め方
### セットアップ
以下のコマンドを実行
```shell
git clone git@github.com:foip-2023-tutorial/lesson-typescript.git
cd lesson-typescript
```
### 課題1
以下のコマンドを実行していく

演習終了後は`ctrl-c`で開発用サーバをシャットダウンできる
```shell
cd lesson-1
npm i
npm run dev
```
### 課題2
以下のコマンドを実行していく

サーバの起動
演習終了後は`ctrl-c`で開発用サーバをシャットダウンできる
```shell
cd chat-server
go run main.go
```

演習終了後は`ctrl-c`で開発用サーバをシャットダウンできる
```shell
cd lesson-websocket
npm i
npm run dev
```
## ディレクトリ構成
```
.
├── README.md
├── lesson-1
│   ├── index.html
│   ├── package.json
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── counter.ts
│   │   ├── main.ts
│   │   ├── style.css
│   │   ├── typescript.svg
│   │   └── vite-env.d.ts
│   └── tsconfig.json
├── chat-server
│   ├── go.mod
│   ├── go.sum
│   └── main.go
└── lesson-websocket
    ├── index.html
    ├── package.json
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── counter.ts
    │   ├── main.ts
    │   ├── style.css
    │   ├── typescript.svg
    │   └── vite-env.d.ts
    └── tsconfig.json
```