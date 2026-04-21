/* === Pokemon Stories — анимации сайта на GSAP === */
/* Адаптивно детектирует элементы и анимирует их. */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  // Отключаем GSAP lag-smoothing — анимации не «отстают» при переключении вкладок
  gsap.ticker.lagSmoothing(0);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const animatedSelectors = [
    '.logo-title', '.logo-subtitle', '.hero-tagline',
    '.hero-card', '.episode-card', '.hero-full-card',
    '.enc-card', '.episode-header .season-label',
    '.episode-header h1', '.episode-header .print-btn',
    '.scene-title', '.episode-illustration', '.lesson-box'
  ];
  if (reduceMotion) {
    gsap.set(animatedSelectors, { opacity: 1, clearProps: 'all' });
    return;
  }

  /* ── 1. Заголовок логотипа: буквы прыгают ─────────────────── */
  const title = document.querySelector('.logo-title');
  if (title && !title.hasAttribute('data-anim')) {
    title.setAttribute('data-anim', '1');
    const text = title.textContent;
    title.textContent = '';
    title.setAttribute('aria-label', text);

    const letters = Array.from(text).map((ch) => {
      const span = document.createElement('span');
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      span.style.display = 'inline-block';
      title.appendChild(span);
      return span;
    });
    gsap.set(title, { opacity: 1 });
    gsap.fromTo(letters,
      { y: -32, opacity: 0, scale: 0.7 },
      { y: 0, opacity: 1, scale: 1,
        duration: 0.55, stagger: 0.04,
        ease: 'back.out(2)', delay: 0.1 }
    );
  }

  /* ── 2. Подзаголовок + тэглайн ──────────────────────────── */
  const hasBigTitle = title && title.offsetHeight > 50;
  const subDelay = hasBigTitle ? 0.8 : 0.15;
  if (document.querySelector('.logo-subtitle')) {
    gsap.fromTo('.logo-subtitle',
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: subDelay }
    );
  }
  if (document.querySelector('.hero-tagline')) {
    gsap.fromTo('.hero-tagline',
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: subDelay + 0.15 }
    );
  }

  /* ── 3. Episode-header (на страницах эпизодов) ───────────── */
  const epHeader = document.querySelector('.episode-header');
  if (epHeader) {
    const parts = epHeader.querySelectorAll('.season-label, h1, .print-btn');
    gsap.fromTo(parts,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', delay: 0.1 }
    );
  }

  /* ── 4. Секционные заголовки (Наши герои, Эпизоды…) ─────── */
  document.querySelectorAll('.section-title').forEach((el) => {
    gsap.fromTo(el,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 92%', once: true } }
    );
  });

  /* ── 5. Карточки на главной: hero-card + episode-card ────── */
  if (document.querySelector('.hero-card')) {
    gsap.fromTo('.hero-card',
      { y: 60, opacity: 0, scale: 0.92 },
      { y: 0, opacity: 1, scale: 1,
        duration: 0.7, stagger: 0.12, ease: 'back.out(1.6)',
        scrollTrigger: {
          trigger: document.querySelector('.heroes-preview') || document.querySelector('.hero-card'),
          start: 'top 85%', once: true } }
    );
  }
  if (document.querySelector('.episode-card')) {
    gsap.fromTo('.episode-card',
      { opacity: 0, scale: 0.85, y: 20 },
      { opacity: 1, scale: 1, y: 0,
        duration: 0.5, stagger: 0.06, ease: 'power2.out',
        scrollTrigger: {
          trigger: document.querySelector('.episodes-section') || document.querySelector('.episode-card'),
          start: 'top 88%', once: true } }
    );
  }

  /* ── 6. Hero-full-cards (страница Герои) ──────────────────── */
  if (document.querySelector('.hero-full-card')) {
    gsap.fromTo('.hero-full-card',
      { x: -32, opacity: 0 },
      { x: 0, opacity: 1,
        duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: {
          trigger: document.querySelector('.hero-full-card'),
          start: 'top 92%', once: true } }
    );
  }

  /* ── 7. Enc-card (Энциклопедия, Игры) ─────────────────────── */
  if (document.querySelector('.enc-card')) {
    gsap.fromTo('.enc-card',
      { y: 30, opacity: 0, scale: 0.94 },
      { y: 0, opacity: 1, scale: 1,
        duration: 0.5, stagger: 0.08, ease: 'back.out(1.3)',
        scrollTrigger: {
          trigger: document.querySelector('.enc-card'),
          start: 'top 92%', once: true } }
    );
  }

  /* ── 8. Эпизод: сцены, иллюстрации, урок ──────────────────── */
  document.querySelectorAll('.scene-title').forEach((el) => {
    gsap.fromTo(el,
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 92%', once: true } }
    );
  });
  document.querySelectorAll('.episode-illustration').forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true } }
    );
  });
  const lesson = document.querySelector('.lesson-box');
  if (lesson) {
    gsap.fromTo(lesson,
      { y: 24, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1,
        duration: 0.6, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: lesson, start: 'top 90%', once: true } }
    );
  }

  /* ── 9. Nav: hover-подъём ─────────────────────────────────── */
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { y: -2, duration: 0.2, ease: 'power2.out' });
    });
    link.addEventListener('mouseleave', () => {
      if (!link.classList.contains('active')) {
        gsap.to(link, { y: 0, duration: 0.2, ease: 'power2.out' });
      }
    });
  });
});
