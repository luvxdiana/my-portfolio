document.addEventListener("DOMContentLoaded", () => {
  /* Icons */

  if (window.lucide) {
    lucide.createIcons();
  }

  /* Typewriter */

  const prefix = document.getElementById("typing-prefix");
  const name = document.getElementById("typing-name");
  const title = document.querySelector(".home-title");

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefix && name && title && !reducedMotion) {
    const prefixText = prefix.textContent;
    const nameText = name.textContent;
    const fullText = prefixText + nameText;

    title.style.minHeight = `${Math.ceil(title.getBoundingClientRect().height)}px`;

    prefix.textContent = "";
    name.textContent = "";

    let index = 0;

    function typeText() {
      if (index >= fullText.length) return;

      index++;

      prefix.textContent = fullText.slice(
        0,
        Math.min(index, prefixText.length),
      );

      name.textContent = fullText.slice(prefixText.length, index);

      setTimeout(typeText, 85);
    }

    setTimeout(typeText, 400);
  }

  /* Character Card */

  const card = document.querySelector(".character-card");

  if (
    card &&
    !reducedMotion &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  ) {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * 14;
      const rotateX = (0.5 - y) * 14;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }

  /* Tetris Background */

  const home = document.querySelector(".home");
  const tetrisBackground = document.querySelector(".tetris-background");

  const pieces = [
    "tetromino-i.png",
    "tetromino-o.png",
    "tetromino-t.png",
    "tetromino-s.png",
    "tetromino-z.png",
    "tetromino-j.png",
    "tetromino-l.png",
  ];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  if (home && tetrisBackground && !reducedMotion) {
    let homeVisible = true;

    const observer = new IntersectionObserver(
      (entries) => {
        homeVisible = entries[0].isIntersecting;
      },
      {
        threshold: 0.01,
      },
    );

    observer.observe(home);

    function createPiece() {
      if (!homeVisible || document.hidden) return;

      const piece = document.createElement("img");

      const file = pieces[Math.floor(Math.random() * pieces.length)];

      const size = window.innerWidth <= 768 ? 70 : 90;
      const maxLeft = Math.max(0, home.clientWidth - size);
      const left = random(0, maxLeft);

      const duration = random(13, 22);
      const rotation = Math.floor(random(0, 4)) * 90;
      const drift = random(-65, 65);

      piece.src = `assets/images/tetris/${file}`;
      piece.alt = "";
      piece.className = "tetris-piece";
      piece.draggable = false;

      piece.style.width = `${size}px`;
      piece.style.left = `${left}px`;

      piece.style.setProperty("--fall-duration", `${duration}s`);

      piece.style.setProperty(
        "--fall-distance",
        `${home.offsetHeight + 250}px`,
      );

      piece.style.setProperty("--rotation", `${rotation}deg`);

      piece.style.setProperty("--drift", `${drift}px`);

      tetrisBackground.appendChild(piece);

      piece.addEventListener("animationend", () => {
        piece.remove();
      });

      piece.addEventListener("error", () => {
        piece.remove();
      });
    }

    createPiece();
    createPiece();

    setInterval(() => {
      createPiece();
    }, 1800);
  }

  /* Active Navigation */

  const navLinks = document.querySelectorAll(".nav-link");

  function updateActiveNavigation() {
    const header = document.querySelector(".header");
    const offset = (header?.offsetHeight || 0) + 80;

    let activeSection = "home";

    navLinks.forEach((link) => {
      const id = link.getAttribute("href")?.slice(1);
      const section = id ? document.getElementById(id) : null;

      if (section && section.getBoundingClientRect().top <= offset) {
        activeSection = id;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${activeSection}`;

      link.classList.toggle("active", isActive);
    });
  }

  window.addEventListener("scroll", updateActiveNavigation, { passive: true });

  updateActiveNavigation();
});
