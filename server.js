const express = require('express');
const path = require('path'); // 💡 パスを扱うための標準モジュールを読み込む
const app = express();

// 💡 1. 静的ファイル（CSSや画像）のフォルダを絶対パスで指定する
app.use(express.static(path.join(__dirname, 'public')));

// 💡 2. トップページ（/）にアクセスがあったら、public内の index.html を返す
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ローカル開発環境用の設定（Vercel上では不要ですが、手元で動かすために残します）
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// 💡 3. Vercelがこのサーバーを認識できるように、appを外部に出力する
module.exports = app;