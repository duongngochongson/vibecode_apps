// ================================================================
//  PIXELVERSE — Shared Admin Auth
//
//  Usage:
//    initAdminAuth({ onLogin: () => { /* open your page's admin UI */ } });
//
//  Requires in HTML:
//    - #adminBtn, #adminModal, #adminPw, #adminError
//    - #adminLoginBtn, #adminCancelBtn
// ================================================================

const ADMIN_PW = 'admin123';

function isAdminLoggedIn() {
  return sessionStorage.getItem('adminLoggedIn') === '1';
}

function initAdminAuth({ onLogin }) {
  const adminBtn       = document.getElementById('adminBtn');
  const adminModal     = document.getElementById('adminModal');
  const adminPw        = document.getElementById('adminPw');
  const adminError     = document.getElementById('adminError');
  const adminLoginBtn  = document.getElementById('adminLoginBtn');
  const adminCancelBtn = document.getElementById('adminCancelBtn');

  function refreshBtn() {
    if (isAdminLoggedIn()) {
      adminBtn.textContent = '⚙ SETTINGS';
      adminBtn.classList.add('logged-in');
    } else {
      adminBtn.textContent = '🔒 ADMIN';
      adminBtn.classList.remove('logged-in');
    }
  }
  refreshBtn();

  adminBtn.addEventListener('click', () => {
    if (isAdminLoggedIn()) { onLogin(); return; }
    adminModal.classList.remove('hidden');
    adminPw.value = '';
    adminError.textContent = '';
    setTimeout(() => adminPw.focus(), 50);
  });

  adminCancelBtn.addEventListener('click', () => adminModal.classList.add('hidden'));
  adminModal.addEventListener('click', e => {
    if (e.target === adminModal) adminModal.classList.add('hidden');
  });

  function doLogin() {
    if (adminPw.value === ADMIN_PW) {
      sessionStorage.setItem('adminLoggedIn', '1');
      adminModal.classList.add('hidden');
      refreshBtn();
      onLogin();
    } else {
      adminError.textContent = '✕ Sai mật khẩu!';
      adminPw.value = '';
      adminPw.focus();
    }
  }

  adminLoginBtn.addEventListener('click', doLogin);
  adminPw.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
}
