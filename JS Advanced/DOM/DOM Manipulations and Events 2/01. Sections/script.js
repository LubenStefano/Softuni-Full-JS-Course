function create(words) {
  let container = document.getElementById("content");
  for (let word of words) {
    let div = document.createElement("div");

    let paragraph = document.createElement("p");
    paragraph.textContent = word;
    paragraph.style.display = "none";

    div.append(paragraph);
    div.addEventListener("click", () => {
      paragraph.style.display = "block";
    });
    container.append(div);
  }
}
