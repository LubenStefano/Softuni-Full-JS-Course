import {render, html} from '../lib.js'
import { dataService } from '../service/dataService.js'

let ctx = null
export async function editView(context) {
    console.log('editView');
    
ctx = context
const character = await dataService.getCharacterById(ctx.params.id)
const template = createTemplate(character) 
render(template)
}
function createTemplate(character){
    console.log(character);
   return html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
             <div class="form">
               <img class="border" src="./images/border.png" alt="">
               <h2>Edit Character</h2>
               <form class="edit-form" @submit=${onSubmit}>
                 <input
                 type="text"
                 name="category"
                 id="category"
                 placeholder="Character Type"
                 .value=${character.category}
               />
               <input
                 type="text"
                 name="image-url"
                 id="image-url"
                 placeholder="Image URL"
                 .value=${character.imageUrl}
               />
               <textarea
               id="description"
               name="description"
               placeholder="Description"
               rows="2"
               cols="10"
               .value=${character.description}
             ></textarea>
             <textarea
               id="additional-info"
               name="additional-info"
               placeholder="Additional Info"
               rows="2"
               cols="10"
               .value=${character.moreInfo}
             ></textarea>
                 <button type="submit">Edit</button>
               </form>
               <img class="border" src="./images/border.png" alt="">
             </div>
           </section>
           
   `
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
await dataService.editCharacter(ctx.params.id, data)
ctx.goTo('/details/' + ctx.params.id)
}