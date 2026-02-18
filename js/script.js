

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});


const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transitionDelay = `${index * 0.1}s`;
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));



const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    modal.classList.add("active");
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
