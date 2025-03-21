import {render, html} from '../lib.js'
import { dataService } from '../service/dataService.js'

let ctx = null
export function createView(context) {
ctx = context
const template = html`
        <!-- Create Page (Only for logged-in users) -->
        <section id="create">
          <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Add Solution</h2>
            <form class="create-form" @submit=${onSubmit}>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Solution Type"
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
              <textarea
                id="more-info"
                name="more-info"
                placeholder="more Info"
                rows="2"
                cols="10"
              ></textarea>
              <button type="submit">Add Solution</button>
            </form>
          </div>
        </section>
`
render(template)
}
async function onSubmit(e){
e.preventDefault();
const formData = new FormData(e.target);
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
await dataService.createSolution(data)
ctx.goTo('/dashboard')
}