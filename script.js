console.log("javaScript conectado");

// <-- =============================================== FORMULÁRIO =========================================================== -->

let formulario;
let nome;
let botaoForm;
let email;
let dataNascimento;
let bio;
let mensagem;

formulario = document.getElementById("formulario");

botaoForm = document.getElementById("botaoForm");

mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  nome = document.getElementById("nome").value;
  console.log("nome", nome);

  email = document.getElementById("email").value;
  console.log("email", email);

  dataNascimento = document.getElementById("data").value;
  console.log("data", dataNascimento);

  bio = document.getElementById("bio").value;
  console.log("bio", bio);

  if (nome === "") {
    mensagem.innerText = "Por favor, preencha o campo nome.";
    mensagem.style.color = "red";
  } else if (email === "") {
    mensagem.innerText = "Por favor, preencha o campo email.";
    mensagem.style.color = "red";
  } else if (!email.includes("@")) {
    mensagem.innerText = "Por favor, insira um email válido.";
    mensagem.style.color = "red";
  } else if (dataNascimento === "") {
    mensagem.innerText = "Por favor, preencha o campo data de nascimento.";
    mensagem.style.color = "red";
  } else {
    mensagem.innerText = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";
    formulario.reset();
  }
});

// <-- =============================================== ABA DE INSCRIÇÃO =========================================================== -->

const aba = document.getElementById("abaInscricao");
const botaoAbrirAba = document.getElementById("botaoAbrirAba");
const botaoFecharAba = document.getElementById("botaoFecharAba");

botaoAbrirAba.addEventListener("click", function (event) {
  event.preventDefault();
  aba.classList.add("ativa");
});

botaoFecharAba.addEventListener("click", function () {
  aba.classList.remove("ativa");
});
