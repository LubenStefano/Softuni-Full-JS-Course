import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";
import { userService } from "../service/userService.js";
import page from "../../node_modules/page/page.mjs";

function makeTemplate(furniture, isFurnitureOwner) {
  const template = html`
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Furniture Details</h1>
      </div>
    </div>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="card text-white bg-primary">
          <div class="card-body">
            <img src="../../${furniture.img}" />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <p>Make: <span>${furniture.make}</span></p>
        <p>Model: <span>${furniture.model}</span></p>
        <p>Year: <span>${furniture.year}</span></p>
        <p>Description: <span>${furniture.description}</span></p>
        <p>Price: <span>${furniture.price}</span></p>
        <p>Material: <span>${furniture.material}</span></p>
        <div>
          ${isFurnitureOwner
            ? html`<a href="/edit/${furniture._id}" class="btn btn-info"
                >Edit</a
              >`
            : null}
          ${isFurnitureOwner
            ? html`<a
                href="javascript:void(0)"
                class="btn btn-red"
                id="${furniture._id}"
                @click=${deleteFurniture}
                >Delete</a
              >`
            : null}
        </div>
      </div>
    </div>
  `;
  return template;
}

export async function showDetails(id) {
  const furniture = await getFurnitureInfo(id);
  const isFurnitureOwner = furniture._ownerId === userService.getUserId();
  const template = makeTemplate(furniture, isFurnitureOwner);
  const root = document.querySelector(".container");

  render(template, root);
}

async function getFurnitureInfo(id) {
  const response = await dataService.getFurnitureById(id);
  return response;
}
function deleteFurniture(e) {
    e.preventDefault();
    const id = e.target.id;
    dataService.deleteFurniture(id)
    page.redirect("/")
}
