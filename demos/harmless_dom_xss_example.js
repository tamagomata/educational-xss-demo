/**
 * DOM XSS教育用デモ - 無害なサンプル
 * 実際の脆弱性調査では、location.hash等のユーザー入力を厳密に検証する必要があります
 */

// 模擬的な脆弱なDOM操作（教育用）
function simulateDomXss() {
    // 教育目的で意図的に脆弱性を再現
    const mockUserInput = "';alert('DOM XSS原理デモ');//";
    
    console.log("[教育用ログ] 模擬入力:", mockUserInput);
    
    // 脆弱性の核心部分を説明
    const explanation = `
    // 危険なコード例（実際には使わないでください）
    eval('var userValue = "' + location.hash.slice(1) + '"');
    
    // 対策コード
    const safeValue = decodeURIComponent(location.hash.slice(1))
                      .replace(/</g, "&lt;")
                      .replace(/>/g, "&gt;");
    `;
    
    console.log(explanation);
    return "このスクリプトは無害です。実際のDOM XSS調査方法を学ぶにはPortSwigger Academyがおすすめです";
}

// 実行例
simulateDomXss();
