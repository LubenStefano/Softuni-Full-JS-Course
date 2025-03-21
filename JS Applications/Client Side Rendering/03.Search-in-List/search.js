import { html, render } from "../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

document.querySelector("article button").addEventListener("click", search);
const townsList = towns;
const townsDiv = document.getElementById("towns");

const template = (towns) => html`
  <ul>
    ${towns.map((t) => html`<li>${t}</li>`)}
  </ul>
`;
render(template(townsList), townsDiv);

function search(e) {
  e.preventDefault();
  const searchText = document.getElementById("searchText").value;
  const towns = document.querySelectorAll("#towns li");
  let matches = 0;

  Array.from(towns).forEach((t) => {
    const townName = t.textContent;
    if (searchText === "") {
      t.classList.remove("active");
      return;
    } else if (townName.includes(searchText)) {
      t.classList.add("active");
      matches++;
    } else {
      t.classList.remove("active");
    }
  });

  const matchesInfo = document.getElementById("result");
  matchesInfo.textContent = `${matches} matches found`;
}
