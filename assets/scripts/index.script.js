import fetchBooks from "./load-books.js";
import readerRegistration, { showRegistrationForm } from "./user-form.js";
import renderBook from "./render-book.js";

console.log("Hello, World!");

const books = await fetchBooks();

if (books) {
  renderBook(books);
} else {
  console.log("Livros não carregados!");
}

showRegistrationForm();
readerRegistration();
