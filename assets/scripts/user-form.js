const userForm = document.getElementById("user-form");

export default function readerRegistration() {
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const readerName = document.getElementById("reader-name").value;
    const readerEmail = document.getElementById("reader-email").value;
    const readerPhone = document.getElementById("reader-phone").value;
    const readerBirthdate = document.getElementById("reader-birthdate").value;
    const readerAddress = document.getElementById("reader-address").value;

    console.log("Nome:", readerName);
    console.log("E-mail:", readerEmail);
    console.log("Telefone:", readerPhone);
    console.log("Data de nascimento:", readerBirthdate);
    console.log("Endereço:", readerAddress);
  });
}
