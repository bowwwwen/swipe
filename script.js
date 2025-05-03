// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Section 取得
  const pages = {
    home: document.getElementById('home'),
    companyRegister: document.getElementById('company-register'),
    companyChat: document.getElementById('company-chat'),
    talentCards: document.getElementById('talent-cards'),
    studentRegister: document.getElementById('student-register'),
    studentResume: document.getElementById('student-resume'),
    resumeProgress: document.getElementById('resume-progress'),
    motivation: document.getElementById('motivation'),
    finish: document.getElementById('finish'),
    jobCards: document.getElementById('job-cards'),
  };

  function showPage(pageName) {
    // 隱藏所有頁面
    Object.values(pages).forEach(p => p.classList.remove('active'));
    // 顯示指定頁面
    pages[pageName].classList.add('active');

    // 若切換到「AI對話頁」，3 秒後自動跳到「人才卡片頁」
    if (pageName === 'companyChat') {
      setTimeout(() => {
        showPage('talentCards');
        renderTalentCard(0);
        currentCard = 0;
      }, 3000);
    }
  }

  // 首頁按鈕
  document.getElementById('btn-company').onclick = () => showPage('companyRegister');
  document.getElementById('btn-student').onclick = () => showPage('studentRegister');

  // 企業主註冊→AI對話
  document.getElementById('company-next').onclick = () => showPage('companyChat');

  // 人才卡片滑動邏輯
  const talentCardsData = [ /* ...資料略同上... */ ];
  let currentCard = 0;
  function renderTalentCard(idx) { /* ...同上...*/ }
  document.getElementById('card-prev').onclick = () => {
    if (currentCard > 0) renderTalentCard(--currentCard);
  };
  document.getElementById('card-next').onclick = () => {
    if (currentCard < talentCardsData.length - 1) renderTalentCard(++currentCard);
  };

  // 學生流程按鈕
  document.getElementById('student-next').onclick = () => showPage('studentResume');
  document.getElementById('resume-next').onclick = () => showPage('resumeProgress');
  document.getElementById('resume-progress-next').onclick = () => {
    showPage('jobCards');
    renderJobCard(0);
    currentJob = 0;
  };
  document.getElementById('motivation-done').onclick = () => showPage('finish');

  // 職缺卡片  
  const jobCardsData = [ /* ...資料略同上...*/ ];
  let currentJob = 0;
  function renderJobCard(idx) { /* ...同上...*/ }
  document.getElementById('job-prev').onclick = () => {
    if (currentJob > 0) renderJobCard(--currentJob);
  };
  document.getElementById('job-next').onclick = () => {
    if (currentJob < jobCardsData.length - 1) renderJobCard(++currentJob);
  };
});
