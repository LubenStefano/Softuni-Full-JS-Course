import { render, html } from "../lib.js";
import { dataService } from "../service/dataService.js";

let ctx = null;
export async function dashboardView(context) {
  ctx = context;
  const characters = Object.values(await dataService.getAllCharacters());
  const template = createTemplate(characters);
  render(template);
}
function createTemplate(characters) {
  console.log(characters);

  return html`
    <!-- Dashboard page -->
    <h2>Characters</h2>
    <section id="characters">
      <!-- Display a div with information about every post (if any)-->
      ${characters.length > 0
        ? characters.map(
            (c) => html`
            <div class="character">
              <img src=${c.imageUrl} alt="example1" />
              <div class="hero-info">
                <h3 class="category">${c.category}</h3>
                <p class="description">${c.description}</p>
                <a class="details-btn" href="/details/${c._id}">More Info</a>
              </div>
            
            </div>
            
          </section>
            `
          )
        : html`
            <!-- Display an h2 if there are no posts -->
            <h2>No added Heroes yet.</h2>
          `}
    </section>
  `;
}
