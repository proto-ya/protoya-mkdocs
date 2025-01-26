---
og_title: "プロト屋 技術ノート"
og_description: "OGPイメージの作り方"
og_url: "https://www.proto-ya.com/tech-notes/how-to-make-ogp-image"
og_image: "https://www.proto-ya.com/ogp/tech-notes.jpg"
og_site_name: "PROTOYA"
og_type: "website"
---
# OGPイメージの作り方

## OGPイメージとは
Webサイトの内容をSNS上でシェアするための仕組み。  
XやFacebookでURLを共有した際に内容をプレビューするためのサムネイルが表示される。
この画像を用意しておくことで、共有時の見た目を整えられる。

## 作業方針
- 画像を作る際、位置をきっちり合わせたキャプションを合成するため、CLIで画像を作る。
- 背景画像にロゴやキャプションを乗せる。
- 画像合成にはImageMagicを使用する。
- 環境 : WSL2 Ubuntu 24.04

## ImageMagickインストール
```
sudo apt install -y imagemagick
```

## フォント
- [Google Fontsを利用 (Noto Sans Japanese)](https://fonts.google.com/noto/specimen/Noto+Sans+JP?query=jp){target=”_blank”}
- フォントをWindows ExplorerでWSLのユーザーHomeにコピー
- ubuntuのフォント置き場に移動

```bash
sudo mv ~/*.ttf /usr/share/fonts/truetype/noto/
```

## タイトル (title.jpg)
``` bash
cd ~/protoya-mkdocs/docs/ogp/
# ロゴのサイズを調整してpngに変換
convert -background none -density 250 ../images/protoya-logo-white.svg logo.png 
# ベースとロゴを合成
convert base.jpg logo.png -background none -gravity center -compose over -composite title.jpg 
# ロゴpngを削除
rm logo.png 
```

## 業務事例 (case.jpg)
``` bash
cd ~/protoya-mkdocs/docs/ogp/
# ロゴのサイズを調整してpngに変換
convert -background none -density 250 ../images/protoya-logo-white.svg logo.png 
# ベースとロゴを合成 ロゴは200上に
convert base.jpg logo.png -background none -gravity center -geometry +0-200 -compose over -composite case.jpg
# キャプション文字列画像
convert -font /usr/share/fonts/truetype/noto/NotoSansJP-Medium.ttf \
  -size 1200x400 -gravity north \
  -fill "#DCDCDC" -background none -pointsize 140 caption:"業務事例" caption.png
# キャプションを合成 キャプションは150下に
convert case.jpg caption.png -background none -gravity center -geometry +0+150 -compose over -composite case.jpg
# 作業pngを削除
rm logo.png caption.png
```

## 自己紹介 (case.jpg)
``` bash
cd ~/protoya-mkdocs/docs/ogp/
# ロゴのサイズを調整してpngに変換
convert -background none -density 250 ../images/protoya-logo-white.svg logo.png 
# ベースとロゴを合成 ロゴは200上に
convert base.jpg logo.png -background none -gravity center -geometry +0-200 -compose over -composite about.jpg
# キャプション文字列画像
convert -font /usr/share/fonts/truetype/noto/NotoSansJP-Medium.ttf \
  -size 1200x400 -gravity north \
  -fill "#DCDCDC" -background none -pointsize 140 caption:"自己紹介" caption.png
# キャプションを合成 キャプションは150下に
convert about.jpg caption.png -background none -gravity center -geometry +0+150 -compose over -composite about.jpg
# 作業pngを削除
rm logo.png caption.png
```

## 技術ノート (case.jpg)
``` bash
cd ~/protoya-mkdocs/docs/ogp/
# ロゴのサイズを調整してpngに変換
convert -background none -density 250 ../images/protoya-logo-white.svg logo.png 
# ベースとロゴを合成 ロゴは200上に
convert base.jpg logo.png -background none -gravity center -geometry +0-200 -compose over -composite tech-notes.jpg
# キャプション文字列画像
convert -font /usr/share/fonts/truetype/noto/NotoSansJP-Medium.ttf \
  -size 1200x400 -gravity north \
  -fill "#DCDCDC" -background none -pointsize 140 caption:"技術ノート" caption.png
# キャプションを合成 キャプションは150下に
convert tech-notes.jpg caption.png -background none -gravity center -geometry +0+150 -compose over -composite tech-notes.jpg
# 作業pngを削除
rm logo.png caption.png
```
