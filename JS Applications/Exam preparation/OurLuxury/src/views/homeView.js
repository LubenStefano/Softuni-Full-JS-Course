import {render, html} from '../lib.js'

let ctx = null
export function homeView(context) {
ctx = context
const template = html`
        <!-- Home page -->
        <section id="hero">
          <h1>
            Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
          </h1>
        </section>
`
render(template)
}