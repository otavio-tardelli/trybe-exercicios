let numeros= [];

for (let index = 1; index <= 25; index +=1){
    numeros.push(index)
}
console.log(numeros)


let resultado= [];

for (let index = 0; index < numeros.length; index += 1) {
    resultado= numeros[index] / 2;
    console.log(resultado)
}


