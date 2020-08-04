let myLibrary = [];
let books = document.getElementById('books');

let button = document.getElementById('button');
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let good = document.getElementById('good');

Book.prototype.giveInfo = function() {
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

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createBookTiles() {
    myLibrary.forEach((book) => {
        createSingleTile(book);
    })
}

let lotr = new Book('lord of the rings', 'ba ba bano', 100, false);
let hp = new Book('harold patter', 'jk roling', 100, false);

button.addEventListener('click', () => {
    console.log(title.value);
    let newBook = new Book(title.value, author.value, pages.value, false);
    addBookToLibrary(newBook);
    createSingleTile(book);
    console.log(book);
})

function createSingleTile(book) {
    let tile = document.createElement('div');
    tile.classList.add('tile')
    tile.textContent = book.giveInfo();
    books.appendChild(tile);
}

addBookToLibrary(lotr);
addBookToLibrary(hp);

createBookTiles();