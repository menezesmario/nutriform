/*
function imprimaQuadradoAsterisco(n) {
  // não altere a linha acima

  /*
   * Escreva nas linhas a seguir um código que
   * imprima um quadrado de asteríscos
   * de altura e largura igual ao valor de n
   */
/*
  for (var i = 0; i < n; i++) {
    console.log("*".repeat(n));
  }
  console.log("\n");

  // não altere a linha abaixo


imprimaQuadradoAsterisco(5);
 */
/*
 function buscaNumeroPrimos(n) {

    
    var numerosPrimos = [];
    for (i = 0; i <= n; i++ ){
        if(i / i)
    }
    
    

//não altere as linhas abaixo
  return numerosPrimos;
}
*/
/*
function buscaNumeroPrimos(n) {
  var numerosPrimos = [];
  for (var i = 2; i <= n; i++) {
    var primo = true;
    for (var num = 2; num < i; num++) {
      if (i % num === 0) {
        primo = false;
        break;
      }
    }
    if (primo) {
      numerosPrimos.push(i);
    }
  }
  return numerosPrimos;
}

console.log(buscaNumeroPrimos(80));
*/
/*
function ehPalindromo(palavra) {
  for (let i = 0; i < palavra.length; i += 1) {
    if (palavra[i] != palavra[palavra.length - 1 - i]) {
      return "INFELIZMENTE, NÃO";
    }
  }
  return "SIM";
}

console.log(ehPalindromo("teste"));

/*
function checkPalindrome(palavra) {
  var tamanhoPalavra = palavra.length;
  for (var letra = 0; letra <= tamanhoPalavra; letra++) {
    if (palavra[letra] != palavra[tamanhoPalavra - letra - 1]) {
      console.log("INFELIZMENTE, NÃO SOU UM PALÍNDROMO");
      break;
    }
  }
  console.log("SIM, SOU UM PALÍNDROMO");
}
checkPalindrome("radar");
checkPalindrome("reviver");
checkPalindrome("palindromo");
checkPalindrome("ovo"); */
/*

function checkPalindrome(palavra) {
  var tamanhoPalavra = palavra.length;

  var array = [];
  for (var letra = 0; letra < tamanhoPalavra; letra++) {
    array.push(palavra[letra]);
  }

  console.log(array);

  var novaPalavra = [];
  for (var ultimaLetra = tamanhoPalavra - 1; ultimaLetra >= 0; ultimaLetra--) {
    novaPalavra.push(palavra[ultimaLetra]);
  }
  console.log(novaPalavra);
  if (novaPalavra === array) {
    console.log("SIM, SOU UM PALÍNDROMO");
  } else {
    console.log("INFELIZMENTE, NÃO SOU UM PALÍNDROMO");
  }
}

checkPalindrome("radar");
checkPalindrome("teste");

*/

/*checkPalindrome("reviver");
checkPalindrome("palindromo");
checkPalindrome("ovo");
*/
/*
function fizzBuzz(n) {
  for (var i = 1; i >= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      linha = "FizBuzz";
      return linha;
    } else if (i % 3 == 0 && i % 5 !== 0) {
      return "Fizz";
    } else if (i % 5 == 0 && i % 3 !== 0) {
      linha = "Buzz";
      return linha;
    } else if (i % 3 != 0 && i % 5 !== 0) {
      linha = i;
      return linha;
    }
  }
}
console.log(fizzBuzz(15));

*/ /*
function fizzBuzz(n) {
  for (var i = 1; i <= n; i++) {
    var output = "";

    if (i % 15 == 0) {
      output = "FizzBuzz";
    } else if (i % 3 == 0) {
      output = "Fizz";
    } else if (i % 5 == 0) {
      output = "Buzz";
    } else {
      output = i;
    }

    console.log(output);
  }
}
console.log(fizzBuzz(15));

/*
function fizzBuzz(n) {
  for (var i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) console.log("FizzBuzz");
    if (i % 3 == 0 && i % 5 != 0) console.log("Fizz");
    if (i % 5 == 0 && i % 3 != 0) console.log("Buzz");

    console.log(i);
  }
}
console.log(fizzBuzz(15));
*/
/*
function sockMerchant(n, ar) {
  let socksCount = {};
  let sum = 0;
  

  return sum;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))*/
/*
function sockMerchant(n, ar) {
  var numberPairs = 0;

  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      if (ar[j] === ar[i]) {
        numberPairs++;
        n = n - 2;
        ar.splice(j, 1);
        ar.splice(i, 1);
        i--;
        break;
      }
    }
  }
  return numberPairs;
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
*/
/*
function sockMerchant(n, ar) {
  var numberPairs = 0;

  for (var i = 0; i < ar.length; i++) {
    for (var j = i + 1; j < ar.length; j++) {
      if (ar[j] === ar[i]) {
        numberPairs++;
        ar.splice(j, 1);
        ar.splice(i, 1);
        i--;
        break;
      }
    }
  }
  return numberPairs;
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
*/

function tipPercentage(rating) {
  // Write your code here
  var n = rating;

  if (n === "Terrible" || n === "Poor") {
    return 3;
  } else if (n === "Good" || n === "Great") {
    return 10;
  } else if (n === "Excelent") {
    return 20;
  } else {
    return 0;
  }
}

console.log(tipPercentage("Terrible"));
console.log(tipPercentage("Poor"));
console.log(tipPercentage("Good"));
console.log(tipPercentage("Great"));
console.log(tipPercentage("Excelent"));
console.log(tipPercentage("Don't Liked"));
console.log(tipPercentage(10));
console.log(tipPercentage("excelent"));

/*
function tipPercentage(rating) {
  // Write your code here

  var word = rating;
  switch (word) {
    case "Terrible":
      return 3;
      break;
    case "Poor":
      return 3;
      break;
    case "Good":
      return 10;
      break;
    case "Great":
      return 10;
      break;
      case "Excelent":
              return 20
  }
  return 0;
}
console.log(tipPercentage("Terrible"));
console.log(tipPercentage("Poor"));
console.log(tipPercentage("Good"));
console.log(tipPercentage("Great"));
console.log(tipPercentage("Excelent"));
console.log(tipPercentage("Don't Liked"));

/*

  if (rating === "Terrible" || rating === "Poor") {
    return 3;
  } else if (rating === "Good" || rating === "Great") {
    return 10;
  } else if (rating === "Excelent") {
    return 20;
  } else if (
    rating !== "Terrible" ||
    rating !== "Poor" ||
    rating !== "Good" ||
    rating !== "Great" ||
    rating !== "Excelent"
  ) {
    return 0;
  }
}

console.log(tipPercentage("Terrible"));
console.log(tipPercentage("Poor"));
console.log(tipPercentage("Good"));
console.log(tipPercentage("Great"));
console.log(tipPercentage("Excelent"));
console.log(tipPercentage("Don't Liked"));
*/
