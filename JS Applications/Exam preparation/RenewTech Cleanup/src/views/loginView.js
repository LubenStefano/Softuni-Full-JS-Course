import {render, html} from '../lib.js'
import { userUtils } from '../utils/userUtils.js'

let ctx = null
export function loginView(context) {
ctx = context
const template = html`
        <!-- Login Page (Only for Guest users) -->
        <section id="login">
          <div class="form">
            <img class="border" src="/images/border.png" alt="" />
            <h2>Login</h2>
            <form class="login-form" @submit=${onSubmit}>
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>

`
render(template)
}
async function onSubmit(e){ 
e.preventDefault();
const formData = new FormData(e.target);
const email = formData.get('email').trim();
const password = formData.get('password').trim();
if(!email || !password){
    return alert('All fields are required!')
}
const data = {
email,
password
}
await userUtils.login(data)
ctx.goTo("/")
ctx.updateNav()
}