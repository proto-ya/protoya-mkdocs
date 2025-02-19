---
og_title: "プロト屋 業務事例"
og_description: "事例紹介 : Adobe AnalyticsからGoogle Analytics 4への移行に伴うログ・マイグレーション"
og_url: "https://www.proto-ya.com/case/AA2GA-log-migration/"
og_image: "https://www.proto-ya.com/ogp/case.jpg"
og_site_name: "PROTOYA"
og_type: "website"
---
# Adobe AnalyticsからGoogle Analytics 4への移行に伴うログ・マイグレーション
<p class="update-date">最終更新日: 2025年 2月 19日</br>
<a class="update-date" target="_blank" href='https://github.com/proto-ya/protoya-mkdocs/commits/main/docs/case/AA2GA-log-migration.md'>編集履歴</a></p>

## 概要

証券会社のWebサーバでアクセス解析にAdobe Analyticsを使用していた。    
これをGoogle Analytics 4にマイグレーションするにあたり、過去のログデータをマイグレーションする必要が発生した。  
GZIP圧縮で4TB、展開時70TBほどの容量の過去データをエクスポートし、個人情報を削除するための加工処理を実施。  
AWS EC2、S3上にデータ加工環境を構築、awkを利用したshell Scriptによる大量データ加工を実施。    
一時的な加工用途としてのAWS環境の利用の知見を得られた。  

## 時期、ロール、他

- 時期 : 2021年 
- 期間 : 2ヵ月 (処理に時間がかかるため、1週間に一回、状況確認のために訪問)
- ロール : 1人で作業実施
- 業務形態 : オンサイト
- コミュニケーション : メール、電話

## キーワード

大量データ移行 , AWS , EC2 , S3 , Linux , shellscript , awk

## その他

[このページの編集履歴](https://github.com/proto-ya/protoya-mkdocs/commits/main/docs/case/AA2GA-log-migration.md)
