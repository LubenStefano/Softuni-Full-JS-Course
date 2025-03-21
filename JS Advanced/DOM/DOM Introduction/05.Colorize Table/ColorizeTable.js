function colorize() {
  let cells = document.querySelectorAll("table tr");
  for (let i = 1; i < cells.length; i += 2) {
    cells[i].style.backgroundColor = "Teal";
  }
}
