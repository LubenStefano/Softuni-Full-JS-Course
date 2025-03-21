import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { userUtils } from "../utils/userUtils.js";

const template = html`
          <section id="form-sign-up" class="view-section">
        <form
          id="register-form"
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

          <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input
              id="repeatPassword"
              type="password"
              class="form-control"
              placeholder="Repeat-Password"
              name="repeatPassword"
              value=""
            />
          </div>

          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </section>
`;

let context = null
export function showRegister(ctx) {
  const root = document.getElementById("root");
  context = ctx;
  render(template, root);
}

async function onSubmit(e) {
e.preventDefault();

const formData = new FormData(e.target);
const email = formData.get("email");
const password = formData.get("password");
const repeatPassword = formData.get("repeatPassword");

if (email == "" || password == "" || repeatPassword == "") {
  return alert("All fields are required!");
}
if(password != repeatPassword){
  return alert("Passwords don't match!");
}
if(password.length < 6){
  return alert("Password must be at least 6 characters long!");
}


const data = {
  email,
  password,
};

await userUtils.register(data);
context.goTo("/");
context.updateNav();
e.target.reset();
}