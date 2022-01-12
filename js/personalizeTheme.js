console.log("its working");

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
    console.log("Option clicked:", mode);
  });
}

function setTheme(mode) {
  document.getElementById(`theme-style`).href = `css/${mode}.css`;
  localStorage.setItem("theme", mode);
}
