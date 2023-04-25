// CAROUSEL

let carousel = document.querySelector(".carousel");
console.log(document);
let images = carousel.querySelectorAll("img");
let currentImageIndex = 0;
let nextImageIndex = 1;
let interval = 5000; // tempo de intervalo entre as transições
images[currentImageIndex].classList.add("active");
function changeImage() {
  images[currentImageIndex].classList.remove("active");
  images[nextImageIndex].classList.add("active");
  console.log("alguma merda");
  currentImageIndex = nextImageIndex;
  nextImageIndex = (nextImageIndex + 1) % images.length;
}
setInterval(changeImage, interval);
