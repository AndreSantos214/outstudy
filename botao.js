$(document).ready(function () {
  var botao = $(".dropdown-botao");
  var dropDown = $(".dropdown");

  botao.on("click", function (event) {
    dropDown.stop(true, true).slideToggle();
    event.stopPropagation();
  });
});

$(document).ready(function () {
  var botao = $(".dropdown-botao1");
  var dropDown = $(".dropdown1");

  botao.on("click", function (event) {
    dropDown.stop(true, true).slideToggle();
    event.stopPropagation();
  });
});
