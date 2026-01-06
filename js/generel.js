const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const kunde = document.getElementById("kunde");
const menu = document.querySelector(".menu");
const kundeHome = document.querySelector(".kunde_container");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

window.onscroll = function () {
  updateProgressBar();
};

function updateProgressBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

function relocate() {
  if (window.innerWidth <= 800) {
    /*hvis skærmen er mindre eller = med 800px*/
    menu.appendChild(kunde); /*kommer "kundeprofil" ind i burger*/
    kunde.style.position = "static";
  } else {
    kundeHome.appendChild(kunde); /*gør "kundeprofil synlig igen*/
    kunde.style.position = "static";
  }
}

window.addEventListener("resize", relocate);
relocate();
