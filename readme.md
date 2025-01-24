# プロト屋 MkDocs リソース

このリポジトリは、[プロト屋のポートフォリオサイト](https://www.proto-ya.com/)を構築するリソース一式です。  
ドキュメント構築ツール [MkDocs](https://www.mkdocs.org/) を活用して作成しました。  
CSSや拡張機能の設定・構成を共有します。  
アピールできる画像が多くない、バックエンドやインフラ系のエンジニアのポートフォリオサイトを構築する際の参考になればと思い公開します。

## 🌟 主な内容

- **MkDocs設定ファイル (`mkdocs.yml`)**
  - ドキュメント構造やテーマ設定を管理する主要ファイル。

- **スタイルシート (`css/style.css`)**
  - プロト屋独自のデザインを適用したスタイルシート。
  - 特にランディングページとなる`index.md`に適用される一枚絵専用に`css/main-cover.css`を使用しています。

- **OGP用のog_imageタグ追加(overrides/base.html)**
  - XやFacebookでシェアしていただいた際に、ページ概要をかっこよく表示するための改造一式。

- **GitHub Actionsを利用した自動デプロイ**
  - このリポジトリのmainブランチにマージされた際、ssh接続された公開サーバに自動的にデプロイされます。
  これを実現するためのGitHub Actions用のymlファイル`.github/workflows/deploy.yml`を含みます。

## 🚀 セットアップ方法

### 必要な環境
- WSL2で動作確認しています。Pythonが動けばLocal実行環境はどこでも動くと思います。
- Python 3.12以上
- `pip` パッケージマネージャー

### 手順

1. **リポジトリをクローン**
``` bash
git clone https://github.com/yhironaka/protoya-mkdocs.git
cd protoya-mkdocs
```

2. 必要なパッケージをインストール
``` bash
pip install -r requirements.txt
```

3. ローカルサーバーを起動
``` bash
mkdocs serve
```
ブラウザで http://localhost:8000 にアクセスしてプレビューできます。

4. ドキュメントをビルド
``` bash
mkdocs build
```
site/ フォルダ内に静的ファイルが生成されます。

## <img src="docs/images/github-mark-white.svg" width="26"> GitHub Actions

変更がmainブランチにマージされると、GitHub Actionsが起動し、サーバにSSH接続してデプロイします。  
接続先のサーバや秘密鍵を以下のように設定します。  

GitHub > Settings > Secrets and variables > Actions
- SERVER_HOST : サーバのホスト名やIPアドレス
- SERVER_USERNAME : ssh接続のユーザー名
- KEY : 秘密鍵。内容をテキストでコピペ
- GA4_TAG : G-XXXXXXXXXX 形式で記載

Oracle Cloud InfrastructureのAlways Freeのcomputeインスタンスを使っています。  
公開されるのは静的HTMLのみなので、無料インスタンスで十分です。

## 📂 ディレクトリ構成
```
protoya-mkdocs/
├── .github/workflows/   # GitHub Actions用設定yamlファイル
├── docs/                # ドキュメントのMarkdownファイル
├── overrides/           # OGP用カスタムファイル
├── mkdocs.yml           # MkDocsの設定ファイル
├── requirements.txt     # 必要なPythonパッケージ
└── site/                # ビルド後の静的ファイル (自動生成)
```

## 🛠️ カスタマイズ方法

### テーマの変更

mkdocs.yml の theme セクションでテーマを指定してください。

### プラグインの追加

mkdocs.yml の plugins セクションに必要なプラグインを追加してください。

例:
``` yaml
plugins:
  - search
  - markdownextradata
```

### 新しいページの追加

docs/ フォルダに新しい .md ファイルを追加し、mkdocs.yml に追記してください。
``` yaml
nav:
  - Home: index.md
  - 新しいページ: new_page.md
```
## 🤝 コントリビューション

このリポジトリへの貢献は大歓迎です！以下の手順でコントリビューションを始めてください。

### リポジトリをフォーク

1. 新しいブランチを作成
``` bash
git checkout -b feature/your-feature
```
2. 変更をコミット
``` bash
git commit -m "Add your feature"
```
3. プルリクエストを送信

## 📜 ライセンス

このリポジトリは MITライセンス の下で公開されています。詳細は LICENSE ファイルをご確認ください。

## 📞 サポート

質問や問題がある場合は、Issue を作成してください。また、フィードバックもお待ちしています！

## 🌐 関連リンク

- [MkDocs 公式サイト](https://www.mkdocs.org/)
- [MkDocs GitHub Repository](https://github.com/mkdocs/mkdocs)
- [MkDocs Material](https://squidfunk.github.io/mkdocs-material/)
