import { showView } from "./app.js"
import { hideView } from "./app.js"
import { views } from "./app.js"
import { navLinks } from "./app.js"
import { getMovies } from "./home.js"

export function loginFunc(){
document.getElementById("loginBtn").addEventListener("click", loginUser)

}
async function loginUser(e){
e.preventDefault()
const form = document.getElementById("login-form")
const formData = new FormData(form)
const email = formData.get("email")
const password = formData.get("password")
if(email == "" || password == ""){
    return alert("All fields are required!")
}
const userInfo = {
    email,
    password
}
const response =  await fetch("http://localhost:3030/users/login", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInfo)
})
if(response.ok == false){
    const error = await response.json()
    return alert(error.message)
}
const data = await response.json()
sessionStorage.setItem("userInfo", JSON.stringify(data))
navLinks()
getMovies()
hideView(views.formLogin)
showView(views.home)
}   