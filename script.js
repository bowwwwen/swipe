/* Reset & 基本版面 */
body {
  margin: 0;            /* 移除預設空白 */
  padding: 0;
  overflow-x: hidden;   /* 避免整個頁面水平滾動 */
  background: #fff;
  font-family: 'Noto Sans TC', 'Microsoft JhengHei', Arial, sans-serif;
}
#app {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.page {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
}
.page.active { display: flex; }

/* 基本按鈕與箭頭 */
.main-btn {
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(90deg, #aee9f7 0%, #bfa7f7 100%);
  border: none;
  border-radius: 40px;
  padding: 18px 0;
  width: 420px;
  box-shadow: 0 4px 16px #d1e6ff;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  letter-spacing: 4px;
  text-shadow: 0 2px 8px #6e7bbd;
}
.main-btn:hover {
  background: linear-gradient(90deg, #7ed6fb 0%, #a7bff7 100%);
  box-shadow: 0 8px 24px #b3d1ff;
}
.arrow {
  position: absolute;
  right: 48px;
  bottom: 48px;
  width: 64px;
  height: 64px;
  background: url('images/arrow.svg') no-repeat center/contain;
}

/* form input */
.form-block input {
  font-size: 28px;
  border: none;
  border-radius: 32px;
  background: #f2f3f7;
  color: #5a6a9e;
  padding: 22px 32px;
  outline: none;
  margin-bottom: 0;
}

/* Chat Area */
.chat-area {
  width: 90vw;
  max-width: 700px;
  margin: 32px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.chat-bubble.ai {
  background: #25408f;
  color: #fff;
  align-self: flex-start;
}
.chat-bubble.user {
  background: #f2f3f7;
  color: #25408f;
  align-self: flex-end;
}
.chat-bubble.loading {
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: bold;
  font-size: 22px;
}
.loading-spinner {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 4px solid #dbe6fa;
  border-top: 4px solid #25408f;
  animation: spin 1s linear infinite;
  display: inline-block;
}
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

/* Talent Cards 滑動區 */
.talent-cards-title {
  background: #25408f;
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  border-radius: 20px;
  padding: 18px 32px;
  margin: 32px auto 24px auto;
  max-width: 700px;
  text-align: left;
}
.talent-cards-area {
  position: relative;
  width: 95vw;
  max-width: 900px;
  height: 420px;
  margin: 0 auto 24px auto;
  overflow: hidden;
}
.talent-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease, opacity 0.3s ease;
  touch-action: pan-x; /* 允許水平手勢 */
}
.nav-icon { width: 32px; height: 32px; }

/* Send 按鈕 */
.talent-card-input-area {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
}
.send-icon { display: inline-block; width: 36px; height: 36px; }

/* Responsive */
@media (max-width: 600px) {
  .main-btn, .form-block input { width: 90vw; font-size: 22px; padding: 14px 0; }
  .arrow { width: 40px; height: 40px; right: 16px; bottom: 16px; }
  .chat-area, .chat-input-area { width: 98vw; }
  .chat-bubble { font-size: 18px; padding: 14px; }
  .send-icon { width: 28px; height: 28px; }
}
