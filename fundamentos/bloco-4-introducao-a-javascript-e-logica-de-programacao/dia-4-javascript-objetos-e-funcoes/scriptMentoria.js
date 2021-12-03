// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: { area: 0, perimetro: 0 }. 
// Fórmulas: 
// perimetro = (2*base) + (2*altura)
// area = base * altura (editado)

// cria uma função

function areaEPerimetro (base, altura) {
  let objetoQuadrilatero= {
    perimetro: (2*base) + (2*altura),
    area: base * altura
  }
  return objetoQuadrilatero
}
console.log(  areaEPerimetro(4,4))

//atribuir parametros p/ funcao

