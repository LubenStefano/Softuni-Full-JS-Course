import {render, html} from '../lib.js'
import { dataService } from '../service/dataService.js'

let ctx = null
export async function editView(context) {
ctx = context
const solution = await dataService.getSolutionById(ctx.params.id)
const template = renderTemplate(solution)
render(template)
}

function renderTemplate(s){
  return html`
        <!-- Edit Page (Only for logged-in users) -->
        <section id="edit">
          <div class="form">
            <img class="border" src="/images/border.png" alt="" />
            <h2>Edit Solution</h2>
            <form class="edit-form" @submit=${onSubmit}>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Solution Type"
                .value=${s.type}
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
                .value=${s.imageUrl}
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="2"
                cols="10"
                .value=${s.description}
              ></textarea>
              <textarea
                id="more-info"
                name="more-info"
                placeholder="more Info"
                rows="2"
                cols="10"
                .value=${s.learnMore}
              ></textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>

`
}
async function onSubmit(e) {
  e.preventDefault();
  const formData= new FormData(e.target);
  const type = formData.get('type').trim();
  const imageUrl = formData.get('image-url').trim();
  const description = formData.get('description').trim();
  const learnMore = formData.get('more-info').trim();
  if(!type || !imageUrl || !description || !learnMore){
    return alert('All fields are required!')
  }
  const data = {
    type,
    imageUrl,
    description,
    learnMore
  }
  await dataService.editSolution(ctx.params.id, data)
  ctx.goTo(`/details/${ctx.params.id}`)
}