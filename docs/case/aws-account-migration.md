---
og_title: "プロト屋 業務事例"
og_description: "事例紹介 : 大量のAWSアカウントのぺイヤー移管
大手ユーザー企業様において、複数のAWS Organizationsを統合するため、アカウント移管作業を実施。
対象となる約150のAWSアカウントは、マネージドサービスを多用しており、またCfCTを用いたIaCも進んでいることから、個々が複雑な構成を持っていた。特にセキュリティ設定の影響でサービス停止が発生しないよう、慎重に調査と計画を行う。試行を重ねることで問題点を改善し、効率化を図るサイクルを構築した。
作業は基本的にCloudShell上でCUIスクリプトを作成し、テストを経た後に本番環境へ適用するという流れで進めた。
最終的に、移行作業のテンプレート化を完了し、今後の移行実施チームへ引き継ぐ。
"
og_url: "https://www.proto-ya.com/case/aws-account-migration/"
og_image: "https://www.proto-ya.com/ogp/case.jpg"
og_site_name: "PROTOYA"
og_type: "website"
---
# 大量のAWSアカウントのぺイヤー移管
<p class="update-date">最終更新日: 2025年 2月 19日</p>
![](images/aws-account-migration.drawio.svg)

## 概要

大手ユーザー企業様において、複数のAWS Organizationsを統合するため、アカウント移管作業を実施。

対象となる約150のAWSアカウントは、マネージドサービスを多用しており、またCfCTを用いたIaCも進んでいることから、個々が複雑な構成を持っていた。特にセキュリティ設定の影響でサービス停止が発生しないよう、慎重に調査と計画を行う。試行を重ねることで問題点を改善し、効率化を図るサイクルを構築した。

作業は基本的にCloudShell上でCUIスクリプトを作成し、テストを経た後に本番環境へ適用するという流れで進めた。

最終的に、移行作業のテンプレート化を完了し、今後の移行実施チームへ引き継ぐ。

## 時期、ロール、他
- 時期 : 2024年 
- 期間 : 8ヵ月
- ロール : 6人チームのメンバーとして参画
- 開発プロセス : アジャイル スクラム 2週間スプリント
- 業務形態 : フルリモート
- コミュニケーション : Slack, Teams, Jira, Confluence, Notion
- 会議体:  
    スプリントプランニング、デイリースクラム、スプリントレビュー、スプリントレトロスペクティブ

    お客様はスプリントイベントを正確に実施しており、優秀なプロダクトオーナー（PO）とスクラムマスターに恵まれた。その結果、アジャイルが非常に効果的に運用された。

## キーワード
AWS Control Tower, AWS Organizations, IAM Identity Center, AWS SSO, AWS Config, Service Catalog, Account Factory, Cloud Shell, CloudTrail, IAM (Role, Policy, User, Organization (SCP, OU構成)) 他、マネージドサービス全般

## その他
[このページの編集履歴](https://github.com/proto-ya/protoya-mkdocs/commits/main/docs/case/aws-account-migration.md)