# test-gRPC

## 構成

### client

Vue3 で作られたテストツール

### envoy

gRPC をフロントエンドで使える様にしてくれるリバプロ

### generate

server の protoc で出力された common.js ファイルを ESM に変換する

### server

バックエンド側の gRPC サーバー

## 参考 URL

- https://qiita.com/hannoeru/items/9be8b6c09b17d480406b

- [Protocol Buffers から TypeScript の型定義を作る](https://zenn.dev/ryo_kawamata/articles/ts-from-protocol-buffers)

- [Does ts-protoc-gen support windows? #15](https://github.com/improbable-eng/ts-protoc-gen/issues/15)
