let myLibrary = [];
let books = document.getElementById('books');

let button = document.getElementById('button');
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let good = document.getElementById('good');

let form = document.getElementById('form');

Book.prototype.giveInfo = function () {
    if (this.good == true) {
        return `${this.title} by ${this.author}, ${this.pages} pages long. It's good.`;
    }
    else {
        return `${this.title} by ${this.author}, ${this.pages} pages long. Not good.`;
    }
}

function Book(title, author, pages, good) {
    this.title = title
    this.author = author
    this.pages = pages
    this.good = good
}

let lotr = new Book('Lord of the Rings', 'JK Tolkien', 600, true);
let hp = new Book('Harold Patter', 'JK Roling', 400, false);

button.addEventListener('click', () => {
    let newBook = new Book(title.value, author.value, pages.value, good.checked);
    addBookToLibrary(newBook);
    createSingleTile(newBook);
    form.reset();
})

function createSingleTile(book) {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    let tile = document.createElement('div');
    tile.classList.add('tile');
    tile.textContent = book.giveInfo();
    books.appendChild(tile);
    // tile.appendChild('<br/>');
    tile.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        books.removeChild(tile);
    })
}

function createBookTiles() {
    myLibrary.forEach((book) => {
        createSingleTile(book);
    })
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createDeleteButton() {

}

addBookToLibrary(lotr);
addBookToLibrary(hp);

createBookTiles();