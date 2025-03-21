import {render, html} from '../lib.js'
import { userUtils } from '../utils/userUtils.js'

let ctx = null
export function registerView(context) {
ctx = context
const template = html`
<!-- Register Page (Only for Guest users) -->
<section id="register">
          
          <div class="form">
            <img class="border" src="/images/border.png" alt="">
            <h2>Register</h2>
            <form class="register-form" @submit = ${onSubmit}>
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
            <img class="border" src="/images/border.png" alt="">
          </div>
         
        </section>

`
render(template)
}
async function onSubmit(e){
e.preventDefault()
const formData = new FormData(e.target)
const email = formData.get('email')
const password = formData.get('password')
const rePass = formData.get('re-password')
if (!email || !password || !rePass) {
  return alert('All fields are required!')
}
if (password != rePass) {
  return alert('Passwords don\'t match!')
}
await userUtils.register({email, password})
ctx.goTo('/')
ctx.updateNav()
}