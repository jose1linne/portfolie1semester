const html = document.querySelector("html");
const dark_btn = document.querySelector("#dark_btn");

function dark() {
  html.classList.toggle("dark");
  dark_btn.textContent = "Light";

  if (html.classList.contains("dark")) {
  } else {
    dark_btn.textContent = "Dark";
  }
}

dark_btn.addEventListener("click", dark);
