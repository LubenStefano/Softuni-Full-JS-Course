import { html, render } from '../node_modules/lit-html/lit-html.js';

async function getInformation() {
    const response = await fetch("http://localhost:3030/jsonstore/advanced/dropdown");
    const data = await response.json();
    renderInformation(Object.values(data));
}

document.querySelector('input[type="submit"]').addEventListener('click', addItem);

async function addItem(e) {
    e.preventDefault();
    const text = document.getElementById('itemText').value;
    const option = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    };
    const response = await fetch("http://localhost:3030/jsonstore/advanced/dropdown", option);
    await getInformation(); 
    document.getElementById('itemText').value = '';
}

function renderInformation(elements) {
    const menu = document.getElementById('menu');
    const template = html`
        ${elements.map(element => html`<option value="${element._id}">${element.text}</option>`)}
    `;
    render(template, menu);
}

document.addEventListener('DOMContentLoaded', getInformation);
