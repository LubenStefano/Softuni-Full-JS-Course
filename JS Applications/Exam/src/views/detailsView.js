import { render, html } from "../lib.js";
import { dataService } from "../service/dataService.js";
import { userService } from "../service/userService.js";
import { likeService } from "../utils/likeUtils.js";

let ctx = null;
export async function detailsView(context) {
    ctx = context;
    const user = userService.getUser();
    const tattoo = await dataService.getTattooById(ctx.params.id);
    let isLiked = false;
    if(user){
        isLiked =Boolean(await likeService.isLiked(tattoo._id, user._id))
    }
    const likes = await likeService.getLikes(tattoo._id);
    const template = renderTemplate(tattoo, user, isLiked, likes);
    render(template);
}

function renderTemplate(t, user, isLiked, likes) {
  return html`
    <!-- Details page -->
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${t.imageUrl} alt="example1" />
        <div>
          <div id="info-wrapper">
            <p id="details-type">${t.type}</p>
            <div id="details-description">
              <p id="user-type">${t.userType}</p>
              <p id="description">${t.description}</p>
            </div>
            <h3>Like tattoo:<span id="like">${likes}</span></h3>
            ${user && user._id == t._ownerId
              ? html`
                  <!--Edit and Delete are only for creator-->
                  <div id="action-buttons">
                    <a href="/edit/${t._id}" id="edit-btn">Edit</a>
                    <a href="javascript:void(0)" id="delete-btn" @click=${onDel}
                      >Delete</a
                    >
                  </div>
                `
              : ""}
            ${user && user._id != t._ownerId && !isLiked
              ? html`
                  <div id="action-buttons">
                    <!--Bonus - Only for logged-in users ( not authors )-->
                    <a href="javascript:void(0)" id="like-btn" @click=${onLike}>Like</a>
                  </div>
                `
              : ""}
          </div>
        </div>
      </div>
    </section>
  `;
}
async function onDel() {
    const confirmed = confirm('Are you sure you want to delete this tattoo?')
    if (!confirmed) {
        return
    }
await dataService.deleteTattoo(ctx.params.id)
ctx.goTo('/dashboard')
}
async function onLike() {
    const data = {
        tattooId: ctx.params.id,
    }
await likeService.like(data)
ctx.goTo(`/details/${ctx.params.id}`)
}