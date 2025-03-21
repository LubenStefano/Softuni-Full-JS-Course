import { showView } from "./app.js"
import { hideView } from "./app.js"
import { views } from "./app.js"
import { navLinks } from "./app.js"
import { getMovies } from "./home.js"

export function registerFunc(){
document.getElementById("registerBtn").addEventListener("click", createUser)

}
async function createUser(e){
e.preventDefault()
const form = document.getElementById("register-form")
const formData = new FormData(form)
const email = formData.get("email")
const password = formData.get("password")
const rePass = formData.get("repeatPassword")
if(email == "" || password == "" || rePass == ""){
    throw new Error("All fields are required!")
}
if(password.length < 6){
    return alert("The password should be at least 6 characters long!")
}
if(password !== rePass){
    console.log(password);
    console.log(rePass);
    return alert("Passwords don't match!")
}
const userInfo = {
    email,
    password
}
const response =  await fetch("http://localhost:3030/users/register", {
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
hideView(views.formSignUp)
showView(views.home)
}