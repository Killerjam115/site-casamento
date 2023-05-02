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

//Copiar informações para TED ou PIX

function copiarTexto(texto) {
  navigator.clipboard.writeText(texto).then(
    function () {
      console.log("Texto copiado com sucesso: " + texto);
      document.getElementById("mensagem-copia").style.display = "block";
      setTimeout(function () {
        document.getElementById("mensagem-copia").style.display = "none";
      }, 2500); // define o tempo de 3 segundos para o texto sumir
    },
    function () {
      console.error("Falha ao copiar texto");
    }
  );
}

//PopUp PIX

let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}
