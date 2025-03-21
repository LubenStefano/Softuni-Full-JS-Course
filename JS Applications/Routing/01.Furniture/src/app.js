import page from "../node_modules/page/page.mjs";
import { userService } from "./service/userService.js";
import { userUtils } from "./utils/userUtils.js";
import { showCreate } from "./views/createFurnitureView.js";
import { showDetails } from "./views/detailsView.js";
import { showEdit } from "./views/editView.js";
import { showLogin } from "./views/loginView.js";
import { showMyFurniture } from "./views/myFurnitureView.js";
import { showHome } from "./views/pageView.js";
import { showRegister } from "./views/registerView.js";

page("/", showHome);
page("/create", showCreate);
page("/dashboard", showHome);
page("/details/:id", (ctx) => showDetails(ctx.params.id));
page("/edit/:id", (ctx) => showEdit(ctx.params.id));
page("/login", showLogin);
page("/myFurniture", showMyFurniture);
page("/register", showRegister);
page("/logout", logout);

page.start();
updateNav();

export function updateNav() {
  const user = userService.getUser();
  if (!user) {
    document.getElementById("user").style.display = "none";
    document.getElementById("guest").style.display = "inline-block";
  } else {
    document.getElementById("user").style.display = "inline-block";
    document.getElementById("guest").style.display = "none";
  }
}

async function logout() {
  await userUtils.logout();
  page.redirect("/");
  updateNav();
}
