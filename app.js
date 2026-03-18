const GAMES=[
{id:'pros-cons',e:'🐺'},{id:'mind-map',e:'🐙'},{id:'matching',e:'🐿️'},{id:'file-naming',e:'🐟'},
{id:'prompt-order',e:'🐜'},{id:'calculator',e:'🐬'},{id:'mece',e:'🦊'},{id:'noticeboard',e:'🐝'}];
const SFX={_c:null,c(){if(!this._c)this._c=new(window.AudioContext||window.webkitAudioContext)();return this._c},
_b(f,t,d,v){try{const c=this.c(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);
o.type=t;o.frequency.value=f;g.gain.setValueAtTime(v||.08,c.currentTime);
g.gain.exponentialRampToValueAtTime(.001,c.currentTime+d);o.start(c.currentTime);o.stop(c.currentTime+d)}catch(e){}},
click(){this._b(440,'square',.08,.07)},select(){this._b(660,'sine',.06,.06)},place(){this._b(880,'sine',.08,.07)},
_chord(freqs,type,gap,dur,vol){try{const c=this.c(),t=c.currentTime;freqs.forEach((f,i)=>{const o=c.createOscillator(),g=c.createGain();
o.connect(g);g.connect(c.destination);o.type=type;o.frequency.value=f;g.gain.setValueAtTime(vol,t+i*gap);
g.gain.exponentialRampToValueAtTime(.001,t+i*gap+dur);o.start(t+i*gap);o.stop(t+i*gap+dur)})}catch(e){}},
navigate(){this._chord([330,440,550],'square',.06,.08,.07)},correct(){this._chord([523,659,784],'sine',.1,.15,.1)},
wrong(){try{const c=this.c(),t=c.currentTime,o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);
o.type='sawtooth';o.frequency.setValueAtTime(220,t);o.frequency.exponentialRampToValueAtTime(80,t+.3);
g.gain.setValueAtTime(.09,t);g.gain.exponentialRampToValueAtTime(.001,t+.3);o.start(t);o.stop(t+.3)}catch(e){}}};
const PV={
escHtml(s){return(s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;')},
shuffle(a){const r=[...a];for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]]}return r},
showToast(m,d){d=d||2500;let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t)}t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),d)},
async loadData(k,p){const s=localStorage.getItem(k);if(s)try{return JSON.parse(s)}catch(e){}
try{const r=await fetch(p||'data.json');if(r.ok){const d=await r.json();return d[k]||null}}catch(e){}return null},
checkMsg(pct){return[[100,'🏆 Hoàn hảo!'],[70,'🎉 Rất tốt!'],[40,'👍 Khá ổn!'],[0,'💪 Chưa đạt!']].find(([m])=>pct>=m)[1]},
showResult(correct,total,msg){const b=document.getElementById('resultBanner');if(!b)return;
document.getElementById('resultScore').textContent=`${correct} / ${total} ĐÚNG (${Math.round(correct/total*100)}%)`;
document.getElementById('resultMsg').textContent=msg;b.style.display='block'}};
document.addEventListener('DOMContentLoaded',()=>{
const cur=location.pathname.split('/').pop()||'index.html';const isHome=cur==='index.html';
const gid=cur.replace('app.','').replace('.html','');
const nav=document.createElement('nav');nav.className='navbar';
nav.innerHTML=`<a href="index.html" class="navbar__logo">◈ PIXELVERSE</a><ul class="navbar__links">
<li><a href="index.html" ${isHome?'class="active"':''} title="Home">◈</a></li>
<li><button class="navbar__grid-btn" id="gamesBtn" title="Games"><span class="navbar__grid-btn__dots">${'<span class="navbar__grid-dot"></span>'.repeat(9)}</span></button></li>
<li><a class="navbar__admin-btn" href="app.admin.html">⚙</a></li></ul>`;
document.body.prepend(nav);
const popup=document.createElement('div');popup.className='navbar__games-popup';popup.id='gamesPopup';
popup.innerHTML='<div class="navbar__games-list">'+GAMES.map(g=>
g.id===gid?`<div class="navbar__game-item navbar__game-item--active">${g.e}</div>`:
`<a href="app.${g.id}.html" class="navbar__game-item" data-game="${g.id}">${g.e}</a>`).join('')+'</div>';
nav.after(popup);
const btn=document.getElementById('gamesBtn');
btn.addEventListener('click',e=>{e.stopPropagation();SFX.click();popup.classList.toggle('open');
if(popup.classList.contains('open')){const r=btn.getBoundingClientRect();popup.style.left=(r.left+r.width/2)+'px';popup.style.top=(r.bottom+6)+'px'}});
document.addEventListener('click',e=>{if(!e.target.closest('.navbar__games-popup'))popup.classList.remove('open')});
let en={};try{const s=localStorage.getItem('enabledGames');if(s)en=JSON.parse(s)}catch(e){}
if(Object.keys(en).length>0){document.querySelectorAll('[data-game]').forEach(el=>{if(el.dataset.game in en&&!en[el.dataset.game])el.style.display='none'})}
else{fetch('data.json').then(r=>r.json()).then(d=>{if(d.enabledGames){en=d.enabledGames;localStorage.setItem('enabledGames',JSON.stringify(en));
document.querySelectorAll('[data-game]').forEach(el=>{if(el.dataset.game in en&&!en[el.dataset.game])el.style.display='none'})}}).catch(()=>{})}});
