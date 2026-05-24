const animatedElements = document.querySelectorAll(".fade-up");

function animateSequentially() {
  animatedElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("show");
    }, index * 300);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", animateSequentially);
} else {
  animateSequentially();
}

const openInvitation = document.getElementById("open-invitation");

openInvitation.addEventListener("click", () => {
  sessionStorage.setItem("playMusic", "true");
});
