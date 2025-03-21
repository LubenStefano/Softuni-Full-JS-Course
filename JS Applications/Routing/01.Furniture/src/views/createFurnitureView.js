import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { updateNav } from "../app.js";
import { dataService } from "../service/dataService.js";
import { userService } from "../service/userService.js";
import { showHome } from "./pageView.js";

const root = document.querySelector(".container");

const template = html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Create New Furniture</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onSubmit}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-make">Make</label>
          <input
            @change=${validate}
            class="form-control valid"
            id="new-make"
            type="text"
            name="make"
          />
        </div>
        <div class="form-group has-success">
          <label class="form-control-label" for="new-model">Model</label>
          <input
            @change=${validate}
            class="form-control"
            id="new-model"
            type="text"
            name="model"
          />
        </div>
        <div class="form-group has-danger">
          <label class="form-control-label" for="new-year">Year</label>
          <input
            @change=${validate}
            class="form-control"
            id="new-year"
            type="number"
            name="year"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-description"
            >Description</label
          >
          <input
            @change=${validate}
            class="form-control"
            id="new-description"
            type="text"
            name="description"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-price">Price</label>
          <input
            @change=${validate}
            class="form-control"
            id="new-price"
            type="number"
            name="price"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-image">Image</label>
          <input
            @change=${validate}
            class="form-control"
            id="new-image"
            type="text"
            name="img"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-material"
            >Material (optional)</label
          >
          <input
            @change=${validate}
            class="form-control"
            id="new-material"
            type="text"
            name="material"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Create" />
      </div>
    </div>
  </form>
`;

export function showCreate() {
  render(template, root);
}

let isValid = false;

function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const make = formData.get("make");
  const model = formData.get("model");
  const year = formData.get("year");
  const description = formData.get("description");
  const price = formData.get("price");
  const img = formData.get("img");
  const material = formData.get("material");

  if (!isValid) {
    return alert("All fields are required!");
  }

  const userUserId = userService.getUserId();

  const data = {
    make,
    model,
    year,
    description,
    price,
    img,
    material,
    userUserId,
  };

  dataService.createFurniture(data);
  e.target.reset();
  showHome();
  page.redirect("/");
  updateNav();
}

function validate(e) {
  if (e.target.value == "" && e.target.id != "new-material") {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  } else if (e.target.id == "new-make" && e.target.value.length < 4) {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  } else if (e.target.id == "new-model" && e.target.value.length < 4) {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  } else if (e.target.id == "new-year" && Number(e.target.value) < 1950) {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  } else if (e.target.id == "new-year" && Number(e.target.value) > 2050) {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  } else if (e.target.id == "new-description" && e.target.value.length <= 10) {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  } else if (e.target.id == "new-price" && Number(e.target.value) <= 0) {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  } else if (e.target.id == "new-image" && e.target.value == "") {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  } else if (e.target.id == "new-material" && e.target.value.length == 0) {
    e.target.classList.remove("is-valid");
  } else {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
    isValid = true;
  }
}
