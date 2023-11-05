let navIcon = document.getElementById("navIcon");
let navaigation_bar = document.getElementById("navaigation-bar");

function shownNav() {
  let res = navIcon.classList.toggle("active");
  if (res) {
    navaigation_bar.classList.add("shown");
    navIcon.innerHTML = `<i class="fa-solid fa-x" title="Menu Close"></i>`;
  } else {
    navaigation_bar.classList.remove("shown");
    navIcon.innerHTML = `<i class="fas fa-bars navbar-icon" title="Menu Open"></i>`;
  }
}
navIcon.addEventListener("click", shownNav);
