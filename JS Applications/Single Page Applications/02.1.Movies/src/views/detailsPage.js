import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";
import { userService } from "../service/userService.js";

let context = null;

export async function showDetails(ctx) {
  context = ctx;
  const root = document.getElementById("root");
  const ideaId = ctx.params.id;

  console.log(ideaId);
  const idea = [await dataService.getMovieById(ideaId)];
  const template = await renderDetails(idea);
  render(template, root);
}
let movieOwner = null;

async function renderDetails(idea) {
  console.log(idea);
  movieOwner = idea[0]._ownerId;
  const likes = await movieLikes();

  return html`
    <section id="movie-example" class="view-section">
      <div class="container">
        ${idea.map(
          (i) => html`
            <div class="row bg-light text-dark">
              <h1>Movie title: ${i.title}</h1>

              <div class="col-md-8">
                <img class="img-thumbnail" src=${i.img} alt="Movie" />
              </div>
              <div class="col-md-4 text-center">
                <h3 class="my-3">Movie Description</h3>
                <p>${i.description}</p>
                ${i._ownerId === userService.getUserId()
                  ? html`
                      <a
                        class="btn btn-danger"
                        href="#"
                        @click=${deleteFucntion}
                        >Delete</a
                      >
                      <a class="btn btn-warning" href="/editMovie/${i._id}"
                        >Edit</a
                      >
                      <span class="enrolled-span">${likes}</span>
                    `
                  : html`<a
                      class="btn btn-primary"
                      href="#"
                      @click=${likeFunction}
                      >Like</a
                    >`}
                <span class="enrolled-span" style="display: none"></span>
              </div>
            </div>
          `
        )}
      </div>
    </section>
  `;
}

async function movieLikes() {
  const movieId = context.params.id;
  const currentLikes = await dataService.getMovieLikes(movieId);
  return `Liked ${currentLikes}`;
}

async function deleteFucntion(e) {
  e.preventDefault();
  const movieId = context.params.id;
  await dataService.deleteMovie(movieId);
  context.goTo("/");
}

async function likeFunction(e) {
  e.preventDefault();
  const movieId = context.params.id;
  const userId = userService.getUserId();
  if (movieOwner == userId) {
    return alert("You can't like your own movie");
  }

  const data = {
    movieId: movieId,
  };

  await dataService.addLike(data);
  renderLikes();
  e.target.remove();
}

async function renderLikes() {
  const span = document.querySelector(".enrolled-span");
  span.style.display = "inline-block";
  const movieId = context.params.id;
  const currentLikes = await dataService.getMovieLikes(movieId);
  span.textContent = `Liked ${currentLikes}`;
}
