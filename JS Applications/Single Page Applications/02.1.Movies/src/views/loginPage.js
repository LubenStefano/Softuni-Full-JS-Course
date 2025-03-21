import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { userUtils } from "../utils/userUtils.js";

const template = html`
         <section id="form-login" class="view-section">
        <form
          id="login-form"
          class="text-center border border-light p-5"
          action=""
          method=""
          @submit=${onSubmit}
        >
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="Email"
              name="email"
              value=""
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              value=""
            />
          </div>

          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </section>
`;

let context = null

export function showLogin(ctx) {
  context = ctx;

  const root = document.getElementById("root");
  render(template, root);
}
async function onSubmit(e) {
  e.preventDefault();
const formData = new FormData(e.target);
const email = formData.get("email");
const password = formData.get("password");

if (!email || !password) {
  return alert("All fields are required!");

}
await userUtils.login({ email, password });
context.goTo("/");
context.updateNav();
e.target.reset();
}