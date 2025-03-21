import { render, html } from "../lib.js";

let ctx = null;

export function searchView(context) {
  ctx = context;
  renderTemplate();
}

function renderTemplate(cars = [], query = '') {
  const hasCars = cars.length > 0;

  const template = html`
    <section id="search">
      <div class="form">
        <h4>Search</h4>
        <form class="search-form" @submit=${(e) => onSubmit(e)}>
          <input type="text" name="search" id="search-input" .value=${query} />
          <button type="submit" class="button-list">Search</button>
        </form>
      </div>
      <div class="search-result">
        ${query === '' 
          ? html`<h2 class="no-available">Please enter a search query to find cars.</h2>`
          : hasCars
          ? cars.map(
              (car) => html`
                <div class="car">
                  <img src=${car.imageUrl} alt="Car Image" />
                  <h3 class="model">${car.model}</h3>
                  <a class="details-btn" href="/details/${car._id}">More Info</a>
                </div>
              `
            )
          : html`<h2 class="no-available">No results found for "${query}".</h2>`}
      </div>
    </section>
  `;
  render(template, ctx.container);
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const search = formData.get("search").trim().toLowerCase();

  if (!search) {
    return alert("Please enter a search query.");
  }

  try {
    const response = await fetch(`/data/cars?where=model%20LIKE%20%22${search}%22`);
    const data = await response.json();
    renderTemplate(Object.values(data), search);
  } catch (error) {
    alert("Failed to fetch search results. Please try again later.");
  }
}
