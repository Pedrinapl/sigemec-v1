/* SIGEMEC — comportamentos compartilhados. Cada bloco só roda se a página tiver o elemento. */

/* ============ DADOS DO SITE (edite aqui) ============ */

/* Envio dos formulários. Cole a URL do Formspree (https://formspree.io/f/xxxx). Enquanto for "[PENDENTE]", o envio abre o e-mail. */
const FORM_ENDPOINT = "[PENDENTE]";
const FORM_EMAIL = "comercial@sigemec.com.br";

/* Números do grupo: alimentam o hero, o eyebrow e os contadores (data-ind / data-count). */
const INDICADORES = {
  recursos:  { valor: 2.5,   dec: 1, texto: "R$ 2,5 bi" }, // [PENDENTE – confirmar com cliente]
  estados:   { valor: 18 },                                // [PENDENTE – confirmar com cliente]
  municipios:{ valor: 500 },                               // [PENDENTE – confirmar com cliente] (protótipo antigo dizia 800+)
  tecnicos:  { valor: 15000 },                             // [PENDENTE – confirmar com cliente]
  cursos:    { valor: 150 },                               // [PENDENTE – confirmar com cliente]
  satisfacao:{ valor: 98 }                                 // [PENDENTE – confirmar com cliente]
};

/* Turmas dos encontros técnicos (fonte: edercarlosdalberto.com.br/eventos, 2026-10-26).
   status: "confirmada" → origem "Inscrição curso" · "em formação" → origem "Interesse curso" */
const TURMAS = [
  { evento: "gem", cidade: "Belém", uf: "PA", datas: "29/10/2026", status: "em formação" },          // [PENDENTE – confirmar status]
  { evento: "gem", cidade: "Salinópolis", uf: "PA", datas: "06/11/2026", status: "em formação" },    // [PENDENTE – confirmar status]
  { evento: "jep", cidade: "Salinópolis", uf: "PA", datas: "04, 05 e 06/11/2026", status: "em formação" } // [PENDENTE – confirmar status]
];
/* Eventos. preco = valor por participante para município SEM contrato (aparece só na inscrição). */
const EVENTOS = {
  gem: { nome: "Gestão Educacional Municipal 2026", preco: 500 },
  jep: { nome: "VIII Jornada de Excelência Pedagógica 2026", preco: 1000 }
};
/* Município COM contrato vigente: não paga e inscreve até este limite de participantes. */
const LIMITE_CONTRATO = 3;
/* Evento da landing page (evento.html). Ao trocar, edite também o texto em src/evento.html. */
const EVENTO_ATUAL = "gem";

/* Atas de registro de preço vigentes, para adesão. */
const ATAS = [
  { numero: "[PENDENTE]", orgao: "[PENDENTE]", objeto: "[PENDENTE]", validade: "[PENDENTE]", pdf: "" }
];

/* ==================================================== */
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const desktop = () => matchMedia('(min-width: 900px)').matches;
  const hasGsap = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const fmt = (v, dec) => dec ? v.toFixed(dec).replace('.', ',') : Math.round(v).toLocaleString('pt-BR');
  const onScroll = fn => { addEventListener('scroll', fn, { passive: true }); fn(); };

  /* rolagem suave */
  let lenis = null, velocity = 0;
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);
  if (!reduce && typeof Lenis !== 'undefined') {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenis.on('scroll', e => { velocity = e.velocity || 0; if (hasGsap) ScrollTrigger.update(); });
    if (hasGsap) { gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0); }
    else { const raf = t => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
  }
  const goTo = (el, offset = -90) => {
    if (lenis) lenis.scrollTo(el, { offset, duration: 1.2 });
    else window.scrollTo({ top: el.getBoundingClientRect().top + scrollY + offset, behavior: reduce ? 'auto' : 'smooth' });
  };
  window.SIG = { goTo };

  /* âncoras da mesma página */
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (id.length < 2 || a.dataset.route !== undefined) return;
    const el = document.getElementById(id.slice(1));
    if (!el) return;
    e.preventDefault();
    document.body.classList.remove('menu-open');
    goTo(el, id === '#topo' ? 0 : -90);
  });
  /* chegou de outra página com #secao */
  addEventListener('load', () => {
    const id = location.hash.slice(1);
    const el = id && document.getElementById(id);
    if (el && !el.dataset.noJump) setTimeout(() => goTo(el), 150);
  });

  /* menu mobile e nav que some ao descer */
  const menuBtn = $('#menuBtn');
  if (menuBtn) menuBtn.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  const nav = $('#nav');
  let lastY = 0;
  onScroll(() => {
    const y = scrollY;
    if (nav) nav.classList.toggle('hide', y > lastY && y > 300 && !document.body.classList.contains('menu-open'));
    lastY = y;
  });

  /* faixas de logos com velocidade da rolagem */
  const rows = $$('.mq-row').map(row => {
    const track = row.querySelector('.mq-track');
    row.appendChild(track.cloneNode(true)); row.appendChild(track.cloneNode(true));
    return { row, track, x: 0, base: parseFloat(row.dataset.speed) };
  });
  if (rows.length) {
    let skew = 0;
    const tick = () => {
      const v = Math.max(-40, Math.min(40, velocity));
      skew += ((-v * 0.25) - skew) * 0.12;
      rows.forEach(r => {
        const w = r.track.offsetWidth;
        const dir = Math.sign(r.base) * (v < -2 ? -1 : 1);
        if (!reduce) r.x -= (Math.abs(r.base) * 0.9 + Math.abs(v) * 0.35) * dir;
        if (r.x <= -w) r.x += w; if (r.x > 0) r.x -= w;
        r.row.style.transform = `translateX(${r.x}px) skewX(${skew}deg)`;
      });
      velocity *= 0.9;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* frase que acende palavra por palavra */
  const say = $('#say');
  if (say) {
    const hl = (say.dataset.hl || '').split('|');
    say.innerHTML = say.textContent.trim().split(/\s+/).map(w => `<span class="w${hl.includes(w) ? ' hl' : ''}">${w}</span>`).join(' ');
    const words = $$('.w', say);
    onScroll(() => {
      const r = say.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35)));
      const n = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle('on', i < n));
    });
  }

  /* trilho horizontal do método */
  const method = $('#metodo'), track = $('#track'), mBar = $('#methodBar');
  const sizeMethod = () => {
    if (!method) return;
    if (!desktop()) { method.style.height = ''; track.style.transform = ''; return; }
    const dist = Math.max(0, track.scrollWidth - innerWidth);
    method.style.height = (innerHeight + dist) + 'px';
    method.dataset.dist = dist;
  };
  const methodScroll = () => {
    if (!method || !desktop()) return;
    const dist = +method.dataset.dist || 0;
    const p = Math.min(1, Math.max(0, -method.getBoundingClientRect().top / Math.max(1, dist)));
    track.style.transform = `translate3d(${-p * dist}px,0,0)`;
    if (mBar) mBar.style.transform = `scaleX(${p})`;
  };
  if (method) addEventListener('scroll', methodScroll, { passive: true });

  /* fotos andando de lado */
  const photos = $('#photos');
  const photoScroll = () => {
    if (!photos || reduce) return;
    const r = photos.getBoundingClientRect();
    const dist = Math.max(0, photos.scrollWidth - innerWidth + 32);
    const p = Math.min(1, Math.max(0, (innerHeight - r.top) / (innerHeight + r.height)));
    photos.style.transform = `translate3d(${-p * dist}px,0,0)`;
  };
  if (photos) addEventListener('scroll', photoScroll, { passive: true });

  /* sub-navegação da página de módulos */
  const subLinks = $$('.subnav a');
  if (subLinks.length) {
    const mods = subLinks.map(a => document.getElementById(a.getAttribute('href').slice(1)));
    onScroll(() => {
      let idx = 0;
      mods.forEach((m, i) => { if (m.getBoundingClientRect().top < innerHeight * 0.45) idx = i; });
      subLinks.forEach((a, i) => a.classList.toggle('on', i === idx));
      document.documentElement.style.setProperty('--arm', getComputedStyle(mods[idx]).getPropertyValue('--c'));
    });
  }

  /* barra de leitura */
  const readBar = $('#readBar');
  if (readBar) onScroll(() => {
    const art = $('#post');
    if (!art || art.hidden) { readBar.style.transform = 'scaleX(0)'; return; }
    const r = art.getBoundingClientRect();
    readBar.style.transform = `scaleX(${Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)))})`;
  });

  /* GSAP: anéis, títulos, letreiro do rodapé */
  if (hasGsap && !reduce) {
    $$('.rg').forEach(g => {
      const k = parseFloat(g.dataset.rot);
      gsap.set(g, { svgOrigin: '300 300' });
      gsap.to(g, { rotation: '+=' + 360 * Math.sign(k), duration: 60 / Math.abs(k), repeat: -1, ease: 'none' });
    });
    if ($('.rings')) gsap.to('.rings svg', { rotation: 90, ease: 'none', scrollTrigger: { trigger: '.rings', start: 'top top', end: 'bottom top', scrub: 0.6 } });
    gsap.from('h1 .ln > span', { yPercent: 105, duration: 1.1, ease: 'expo.out', stagger: 0.08, delay: 0.1 });
    if ($('.giant')) gsap.from('.giant span', { yPercent: 45, ease: 'none', stagger: 0.04, scrollTrigger: { trigger: 'footer', start: 'top bottom', end: 'bottom bottom', scrub: 0.8 } });
    $$('.photos img').forEach(img => gsap.fromTo(img, { xPercent: -6 }, { xPercent: 6, ease: 'none', scrollTrigger: { trigger: '#photos', start: 'top bottom', end: 'bottom top', scrub: true } }));
  }

  /* contadores (o número final já está no HTML) */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    if (reduce) return;
    const el = e.target, to = parseFloat(el.dataset.count), dec = +el.dataset.dec || 0, t0 = performance.now();
    const step = t => { const k = Math.min(1, (t - t0) / 1600); el.textContent = fmt(to * (1 - Math.pow(1 - k, 4)), dec); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }), { threshold: 0.6 });
  $$('[data-count]').forEach(el => io.observe(el));

  /* depoimentos */
  const qs = $$('#qStage .q');
  if (qs.length) {
    const dotsBox = $('#qDots'), qCount = $('#qCount');
    dotsBox.innerHTML = qs.map(() => '<i></i>').join('');
    const dots = $$('i', dotsBox);
    let qi = 0, timer;
    const show = i => {
      qi = (i + qs.length) % qs.length;
      qs.forEach((q, k) => q.classList.toggle('is-active', k === qi));
      dots.forEach((d, k) => { d.classList.remove('on'); if (k === qi) { void d.offsetWidth; d.classList.add('on'); } });
      qCount.textContent = String(qi + 1).padStart(2, '0') + ' / ' + String(qs.length).padStart(2, '0');
      clearTimeout(timer); timer = setTimeout(() => show(qi + 1), 7000);
    };
    $('#qPrev').onclick = () => show(qi - 1);
    $('#qNext').onclick = () => show(qi + 1);
    show(0);
  }

  /* indicadores */
  $$('[data-ind]').forEach(el => {
    const ind = INDICADORES[el.dataset.ind]; if (!ind) return;
    if (el.hasAttribute('data-count')) { el.dataset.count = ind.valor; if (ind.dec) el.dataset.dec = ind.dec; el.textContent = fmt(ind.valor, ind.dec); }
    else el.textContent = el.dataset.fmt === 'texto' && ind.texto ? ind.texto : fmt(ind.valor, ind.dec);
  });

  /* turmas dos encontros */
  const turmaLabel = t => `${EVENTOS[t.evento].nome} · ${t.cidade}/${t.uf} · ${t.datas}`;
  const origemDe = t => t.status === 'confirmada' ? 'Inscrição curso' : 'Interesse curso';
  $$('[data-turmas]').forEach(box => {
    box.innerHTML = TURMAS.filter(t => t.evento === box.dataset.turmas).map(t =>
      `<button class="turma" data-pick="${turmaLabel(t)}">${t.cidade}/${t.uf}<small>${t.datas}</small><em class="${t.status === 'confirmada' ? 'conf' : ''}">${t.status === 'confirmada' ? 'Turma confirmada' : 'Em formação'}</em></button>`).join('');
  });
  const turmaSel = $('#f-turma');
  const soEvento = turmaSel && turmaSel.form.dataset.evento;
  if (turmaSel) turmaSel.innerHTML = '<option value="">Escolha o encontro e a cidade</option>' +
    TURMAS.filter(t => !soEvento || t.evento === soEvento).map(t => `<option value="${turmaLabel(t)}" data-origem="${origemDe(t)}" data-evento="${t.evento}">${turmaLabel(t)}</option>`).join('');
  const syncOrigem = () => {
    const f = turmaSel && turmaSel.form; if (!f || !f.origem) return;
    const o = turmaSel.selectedOptions[0]; f.origem.value = (o && o.dataset.origem) || 'Interesse curso';
  };
  if (turmaSel) turmaSel.addEventListener('change', syncOrigem);
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-pick]'); if (!b || !turmaSel) return;
    turmaSel.value = b.dataset.pick; syncOrigem(); syncInsc();
    goTo($('#inscricao'));
  });

  /* inscrição: com contrato não mostra valor e limita participantes; sem contrato mostra o valor e não limita */
  const insc = $('#formInsc');
  const brl = v => 'R$ ' + v.toLocaleString('pt-BR');
  function syncInsc() {
    if (!insc) return;
    const qtd = $('#t-qtd'), resumo = $('#resumo'), pag = $('#pagadorBox');
    const tem = insc.contrato.value === 'Sim';
    let n = Math.max(1, parseInt(qtd.value, 10) || 1);
    if (tem) n = Math.min(n, LIMITE_CONTRATO);
    qtd.value = n;
    if (tem) qtd.max = LIMITE_CONTRATO; else qtd.removeAttribute('max');
    $('#qtdMais').disabled = tem && n >= LIMITE_CONTRATO;
    $('#qtdMenos').disabled = n <= 1;
    $('#qtdHint').textContent = tem ? `Até ${LIMITE_CONTRATO} participantes por município com contrato.` : 'Sem limite de participantes.';
    pag.hidden = tem;
    pag.querySelectorAll('input').forEach(i => i.disabled = tem);
    const o = turmaSel.selectedOptions[0], ev = o && EVENTOS[o.dataset.evento];
    resumo.classList.toggle('free', tem);
    if (tem) { resumo.innerHTML = `<b>Sem custo</b><span>Município com contrato vigente e em dia · até ${LIMITE_CONTRATO} participantes.</span>`; insc.valor.value = 'Isento (contrato)'; }
    else if (ev) { resumo.innerHTML = `<b>${brl(ev.preco * n)}</b><span>${n} × ${brl(ev.preco)} por participante · ${ev.nome}</span>`; insc.valor.value = brl(ev.preco * n); }
    else { resumo.innerHTML = '<span>Escolha a turma para ver o valor.</span>'; insc.valor.value = ''; }
  }
  if (insc) {
    const qtd = $('#t-qtd');
    $('#qtdMais').addEventListener('click', () => { qtd.value = (parseInt(qtd.value, 10) || 1) + 1; syncInsc(); });
    $('#qtdMenos').addEventListener('click', () => { qtd.value = (parseInt(qtd.value, 10) || 1) - 1; syncInsc(); });
    insc.addEventListener('change', syncInsc);
    qtd.addEventListener('blur', syncInsc);
    syncInsc();
  }

  /* fotos interativas da abertura */
  const deck = $('#deck');
  if (deck) {
    const phs = $$('.deck-ph', deck), ths = $$('#deckThumbs button'), stage = $('#deckStage');
    let di = 0, dt;
    const showPh = (i, user) => {
      di = (i + phs.length) % phs.length;
      phs.forEach((f, k) => f.classList.toggle('is-on', k === di));
      ths.forEach((t, k) => t.setAttribute('aria-pressed', k === di));
      deck.classList.toggle('framed', di !== 0);
      clearTimeout(dt);
      if (!reduce) dt = setTimeout(() => showPh(di + 1), user ? 9000 : 5000);
    };
    ths.forEach((t, k) => { t.addEventListener('click', () => showPh(k, true)); t.addEventListener('mouseenter', () => showPh(k, true)); });
    stage.addEventListener('click', () => showPh(di + 1, true));
    if (matchMedia('(pointer: fine)').matches && !reduce) {
      stage.addEventListener('mousemove', e => {
        const r = stage.getBoundingClientRect();
        stage.style.setProperty('--rx', (((e.clientX - r.left) / r.width - .5) * 10).toFixed(2));
        stage.style.setProperty('--ry', ((.5 - (e.clientY - r.top) / r.height) * 8).toFixed(2));
      });
      stage.addEventListener('mouseleave', () => { stage.style.setProperty('--rx', 0); stage.style.setProperty('--ry', 0); });
    }
    showPh(0);
  }

  /* atas de registro de preço */
  const atasBox = $('#atasBody');
  if (atasBox) atasBox.innerHTML = ATAS.map(a => {
    const c = v => v === '[PENDENTE]' ? '<span class="pending">[PENDENTE]</span>' : v;
    return `<tr><td>${c(a.numero)}</td><td>${c(a.orgao)}</td><td>${c(a.objeto)}</td><td>${c(a.validade)}</td><td>${a.pdf ? `<a href="${a.pdf}" target="_blank" rel="noopener">PDF</a>` : '<span class="pending">[PENDENTE]</span>'}</td></tr>`;
  }).join('');

  /* formulários: Formspree; sem endpoint, abre o e-mail já preenchido */
  $$('form.lead').forEach(form => {
    const ok = form.querySelector('.ok');
    const btn = form.querySelector('button[type=submit]');
    form.addEventListener('submit', async e => {
      e.preventDefault();
      form.querySelectorAll('input,select').forEach(i => i.style.borderColor = '');
      const miss = [...form.querySelectorAll('[required]')].filter(i => i.type === 'checkbox' ? !i.checked : (!i.value.trim() || (i.type === 'email' && !/^\S+@\S+\.\S+$/.test(i.value))));
      ok.hidden = false;
      if (miss.length) {
        miss.forEach(i => i.style.borderColor = '#EA6036');
        ok.classList.add('err');
        ok.textContent = form.dataset.err || 'Preencha os campos destacados para continuar.';
        miss[0].focus();
        return;
      }
      const data = Object.fromEntries(new FormData(form));
      data.privacidade = 'Aceita';
      const assunto = form.dataset.subject || 'Contato pelo site SIGEMEC';
      ok.classList.remove('err');
      if (FORM_ENDPOINT === '[PENDENTE]') {
        const corpo = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('\n');
        location.href = `mailto:${FORM_EMAIL}?subject=${encodeURIComponent(assunto + ' – ' + (data.municipio || ''))}&body=${encodeURIComponent(corpo)}`;
        ok.textContent = `Abrimos o seu e-mail com o pedido preenchido. Se ele não abrir, envie os dados para ${FORM_EMAIL}.`;
        return;
      }
      btn.disabled = true;
      try {
        const r = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, _subject: assunto }) });
        if (!r.ok) throw new Error(r.status);
        ok.textContent = form.dataset.ok || 'Pedido recebido! Nossa equipe entra em contato em até um dia útil.';
        form.reset(); syncOrigem(); syncInsc();
      } catch (err) {
        ok.classList.add('err');
        ok.textContent = `Não conseguimos enviar agora. Tente de novo ou escreva para ${FORM_EMAIL}.`;
      } finally { btn.disabled = false; }
    });
  });

  /* políticas (modal) */
  const legal = $('#legal');
  if (legal) {
    const tabs = $$('.legal-tabs button', legal), panels = $$('[data-panel]', legal);
    const tab = t => { tabs.forEach(b => b.setAttribute('aria-selected', b.dataset.tab === t)); panels.forEach(p => p.hidden = p.dataset.panel !== t); $('.legal-body', legal).scrollTop = 0; };
    let lastFocus = null;
    const open = t => { lastFocus = document.activeElement; tab(t || 'privacidade'); legal.hidden = false; document.body.style.overflow = 'hidden'; if (lenis) lenis.stop(); $('#legalClose').focus(); };
    const close = () => { legal.hidden = true; document.body.style.overflow = ''; if (lenis) lenis.start(); if (lastFocus) lastFocus.focus(); };
    document.addEventListener('click', e => { const a = e.target.closest('[data-legal]'); if (!a) return; e.preventDefault(); open(a.dataset.legal); });
    tabs.forEach(b => b.addEventListener('click', () => tab(b.dataset.tab)));
    $('#legalClose').addEventListener('click', close);
    legal.addEventListener('click', e => { if (e.target === legal) close(); });
    addEventListener('keydown', e => { if (e.key === 'Escape' && !legal.hidden) close(); });
    if (['privacidade', 'cookies', 'termos'].includes(location.hash.slice(1))) open(location.hash.slice(1));
  }

  /* barra de cookies (escolha guardada por 30 dias) */
  const bar = $('#cookiebar');
  if (bar) {
    const KEY = 'sigemec-cookies', DAYS30 = 30 * 864e5;
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
    const fresh = saved && Date.now() - saved.t < DAYS30;
    const place = () => document.documentElement.style.setProperty('--cookie-h', bar.offsetHeight + 'px');
    if (!fresh) { bar.hidden = false; document.body.classList.add('has-cookie'); place(); addEventListener('resize', place); }
    $('#cookieOk').addEventListener('click', () => {
      try { localStorage.setItem(KEY, JSON.stringify({ ok: true, t: Date.now() })); } catch (e) {}
      bar.hidden = true; document.body.classList.remove('has-cookie');
    });
  }

  /* menu "Acessar sistema" */
  const accBtn = $('#accBtn'), accMenu = $('#accMenu');
  if (accBtn) {
    const set = o => { accMenu.hidden = !o; accBtn.setAttribute('aria-expanded', o); };
    accBtn.addEventListener('click', e => { e.stopPropagation(); set(accMenu.hidden); });
    document.addEventListener('click', e => { if (!e.target.closest('.acc')) set(false); });
    addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
  }

  /* vídeo: miniatura primeiro, iframe só no clique */
  $$('.video[data-yt]').forEach(v => {
    const id = v.dataset.yt;
    v.style.backgroundImage = `url(https://img.youtube.com/vi/${id}/maxresdefault.jpg)`;
    v.addEventListener('click', () => {
      v.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="Vídeo institucional SIGEMEC" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    }, { once: true });
  });

  /* cursor */
  const cur = $('.cursor');
  if (cur && matchMedia('(pointer: fine)').matches && !reduce) {
    let mx = -100, my = -100, cx = -100, cy = -100;
    addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    const loop = () => { cx += (mx - cx) * 0.2; cy += (my - cy) * 0.2; cur.style.transform = `translate(${cx}px,${cy}px)`; requestAnimationFrame(loop); };
    loop();
    document.addEventListener('mouseover', e => cur.classList.toggle('big', !!e.target.closest('a,button,label,summary')));
  } else if (cur) cur.remove();

  const onResize = () => { sizeMethod(); methodScroll(); photoScroll(); if (hasGsap) ScrollTrigger.refresh(); };
  addEventListener('resize', onResize);
  addEventListener('load', onResize);
  onResize();
})();
