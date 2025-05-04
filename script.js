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

  function showPage(name) {
    Object.values(pages).forEach(p => p.classList.remove('active'));
    pages[name].classList.add('active');
    if (name === 'companyChat') {
      setTimeout(() => {
        showPage('talentCards');
        renderTalentCard(0);
      }, 3000);
    }
  }

  // 首頁按鈕
  document.getElementById('btn-company').onclick = () => showPage('companyRegister');
  document.getElementById('btn-student').onclick = () => showPage('studentRegister');
  document.getElementById('company-next').onclick = () => showPage('companyChat');

  // 動態卡片資料
  const talentCardsData = [
    {
      name: '軒軒',
      school: '輔仁大學中文系大三',
      tags: ['#文字轉化力強', '#細心'],
      exp: ['提案競賽季軍'],
      img: 'people/fju.jpg'
    },
    {
      name: 'People P',
      school: '範例大學',
      tags: ['#多才多藝'],
      exp: ['社團幹部'],
      img: 'people/fju.jpg'  // 指向您要加入的照片
    }
  ];
  let currentCard = 0;

  function renderTalentCard(idx) {
    const data = talentCardsData[idx];
    const area = document.querySelector('.talent-cards-area');
    area.innerHTML = `
      <div class="talent-card">
        <img src="${data.img}" class="talent-img" alt="${data.name}">
        <div class="talent-info">
          <div class="talent-school">${data.school} ${data.name}</div>
          <div class="talent-tags">${data.tags.map(t => `<div>${t}</div>`).join('')}</div>
          <div class="talent-exp-title">實際經驗</div>
          <ul class="talent-exp">${data.exp.map(e => `<li>${e}</li>`).join('')}</ul>
        </div>
      </div>
    `;
  }

  document.getElementById('card-prev').onclick = () => {
    if (currentCard > 0) {
      currentCard--;
      renderTalentCard(currentCard);
    }
  };
  document.getElementById('card-next').onclick = () => {
    if (currentCard < talentCardsData.length - 1) {
      currentCard++;
      renderTalentCard(currentCard);
    }
  };

  // 首次渲染
  renderTalentCard(0);
});
