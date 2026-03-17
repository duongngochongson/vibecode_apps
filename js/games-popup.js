// ================================================================
//  PIXELVERSE — Shared Games Popup
//  Auto-initializes on DOMContentLoaded. Requires #gamesBtn + #gamesPopup.
// ================================================================
(function () {
  function init() {
    const btn = document.getElementById('gamesBtn');
    const popup = document.getElementById('gamesPopup');
    if (!btn || !popup) return;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      SFX.click();
      popup.classList.toggle('open');
      if (popup.classList.contains('open')) {
        var r = btn.getBoundingClientRect();
        popup.style.left = (r.left + r.width / 2) + 'px';
        popup.style.top  = (r.bottom + 6) + 'px';
      }
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.navbar__games-popup')) popup.classList.remove('open');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
