import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { dataService } from "../service/dataService.js"
import { userService } from "../service/userService.js"


const root = document.querySelector(".container")

function renderTemplate(furniture){
return html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
        ${furniture.map(f => html`
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="../../${f.img}" />
                            <p>${f.description}</p>
                            <footer>
                                <p>Price: <span>${f.price} $</span></p>
                            </footer>
                            <div>
                                <a href=${`/details/${f._id}`} class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
            `)}
            </div>
        </div>
`
}

export async function showMyFurniture(){
    const userId = userService.getUserId()
    const myFurnitures = await dataService.getMyFurniture(userId)
    const template = renderTemplate(myFurnitures)
    render(template, root)
}