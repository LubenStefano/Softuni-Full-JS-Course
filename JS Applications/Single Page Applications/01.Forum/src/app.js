import { showPosts } from "./home.js"
import { getInfo, cancelPost } from "./post.js"

export function changeView(view){
    const home = document.getElementById("home")
    const comment = document.getElementById("comment")
    home.style.display = "none"
    comment.style.display = "none"
    switch(view){
        case "home":
            home.style.display = "flex"
            break
        case "comment":
            comment.style.display = "block"
            break
    }
}

document.addEventListener("DOMContentLoaded", () => changeView("home"))
document.addEventListener("DOMContentLoaded", showPosts)
document.getElementById("home-nav").addEventListener("click", () => changeView("home"))
document.getElementById("submitPost").addEventListener("click", getInfo)
document.getElementById("cancelPost").addEventListener("click", cancelPost)