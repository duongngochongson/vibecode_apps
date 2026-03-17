// ================================================================
//  PIXELVERSE — Shared Utilities
// ================================================================
const PV = {
  /** Escape HTML special chars */
  escHtml(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;')
      .replace(/</g, '&lt;').replace(/>/g, '&gt;');
  },

  /** Fisher-Yates shuffle (returns new array) */
  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  /** Show a toast notification. Uses existing #toast element or creates one. */
  showToast(msg, dur) {
    dur = dur || 2500;
    let t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(function () { t.classList.remove('show'); }, dur);
  },

  /**
   * Load game data: localStorage first, then admin_content.json fallback.
   * @param {string} key — localStorage key AND json sub-key (e.g. 'prosCons', 'mindMap')
   * @param {string} jsonPath — path to admin_content.json (relative to page)
   * @returns {Promise<any>}
   */
  async loadData(key, jsonPath) {
    const saved = localStorage.getItem(key);
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    try {
      const r = await fetch(jsonPath || '../../data/admin_content.json');
      if (r.ok) { const d = await r.json(); return d[key] || null; }
    } catch (e) {}
    return null;
  }
};
