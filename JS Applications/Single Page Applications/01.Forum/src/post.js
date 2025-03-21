import { showComment} from "./comment.js"

const form = document.getElementById("postForm")

//getting the info from the form
export async function getInfo(e){
    e.preventDefault()

    const formData = new FormData(form)
    const title = formData.get("topicName")
    const username = formData.get("username")
    const postText = formData.get("postText")

    const date = new Date()
    const data = {
        title,
        username,
        postText,
        date
    }

    if(title === "" || username === "" || postText === ""){
        return alert("All fields are required!")
    }
await createPost(data)
form.reset()
}

//sending the info to the server
export function cancelPost(e){
    e.preventDefault()
 form.reset()
}
async function createPost(data){
const url = "http://localhost:3030/jsonstore/collections/myboard/posts"

const options = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
}
const response = await fetch(url, options)
if(!response.ok){
    return alert("Error creating post!")
}
const post = await response.json()
loadPost(post)
}
export  function loadPost(post){
    const topicTitle = document.getElementsByClassName("topic-title")[0] 
    topicTitle.innerHTML += `
    <div class="topic-container" id=${post._id} >
     <div class="topic-name-wrapper">
         <div class="topic-name">
             <a href="#" class="normal">
                 <h2>${post.title}</h2>
             </a>
             <div class="columns">
                 <div>
                     <p>Date: <time>${post.date}</time></p>
                     <div class="nick-name">
                         <p>Username: <span>${post.username}</span></p>
                     </div>
                 </div>
 
 
             </div>
         </div>
     </div>
 </div>`

const topicTittles = document.querySelectorAll(".normal")
topicTittles.forEach(t => t.addEventListener("click", (e) => showComment(e)))
document.getElementById("commentForm").addEventListener("submit", showComment)
}