import { render, html } from "../lib.js";
import { dataService } from "../service/dataService.js";
import { userService } from "../service/userService.js";
import { likeService } from "../service/likes.js";

let ctx = null;
export async function detailsView(context) {
  ctx = context;
  const character = await dataService.getCharacterById(ctx.params.id);

  const isLiked = Boolean(
    await likeService.userLiked(ctx.params.id, userService.getUserId())
  );
  const likesCount = await likeService.getLikesById(ctx.params.id);

  const template = createTemplate(character, isLiked, likesCount);
  render(template);
}
function createTemplate(c, isLiked, likesCount) {
  return html`
    <!-- Details page -->
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${c.imageUrl} alt="example1" />
        <div>
          <p id="details-category">${c.category}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p id="description">${c.description}</p>
              <p id="more-info">${c.moreInfo}</p>
            </div>
          </div>
          ${userService.getUser() === null
            ? html`<h3>
                Is This Useful:<span id="likes">${likesCount}</span>
              </h3>`
            : html` <h3>
                  Is This Useful:<span id="likes">${likesCount}</span>
                </h3>

                ${userService.getUserId() === c._ownerId
                  ? html`
                      <!--Edit and Delete are only for creator-->
                      <div id="action-buttons">
                        <a href="/edit/${c._id}" id="edit-btn">Edit</a>
                        <a
                          href="javascript:void(0)"
                          id="delete-btn"
                          @click=${deleteBtn}
                          >Delete</a
                        >
                      </div>
                    `
                  : html`
                      ${isLiked
                        ? html``
                        : html`<!--Bonus - Only for logged-in users ( not authors )-->
                            <div id="action-buttons">
                              <a
                                href="javascript:void(0)"
                                id="like-btn"
                                @click=${onLike}
                                >Like</a
                              >
                            </div>`}
                    `}`}
        </div>
      </div>
    </section>
  `;
}
async function deleteBtn() {
  const confirmed = confirm("Are you sure you want to delete this character?");
  if (!confirmed) {
    return;
  }
  await dataService.deleteCharacter(ctx.params.id);
  return ctx.goTo("/dashboard");
}
async function onLike() {
  const data = {
    characterId: ctx.params.id,
  };
  await likeService.postLike(data);

  ctx.goTo("/details/" + ctx.params.id);
}
