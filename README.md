# educational-xss-demo

##  注意
- このリポジトリは**合法的なセキュリティ教育**を目的としています
- 実際のシステムでテストする場合は、必ず**所有者の書面許可**を得てください
- 悪用は[刑法第234条の2](https://elaws.e-gov.go.jp/document?lawid=140AC0000000045)等で処罰されます
- **免責事項**: この教材を使用したすべての行為は自己責任です

##  学習目標
- XSSの基本原理を理解する
- 安全な環境で脆弱性を再現・検証する
- 適切な防御手法を習得する

##  環境構築
```bash
# Python簡易サーバーで起動（推奨）
python3 -m http.server 8000
# またはDockerでOWASP Juice Shopを起動
docker run --rm -p 3000:3000 bkimminich/juice-shop
```

##  学習リソース
### 基礎講座
1. [PortSwigger XSS Labs](https://portswigger.net/web-security/cross-site-scripting) - インタラクティブな学習環境
2. [OWASP XSS Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) - 防御策チートシート

### 実践演習
| リソース | 難易度 | 特徴 |
|---------|--------|------|
| [Hacker101 XSS](https://www.hacker101.com/sessions/xss) | 中級 | 動画解説付き |
| [XSS Game](https://xss-game.appspot.com) | 初級 | Google製の学習ゲーム |
| [PentesterLab XSS](https://pentesterlab.com/exercises/xss/) | 上級 | 証明書発行可能 |

#  学習ステップ（よかったらご参考に？）

### 1. 基礎理解
- `safe_xss_education_demo.html` で動作確認
- Chrome DevToolsのConsoleタブでログを観察

### 2. 脆弱性再現
```javascript
// harmless_dom_xss_example.js を改造
const userInput = decodeURIComponent(location.hash.slice(1));
document.getElementById("output").textContent = userInput; // 安全な処理に変更
```

### 3. 防御実装
- CSPヘッダーの設定練習
- サニタイズ関数の自作

##  推奨ツールセット
| ツール | 用途 | インストール |
|-------|------|-------------|
| Burp Suite | 手動テスト | [Download](https://portswigger.net/burp/communitydownload) |
| OWASP ZAP | 自動スキャン | `brew install --cask owasp-zap` |
| Wappalyzer | 技術スタック分析 | [Chrome拡張](https://www.wappalyzer.com/) |

##  スキルチェックリスト
- [ ] `alert(document.domain)` を実行できる
- [ ] DOM XSSと反射型XSSの違いを説明できる
- [ ] 簡単なCSPポリシーを書ける
- [ ] OWASP Juice ShopでXSS問題を1つ解いた

##  バグバウンティ準備
```markdown
1. [HackerOne](https://www.hackerone.com/)に登録
2. VDP（Vulnerability Disclosure Program）から開始
3. 公開レポートを分析
```

##  コミュニティや役に立つようなポスト検索方法など
- [日本バグバウンティ協会](https://bugbounty.jp/)
- [Bounty Hunters Discordサーバー(英語圏)](https://discord.com/invite/bugbounty)
- [X（旧Twitter） #BugBountyTips](https://x.com/hashtag/BugBountyTips)

##  ライセンス
このプロジェクトは [MIT License](LICENSE) で公開されています。教育目的での自由な利用・改変を許可します。

## 法的事項
利用に関する法的注意点は [LEGAL](LEGAL/LEGAL.md) 日本語版は[LEGAL_JP](LEGAL/LEGAL_JP.md) を参照してください。
