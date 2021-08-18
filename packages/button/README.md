# Button

## コンポーネント

- `src/button.tsx`

コンポーネント本体です。
コンポーネントを追加する場合、`src/` に新規 `xxx.tsx` を追加します。

- `src/index.ts`

`button/index.ts`に情報を伝えるため、コンポーネントをエクスポートしています。

```js
export { default as Button } from './Button'
export * from './Button'
// コンポーネントを追加した場合、export 文を追加する必要があります。
```

- `button/index.ts`

`button/` 配下にあるコンポーネントすべてをエクスポートします。

## ストーリー

- `stories/xxx.stories.tsx`

storybook のストーリーを記述します。

## テスト

- `tests/xxx.test.tsx`

コンポーネントのテストを記載します。

## README

- 概要
- インストール手順
- コンポーネントのインポート例
- コンポーネントの利用方法
  - プロパティの値
  - API使用例

などを記載します。

## 変更履歴

`CHANGELOG.md` に変更履歴を記載します。

## Package.json・TS

- `package.json`

