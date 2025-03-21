import { detailsFunc } from "./details.js"
import { hideView, showView, views } from "./app.js"
const movies = document.getElementById("movies-list")
movies.innerHTML = ""
export async function getMovies(){
movies.innerHTML = ""
const url = "http://localhost:3030/data/movies"
const response = await fetch(url)
const data = await response.json()
data.forEach(m => {
    renderMovies(m)
})
}
function renderMovies(data) {
  const li = document.createElement("li");
  li.className = "card mb-4";
  li.innerHTML = `<img class="card-img-top" src=${data.img} alt="Card image cap" width="400"/>
                  <div class="card-body">
                    <h4 class="card-title">${data.title}</h4>
                    <a href="#">
                    </a>
                  </div>`;

  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  if (userInfo != null) { // User is logged in
      const footer = document.createElement("div");
      footer.className = "card-footer";
      footer.innerHTML = `<button type="button" class="btn btn-info">Details</button>`;
      li.appendChild(footer);

      const detailsBtn = footer.querySelector("button");
      detailsBtn.addEventListener("click", (e) => {
          e.preventDefault();
          Object.values(views).forEach(v => hideView(v));
          hideView(views.home);
          showView(views.movieExample);
          detailsFunc(data);
      });
  }

  movies.appendChild(li);
}