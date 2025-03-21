import {render, html} from '../lib.js'
import { dataService } from '../service/dataService.js'

let ctx = null
export async function editView(context) {
ctx = context
const car = await dataService.getCarById(context.params.id)
const template = html`
 <!-- Edit Page (Only for logged-in users) -->
 <section id="edit">
          <div class="form form-auto">
            <h2>Edit Your Car</h2>
            <form class="edit-form" @submit=${onSubmit}>
              <input type="text" name="model" id="model" placeholder="Model" .value=${car.model} />
              <input
                type="text"
                name="imageUrl"
                id="car-image"
                placeholder="Your Car Image URL"
                .value=${car.imageUrl}
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                .value=${car.price}
              />
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in Kg"
                .value=${car.weight}
              />
              <input
                type="text"
                name="speed"
                id="speed"
                placeholder="Top Speed in Kmh"
                .value=${car.speed}
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                rows="10"
                cols="50"
                .value=${car.about}
              ></textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`
render(template)
}
async function onSubmit(e) {
e.preventDefault()
const formData = new FormData(e.target)
const model = formData.get('model')
const imageUrl = formData.get('imageUrl')
const price = formData.get('price')
const weight = formData.get('weight')
const speed = formData.get('speed')
const about = formData.get('about')
if (model == '' || imageUrl == '' || price == '' || weight == '' || speed == '' || about == '') {
return alert('All fields are required!')
}
const data = {
model,
imageUrl,
price,
weight,
speed,
about
}
await dataService.editCar(ctx.params.id, data)
ctx.goTo(`/details/${ctx.params.id}`)
}