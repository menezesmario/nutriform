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
    console.log("altura inválida");
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
  event.preventDefault();
  let form = document.querySelector("#form-adiciona");

  let nome = form.nome.value; //recebe o valor do campo
  let peso = form.peso.value;
  let altura = form.altura.value;
  let gordura = form.gordura.value;

  let pacienteTr = document.createElement("tr");

  let nomeTd = document.createElement("td");
  let pesoTd = document.createElement("td");
  let alturaTd = document.createElement("td");
  let gordutaTd = document.createElement("td");
  let imcTd = document.createElement("td");
});
