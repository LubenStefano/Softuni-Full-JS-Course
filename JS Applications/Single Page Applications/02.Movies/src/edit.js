import { showView, hideView, views } from "./app.js";
import { getMovies } from "./home.js";
export function edit(data) {
  const form = document.getElementById("edit-movie-form");

  form.querySelector("input[name=title]").value = data.title;
  form.querySelector("textarea[name=description]").value = data.description;
  form.querySelector("input[name=img]").value = data.img;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const title = formData.get("title");
    const description = formData.get("description");
    const img = formData.get("img");
    if (title == "" || description == "" || img == "") {
      return alert("All fields are required!");
    }
    const movieInfo = {
      title,
      description,
      img,
    };
    const url = `http://localhost:3030/data/movies/${data._id}`;
    const movieData = await fetch(url);
    const movie = await movieData.json();
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": userInfo.accessToken,
      },
      body: JSON.stringify(movieInfo),
    };
    await fetch(url, options);
    hideView(views.editMovie);
    //update the details page before changing the view
    const details = document.getElementById("movie-example");
    details.querySelector("h1").textContent = title;
    details.querySelector("p").textContent = description;
    details.querySelector("img").src = img;
    showView(views.movieExample);

    form.reset();
  });
}
