// Seleciona todos os botões com a classe "botaoQR"
var botoesQR = document.querySelectorAll(".botaoQR");

// Adiciona um evento de clique a cada botão
botoesQR.forEach(function (botao) {
  botao.addEventListener("click", function () {
    var textToCopy = this.getAttribute("data-text"); // Recupera o valor do atributo "data-text"
    navigator.clipboard.writeText(textToCopy).then(
      function () {
        console.log("Texto copiado para a área de transferência");
      },
      function () {
        console.error("Erro ao copiar o texto para a área de transferência");
      }
    );
  });
});

// Seleciona todos os botões com a classe "botaoQR"
var botoesQR = document.querySelectorAll(".botaoQR");

// Seleciona a div que será usada para exibir a mensagem de confirmação
var mensagem = document.getElementById("mensagem");

// Adiciona um evento de clique a cada botão
botoesQR.forEach(function (botao) {
  botao.addEventListener("click", function () {
    var textToCopy = this.getAttribute("data-text"); // Recupera o valor do atributo "data-text"
    navigator.clipboard.writeText(textToCopy).then(
      function () {
        console.log("Texto copiado para a área de transferência");

        // Exibe a mensagem de confirmação por 2 segundos
        mensagem.style.display = "block";
        setTimeout(function () {
          mensagem.style.display = "none";
        }, 2000);
      },
      function () {
        console.error("Erro ao copiar o texto para a área de transferência");
      }
    );
  });
});
