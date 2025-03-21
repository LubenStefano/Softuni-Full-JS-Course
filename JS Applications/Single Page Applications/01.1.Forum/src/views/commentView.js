import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";

let context = null;
export async function showComment(ctx) {
  context = ctx;

  const post = await dataService.getOneItem(ctx.params.id);
  const comments = Object.values(await dataService.getComments(ctx.params.id));
  const template = renderComment(post, comments);
  const root = document.querySelector("main");

  render(template, root);
}

function renderComment(post, comments) {
comments = comments.filter((c) => c.postId === post._id);
  return html`
        <!-- theme content  -->
        <div class="theme-content">
            <!-- theme-title  -->
            <div class="theme-title">
                <div class="theme-name-wrapper">
                    <div class="theme-name">
                        <h2>${post.topicName}</h2>
                    </div>

                </div>
            </div>
            <!-- comment  -->
            ${
              comments.length > 0
                ? comments.map(
                    (comment) => html`
                      <div class="comment" id=${comment._id}>
                        <div class="header">
                          <img src="../static/profile.png" alt="avatar" />
                          <p>
                            <span>${comment.username}</span> posted on
                            <time>${comment.date}</time>
                          </p>

                          <p class="post-content">${comment.comment}</p>
                        </div>
                      </div>
                    `
                  )
                : html`<p>No comments yet</p>`
            }
</div>

            <div class="answer-comment">
                <p><span>currentUser</span> comment:</p>
                <div class="answer">
                    <form @submit=${onSubmit}>
                        <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                        <div>
                            <label for="username">Username <span class="red">*</span></label>
                            <input type="text" name="username" id="username">
                        </div>
                        <button>Post</button>
                    </form>
                </div>
            </div>

        </div>

`;
}
async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const comment = formData.get("postText");
  const username = formData.get("username");

  if (!comment || !username) {
    return alert("All fields are required!");
  }

  const data = {
    comment,
    username,
    postId: context.params.id,
  };

  await dataService.createComment(data.postId, data);
  context.goTo(`/comment/${data.postId}`);
}
