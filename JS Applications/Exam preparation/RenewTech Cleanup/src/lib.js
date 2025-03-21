import page from "../node_modules/page/page.mjs";
import {render as renderBase, html} from "../node_modules/lit-html/lit-html.js";

function render(template){
const root = document.querySelector("main");
renderBase(template, root);
}
export {page, html, render}