import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";

const root = document.getElementById("root");

const template = html`
        <section id="add-movie" class="view-section">
        <form
          id="add-movie-form"
          class="text-center border border-light p-5"
          action="#"
          method=""
            @submit=${onSubmit}
        >
          <h1>Add Movie</h1>
          <div class="form-group">
            <label for="title">Movie Title</label>
            <input
              id="title"
              type="text"
              class="form-control"
              placeholder="Title"
              name="title"
              value=""
            />
          </div>
          <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea
              class="form-control"
              placeholder="Description"
              name="description"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input
              id="imageUrl"
              type="text"
              class="form-control"
              placeholder="Image Url"
              name="img"
              value=""
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </section>
`;
let context = null;
export function showCreate(ctx) {
  context = ctx;
  render(template, root);
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const title = formData.get("title");
  const description = formData.get("description");
  const imageURL = formData.get("img");

  if (title == "" || description == "" || imageURL == "") {
    return alert("All fields are required!");
  }

  const idea = {
    title,
    description,
    img: imageURL,
  };

  await dataService.createMovie(idea);
  context.goTo("/");
  e.target.reset();
}