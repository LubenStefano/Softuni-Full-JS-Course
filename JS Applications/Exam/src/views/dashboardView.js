import { render, html } from "../lib.js";
import { dataService } from "../service/dataService.js";

let ctx = null;
export async function dashboardView(context) {
  ctx = context;
  const tattoos = Object.values(await dataService.getAllTattoos());
  const template = renderTemplate(tattoos);
  render(template);
}

function renderTemplate(tattoos) {
    console.log(tattoos);
    
  return html`
    <!-- Dashboard page -->
    <h2>Collection</h2>
    <section id="tattoos">
      <!-- Display a div with information about every post (if any)-->
      ${tattoos.length > 0
        ? tattoos.map(
            (t) => html`
              <div class="tattoo">
                <img src=${t.imageUrl} alt="example3" />
                <div class="tattoo-info">
                  <h3 class="type">${t.type}</h3>
                  <span>Uploaded by </span>
                  <p class="user-type">${t.userType}</p>
                  <a class="details-btn" href="/details/${t._id}">Learn More</a>
                </div>
              </div>
            `
          )
        : html`<h2 id="no-tattoo">
            Collection is empty, be the first to contribute
          </h2>`}
    </section>
  `;
}
