const cards = document.getElementsByClassName("card");
const body = document.querySelector("body");
const pointer = document.getElementsByClassName("pointer")[0];
const cardBorder = document.getElementsByClassName("cardBorder")[0];
const ParentCrad = document.getElementsByClassName("cards")[0];

const glowEffect = (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  e.target.style.setProperty("--mouse-x", `${x}px`);
  e.target.style.setProperty("--mouse-y", `${y}px`);
};

for (const card of cards) {
  card.addEventListener("mousemove", glowEffect);
}

body.addEventListener("mousemove", (e) => {
  const rect = e.target.getBoundingClientRect();
  pointer.style.top = `${e.clientY}px`;
  pointer.style.left = `${e.clientX}px`;
});
