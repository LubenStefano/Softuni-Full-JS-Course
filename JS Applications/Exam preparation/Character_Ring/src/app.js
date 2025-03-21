import { dashboardView } from "./views/dashboardView.js";
import { page } from "./lib.js";
import { userService } from "./service/userService.js";
import { userUtils } from "./utils/userUtils.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { detailsView } from "./views/detailsView.js";
import { createView } from "./views/createView.js";
import { editView } from "./views/editView.js";

page(updateCtx);
page("/", homeView);
page("/create",createView);
page("/dashboard", dashboardView);
page("/details/:id", detailsView);
page("/edit/:id", editView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logout);

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

export function updateNav() {
  const user = userService.getUser();
  if (!user) {
    document
      .querySelectorAll("nav .user")
      .forEach((e) => (e.style.display = "none"));
    document
      .querySelectorAll("nav .guest")
      .forEach((e) => (e.style.display = "block"));
  } else {
    document
      .querySelectorAll("nav .user")
      .forEach((e) => (e.style.display = "block"));
    document
      .querySelectorAll("nav .guest")
      .forEach((e) => (e.style.display = "none"));
  }
}

async function logout() {
  await userUtils.logout();
  page.redirect("/");
  updateNav();
}
