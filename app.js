const cards = document.getElementsByClassName("card");
const body = document.querySelector("body");
const pointer = document.getElementsByClassName("pointer")[0];
const cardBorder = document.getElementsByClassName("cardBorder")[0];
const ParentCrad = document.getElementsByClassName("cards")[0];


ParentCrad.addEventListener("mousemove", (e) => {
  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
});

body.addEventListener("mousemove", (e) => {
  const rect = e.target.getBoundingClientRect();
  pointer.style.top = `${e.clientY}px`;
  pointer.style.left = `${e.clientX}px`;
});
