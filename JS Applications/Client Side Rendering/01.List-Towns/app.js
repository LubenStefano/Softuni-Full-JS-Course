import { html, render } from "../node_modules/lit-html/lit-html.js";

const form = document.querySelector(".content");
form.addEventListener("submit", getData);

function getData(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const towns = formData.get("towns");
  const townsArray = towns.split(", ").map((t) => ({ name: t }));
  renderData(townsArray);
}
function renderData(townsArray) {
  const root = document.getElementById("root");
  const template = html`
    <ul>
      ${townsArray.map((t) => html`<li>${t.name}</li>`)}
    </ul>
  `;
  render(template, root);
}
