---
og_title: "プロト屋 業務事例"
og_description: "事例紹介 : ERPパッケージに対し特定業界向けの機能を追加開発"
og_url: "https://www.proto-ya.com/case/erp-package-development/"
og_image: "https://www.proto-ya.com/ogp/case.jpg"
og_site_name: "PROTOYA"
og_type: "website"
---
# ERPパッケージに対し特定業界向けの機能を追加開発
<p class="update-date">最終更新日: 2025年 2月 19日</br>
<a class="update-date" target="_blank" href='https://github.com/proto-ya/protoya-mkdocs/commits/main/docs/case/erp-package-development.md'>編集履歴</a></p>

## 概要

国産ERPの財務会計パッケージに、特定業界向けの原価管理機能を追加開発。

作業は、当時まだ珍しかったDevOps環境で実施しました。業務コンサルタントからの仕様を基にロジックを設計し、開発、テストを経てリリース。

アジャイル開発手法を採用し、2週間単位のリリース計画に従って開発を進めた。
Gitによるバージョン管理、GitFlowを用いたマージリクエスト、レビュー完了後に自動的に起動するCI/CDパイプライン、Docker/k8sによる仮想化された環境への自動デプロイなど、当時としては大変モダンな開発環境を体験でき、その後のスキルの方向性を考える上で大変重要な経験ができた。

業務面では、月次の原価締めバッチで貸借が一致せず苦労したが、JUnitとMockitoを組み合わせた大量のテストケースを作成し、品質を維持できた。

## 時期、ロール、他

- 時期 : 2018年 ～ 2021年
- 期間 : 30ヵ月
- フェーズ : 設計、開発、テスト
- ロール : 20人チームのメンバーとして参画
- 開発プロセス : アジャイル 2週間イテレーション
- 業務形態 : オンサイトから、コロナに伴いフルリモート
- コミュニケーション : Slack, Teams

## キーワード

CI/CD環境で設計～実装, 外部設計, 内部設計, 開発/単体テスト, 結合テスト, 総合テスト, Windows、linux, MariaDB, cassandra, GitLab
Redmine, AWS, Spark, Java8, Spring
