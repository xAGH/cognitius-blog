function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const button = document.getElementById("shareButton");
  if (!dropdownMenu.contains(event.target) && event.target !== button) {
    dropdownMenu.style.display = "none";
  }
};
