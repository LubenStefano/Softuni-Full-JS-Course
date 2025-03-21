import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";

let context = null;

export async function homeView(ctx) {
  context = ctx;
  const posts = Object.values(await dataService.getAllItems());
  const template = renderHome(posts);
  const root = document.querySelector("main");
  render(template, root);
}

function renderHome(posts) {
  return html`
    <div class="new-topic-border">
      <div class="header-background">
        <span>New Topic</span>
      </div>
      <form>
        <div class="new-topic-title">
          <label for="topicName">Title <span class="red">*</span></label>
          <input type="text" name="title" id="topicName" />
        </div>
        <div class="new-topic-title">
          <label for="username">Username <span class="red">*</span></label>
          <input type="text" name="username" id="username" />
        </div>
        <div class="new-topic-content">
          <label for="postText">Post <span class="red">*</span></label>
          <textarea
            type="text"
            name="content"
            id="postText"
            rows="8"
            class="height"
          ></textarea>
        </div>
        <div class="new-topic-buttons">
          <button class="cancel" @click=${cancel}>Cancel</button>
          <button class="public" @click=${onSubmit}>Post</button>
        </div>
      </form>
    </div>
    <div class="topic-title">
      <!-- topic component  -->
      <div class="topic-container">
        ${posts.map(
          (post) => html`
            <div class="topic-name-wrapper">
              <div class="topic-name">
                <a href="/comment/${post._id}" class="normal">
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
          `
        )}
      </div>
    </div>
  `;
}

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target.closest("form"));
  const title = formData.get("title");
  const username = formData.get("username");
  const content = formData.get("content");

  if (title === "" || username === "" || content === "") {
    return alert("All fields are required!");
  }

  const date = new Date().toISOString();
  const data = {
    title,
    username,
    content,
    date
  };

  await dataService.createItem(data);
  context.goTo("/index.html");
}

function cancel(e) {
  e.preventDefault();
  const form = e.target.closest("form");
  form.reset();
}
