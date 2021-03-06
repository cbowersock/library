const myLibrary = [];

const books = document.getElementById('books');
const button = document.getElementById('button');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const good = document.getElementById('good');
const form = document.getElementById('form');

button.addEventListener('click', () => {
    const newBook = new Book(title.value, author.value, pages.value, good.checked);
    addBookToLibrary(newBook);
    createSingleTile(newBook);
    form.reset();
})

class Book {
    constructor(title, author, pages, good) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.good = good;
    }

    giveInfo = () => {
        if (this.good == true) {
            return `${this.title} by ${this.author}, ${this.pages} pages long. It's good.`;
        }
        else {
            return `${this.title} by ${this.author}, ${this.pages} pages long. Not good.`;
        }
    }
}

initializeLibrary();

function initializeLibrary() {
    const lotr = new Book('Lord of the Rings', 'JK Tolkien', 600, true);
    const hp = new Book('Harold Patter', 'JK Roling', 400, false);
    addBookToLibrary(lotr);
    addBookToLibrary(hp);
    createBookTiles();
}

function createSingleTile(book) {
    const tile = document.createElement('div');
    const deleteButton = createDeleteButton(tile);
    tile.classList.add('tile');
    tile.textContent = book.giveInfo();
    books.appendChild(tile);
    tile.appendChild(deleteButton);
}

function createDeleteButton(tile) {
    const deleteButton = document.createElement('button');
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