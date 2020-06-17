let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault(); //evita procedimento padrão do clique ao botão

  //Capturar os dados do formulário HTML para o JS

  //seleciona o formulário para captar os dados
  let form = document.querySelector("#form-adiciona");

  //captura o valor digitado no form
  let paciente = getPatient(form);

  //criar elementos no HTML com JS
  //linha
  let pacienteTr = makeTr(paciente);

  //seleciona #tabela-pacientes
  let tabela = document.querySelector("#tabela-pacientes");

  //insere a linha pacienteTr à tabela
  tabela.appendChild(pacienteTr);

  form.reset();
});

function getPatient(form) {
  let paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.gordura.value, form.altura.value),
  };

  return paciente;
}

function makeTr(paciente) {
  let pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //insere dentro da linha "pacienteTr" os dados das colunas "?Td"
  pacienteTr.appendChild(makeTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(makeTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(makeTd(paciente.altura, "info-atura"));
  pacienteTr.appendChild(makeTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(makeTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function makeTd(dado, classe) {
  let td = document.createElement("td"); //cria td
  td.textContent = dado; //conteúdo td recebe um dado
  td.classList.add(classe); //td recebe uma classe
  return td;
}
