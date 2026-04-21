/* === Pokemon Stories — главная страница, анимации на GSAP === */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') {
    console.warn('[anims] GSAP не загружен');
    return;
  }
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Уважаем системный флаг prefers-reduced-motion
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    // Если пользователь просит без анимаций — просто показываем всё
    gsap.set(['.logo-title', '.logo-subtitle', '.hero-tagline', '.hero-card', '.episode-card'], {
      opacity: 1, clearProps: 'all'
    });
    return;
  }

  /* ── 1. Заголовок: буквы прыгают по одной ─────────────────── */
  const title = document.querySelector('.logo-title');
  if (title) {
    const text = title.textContent;
    title.textContent = '';
    title.setAttribute('aria-label', text);

    const letters = Array.from(text).map((ch) => {
      const span = document.createElement('span');
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      span.style.display = 'inline-block';
      span.style.willChange = 'transform, opacity';
      title.appendChild(span);
      return span;
    });

    // Родитель делаем видимым — opacity-анимацию ведём по буквам
    gsap.set(title, { opacity: 1 });

    gsap.fromTo(letters,
      { y: -40, opacity: 0, rotation: -12, scale: 0.6 },
      {
        y: 0, opacity: 1, rotation: 0, scale: 1,
        duration: 0.7,
        stagger: 0.045,
        ease: 'back.out(2.2)',
        delay: 0.15,
        clearProps: 'will-change'
      }
    );
  }

  /* ── 2. Подзаголовок + тэглайн: fade up с задержкой ────────── */
  gsap.fromTo('.logo-subtitle',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 1.0 }
  );
  gsap.fromTo('.hero-tagline',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 1.2 }
  );

  /* ── 3. Карточки героев: снизу с overshoot + stagger ───────── */
  gsap.fromTo('.hero-card',
    { y: 80, opacity: 0, scale: 0.88 },
    {
      y: 0, opacity: 1, scale: 1,
      duration: 1.0,
      stagger: 0.15,
      ease: 'back.out(1.6)',
      force3D: true,
      scrollTrigger: {
        trigger: '.heroes-preview',
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    }
  );

  /* ── 4. Карточки эпизодов: fade + scale + мягкий stagger ───── */
  gsap.fromTo('.episode-card',
    { opacity: 0, scale: 0.82, y: 20 },
    {
      opacity: 1, scale: 1, y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out',
      force3D: true,
      scrollTrigger: {
        trigger: '.episodes-section',
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    }
  );
});
