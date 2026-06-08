document.addEventListener("DOMContentLoaded", function () {
  
  // 1. 網頁頂端標題響應式縮放設定
  const h1Element = document.getElementsByTagName("h1")[0];
  if (h1Element) {
    h1Element.style.fontSize = "6vw";
  }

  // 2. 🔍 大學專題海報點擊放大（燈箱效果）核心邏輯
  const lightbox = document.getElementById("posterLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  const posterImg = document.querySelector(".project-poster");

  // 確保小海報與燈箱元件都存在才執行
  if (posterImg && lightbox) {
    
    // ➔ 點擊小海報：開啟大燈箱，並同步圖片路徑
    posterImg.addEventListener("click", function () {
      if (lightboxImg) {
        lightboxImg.src = this.src; 
      }
      lightbox.classList.add("active");
    });

    // ➔ 點擊右上角叉叉：關閉燈箱
    if (closeBtn) {
      closeBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // 防止事件冒泡
        lightbox.classList.remove("active");
      });
    }

    // ➔ 點擊黑底任何地方：優雅關閉燈箱
    lightbox.addEventListener("click", function () {
      lightbox.classList.remove("active");
    });
  }
});
