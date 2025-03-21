import {render, html} from '../lib.js'
import { dataService } from '../service/dataService.js'
import { userService } from '../service/userService.js'

let ctx = null
export async function detailsView(context) {
ctx = context
const userId = await userService.getUserId()
const car = await dataService.getCarById(ctx.params.id)
const template = renderDetails(car, userId)
render(template)
}
function renderDetails(c , userId) {
    console.log(userId);
    console.log(c._ownerId);
    
    
    return html`
    <!-- Details page -->
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${c.imageUrl} alt="example1" />
        <p id="details-title">${c.model}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p class="price">Price: €${c.price}</p>
            <p class="weight">Weight: ${c.weight} kg</p>
            <p class="top-speed">Top Speed: ${c.speed} kph</p>
            <p id="car-description">${c.about}</p>
          </div>
          ${c._ownerId === userId
            ? html`<!--Edit and Delete are only for creator-->
                <div id="action-buttons">
                  <a href="/edit/${c._id}" id="edit-btn">Edit</a>
                  <a href="javascript:void(0)" id="delete-btn" @click=${delFunc}>Delete</a>
                </div>`
            : html``}`
}
async function delFunc() {
    const confirmed = confirm('Are you sure you want to delete this car?')
    if (confirmed) {
        await dataService.deleteCar(ctx.params.id)
        ctx.goTo('/dashboard')
    }
}