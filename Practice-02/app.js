// check and apply on reload
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  document.querySelector("#theme-toggle").checked = true;
}

let toggle = document.querySelector("#theme-toggle");

toggle.addEventListener("click", function () {
  let dark = document.body.classList.toggle("dark");

  //save the preference
  if (dark) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
