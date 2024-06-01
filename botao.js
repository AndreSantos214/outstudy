$(document).ready(function () {
  var botao = $(".dropdown-botao");
  var dropDown = $(".dropdown");

  botao.on("click", function (event) {
    dropDown.stop(true, true).slideToggle();
    event.stopPropagation();
  });
});
//Subtituir as 2 classes
