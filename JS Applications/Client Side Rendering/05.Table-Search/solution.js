import { html, render } from "../node_modules/lit-html/lit-html.js";

function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  getInformation();
  async function getInformation() {
    const response = await fetch(
      "http://localhost:3030/jsonstore/advanced/table"
    );
    const data = await response.json();
    renderInformation(Object.values(data));
  }
  function renderInformation(elements) {
    const tbody = document.querySelector("tbody");
    const template = html`
      ${elements.map(
        (element) => html` <tr>
          <td>${element.firstName} ${element.lastName}</td>
          <td>${element.email}</td>
          <td>${element.course}</td>
        </tr>`
      )}
    `;
    render(template, tbody);
  }

  function onClick() {
    const search = document.getElementById("searchField").value.toLowerCase();
    const rows = Array.from(document.querySelectorAll("tbody tr"));
    rows.forEach((row) => {
      if (row.textContent.toLowerCase().includes(search)) {
        row.classList.add("select");
      } else {
        row.classList.remove("select");
      }
    });
  }
}
solve();
