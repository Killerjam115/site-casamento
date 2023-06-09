// CAROUSEL

let carousel = document.querySelector(".carousel");
console.log(document);
let images = carousel.querySelectorAll("img");
let currentImageIndex = 0;
let nextImageIndex = 1;
let interval = 2500; // tempo de intervalo entre as transições
images[currentImageIndex].classList.add("active");
function changeImage() {
  images[currentImageIndex].classList.remove("active");
  images[nextImageIndex].classList.add("active");
  console.log("alguma merda");
  currentImageIndex = nextImageIndex;
  nextImageIndex = (nextImageIndex + 1) % images.length;
}
setInterval(changeImage, interval);

//contagem regressiva

var countDownDate = new Date("Nov 1, 2023 19:30:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML =
      "A contagem regressiva acabou!";
  }
}, 1000);

//PopUp PIX

let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

function abrirPagina(url) {
  //Botões para enviar a página do banco
  window.open(url, "_blank");
}

function copiarChave(botao) {
  const chave = "+5511972883864";
  navigator.clipboard.writeText(chave);
  botao.innerText = "copiado!";
}

//POPup confirmação de presença

const form = document.querySelector("form");
const feedbackPopup = document.querySelector("#feedback-popup");

form.addEventListener("submit", (event) => {
  // Exibe o popup de feedback
  feedbackPopup.style.display = "block";

  setTimeout(() => {
    // Limpa o formulário
    form.reset();
  }, 500);

  // Define um temporizador de 3 segundos antes de limpar o formulário
  setTimeout(() => {
    feedbackPopup.classList.add("fadeOut"); // adiciona classe para animação de saída
  }, 3000);

  // Oculta o popup de feedback após 3 segundos e remove classe de animação
  setTimeout(() => {
    feedbackPopup.style.display = "none";
    feedbackPopup.classList.remove("fadeOut");
  }, 4000);
});
