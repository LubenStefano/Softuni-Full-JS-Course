import {render, html} from '../lib.js'

let ctx = null
export function homeView(context) {
ctx = context
const template = html`
`
render(template)
}