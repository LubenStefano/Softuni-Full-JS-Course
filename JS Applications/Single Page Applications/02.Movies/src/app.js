import { registerFunc } from "./register.js";
import { loginFunc } from "./login.js";
import { logoutFunc } from "./logout.js";
import { getMovies } from "./home.js";
import { addMovieFunc } from "./addMovie.js";

getMovies()
export const views = {
    "home": "home-page",
    "addMovie": "add-movie",
    "movieExample": "movie-example",
    "editMovie": "edit-movie",
    "formLogin" : "form-login",
    "formSignUp": "form-sign-up"
}

Object.values(views).forEach(v => hideView(v))

showView(views.home)

export function showView(id){
    document.getElementById(id).style.display = "block"
}

export function hideView(id){
    document.getElementById(id).style.display = "none"
}

 const greating = document.getElementById("welcome-msg")
 const logoutBtn = document.getElementById("logout") 
 const loginBtn = document.getElementById("login") 
 const registerBtn = document.getElementById("register") 
 const addMovieBtn = document.getElementById("add-movie-button")

 logoutBtn.addEventListener("click", (e) => {
    e.preventDefault()
    logoutFunc()
    })

loginBtn.addEventListener("click", (e) => {
    e.preventDefault()
    Object.values(views).forEach(v => hideView(v))
    showView(views.formLogin)
    loginFunc()
})

registerBtn.addEventListener("click", (e) => {
    e.preventDefault()
    Object.values(views).forEach(v => hideView(v))
    showView(views.formSignUp)
    registerFunc()
})

addMovieBtn.addEventListener("click", (e) => {
    e.preventDefault()
    Object.values(views).forEach(v => hideView(v))
    showView(views.addMovie)
    addMovieFunc()
})


export function navLinks(){
    if(sessionStorage.getItem("userInfo") != null){
        const userInfo = JSON.parse(sessionStorage.getItem("userInfo"))
        greating.textContent = `Welcome, ${userInfo.email}`
        loginBtn.style.display = "none"
        registerBtn.style.display = "none"
        logoutBtn.style.display = "block"
        addMovieBtn.style.display = "block"
    }else{
        logoutBtn.style.display = "none"
        greating.textContent = ""
        loginBtn.style.display = "block"
        registerBtn.style.display = "block"
        addMovieBtn.style.display = "none"
    }
}
navLinks()