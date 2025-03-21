import { changeView } from "./app.js";

let idPerComment = "";

export function showComment(e) {
    e.preventDefault();
    const postElement = e.target.closest('.topic-container');
    const postId = postElement ? postElement.id : null;

    if (postId) {
        idPerComment = postId;
        loadPost(postId);
        changeView("comment");
        loadAllComments(postId);
    } else {
        alert("Unable to find the post ID.");
    }
}

export async function loadPost(postId) {
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts/${postId}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to load post.");
        const data = await response.json();

        document.getElementById("themeTitle").textContent = data.title;
        document.getElementById("themeUsername").textContent = data.username;
        document.getElementById("themeText").textContent = data.postText;
        document.getElementById("themeDate").textContent = data.date;
    } catch (error) {
        alert(error.message);
    }
}

export async function writeComment(e) {
    e.preventDefault();
    const form = document.getElementById("commentForm");
    const formData = new FormData(form);

    const commentText = formData.get("postText");
    const username = formData.get("username");

    if (commentText === "" || username === "") {
        return alert("All fields are required!");
    }

    const url = `http://localhost:3030/jsonstore/collections/myboard/comments/`;
    const date = new Date().toISOString(); // Use ISO string for date consistency
    const data = {
        commentText,
        username,
        date,
        postId: idPerComment
    };

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Error creating comment!");
        renderThemeComment(data);
        form.reset(); // Clear the form after successful submission
    } catch (error) {
        alert(error.message);
    }
}

async function loadAllComments(postId) {
    const url = "http://localhost:3030/jsonstore/collections/myboard/comments";
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to load comments.");
        const data = await response.json();
        const comments = Object.values(data);

        const userComment = document.getElementById("userCommentSection");
        userComment.innerHTML = ""; // Clear previous comments

        comments.forEach(comment => {
            if (comment.postId === postId) {
                renderThemeComment(comment);
            }
        });
    } catch (error) {
        alert(error.message);
    }
}

function renderThemeComment(comment) {
    const userComment = document.getElementById("userCommentSection");
    userComment.style.display = "block";
    userComment.innerHTML += `
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${comment.username}</strong> commented on <time>${comment.date}</time></p>
                <div class="post-content">
                    <p>${comment.commentText}</p>
                </div>
            </div>
        </div>`;
}
