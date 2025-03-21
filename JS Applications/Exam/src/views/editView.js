import {render, html} from '../lib.js'
import { dataService } from '../service/dataService.js'

let ctx = null
export async function editView(context) {
ctx = context
const tattoo = await dataService.getTattooById(ctx.params.id)
const template = renderTemplate(tattoo)
render(template)
}
function renderTemplate(t){
return html`
        <!-- Edit Page (Only for logged-in users) -->
         <!-- the select isnt changed -->
        <section id="edit">
          <div class="form">
            <h2>Edit tattoo</h2>
            <form class="edit-form" @submit=${onSubmit}>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Tattoo Type"
                .value=${t.type}
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
                .value=${t.imageUrl}
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="2"
                cols="10"
                .value=${t.description}
              ></textarea>
              <select id="user-type" name="user-type"> 
                <option value="" disabled >Select your role</option>
                ${t.userType === 'Tattoo Artist' ? html`<option value="Tattoo Artist" selected>Tattoo Artist</option>` : html`<option value="Tattoo Artist">Tattoo Artist</option>`}
                ${t.userType === 'Tattoo Enthusiast' ? html`<option value="Tattoo Enthusiast" selected>Tattoo Enthusiast</option>` : html`<option value="Tattoo Enthusiast">Tattoo Enthusiast</option>`}
                ${t.userType === 'First Time in Tattoo' ? html`<option value="First Time in Tattoo" selected>First Time in Tattoo</option>` : html`<option value="First Time in Tattoo">First Time in Tattoo</option>`}
                ${t.userType === 'Tattoo Collector' ? html`<option value="Tattoo Collector" selected>Tattoo Collector</option>` : html`<option value="Tattoo Collector">Tattoo Collector</option>`}
              </select>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>

`
}
async function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const type = formData.get('type').trim()
    const imageUrl = formData.get('image-url').trim()
    const description = formData.get('description').trim()
    const userType = formData.get('user-type').trim()
    if (!type || !imageUrl || !description || !userType) {
        return alert('All fields are required!')

    }
    const data = {
        type,
        imageUrl,
        description,
        userType,
    }
    await dataService.editTattoo(ctx.params.id, data)
    ctx.goTo(`/details/${ctx.params.id}`)
}