// ================================================================
//  PIXELVERSE — Shared Sound Effects
//  Included on every page. All SFX methods in one place.
// ================================================================
const SFX = {
  _ctx: null,
  ctx() {
    if (!this._ctx) this._ctx = new (window.AudioContext || window.webkitAudioContext)();
    return this._ctx;
  },
  _beep(freq, type, dur, vol) {
    try {
      const c = this.ctx(), o = c.createOscillator(), g = c.createGain();
      o.connect(g); g.connect(c.destination);
      o.type = type; o.frequency.value = freq;
      g.gain.setValueAtTime(vol || 0.08, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
      o.start(c.currentTime); o.stop(c.currentTime + dur);
    } catch (e) {}
  },
  click()  { this._beep(440, 'square', 0.08, 0.07); },
  select() { this._beep(660, 'sine',   0.06, 0.06); },
  place()  { this._beep(880, 'sine',   0.08, 0.07); },
  navigate() {
    try {
      const c = this.ctx(), t = c.currentTime;
      [330, 440, 550].forEach((f, i) => {
        const o = c.createOscillator(), g = c.createGain();
        o.connect(g); g.connect(c.destination);
        o.type = 'square'; o.frequency.value = f;
        g.gain.setValueAtTime(0.07, t + i * 0.06);
        g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.06 + 0.08);
        o.start(t + i * 0.06); o.stop(t + i * 0.06 + 0.08);
      });
    } catch (e) {}
  },
  correct() {
    try {
      const c = this.ctx(), t = c.currentTime;
      [523, 659, 784].forEach((f, i) => {
        const o = c.createOscillator(), g = c.createGain();
        o.connect(g); g.connect(c.destination);
        o.type = 'sine'; o.frequency.value = f;
        g.gain.setValueAtTime(0.1, t + i * 0.1);
        g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.1 + 0.15);
        o.start(t + i * 0.1); o.stop(t + i * 0.1 + 0.15);
      });
    } catch (e) {}
  },
  wrong() {
    try {
      const c = this.ctx(), t = c.currentTime, o = c.createOscillator(), g = c.createGain();
      o.connect(g); g.connect(c.destination);
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(220, t);
      o.frequency.exponentialRampToValueAtTime(80, t + 0.3);
      g.gain.setValueAtTime(0.09, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      o.start(t); o.stop(t + 0.3);
    } catch (e) {}
  },
};
