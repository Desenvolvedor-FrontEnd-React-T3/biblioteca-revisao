import fetchBooks from "./load-books.js";
import readerRegistration, { showRegistrationForm } from "./user-form.js";

console.log("Hello, World!");

const books = await fetchBooks();

if (books) {
  console.log(books);
} else {
  console.log("Livros não carregados!");
}

showRegistrationForm();
readerRegistration();
