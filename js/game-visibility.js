/**
 * game-visibility.js
 * Reads enabledGames from localStorage (or falls back to admin_content.json)
 * and hides any [data-game="xxx"] elements where that game is disabled.
 *
 * Include with a data-json attribute pointing to admin_content.json:
 *   <script src="js/game-visibility.js" data-json="data/admin_content.json"></script>
 */
(function () {
  const jsonPath = document.currentScript && document.currentScript.getAttribute('data-json');

  let enabled = {};
  try {
    const saved = localStorage.getItem('enabledGames');
    if (saved) enabled = JSON.parse(saved);
  } catch (e) {}

  function applyVisibility() {
    document.querySelectorAll('[data-game]').forEach(function (el) {
      var game = el.dataset.game;
      if (game in enabled && !enabled[game]) {
        el.style.display = 'none';
      }
    });
  }

  if (Object.keys(enabled).length > 0) {
    // localStorage has data — apply right after DOM is ready (synchronous path)
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', applyVisibility);
    } else {
      applyVisibility();
    }
  } else if (jsonPath) {
    // First visit or cleared storage — fetch from JSON source of truth
    document.addEventListener('DOMContentLoaded', function () {
      fetch(jsonPath)
        .then(function (r) { return r.json(); })
        .then(function (d) {
          if (d.enabledGames) {
            enabled = d.enabledGames;
            localStorage.setItem('enabledGames', JSON.stringify(enabled));
          }
          applyVisibility();
        })
        .catch(function () { /* no-op if file not found */ });
    });
  }
})();
