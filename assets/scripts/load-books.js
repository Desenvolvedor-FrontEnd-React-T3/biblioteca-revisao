export default async function fetchBooks() {
  const dataURL = "./assets/daa/books.json";

  try {
    const response = await fetch(dataURL);

    if (response.ok != true) {
      return alert("Erro ao carregar os livros");
    }

    const books = await response.json();

    return books;
  } catch (error) {
    return alert("Erro ao consultar os dados dos livros", error);
  }
}
