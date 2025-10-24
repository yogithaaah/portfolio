/* script.js
   - Typing effect for hero tagline
   - Subtle matrix canvas background
   - IntersectionObserver reveal for sections
   - Navbar smooth scroll & active highlight
   - Mobile nav toggle
   - Handlers for icon links (mailto opens email)
   - No external dependencies
*/

(() => {
  /* ---------------------------
     Typing effect
     --------------------------- */
  const typeTarget = document.getElementById('type-target');
  const phrases = [
    'Computer Science Undergrad',
    'Security Researcher',
    'Cybersecurity fanatic',
    'Programmer'
  ];
  let typeIndex = 0, charIndex = 0, deleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 45;
  const pauseBetween = 1200;

  function tick() {
    if (!typeTarget) return;
    const current = phrases[typeIndex % phrases.length];
    if (!deleting) {
      charIndex++;
      typeTarget.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, pauseBetween);
        return;
      }
      setTimeout(tick, typeSpeed);
    } else {
      charIndex--;
      typeTarget.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        typeIndex++;
        setTimeout(tick, 220);
        return;
      }
      setTimeout(tick, deleteSpeed);
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(tick, 600);
  });

  /* ---------------------------
     Matrix Canvas (subtle)
     --------------------------- */
  function initMatrix() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height, cols, yPos;

    function setSize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      cols = Math.floor(width / 16) || 1;
      yPos = new Array(cols).fill(0);
    }
    setSize();
    window.addEventListener('resize', setSize);

    // Only run on larger screens for performance
    if (window.innerWidth <= 520) return;

    function loop() {
      ctx.fillStyle = 'rgba(0,0,0,0.08)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(57,255,20,0.06)';
      ctx.font = '12px "Fira Code", monospace';

      for (let i = 0; i < cols; i++) {
        const text = String.fromCharCode(33 + Math.random() * 85);
        const x = i * 16;
        ctx.fillText(text, x, yPos[i] * 14);
        if (yPos[i] * 14 > height && Math.random() > 0.975) {
          yPos[i] = 0;
        }
        yPos[i]++;
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
  initMatrix();

  /* ---------------------------
     Scroll reveal via IntersectionObserver
     --------------------------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(r => obs.observe(r));
  } else {
    // Fallback: show all
    reveals.forEach(r => r.classList.add('in-view'));
  }

  /* ---------------------------
     Navbar active state + smooth scroll
     --------------------------- */
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = Array.from(document.querySelectorAll('main section'));

  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          if (link) link.classList.add('active');
        }
      });
    }, { threshold: 0.45 });

    sections.forEach(s => navObserver.observe(s));
  }

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = a.getAttribute('href').slice(1);
      const el = document.getElementById(targetId);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Close mobile nav if open
      const navLinksContainer = document.getElementById('nav-links');
      if (navLinksContainer.classList.contains('show')) {
        navLinksContainer.classList.remove('show');
        document.getElementById('nav-toggle').setAttribute('aria-expanded', 'false');
      }
    });
  });
  /* ---------------------------
     Mobile nav toggle
     --------------------------- */
  const navToggle = document.getElementById('nav-toggle');
  const navLinksContainer = document.getElementById('nav-links');
  if (navToggle && navLinksContainer) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinksContainer.classList.toggle('show');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ---------------------------
     Footer year
     --------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------
     Icon link handlers (ensure mailto behaviour works)
     --------------------------- */
  // No special JS required for standard <a href="mailto:..."> or target="_blank"
  // But we ensure all external links open safely (they already set rel & target in HTML).

  /* ---------------------------
     Small accessibility helper: keyboard support for icon 'buttons'
     --------------------------- */
  document.querySelectorAll('.icon-link').forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  });

})();
