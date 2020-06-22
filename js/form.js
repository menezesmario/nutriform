let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault(); //evita procedimento padrão do clique ao botão

  //Capturar os dados do formulário HTML para o JS

  let form = document.querySelector("#form-adiciona");

  //captura o valor digitado no form
  let paciente = getPatient(form);

  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();

  let mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
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

function validaPaciente(paciente) {
  let erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco");
  }

  if (paciente.peso.length == 0) {
    erros.push("O peso não pdoe ser em branco ");
  }

  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser em branco");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválida");
  }

  return erros;
}

function exibeMensagensDeErro(erros) {
  let ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    let li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function adicionaPacienteNaTabela(paciente) {
  let pacienteTr = makeTr(paciente);
  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}
