import {render, html} from '../lib.js'
import { dataService } from '../service/dataService.js'

let ctx = null
export async function dashboardView(context) {
ctx = context
const solutions = await dataService.getsolutionsDashboard()
const template = renderTemplate(solutions)
render(template)
}
function renderTemplate(solutions){
console.log(solutions);

    return html`
    <!-- Dashboard page -->
    <h2>Solutions</h2>
  <section id="solutions">
      <!-- Display a div with information about every post (if any)-->
      ${solutions.length > 0 ? solutions.map(s => html`
          <div class="solution">
      <img src=${s.imageUrl} alt="example3" />
      <div class="solution-info">
        <h3 class="type">${s.type}</h3>
        <p class="description">
          ${s.description}
        </p>
        <a class="details-btn" href="/details/${s._id}">Learn More</a>
      </div>
    </div>
      `) : html`<h2 id="no-solution">No Solutions Added.</h2>`}
  </section>
` 

}