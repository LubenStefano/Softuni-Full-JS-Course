import {render, html} from '../lib.js'
import { dataService } from '../service/dataService.js'

let ctx = null
export function createView(context) {
ctx = context
const template = html`
 <!-- Create Page (Only for logged-in users) -->
 <section id="create">
          <div class="form">
            <img class="border" src="/images/border.png" alt="">
            <h2>Add Character</h2>
            <form class="create-form" @submit=${onSubmit}>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Character Type"
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
              id="additional-info"
              name="additional-info"
              placeholder="Additional Info"
              rows="2"
              cols="10"
            ></textarea>
              <button type="submit">Add Character</button>
            </form>
            <img class="border" src="/images/border.png" alt="">
          </div>
        </section>
`
render(template)
}
async function onSubmit(e){
e.preventDefault()
console.log('submit');

const formData = new FormData(e.target)
const category = formData.get('category')
const imageUrl = formData.get('image-url')
const description = formData.get('description')
const moreInfo = formData.get('additional-info')
if (!category || !imageUrl || !description || !moreInfo) {
  return alert('All fields are required!')
}
const data = {
  category,
  imageUrl,
  description,
  moreInfo
}
console.log(data);

const response = await dataService.createCharacter(data)
console.log(response);
ctx.goTo('/dashboard')   

}