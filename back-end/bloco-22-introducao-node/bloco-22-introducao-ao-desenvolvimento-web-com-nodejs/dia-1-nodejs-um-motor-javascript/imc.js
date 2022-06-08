const readline = require('readline-sync');

function calculaImc(peso, altura) {
  console.log(` Peso: ${peso}\n Altura: ${altura}`);

  const alturaMetros = altura / 100;
  const altura2 = alturaMetros ** 2;

  const imc = (peso / altura2);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');

  return imc;
}

//a function main é o ponto de partida da aplicaçao
function main() {
  const peso = readline.questionFloat('Qual é o seu peso?');
  const altura = readline.questionInt('Qual é a sua altura?');

  calculaImc(peso, altura);
}

main();

