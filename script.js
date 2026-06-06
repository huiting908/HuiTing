// 確保整張網頁的 HTML 元素都載入完成後，才執行裡面的程式碼（防止抓不到標題而當掉）
window.onload = function() {
  const h1Element = document.getElementsByTagName("h1")[0];
  if (h1Element) {
    h1Element.style.fontSize = "6vw";
  }
};

// 1. 抓取我們剛剛在 HTML 設定的漂浮小卡元件
const floatingCard = document.getElementById('floatingCard');

// 2. 監聽網頁的滾動事件（Scroll）
window.addEventListener('scroll', () => {
  // 偵測目前網頁往下滑動了多少像素
  if (window.scrollY > 150) {
    // 往下滑超過 150px，就幫小卡加上 "show" 類別使其浮現
    floatingCard.classList.add('show');
  } else {
    // 回到最頂端時，就把 "show" 類別拿掉使其隱藏
    floatingCard.classList.remove('show');
  }
});
// ==========================================
// 🔍 專題海報點擊放大互動邏輯
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  // 抓取網頁上的元素
  const posterImg = document.querySelector('.project-poster');
  const lightbox = document.getElementById('posterLightbox');
  const closeBtn = document.querySelector('.lightbox-close');

  // 確保元件都存在才執行，避免報錯
  if (posterImg && lightbox) {
    // 1. 點擊小海報 ＞ 打開大燈箱
    posterImg.addEventListener('click', function() {
      lightbox.classList.add('active');
    });

    // 2. 點擊右上角叉叉 ＞ 關閉燈箱
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        lightbox.classList.remove('active');
      });
    }

    // 3. 點擊黑底任何地方（包含大圖本身）＞ 也能優雅關閉
    lightbox.addEventListener('click', function(e) {
      // 點擊關閉
      lightbox.classList.remove('active');
    });
  }
});
