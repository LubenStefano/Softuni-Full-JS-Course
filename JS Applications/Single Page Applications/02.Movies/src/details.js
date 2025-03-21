import {showView, hideView, views} from "./app.js"
import {getMovies} from "./home.js"
import { edit } from "./edit.js";

const section = document.getElementById("movie-example")
const userInfo = JSON.parse(sessionStorage.getItem("userInfo"))
export function detailsFunc(data){
renderMovie(data)
}

export function renderMovie(data){
    console.log(data);
    section.innerHTML = ""
    section.innerHTML = `
        <div class="container">
          <div class="row bg-light text-dark">
            <h1>Movie title: ${data.title}</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src=${data.img}
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>${data.description}</p>
              <a class="btn btn-danger" href="#">Delete</a>
              <a class="btn btn-warning" href="#">Edit</a>
              <a class="btn btn-primary" href="#">Like</a>
              <span class="enrolled-span">Liked 1</span>
            </div>
          </div>
        </div>`
    const deleteBtn = section.querySelector("a.btn.btn-danger")
    const editBtn = section.querySelector("a.btn.btn-warning")
    const likeBtn = section.querySelector("a.btn.btn-primary")
    const likeSpan = section.querySelector("span.enrolled-span")
    likeSpan.style.display = "none"
    deleteBtn.addEventListener("click", async (e) => {
        e.preventDefault()
        const id = data._id
        deleteMovie(id)
    })

    editBtn.addEventListener("click", async (e) => {
        e.preventDefault()
        hideView(views.movieExample)
        showView(views.editMovie)
        edit(data)
    })

    likeBtn.addEventListener("click", async (e) => {
        e.preventDefault()
        likeMovie(data._id)
    })

    if(userInfo._id !== data._ownerId){
        deleteBtn.style.display = "none"
        editBtn.style.display = "none"
    }else{
        deleteBtn.style.display = "inline"
        editBtn.style.display = "inline"
    }
}
async function deleteMovie(id){
    await fetch(`http://localhost:3030/data/movies/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": userInfo.accessToken
        }
    })
    hideView(views.movieExample)
    document.getElementById("movies-list").innerHTML = ""
    getMovies()
    showView(views.home)
}

async function likeMovie(movieId) {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    const data = await (await fetch(`http://localhost:3030/data/movies/${movieId}`)).json()
    if (userInfo._id === data._ownerId) {
        return alert('You can\'t like your own movie.');
    }
    await fetch('http://localhost:3030/data/likes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userInfo.accessToken
        },
        body: JSON.stringify({
            movieId
        })
    });
    const likeBtn = section.querySelector("a.btn.btn-primary")
    const likeSpan = section.querySelector("span.enrolled-span")
    likeBtn.style.display = "none"
    likeSpan.style.display = "inline"
}