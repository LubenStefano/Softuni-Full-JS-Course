import {html, render} from '../node_modules/lit-html/lit-html.js';

const root = document.querySelector('body');

const tableTemplate = () => html`
    <button id="loadBooks" @click=${loadBooks}>LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    <form id="add-form" @submit=${onSubmit}>
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>
    <form id="edit-form" @submit=${onEditSubmit} style="display: none;">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>
`;

const bookTemplate = (book) => html`
    <tr data-id="${book._id}">
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button @click=${() => onEdit(book)}>Edit</button>
            <button @click=${() => onDelete(book._id)}>Delete</button>
        </td>
    </tr>`;

async function loadBooks() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books');
    const data = await response.json();
    const books = Object.values(data);

    // Ensure all books have an ID
    books.forEach((book, index) => {
        if (!book._id) {
            book._id = `temp-id-${index}`;
        }
    });

    render(books.map(bookTemplate), document.querySelector('tbody'));
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const author = formData.get('author');
    
    if (!title || !author) {
        alert('Both fields are required!');
        return;
    }
    
    const options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, author})
    };
    
    await fetch('http://localhost:3030/jsonstore/collections/books', options);
    event.target.reset();
    loadBooks();
}

function onEdit(book) {
    const editForm = document.getElementById('edit-form');
    const addForm = document.getElementById('add-form');
    
    addForm.style.display = 'none';
    editForm.style.display = 'block';
    
    editForm.querySelector('[name="id"]').value = book._id;
    editForm.querySelector('[name="title"]').value = book.title;
    editForm.querySelector('[name="author"]').value = book.author;
}

async function onEditSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const id = formData.get('id');
    const title = formData.get('title');
    const author = formData.get('author');
    
    if (!title || !author) {
        alert('Both fields are required!');
        return;
    }
    
    const options = {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, author})
    };
    
    await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, options);
    event.target.reset();
    document.getElementById('edit-form').style.display = 'none';
    document.getElementById('add-form').style.display = 'block';
    loadBooks();
}

async function onDelete(id) {
    await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, { method: "DELETE" });
    loadBooks();
}

render(tableTemplate(), root);
