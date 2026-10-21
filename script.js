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

  /* Education Reveal */

  const educationItems = document.querySelectorAll(
    ".education-section .timeline-item",
  );

  if (!reducedMotion && "IntersectionObserver" in window) {
    const educationObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const item = entry.target;

          const isEducation = item.closest(".education-column");

          const direction = isEducation ? -65 : 65;

          item.animate(
            [
              {
                opacity: 0,
                transform: `translateX(${direction}px)`,
              },
              {
                opacity: 1,
                transform: "translateX(0)",
              },
            ],
            {
              duration: 1200,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "backwards",
            },
          );

          observer.unobserve(item);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    educationItems.forEach((item) => {
      educationObserver.observe(item);
    });
  }

  /* Tech Stack Reveal */

  const techStackSection = document.querySelector(".tech-stack-section");

  if (techStackSection) {
    const stackCategories =
      techStackSection.querySelectorAll(".stack-category");

    if (!reducedMotion && "IntersectionObserver" in window) {
      techStackSection.classList.add("reveal-ready");

      const stackObserver = new IntersectionObserver(
        (entries, observer) => {
          const visibleEntries = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) =>
                a.target.getBoundingClientRect().top -
                b.target.getBoundingClientRect().top,
            );

          visibleEntries.forEach((entry, index) => {
            const category = entry.target;

            category.style.transitionDelay = `${index * 120}ms`;

            category.classList.add("is-visible");

            observer.unobserve(category);
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -5% 0px",
        },
      );

      stackCategories.forEach((category) => {
        stackObserver.observe(category);
      });
    }
  }

  /* Project Modals */

  const detailButtons = document.querySelectorAll(".details-button");
  const projectModals = document.querySelectorAll(".project-modal");

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.dataset.modal;
      const modal = document.getElementById(modalId);

      if (modal && !modal.open) {
        modal.showModal();
        document.body.classList.add("modal-open");
      }
    });
  });

  projectModals.forEach((modal) => {
    const closeButton = modal.querySelector(".modal-close");

    closeButton?.addEventListener("click", () => {
      modal.close();
    });

    modal.addEventListener("click", (event) => {
      const rect = modal.getBoundingClientRect();

      const outside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

      if (outside) {
        modal.close();
      }
    });

    modal.addEventListener("close", () => {
      document.body.classList.remove("modal-open");
    });
  });

  /* Tetris Drag */

  const dragArea = document.querySelector(".tetris-drag-area");
  const draggablePieces = document.querySelectorAll(".draggable-tetromino");

  if (dragArea) {
    const clamp = (value, min, max) => {
      return Math.max(min, Math.min(value, max));
    };

    draggablePieces.forEach((piece) => {
      let isDragging = false;
      let pointerId = null;
      let grabX = 0;
      let grabY = 0;

      piece.addEventListener("dragstart", (event) => {
        event.preventDefault();
      });

      piece.addEventListener("pointerdown", (event) => {
        if (event.pointerType === "mouse" && event.button !== 0) {
          return;
        }

        const areaRect = dragArea.getBoundingClientRect();
        const pieceRect = piece.getBoundingClientRect();

        grabX = event.clientX - pieceRect.left;
        grabY = event.clientY - pieceRect.top;

        piece.style.left = `${pieceRect.left - areaRect.left}px`;
        piece.style.top = `${pieceRect.top - areaRect.top}px`;

        isDragging = true;
        pointerId = event.pointerId;

        piece.classList.add("is-dragging");
        piece.setPointerCapture(event.pointerId);

        event.preventDefault();
      });

      piece.addEventListener("pointermove", (event) => {
        if (!isDragging || event.pointerId !== pointerId) {
          return;
        }

        const areaRect = dragArea.getBoundingClientRect();

        const maxX = Math.max(0, areaRect.width - piece.offsetWidth);

        const maxY = Math.max(0, areaRect.height - piece.offsetHeight);

        const x = clamp(event.clientX - areaRect.left - grabX, 0, maxX);

        const y = clamp(event.clientY - areaRect.top - grabY, 0, maxY);

        piece.style.left = `${x}px`;
        piece.style.top = `${y}px`;
        piece.dataset.moved = "true";
      });

      function stopDragging(event) {
        if (!isDragging || event.pointerId !== pointerId) {
          return;
        }

        isDragging = false;
        pointerId = null;

        piece.classList.remove("is-dragging");

        if (piece.hasPointerCapture(event.pointerId)) {
          piece.releasePointerCapture(event.pointerId);
        }
      }

      piece.addEventListener("pointerup", stopDragging);
      piece.addEventListener("pointercancel", stopDragging);
    });

    window.addEventListener("resize", () => {
      const areaRect = dragArea.getBoundingClientRect();

      draggablePieces.forEach((piece) => {
        if (piece.dataset.moved !== "true") return;

        const maxX = Math.max(0, areaRect.width - piece.offsetWidth);

        const maxY = Math.max(0, areaRect.height - piece.offsetHeight);

        piece.style.left = `${clamp(
          parseFloat(piece.style.left) || 0,
          0,
          maxX,
        )}px`;

        piece.style.top = `${clamp(
          parseFloat(piece.style.top) || 0,
          0,
          maxY,
        )}px`;
      });
    });
  }

  updateActiveNavigation();
});
