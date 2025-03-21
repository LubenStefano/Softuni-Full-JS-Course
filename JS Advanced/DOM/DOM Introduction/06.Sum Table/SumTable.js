function sumTable() {
  let sum = 0;
  let rows = document.querySelectorAll("tr td");
  for (let i = 1; i < rows.length - 1; i += 2) {
    sum += Number(rows[i].textContent);
  }
  document.getElementById("sum").innerHTML = sum;
}
