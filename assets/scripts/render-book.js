const booksList = document.getElementById("books-list");

export default function renderBook(books) {
  // console.log("Render books", books);

  booksList.innerHTML = books
    .map((book) => {
      const tagClass = book.available ? "available" : "unavailable";
      const tagText = book.available ? "Disponível" : "Indisponível";

      /*
      let tagClass = "";
      let tagText = "";

      if (book.available) {
        tagClass = "available";
        tagText = "Disponível";
      } else {
        tagClass = "unavailable";
        tagText = "Indisponível";
      }
        */

      return `
        <div class="book-card">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <div class="book-info">
                <p>${book.genre}</p>
                <span>|</span>
                <p>${book.publishedYear}</p>
                <span>|</span>
                <p>${book.numPages}</p>
            </div>
            <span class="tag ${tagClass}">${tagText}</span>
            <button>Solicitar Empréstimo</button>
        </div>
    `;
    })
    .join("");
}
