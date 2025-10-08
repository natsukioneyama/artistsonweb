/* =========================================
 * Portfolio — script.js (toggle-clean)
 * 目的：
 *  1) 右上ボタン … 通常ビュー=「OVERVIEW」→押すとOverviewを開く
 *                   Overview中=「BACK」→押すと閉じて通常ビューに戻る
 *  2) Overviewのグリッド生成 / クリックで該当写真へ
 *  3) グループホバー時のキャプション追随（PCのみ）
 ========================================= */
  
/* ---------- サンプルデータ（後で差し替えOK） ---------- */
const PHOTOS = [
 
  { src: "img/madamefigaro/03/09.webp", w: 1600, h: 1067, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Rocio Ramos", group: "MADAME FIGARO" },
  { src: "img/madamefigaro/03/10.webp", w: 1200, h: 1600, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Rocio Ramos", group: "MADAME FIGARO" },
  { src: "img/madamefigaro/03/07.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Rocio Ramos", group: "MADAME FIGARO" },
  { src: "img/madamefigaro/03/06.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Rocio Ramos", group: "MADAME FIGARO" },
  { src: "img/madamefigaro/03/04.webp", w: 1200, h: 1600, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>', line1: "MADAME FIGARO", line2: "Rocio Ramos", group: "MADAME FIGARO" },
  { src: "img/madamefigaro/03/08.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Rocio Ramos", group: "MADAME FIGARO" },

  { src: "img/madamefigaro/04/01.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Karina Twiss", group: "MADAME FIGARO" },
  { src: "img/madamefigaro/04/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Karina Twiss", group: "MADAME FIGARO" },
  { src: "img/madamefigaro/04/04.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Karina Twiss", group: "MADAME FIGARO" },

  { src: "img/madamefigaro/02/06.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Arthur Delloye", group: "MADAME FIGARO" }, 
  { src: "img/madamefigaro/02/02.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Arthur Delloye", group: "MADAME FIGARO" }, 
  { src: "img/madamefigaro/02/01.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Arthur Delloye", group: "MADAME FIGARO" }, 
  { src: "img/madamefigaro/02/07.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Arthur Delloye", group: "MADAME FIGARO" }, 
  { src: "img/madamefigaro/02/04.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Arthur Delloye", group: "MADAME FIGARO" }, 
  { src: "img/madamefigaro/02/05.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Arthur Delloye", group: "MADAME FIGARO" }, 

  { src: "img/madamefigaro/01/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "", group: "MADAME FIGARO" }, 
  { src: "img/madamefigaro/01/04.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "", group: "MADAME FIGARO" }, 
  { src: "img/madamefigaro/01/02.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "", group: "MADAME FIGARO" }, 

  { src: "img/madamefigaro/05/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Gregory Derkenne", group: "MADAME FIGARO" }, 
  { src: "img/madamefigaro/05/05.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Gregory Derkenne", group: "MADAME FIGARO" }, 
  { src: "img/madamefigaro/05/02.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Gregory Derkenne", group: "MADAME FIGARO" }, 
    
  { src: "img/madamefigaro/06/05.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Thiemo Sander", group: "MADAME FIGARO" }, 
  { src: "img/madamefigaro/06/01.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Thiemo Sander", group: "MADAME FIGARO" }, 
  { src: "img/madamefigaro/06/04.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "MADAME FIGARO", line2: "Thiemo Sander", group: "MADAME FIGARO" }, 


  { src: "img/behindtheblinds/01/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Behind The Blinds", line2: "Emmanuel Giraud", group: "Behind The Blinds" }, 
  { src: "img/behindtheblinds/01/05.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Behind The Blinds", line2: "Emmanuel Giraud", group: "Behind The Blinds" }, 
  { src: "img/behindtheblinds/01/04.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Behind The Blinds", line2: "Emmanuel Giraud", group: "Behind The Blinds" }, 

  { src: "img/dedicate/01/04.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "DEDICATE", line2: "Nicolas Valois", group: "DEDICATE" }, 
  { src: "img/dedicate/01/06.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "DEDICATE", line2: "Nicolas Valois", group: "DEDICATE" }, 
  { src: "img/dedicate/01/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "DEDICATE", line2: "Nicolas Valois", group: "DEDICATE" }, 


  { src: "img/numerohomme/01/01.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Numéro Homme", line2: "Arash Khaksari", group: "Numero Homme" }, 
  { src: "img/numerohomme/01/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Numéro Homme", line2: "Arash Khaksari", group: "Numero Homme" }, 
  { src: "img/numerohomme/01/06.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Numéro Homme", line2: "Arash Khaksari", group: "Numero Homme" }, 
  
  { src: "img/voguesingapore/01/01.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "VOGUE SINGAPORE", line2: "Ilyes Griyeb", group: "VOGUE SINGAPORE" }, 
  { src: "img/voguesingapore/01/02.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "VOGUE SINGAPORE", line2: "Ilyes Griyeb", group: "VOGUE SINGAPORE" }, 

  { src: "img/overdue/01/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "OVERDUE", line2: "Rid Burman", group: "OVERDUE" }, 
  { src: "img/overdue/01/04.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "OVERDUE", line2: "Rid Burman", group: "OVERDUE" }, 
  { src: "img/overdue/01/02.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "OVERDUE", line2: "Rid Burman", group: "OVERDUE" }, 


  { src: "img/samaritaine/01/04.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "SAMARITAINE", line2: "Guillaume Millet", group: "SAMARITAINE" }, 
  { src: "img/samaritaine/01/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "SAMARITAINE", line2: "Guillaume Millet", group: "SAMARITAINE" }, 
  { src: "img/samaritaine/01/02.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "SAMARITAINE", line2: "Guillaume Millet", group: "SAMARITAINE" }, 
  { src: "img/samaritaine/01/01.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "SAMARITAINE", line2: "Guillaume Millet", group: "SAMARITAINE" }, 

  { src: "img/louboutin/01/02.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Rouge Louboutin", line2: "", group: "Rouge Louboutin" }, 
  { src: "img/louboutin/01/01.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Rouge Louboutin", line2: "", group: "Rouge Louboutin" }, 


  { src: "img/antidote/01/01.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "ANTIDOTE", line2: "Yann Weber", group: "ANTIDOTE" }, 
  { src: "img/antidote/01/02.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "ANTIDOTE", line2: "Yann Weber", group: "ANTIDOTE" }, 
  { src: "img/antidote/01/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "ANTIDOTE", line2: "Yann Weber", group: "ANTIDOTE" }, 


  { src: "img/cap74024/01/02.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "CAP74024", line2: "Benoit Auguste", group: "CAP74024" }, 
  { src: "img/cap74024/01/05.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "CAP74024", line2: "Benoit Auguste", group: "CAP74024" }, 
  { src: "img/cap74024/01/07.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "CAP74024", line2: "Benoit Auguste", group: "CAP74024" }, 
  { src: "img/cap74024/01/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "CAP74024", line2: "Benoit Auguste", group: "CAP74024" }, 
  { src: "img/cap74024/01/09.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "CAP74024", line2: "Benoit Auguste", group: "CAP74024" }, 
  { src: "img/cap74024/01/01.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "CAP74024", line2: "Benoit Auguste", group: "CAP74024" }, 

  { src: "img/essentialhomme/01/04.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "ESSENTIAL HOMME", line2: "Thomas Goldblum", group: "ESSENTIAL HOMME" }, 
  { src: "img/essentialhomme/01/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "ESSENTIAL HOMME", line2: "Thomas Goldblum", group: "ESSENTIAL HOMME" }, 
  { src: "img/essentialhomme/01/02.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "ESSENTIAL HOMME", line2: "Thomas Goldblum", group: "ESSENTIAL HOMME" }, 

  { src: "img/psgjordan/01/01.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "PSG X JORDAN", line2: "", group: "PSG X JORDAN" }, 
  { src: "img/psgjordan/01/02.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "PSG X JORDAN", line2: "", group: "PSG X JORDAN" }, 
  { src: "img/psgjordan/01/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "PSG X JORDAN", line2: "", group: "PSG X JORDAN" }, 

  { src: "img/lula/01/04.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Lula", line2: "Kristin Vicari", group: "Lula" }, 
  { src: "img/lula/01/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Lula", line2: "Kristin Vicari", group: "Lula" }, 
  { src: "img/lula/01/05.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Lula", line2: "Kristin Vicari", group: "Lula" }, 


  { src: "img/vogueukraine/01/01.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "VOGUE UKRAINE", line2: "Lukasz Pukowiec", group: "VOGUE UKRAINE" }, 
  { src: "img/vogueukraine/01/02.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "VOGUE UKRAINE", line2: "Lukasz Pukowiec", group: "VOGUE UKRAINE" }, 
  { src: "img/vogueukraine/01/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "VOGUE UKRAINE", line2: "Lukasz Pukowiec", group: "VOGUE UKRAINE" }, 

  
  { src: "img/vogueukrainecartier/01/01.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "VOGUE UKRAINE X Cartier", line2: "Stéphanie Volpato", group: "VOGUE UKRAINE" }, 
  { src: "img/vogueukrainecartier/01/02.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "VOGUE UKRAINE X Cartier", line2: "Stéphanie Volpato", group: "VOGUE UKRAINE" }, 
  { src: "img/vogueukrainecartier/01/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "VOGUE UKRAINE X Cartier", line2: "Stéphanie Volpato", group: "VOGUE UKRAINE" }, 

  { src: "img/numerochina/01/01.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Numéro China", line2: "David Vasilijevic", group: "Numéro China" }, 
  { src: "img/numerochina/01/02.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Numéro China", line2: "David Vasilijevic", group: "Numéro China" }, 
  { src: "img/numerochina/01/03.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Numéro China", line2: "David Vasilijevic", group: "Numéro China" }, 
  { src: "img/numerochina/01/04.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Numéro China", line2: "David Vasilijevic", group: "Numéro China" }, 
  { src: "img/numerochina/01/05.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Numéro China", line2: "David Vasilijevic", group: "Numéro China" }, 
  { src: "img/numerochina/01/06.webp", w: 1600, h: 1100, title: 'KAZUKO KITAOKA<br><span class="role">HAIR STYLIST</span>',  line1: "Numéro China", line2: "David Vasilijevic", group: "Numéro China" }, 

];

/* ---------- 要素参照 ---------- */
const hero = document.getElementById("hero");
const viewer = document.getElementById("viewer");
const counterEl = document.getElementById("counter");

// PC固定キャプション
const dTitle = document.getElementById("dTitle");
const dLine1 = document.getElementById("dLine1");
const dLine2 = document.getElementById("dLine2");

// モバイルキャプション
const mTitle = document.getElementById("mTitle");
const mLine1 = document.getElementById("mLine1");
const mLine2 = document.getElementById("mLine2");

// 左右クリック領域
const navPrev = document.querySelector(".navPrev");
const navNext = document.querySelector(".navNext");

// Overview関連
const overviewPanel   = document.getElementById("overviewPanel");
const btnOverview     = document.getElementById("btnOverview");
const ovCats          = document.getElementById("ovCategories");
const ovPanePhotos    = document.getElementById("ovPhotos");
const ovPaneVideo     = document.getElementById("ovVideo");
const ovPaneInfo      = document.getElementById("ovInfo");
const ovPaneContact   = document.getElementById("ovContact");
const overviewGrid    = document.getElementById("overviewGrid");

let ovProjCaption = null;

/* ---------- 状態 ---------- */
let index = 0;

// --- 同時再生シールド：#ovVideo 内の <video> では、他の play リスナーに届かせない ---
document.addEventListener('play', (e) => {
  const v = e.target;
  const wrap = document.getElementById('ovVideo');
  // 動画ギャラリー内の <video> だけ対象
  if (wrap && v instanceof HTMLVideoElement && wrap.contains(v)) {
    e.stopImmediatePropagation(); // ここで以降の「他をpauseする」リスナーを遮断
  }
}, true); // ← capture で登録（重要）


/* ---------- 初期化 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  render(index);

  // 左右クリック
  navPrev?.addEventListener("click", prev);
  navNext?.addEventListener("click", next);
  
  // === スマホスワイプで前後移動 ===
(()=>{
  const el = document.getElementById('viewer');
  if (!el) return;

  let startX = 0, startY = 0, tracking = false, moved = false;

  const isOverviewOpen = () =>
    !!document.getElementById('overviewPanel')?.classList.contains('is-open');

  const point = (e) => (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]) || e;

  const onDown = (e) => {
    if (isOverviewOpen()) return;
    const p = point(e);
    startX = p.clientX;
    startY = p.clientY;
    tracking = true;
    moved = false;
  };

  const onMove = (e) => {
    if (!tracking) return;
    const p = point(e);
    const dx = p.clientX - startX;
    const dy = p.clientY - startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 12) {
      e.preventDefault();
      moved = true;
    }
  };

  const onUp = (e) => {
    if (!tracking) return;
    tracking = false;
    if (isOverviewOpen()) return;
    if (!moved) return;

    const p = point(e);
    const dx = p.clientX - startX;

    // 発火しきい値（お好みで 35〜60px 程度に調整）
    if (Math.abs(dx) >= 40) {
      if (dx < 0) {
        next();  // 左へスワイプ → 次へ
      } else {
        prev();  // 右へスワイプ → 前へ
      }
    }
  };

  el.addEventListener('touchstart', onDown, { passive: true });
  el.addEventListener('touchmove',  onMove,  { passive: false });
  el.addEventListener('touchend',   onUp,    { passive: true });
})();


  // キーボード（Overview開時はEscで閉じる）
  window.addEventListener("keydown", (e) => {
    if (overviewPanel.classList.contains("is-open")) {
      if (e.key === "Escape") closeOverview();
      return;
    }
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });

  // ------ 右上ボタン：トグル（これだけが唯一のハンドラ） ------
  // 既存のonclickやaddEventListenerがあると競合するのでクリアしてから付け直す
  if (btnOverview) {
    const clean = btnOverview.cloneNode(true);
    btnOverview.parentNode.replaceChild(clean, btnOverview);
  }
  const ovBtn = document.getElementById("btnOverview");
  ovBtn.textContent = "OVERVIEW"; // 通常ビューの初期表示
  ovBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (overviewPanel.classList.contains("is-open")) {
      closeOverview();
      ovBtn.textContent = "OVERVIEW";
    } else {
      openOverview();
      ovBtn.textContent = "PORTFOLIO";
    }
    
  });
  // -------------------------------------------------------------
// === Overview のフィルタを解除して全件表示に戻す ===
function clearOverviewFilter() {
  if (typeof filterByGroup === 'function') {
    filterByGroup(null); // 全件に戻す
  }
  const tags = document.getElementById('clientTags');
  if (tags) {
    tags.querySelectorAll('.is-active').forEach(el => el.classList.remove('is-active'));
  }
}



  // Overview ヘッダーの BACK で閉じる → 通常ビューに戻る
document.getElementById('btnOvBack')?.addEventListener('click', (e) => {
  e.preventDefault();
  closeOverview(); // パネルを閉じる
  // 右上のメインボタンの表示を「OVERVIEW」に戻す
  const topBtn = document.getElementById('btnOverview');
  if (topBtn) topBtn.textContent = 'OVERVIEW';
  // 必要ならスクロール頂点へ
  // window.scrollTo({ top: 0, behavior: 'smooth' });
});
});
// === A) ホバー中だけ controls を出す + 右上フルスクリーン ===
function enableHoverControls(){
  document.querySelectorAll('#ovVideo .ov-video').forEach(tile=>{
    if (tile.dataset.hoverInit) return;
    tile.dataset.hoverInit = '1';

    const v = tile.querySelector('video'); // .ov-video-el でもOK
    if (!v) return;

    // 初期は非表示
    v.controls = false;

    // PC: ホバーで表示/離れたら非表示
    tile.addEventListener('mouseenter', ()=>{ v.controls = true;  });
    tile.addEventListener('mouseleave', ()=>{ v.controls = false; });

    // SP: タップで3秒表示
    if (window.matchMedia('(hover:none)').matches){
      tile.addEventListener('click', ()=>{
        v.controls = true;
        clearTimeout(v._hideT);
        v._hideT = setTimeout(()=>{ v.controls = false; }, 3000);
      });
    }

    // 右上フルスクリーンボタン
    const frame = tile.querySelector('.ov-video-frame') || tile;
    if (!frame.querySelector('.ov-fs-btn')){
      const btn = document.createElement('button');
      btn.className = 'ov-fs-btn';
      btn.type = 'button';
      btn.setAttribute('aria-label','Fullscreen');
      btn.innerHTML = '⤢';
      frame.appendChild(btn);
      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        const req = frame.requestFullscreen || frame.webkitRequestFullscreen || frame.msRequestFullscreen;
        if (req) req.call(frame);
        else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen(); // iOS
        v.controls = true;
      });
    }
    // ★ サムネクリック → その写真から開始
document.getElementById('overviewGrid')?.addEventListener('click', (e)=>{
  const a = e.target.closest('#overviewGrid a');
  if (!a) return;
  e.preventDefault();

  const i = Number(a.dataset.idx);
  if (!Number.isFinite(i)) return;

  // あなたのビューアに合わせて開始位置をセット
  try { window.index = i; } catch(e){}
  if (typeof render === 'function') render(i);  // ← いつもの表示関数
  if (typeof closeOverview === 'function') closeOverview(); // パネルを閉じるなら
});

  });
}
window.enableHoverControls = enableHoverControls; // ← 公開


/* ---------- 画像ビュー描画 ---------- */
function render(i){
  const item = PHOTOS[i];
  if (!item) return;

  hero.src = item.src;
  hero.alt = item.title || "";

  // PCキャプション
  // PCキャプション
  dTitle.innerHTML = item.title || "";   // ★ここを innerHTML に変更
  dLine1.textContent = item.line1 || "";
  dLine2.textContent = item.line2 || "";

  // モバイルキャプション
  mTitle.innerHTML = item.title || "";   // ★ここも innerHTML に変更
  mLine1.textContent = item.line1 || "";
  mLine2.textContent = item.line2 || "";


  const pad2 = (n) => String(n).padStart(2, "0");
  counterEl.textContent = `${pad2(i+1)}/${pad2(PHOTOS.length)}`;
}



function go(i){
  if (!Array.isArray(PHOTOS) || PHOTOS.length === 0) return;
  const n = PHOTOS.length;
  index = ((i % n) + n) % n; // 正の modulo
  render(index);
}

// 前後移動
function prev(){ go(index - 1); }
function next(){ go(index + 1); }


/* ---------- Overview 開閉 ---------- */
function openOverview(){
  overviewPanel.classList.add("is-open");
  overviewPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add('ov-open');

  // ← これを1回だけ。showTabが無い場合はフォールバック
  if (typeof showTab === 'function') {
    showTab('photos');
  } else {
    onShowPhotosPane(); // ← showTabが無い環境用
  }

  overviewPanel.scrollTop = 0; 
}
function closeOverview(){
  overviewPanel.classList.remove("is-open");
  overviewPanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove('ov-open');
}

window.openOverview = openOverview;
window.closeOverview = closeOverview;

  // クリックで写真ビューへ & 閉じる
  overviewGrid.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    e.preventDefault();
    const idx = Number(a.dataset.idx || 0);
    index = Number.isFinite(idx) ? idx : 0;
    render(index);
    closeOverview();
    const ovBtn = document.getElementById("btnOverview");
    if (ovBtn) ovBtn.textContent = "OVERVIEW";
  });

  // グループホバー（PC）
  overviewGrid.addEventListener("pointerenter", () => {
    if (!isHoverPointer()) return;
    overviewGrid.classList.add("is-group-hover");
  }, true);

  overviewGrid.addEventListener("pointerleave", () => {
    if (!isHoverPointer()) return;
    overviewGrid.classList.remove("is-group-hover");
    overviewGrid.querySelectorAll("a.is-in-group").forEach(el => el.classList.remove("is-in-group"));
    hideOvProjCaption();
  }, true);

  overviewGrid.addEventListener("pointerover", (e) => {
    if (!isHoverPointer()) return;
    const a = e.target.closest("a");
    if (!a) return;
    const group = a.dataset.group || "";

    overviewGrid.querySelectorAll("a.is-in-group").forEach(el => el.classList.remove("is-in-group"));
    if (group) {
      overviewGrid.querySelectorAll(`a[data-group="${cssEscape(group)}"]`).forEach(el => el.classList.add("is-in-group"));
      showOvProjCaption(group, a);  // ← サムネの近くに追随
    } else {
      hideOvProjCaption();
    }
  });

// Justified Gallery 初期化
if (window.jQuery && jQuery.fn.justifiedGallery) {
  jQuery(overviewGrid)
    .addClass("is-layingout")
    .justifiedGallery({
      rowHeight: 220,
      margins: 8,
      lastRow: "nojustify",
      captions: false,
      waitThumbnailsLoad: true
    })
    .on("jg.complete", () => {
      jQuery(overviewGrid).removeClass("is-layingout");
      stripTitlesNow(); // ← レイアウト完了ごとに一掃
    });
}

// ▼ 追加：titleを確実に消すユーティリティ＋ガード
function stripTitlesNow() {
  document
    .querySelectorAll('#overviewGrid [title]')
    .forEach(el => el.removeAttribute('title'));
}

(function killTitlesForever(){
  const grid = document.getElementById('overviewGrid');
  if (!grid) return;

  // 初回も一掃
  stripTitlesNow();

  // ホバー直前（捕捉フェーズ）で再付与されたtitleを即除去
  grid.addEventListener('mouseover', (e) => {
    const t = e.target.closest('[title]');
    if (t && grid.contains(t)) t.removeAttribute('title');
  }, true);
})();



/* ---------- ユーティリティ ---------- */
function isHoverPointer(){
  return window.matchMedia && window.matchMedia("(hover:hover) and (pointer:fine)").matches;
}
function cssEscape(s){ return String(s).replace(/["\\]/g, "\\$&"); }

/* ---------- 浮遊キャプション（追随） ---------- */
function ensureOvProjCaption(){
  if (ovProjCaption) return ovProjCaption;
  ovProjCaption = document.createElement("div");
  ovProjCaption.className = "ov-proj-caption";
  ovProjCaption.style.position = "absolute";
  ovProjCaption.style.left = "16px";
  ovProjCaption.style.top  = "0px";
  ovProjCaption.style.pointerEvents = "none";
  ovProjCaption.style.fontSize = "10px";
  ovProjCaption.style.fontWeight = "500";
  ovProjCaption.style.color = "#000";
  ovProjCaption.style.display = "none";
  ovPanePhotos.appendChild(ovProjCaption); // #ovPhotos 基準
  return ovProjCaption;
}
function showOvProjCaption(text, anchorEl){
  const el = ensureOvProjCaption();
  el.textContent = text;
  el.style.display = "block";
  const cr = ovPanePhotos.getBoundingClientRect();
  const ar = anchorEl.getBoundingClientRect();
  const x = ar.left - cr.left + 4;
  const y = ar.top  - cr.top  + 4;
  el.style.left = `${x}px`;
  el.style.top  = `${y}px`;
}
function hideOvProjCaption(){
  if (!ovProjCaption) return;
  ovProjCaption.style.display = "none";
}

// =======================================================
// ここから Video セクション関連のコードを追加
// =======================================================

// --- Overview タブ切り替え（置き換え）---
const panes = {
  photos: document.getElementById('ovPhotos'),
  video:  document.getElementById('ovVideo'),
  info:   document.getElementById('ovInfo')
};

function showTab(tab){
  // 1) いったん全部隠す
  panes.photos.hidden = true;
  panes.video.hidden  = true;
  panes.info.hidden   = true;

  // 2) 選ばれたタブだけ表示（既定は photos）
  if (tab === 'photos') {
  panes.photos.hidden = false;

  // ★ここがポイント：フィルターを解除して「全件」を描画
  if (typeof filterByGroup === 'function') {
    filterByGroup(null);   // ← 絞り込み解除（全写真）
    // 見た目の選択状態もリセット（点灯しているタグを消灯）
    document.getElementById('clientTags')
      ?.querySelectorAll('.chip.is-active')
      .forEach(el => el.classList.remove('is-active'));
  } else if (typeof onShowPhotosPane === 'function') {
    // もし filterByGroup が無い場合だけ、いつもの並べ直しを呼ぶ
    onShowPhotosPane();
  }

               // ← ここで並べ直す！
  } else if (tab === 'video') {
    panes.video.hidden = false;
      requestAnimationFrame(enableHoverControls); 
    // onShowVideoPane();               // （あればここで呼ぶ）
  } else if (tab === 'info') {
    panes.info.hidden = false;
  } else {
    // 想定外は photos に戻す
    panes.photos.hidden = false;
    onShowPhotosPane();
  }

}

// === Overview の絞り込み（Selected Clients）を解除して全件に戻す ===
function clearOverviewFilter() {
  // フィルタ関数がある場合は「解除(null)」で呼ぶ
  if (typeof filterByGroup === 'function') {
    filterByGroup(null);
  }
  // チップの見た目をリセット
  const tags = document.getElementById('clientTags');
  if (tags) {
    tags.querySelectorAll('.chip.is-active, .is-active').forEach(el => el.classList.remove('is-active'));
  }
}

// --- Video lazy load & single-play policy ---
const videoEls = Array.from(document.querySelectorAll('.ov-video-el'));

function mountSources(v){
  if(v.dataset.mounted) return;
  const canPlayHevc = v.canPlayType('video/mp4; codecs="hvc1"'); // Safari系
  const frag = document.createDocumentFragment();
  if(canPlayHevc && v.dataset.srcHevc){
    const s = document.createElement('source');
    s.src = v.dataset.srcHevc;
    s.type = 'video/mp4; codecs="hvc1"';
    frag.appendChild(s);
  }
  if(v.dataset.srcMp4){
    const s2 = document.createElement('source');
    s2.src = v.dataset.srcMp4;
    s2.type = 'video/mp4';
    frag.appendChild(s2);
  }
  v.appendChild(frag);
  v.dataset.mounted = '1';
  v.load();
}

const io = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries)=>{
      entries.forEach(ent=>{
        if(ent.isIntersecting){
          mountSources(ent.target);
          io.unobserve(ent.target);
        }
      });
    }, { root: document.querySelector('#overviewPanel'), threshold: 0.2 })
  : null;

videoEls.forEach(v=>{
  if(io) io.observe(v); else mountSources(v);
  v.addEventListener('play', ()=>{
    videoEls.forEach(o=>{ if(o!==v && !o.paused) o.pause(); });
  });
});


// ===== PHOTO データ（_group を補完） =====
// ==== 正規化：表示用テキスト(_group) と、ホバー判定用ID(_gid) を分ける ====
const ALL_PHOTOS = (window.PHOTOS || (typeof PHOTOS !== 'undefined' ? PHOTOS : []))
  .map((p, i) => {
    const text = (p.group ?? '').toString().trim(); // ← 画面に出す“プロジェクト名”
    // ホバー判定用の内部ID（textが空でも必ず作る）
    const gid =
      text || (p.series || '').toString().trim() || p.src.split('/').slice(0, 2).join('/');

    return { ...p, _i: i, _group: text, _gid: gid };
  });




// ===== グリッド描画（重複しないよう destroy → empty → append の順） =====
let photosBootstrapped = false;  // 初回描画済みフラグ

function renderPhotos(list){
  const $grid = $('#overviewGrid');

  // 1) 既存インスタンスを破棄（先に destroy）
  try { $grid.justifiedGallery('destroy'); } catch(e) {}

  // 2) 中身クリア
  $grid.empty();

  // 3) まとめて追加
  const frag = document.createDocumentFragment();
  list.forEach(p => {
    const a = document.createElement('a');
    a.href = p.src;
    if (p._group) a.dataset.group = p._group; 
    a.dataset.idx = (p._i ?? i);
    if (p.title) a.title = p.title;
    const img = document.createElement('img');
    img.src = p.src;
    img.width = p.w; img.height = p.h;
    img.alt = p.title || p.line1 || '';
    a.appendChild(img);
    frag.appendChild(a);
  });
  $grid[0].appendChild(frag);

  // 4) 再初期化
  $grid.justifiedGallery({ rowHeight: 160, margins: 8, lastRow: 'nojustify' });
  photosBootstrapped = true;
}

// ===== フィルター =====
let currentGroup = null; // null = 全件
function filterByGroup(group){
  currentGroup = group || null;
  const list = currentGroup ? ALL_PHOTOS.filter(p => p._group === currentGroup) : ALL_PHOTOS;
  renderPhotos(list);
}

// ===== INFO の「Selected Clients」→ タグ生成（All なし） =====
function mountClientTags(){
  const collator = new Intl.Collator('en', { sensitivity: 'base', numeric: true }); // 文字順の基準
  const groups = [...new Set(ALL_PHOTOS.map(p => (p._group || '').trim()).filter(Boolean))]
  .sort(collator.compare);

  const $ul = $('#clientTags');
  if (!$ul.length) return;

  $ul.empty();
  groups.forEach(g => {
    $ul.append(`<li><button type="button" class="chip" data-group="${g}">${g}</button></li>`);
  });

  // クリック：同じタグ再押しで解除
  $ul.off('click').on('click', 'button.chip', e => {
    const btn = e.currentTarget;
    const g = btn.dataset.group;
    const active = btn.classList.contains('is-active');

    $ul.find('.chip').removeClass('is-active');
    if (!active) btn.classList.add('is-active');

    showTab('photos');                // 写真ペインに切替
    filterByGroup(active ? null : g); // フィルターON/OFF
  });
}
mountClientTags();

// ===== PHOTOS ペインが「見える」瞬間のケア =====
function onShowPhotosPane(){
  if (!photosBootstrapped) {
    renderPhotos(ALL_PHOTOS);         // 初回だけ描画
  } else {
    // 非表示でレイアウトが0幅になっていた場合に復活
    requestAnimationFrame(() => $('#overviewGrid').justifiedGallery('norewind'));
  }
}


// === Selected Clients を確実に生成する堅牢版 ===
(function(){
  const CLIENTS = [
    "10 men","Beauty","BEAUTY PAPERS","CRASH","DAPPER DAN","LAMPOON","NICOTINE",
    "NUMERO SWITZERLAND","NUMERO SWITZERLAND HOMME","REPLICA MAN",
    "SANS-TITLED","THE GREATEST MAGAZINE","UNTITLED."
  ];

  function mountClientTags(){
    try{
      const el = document.getElementById('clientTags');
      if (!el || el.children.length) return;               // もう入ってたら何もしない
      el.innerHTML = CLIENTS.map(n => `<li><a href="#">${n}</a></li>`).join('');
    }catch(e){
      // ここで止まらないように
      console.error('mountClientTags failed:', e);
    }
  }
 
})();


// ===== Overview tabs (anchors) — prevent scroll & switch panes =====
(() => {
  const panel = document.getElementById('overviewPanel');
  if (!panel) return;

  // タブを内包するナビ（.ov-rightlinks）を取得
  const tabs = panel.querySelector('.ov-rightlinks');
  if (!tabs) return;

  // 切り替えるセクション（存在するものだけ）
  const sections = ['ovPhotos', 'ovVideo', 'ovInfo']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const showById = (id) => {
    sections.forEach(sec => {
      sec.hidden = (sec.id !== id);
      // display切替にしたい場合は↑を消して↓に置換
      // sec.style.display = (sec.id === id) ? 'block' : 'none';
    });
  };

  // 初期表示：is-active の href から決定（なければ ovPhotos）
  const initA = tabs.querySelector('a.ov-cat.is-active[href^="#"]');
  const initId = initA ? initA.getAttribute('href').slice(1) : 'ovPhotos';
  showById(initId);

  // クリックでスクロールを止めて切替
  tabs.addEventListener('click', (e) => {
    const a = e.target.closest('a.ov-cat[href^="#"]');

    e.preventDefault();              // ← アンカーの自動スクロールを停止
    e.stopPropagation();

    const id = a.getAttribute('href').slice(1); // 例: "#ovVideo" -> "ovVideo"
    if (!id) return;

    showById(id);

    // active の付け替え
    tabs.querySelectorAll('a.ov-cat').forEach(x => x.classList.remove('is-active'));
    a.classList.add('is-active');
  }, { passive: false });
})();


// === ヘッダーの Overview / Film / Info をクリックした時の処理 ===
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('#overviewPanel .ov-rightlinks');
  if (!nav) return;

  nav.addEventListener('click', (e) => {
    const a = e.target.closest('a.ov-cat[href^="#"]');  // Overview/Film/Info の <a>
    if (!a) return;

    e.preventDefault();  // アンカーのスクロールを止める

    // 見た目のアクティブ付け替え
    nav.querySelectorAll('a.ov-cat').forEach(x => x.classList.remove('is-active'));
    a.classList.add('is-active');

    // 目的タブ（photos / video / info）を取得
    const id  = a.getAttribute('href').slice(1);     // "ovPhotos" など
    const tab = id.replace(/^ov/i, '').toLowerCase(); // "photos"

    // ★ Overview クリック時は必ず絞り込み解除 → 全件に戻す
    if (tab === 'photos') {
      clearOverviewFilter();
      // レイアウト再計算が必要なら（あれば）呼ぶ
      if (typeof onShowPhotosPane === 'function') onShowPhotosPane();
    }

    // 既存の切替関数があるならそれを使う
    if (typeof showTab === 'function') {
      showTab(tab);
    } else {
      // 予備：hidden 属性で単純に切替
      ['ovPhotos','ovVideo','ovInfo'].forEach(pid => {
        const el = document.getElementById(pid);
        if (el) el.hidden = (pid !== id);
      });
    }
  }, { passive:false });
});



