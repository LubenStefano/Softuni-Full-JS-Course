import { loadPost} from "./post.js"

export async function showPosts(){
const url = "http://localhost:3030/jsonstore/collections/myboard/posts"
const response = await fetch(url)
const data = await response.json()
const posts = Object.values(data)

posts.forEach(post => {
    loadPost(post)
 });
}


