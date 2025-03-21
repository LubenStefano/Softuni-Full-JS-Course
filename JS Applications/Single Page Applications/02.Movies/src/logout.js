import { hideView } from "./app.js"
import { showView } from "./app.js"
import { views } from "./app.js"
import { navLinks } from "./app.js"

export async function logoutFunc(){
    const token = JSON.parse(sessionStorage.getItem("userInfo")).accessToken
    if(token == null){
        alert("You are not logged in!")
        return
    }
    const response = await fetch("http://localhost:3030/users/logout", {
        method: "get",
        headers: { "X-Authorization": token }
    })
    if(response.ok == false){
        const error = await response.json()
        return alert(error.message)
    }
    sessionStorage.clear()
    Object.values(views).forEach(v => hideView(v))
    showView(views.formLogin)
    navLinks()
}