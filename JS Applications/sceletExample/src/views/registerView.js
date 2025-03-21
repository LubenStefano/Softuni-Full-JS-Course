import {render, html} from '../lib.js'

let ctx = null
export function registerView(context) {
ctx = context
const template = html`
`
render(template)
}