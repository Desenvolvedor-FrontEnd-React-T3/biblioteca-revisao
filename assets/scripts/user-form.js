const userForm = document.getElementById("user-form");
const formSection = document.getElementById("form-section");
const registrationButton = document.getElementById("registration");
const message = document.getElementById("message");

export function showRegistrationForm() {
  registrationButton.addEventListener("click", () => {
    formSection.classList.toggle("hide");

    if (formSection.classList.contains("hide")) {
      registrationButton.textContent = "Exibir formulário";
    } else {
      registrationButton.textContent = "Esconder formulário";
    }
  });
}

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

    message.textContent = "Cadastro realizado com sucesso!";
    message.classList.remove("hide");
    message.classList.add("show");

    setTimeout(() => {
      message.textContent = "";
      formSection.classList.add("hide");
      registrationButton.textContent = "Exibir formulário";
      userForm.reset();
      message.classList.remove("show");
      message.classList.add("hide");
    }, 3000);
  });
}
