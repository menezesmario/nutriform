let titulo = document.querySelector(".titulo");
titulo.textContent = "Nutriform";

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];

  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;

  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;

  let tdImc = paciente.querySelector(".info-imc");

  let pesoValido = true;
  let alturaValida = true;

  if (peso <= 0 || peso >= 1000) {
    console.log("peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("campo-invalido");
  }

  if (altura <= 0 || altura >= 3) {
    alturaValida = false;
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add("campo-invalido");
  }

  if (alturaValida && pesoValido) {
    let imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}

let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault(); //evita procedimento padrão do clique ao botão

  //Capturar os dados do formulário HTML para o JS

  //seleciona o formulário para captar os dados
  let form = document.querySelector("#form-adiciona");

  //captura o valor digitado
  let nome = form.nome.value; //recebe o valor do campo
  let peso = form.peso.value;
  let altura = form.altura.value;
  let gordura = form.gordura.value;
  //Dados capturados

  //criar elementos no HTML com JS
  //linha
  let pacienteTr = document.createElement("tr");

  //colunas
  let nomeTd = document.createElement("td");
  let pesoTd = document.createElement("td");
  let alturaTd = document.createElement("td");
  let gorduraTd = document.createElement("td");
  let imcTd = document.createElement("td");

  //insere os dados às TDs
  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  //insere dentro da linha "pacienteTr" os dados das colunas "?Td"
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  //seleciona #tabela-pacientes
  let tabela = document.querySelector("#tabela-pacientes");

  //insere a linha pacienteTr à tabela
  tabela.appendChild(pacienteTr);

  console.log(pacienteTr);
  console.log(nomeTd);
});
