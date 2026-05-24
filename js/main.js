/* ============================= */
/* ===== SCROLL REVEAL ANIMATION ===== */
/* ============================= */

const revealSelectors = [
  ".fade-up",
  ".main-title",
  ".main-subtitle",
  ".flower-main",
  ".polaroid-card",
  ".dove-main",
  ".hands-main",
  ".child img",

  ".time .left img",
  ".time .left h3",
  ".time .left p",
  ".time .center img",
  ".time .right img",
  ".time .right h3",
  ".time .right p",

  ".date-title",
  ".calendar-img",
  ".time-info",
  ".location-img",
  ".table-img",
  ".date-right h3",
  ".qr-box",
  ".click-hand",

  ".ours-ribbon",
  ".ours-heart",
  ".ours-dove",
  ".ours-bow-line",
  ".ours-couple-left",
  ".ours-couple-right",
  ".ours-star",
  ".ours-ring-flower",

  ".last-message",
  ".last-flower",
  ".last-heart",
  ".last-footer",
  ".last-photo-card",
  ".last-tape",
  ".last-leaf",
];

const animatedElements = document.querySelectorAll(revealSelectors.join(","));

const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -70px 0px",
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

animatedElements.forEach((element, index) => {
  const delay = (index % 5) * 0.5;
  element.style.setProperty("--delay", `${delay}s`);
  revealObserver.observe(element);
});

/* ============================= */
/* ===== BACKGROUND MUSIC ===== */
/* ============================= */

const bgMusic = document.getElementById("bg-music");

function playBackgroundMusic() {
  if (!bgMusic) return;

  bgMusic.volume = 0.45;

  bgMusic.play().catch(() => {
    document.addEventListener(
      "click",
      () => {
        bgMusic.play();
      },
      { once: true },
    );

    document.addEventListener(
      "touchstart",
      () => {
        bgMusic.play();
      },
      { once: true },
    );
  });
}

window.addEventListener("load", playBackgroundMusic);
