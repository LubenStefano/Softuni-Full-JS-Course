import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";


let context = null;
export async function showHome(ctx) {
  context = ctx;

  const movies = await dataService.getAllMovies();
  const template = renderMovies(movies)
  const root = document.getElementById("root");

  render(template, root);
}

function renderMovies(movies){
  console.log(movies);
  
  return  html`
  <section id="home-page" class="view-section">
    <div
      class="jumbotron jumbotron-fluid text-light"
      style="background-color: #343a40"
    >
      <img
        src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
        class="img-fluid"
        alt="Responsive image"
        style="width: 150%; height: 200px"
      />
      <h1 class="display-4">Movies</h1>
      <p class="lead">
        Unlimited movies, TV shows, and more. Watch anywhere. Cancel
        anytime.
      </p>
    </div>
  
    <h1 class="text-center">Movies</h1>
  
    <section id="add-movie-button" class="user">
      <a href="/create" class="btn btn-warning">Add Movie</a>
    </section>
  
    <section id="movie">
      <div class="mt-3">
        <div class="row d-flex d-wrap">
          <ul id="movies-list" class="card-deck d-flex justify-content-center">
            <!-- list item example -->
            ${movies.map(
              (m) => html`
              <li class="card mb-4">
              <img class="card-img-top"  src=${m.img} alt="Card image cap" width="400"/>
              <div class="card-body">
                <h4 class="card-title">${m.title}</h4>
                <a href="#">
                </a>
              </div>
              <div class="card-footer">
              <button type="button" class="btn btn-info" @click=${details} id=${m._id}>Details</button>
              </div>
            </li>
              `)}
          </ul>
        </div>
      </div>
    </section>
  </section>
  `;
  }
  function details(e){
    e.preventDefault();
    const id = e.target.id;
    context.page.redirect(`/details/${id}`);
  }