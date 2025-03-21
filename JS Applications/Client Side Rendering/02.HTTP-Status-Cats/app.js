import { html, render } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const section = document.getElementById("allCats");
const catTemplate = (cats) => html`
  <ul>
    ${cats.map(
      (c) => html`
        <li>
          <img
            src="./images/${c.imageLocation}.jpg"
            width="250"
            height="250"
            alt="Card image cap"
          />
          <div class="info">
            <button class="showBtn" @click=${toggleButton}>
              Show status code
            </button>
            <div class="status" style="display: none" id=${c.id}>
              <h4 class="card-title">Status Code: ${c.statusCode}</h4>
              <p class="card-text">${c.statusMessage}</p>
            </div>
          </div>
        </li>
      `
    )}
  </ul>
`;
function toggleButton(event) {
  const button = event.target;
  const div = button.nextElementSibling;
  if (div.style.display === "none") {
    div.style.display = "block";
    button.textContent = "Hide status code";
  } else {
    div.style.display = "none";
    button.textContent = "Show status code";
  }
}
render(catTemplate(cats), section);
