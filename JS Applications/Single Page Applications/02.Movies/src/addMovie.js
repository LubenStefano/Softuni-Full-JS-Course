import { getMovies } from "./home.js"
import { views, hideView, showView } from "./app.js"
const form = document.getElementById("add-movie-form")

export function addMovieFunc(){
form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const formData = new FormData(form)

    const title = formData.get("title")
    const description = formData.get("description")
    const img = formData.get("img")

    console.log(img);
    if(title == "" || description == "" || img == ""){
        return alert("All fields are required!")
    }
    const movieInfo = {
        title,
        description,
        img
    }
    await makeMovie(movieInfo)
    form.reset()
    hideView(views.addMovie)
    showView(views.home)
})
}
async function makeMovie(movieInfo) {
    const url = "http://localhost:3030/data/movies";
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    
    if (!userInfo) {
        alert("User is not logged in. Please log in and try again.");
        return;
    }
    
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": userInfo.accessToken
        },
        body: JSON.stringify(movieInfo)
    };

    await fetch(url, options);
    document.getElementById("movies-list").innerHTML = ""
    getMovies();

}
