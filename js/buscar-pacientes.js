let botaoBuscarAdicionar = document.querySelector("#buscar-pacientes");

botaoBuscarAdicionar.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    let erroAjax = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
      let resposta = xhr.responseText;
      let pacientes = JSON.parse(resposta);
      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      erroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();
});
