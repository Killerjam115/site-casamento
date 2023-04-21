const copyButton = document.getElementById("copy-button");
const linkInput = document.getElementById("link-input");

copyButton.addEventListener("click", function () {
  linkInput.select();
  linkInput.setSelectionRange(0, 99999); // Para dispositivos móveis
  document.execCommand("copy");
  alert("Link copiado para a área de transferência.");
});
