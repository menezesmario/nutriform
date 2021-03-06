//altera o título
let titulo = document.querySelector(".titulo");
titulo.textContent = "Nutriform";

//CALCULA O IMC

//seleciona o linha .paciente do html
let pacientes = document.querySelectorAll(".paciente");

//percorre a linha pacientes e devolve o imc
for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];

  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;

  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;

  let tdImc = paciente.querySelector(".info-imc");

  //valida o dado inserido

  let pesoValido = validaAltura(altura);
  let alturaValida = validaPeso(peso);

  //se dados inválidos
  if (!pesoValido) {
    console.log("peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido"; //conteudo tdImc recebe "'peso inválido"
    paciente.classList.add("campo-invalido"); //classe paciente recebe "campo inválido"
  }

  if (!alturaValida) {
    alturaValida = false;
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add("campo-invalido");
  }

  //dados validados, calcula o imc
  if (alturaValida && pesoValido) {
    let imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso > 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura > 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}
