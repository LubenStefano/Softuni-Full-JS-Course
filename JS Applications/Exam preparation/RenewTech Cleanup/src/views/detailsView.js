import { render, html } from "../lib.js";
import { dataService } from "../service/dataService.js";
import { userService } from "../service/userService.js";
import { likeService } from "../utils/likeUtils.js";

let ctx = null;
export async function detailsView(context) {
  ctx = context;
  const user = userService.getUser();
  const solution = await dataService.getSolutionById(ctx.params.id);
  let isLiked = false;
  if(user){
      isLiked =Boolean(await likeService.isLiked(solution._id, user._id))
  }
  const likes = await likeService.getLikes(solution._id);
  const template = renderTemplate(solution, user, isLiked, likes);
  render(template);
}

function renderTemplate(s, user, isLiked, likes) {
  console.log(s, user, isLiked, likes);
  
  return html`
    <!-- Details page -->
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${s.imageUrl} alt="example1" />
        <div>
          <p id="details-type">${s.type}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p id="description">${s.description}</p>
              <p id="more-info">${s.learnMore}</p>
            </div>
          </div>
          <h3>Like Solution:<span id="like">${likes}</span></h3>
          ${user && user._id == s._ownerId
            ? html`
                <!--Edit and Delete are only for creator-->
                <div id="action-buttons">
                  <a href="/edit/${s._id}" id="edit-btn">Edit</a>
                  <a href="javascript:void(0)" id="delete-btn" @click=${onDel}>Delete</a>
                </div>
              `
            : ""}
          ${user && user._id != s._ownerId && !isLiked
            ? html`
                <div id="action-buttons">
                  <!--Bonus - Only for logged-in users ( not authors )-->
                  <a href="javascript:void(0)" id="like-btn" @click=${onLike}>Like</a>
                </div>
              `
            : ""}
        </div>
      </div>
    </section>
  `;
}
async function onDel(){
  const confirmed = confirm('Are you sure you want to delete this solution?');
  if(confirmed){
    await dataService.deleteSolution(ctx.params.id);
    ctx.goTo('/dashboard');
  }
}
async function onLike(){
  const data = {
    solutionId: ctx.params.id,
  }
  await likeService.like(data)
  ctx.goTo(`/details/${ctx.params.id}`);
}