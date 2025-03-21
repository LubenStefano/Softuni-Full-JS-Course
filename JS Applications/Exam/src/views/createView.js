import {render, html} from '../lib.js'
import { dataService } from '../service/dataService.js'

let ctx = null
export function createView(context) {
ctx = context
const template = html`
        <!-- Create Page (Only for logged-in users) -->
        <section id="create">
          <div class="form">
            <h2>Add tattoo</h2>
            <form class="create-form" @submit=${onSubmit}>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Tattoo Type"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="2"
                cols="10"
              ></textarea>
              <select id="user-type" name="user-type">
                <option value="" disabled selected>Select your role</option>
                <option value="Tattoo Artist">Tattoo Artist</option>
                <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
                <option value="First Time in Tattoo">
                  First Time in Tattoo
                </option>
                <option value="Tattoo Collector">Tattoo Collector</option>
              </select>
              <button type="submit">Add tattoo</button>
            </form>
          </div>
        </section>
`
render(template)
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
if ( !type || !imageUrl || !description || !userType ) {
return alert('All fields are required!')
}
await dataService.createTattoo(data)
ctx.goTo('/dashboard')
}