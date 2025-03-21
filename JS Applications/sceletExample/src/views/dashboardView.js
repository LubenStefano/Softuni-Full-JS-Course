import {render, html} from '../lib.js'

let ctx = null
export function dashboardView(context) {
ctx = context
const template = html`
`
render(template)
}