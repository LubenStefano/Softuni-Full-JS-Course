import page from "../node_modules/page/page.mjs";
import { userService } from "./service/userService.js";
import { userUtils } from "./utils/userUtils.js";
import { showCreate } from "./views/createPage.js";
import { showDetails } from "./views/detailsPage.js";
import { showEdit } from "./views/editPage.js";
import { showHome } from "./views/homePage.js";
import { showLogin } from "./views/loginPage.js";
import { showRegister } from "./views/registerPage.js";

page(updateCtx);
page("/index.html", showHome);
page("/", showHome);
page("/create", showCreate);
page("/details/:id", showDetails);
page("/login", showLogin);
page("/register", showRegister);
page("/logout", logout);
page("/editMovie/:id", showEdit)

page.start();
updateNav();

function updateCtx(ctx, next) {
  ctx.goTo = goTo;
  ctx.updateNav = updateNav;
  next();
}

function goTo(path) {
  page.redirect(path);
}

function updateNav() {
  const user = userService.getUser();
  const welcomeMessage = document.getElementById("welcome-msg");
  if (!user) {
    document
      .querySelectorAll(".user")
      .forEach((e) => (e.style.display = "none"));
    document
      .querySelectorAll(".guest")
      .forEach((e) => (e.style.display = "block"));
      welcomeMessage.textContent = "";
  } else {
    document
      .querySelectorAll(".guest")
      .forEach((e) => (e.style.display = "none"));
    document
      .querySelectorAll(".user")
      .forEach((e) => (e.style.display = "block"));
      welcomeMessage.textContent = `Welcome, ${user.email}`;
  }
}

async function logout(ctx) {
  await userUtils.logout();
  ctx.updateNav();
  ctx.goTo("/");
}
