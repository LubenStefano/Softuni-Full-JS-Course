import { render, html } from "../lib.js";
import { dataService } from "../service/dataService.js";

let ctx = null;
export async function dashboardView(context) {
  ctx = context;
  const cars = Object.values(await dataService.getAllCars())
  const template = renderTemplate(cars);
  render(template);
}
function renderTemplate(cars) {
  return html`
    <!-- Dashboard page -->
    <h3 class="heading">Our Cars</h3>
    <section id="dashboard">
      <!-- Display all cars -->
      ${cars.length > 0
        ? cars.map(
            (c) => html`
              <div class="car">
                <img src=${c.imageUrl} alt="example1" />
                <h3 class="model">${c.model}</h3>
                <div class="specs">
                  <p class="price">Price: €${c.price}</p>
                  <p class="weight">Weight: ${c.weight} kg</p>
                  <p class="top-speed">Top Speed: ${c.speed} kph</p>
                </div>
                <a class="details-btn" href="/details/${c._id}">More Info</a>
              </div>
            `
          )
        : html`<h3 class="nothing">Nothing to see yet</h3>`}
    </section>
  `;
}
