const btnMenu = document.querySelector("#btn-menu"),
  nav = document.querySelector("#nav"),
  menu = document.querySelector("#btn-menu");
const accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    for (let j = 0; j < accordions.length; j++) {
      if (accordions[j] !== this) {
        accordions[j].classList.remove("active");
        const panel = accordions[j].nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        }
      }
    }
  });
}

btnMenu.addEventListener("click", () => {
  nav.classList.toggle("show");
  menu.classList.toggle("close");
});

const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();

document.querySelector("#datePicker").value = `${year}-${
  month < 10 ? `0${month}` : month
}-${day < 10 ? `0${day}` : day}`;
document.forms[0].addEventListener("submit", (e) => e.preventDefault());
