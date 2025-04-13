# TypeScript 計算機

このプロジェクトはTypeScriptで実装された簡単な計算機能を提供します。

## 機能

- 足し算：2つの数値を足し合わせる機能

## 使用方法

```typescript
import { add } from './calculator';

// 足し算の例
const result = add(5, 3);
console.log(`5 + 3 = ${result}`); // 出力: 5 + 3 = 8
```

## セットアップ

```bash
# 依存関係のインストール
npm install

# コードのビルド
npm run build

# 実行
node dist/index.js
```
