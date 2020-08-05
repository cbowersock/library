let myLibrary = [];

let books = document.getElementById('books');
let button = document.getElementById('button');
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let good = document.getElementById('good');
let form = document.getElementById('form');

button.addEventListener('click', () => {
    let newBook = new Book(title.value, author.value, pages.value, good.checked);
    addBookToLibrary(newBook);
    createSingleTile(newBook);
    form.reset();
})

function Book(title, author, pages, good) {
    this.title = title
    this.author = author
    this.pages = pages
    this.good = good
}

Book.prototype.giveInfo = function () {
    if (this.good == true) {
        return `${this.title} by ${this.author}, ${this.pages} pages long. It's good.`;
    }
    else {
        return `${this.title} by ${this.author}, ${this.pages} pages long. Not good.`;
    }
}

initializeLibrary();

function initializeLibrary() {
    let lotr = new Book('Lord of the Rings', 'JK Tolkien', 600, true);
    let hp = new Book('Harold Patter', 'JK Roling', 400, false);
    addBookToLibrary(lotr);
    addBookToLibrary(hp);
    createBookTiles();
}

function createSingleTile(book) {
    let tile = document.createElement('div');
    let deleteButton = createDeleteButton(tile);
    tile.classList.add('tile');
    tile.textContent = book.giveInfo();
    books.appendChild(tile);
    tile.appendChild(deleteButton);
}

function createDeleteButton(tile) {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Check Out';
    deleteButton.id = 'delete';
    deleteButton.addEventListener('click', () => {
        books.removeChild(tile);
    })
    return deleteButton;
}

function createBookTiles() {
    myLibrary.forEach((book) => {
        createSingleTile(book);
    })
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}