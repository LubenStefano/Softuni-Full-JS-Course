import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";

let context = null;
export async function showEdit(ctx) {
  context = ctx;

  const root = document.getElementById("root");

  const movieId = ctx.params.id;
  const movie = await dataService.getMovieById(movieId);
  const template = renderMovie(movie);
  render(template, root);
}
function renderMovie(movie) {
  return html`
    <section id="edit-movie" class="view-section">
      <form class="text-center border border-light p-5" action="#" method="" @submit=${onSubmit}>
        <h1>Edit Movie</h1>
        <div class="form-group">
          <label for="title">Movie Title</label>
          <input
            id="title"
            type="text"
            class="form-control"
            placeholder="Movie Title"
            value=${movie.title}
            name="title"
          />
        </div>
        <div class="form-group">
          <label for="description">Movie Description</label>
          <textarea
            class="form-control"
            placeholder="Movie Description..."
            name="description"
          >${movie.description}</textarea>
        </div>
        <div class="form-group">
          <label for="imageUrl">Image url</label>
          <input
            id="imageUrl"
            type="text"
            class="form-control"
            placeholder="Image Url"
            value=${movie.img}
            name="img"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </section>
  `;
}

async function onSubmit(e) {
e.preventDefault();
const formData = new FormData(e.target);
const title = formData.get("title");
const description = formData.get("description");
const img = formData.get("img");
const movieId = context.params.id;

if (!title || !description || !img) {
  return alert("All fields are required!");

}
await dataService.editMovie(movieId, { title, description, img });
context.goTo(`/details/${movieId}`);

e.target.reset();
}