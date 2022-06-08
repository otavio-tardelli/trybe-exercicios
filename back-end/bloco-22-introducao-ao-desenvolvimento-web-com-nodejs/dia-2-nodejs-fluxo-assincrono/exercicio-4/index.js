const fs = require('fs').promises;

async function personagens() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
      const simpsons = JSON.parse(fileContent);
      const strings = simpsons.map(({ id, name }) => `${id} - ${name}`)
    
    strings.forEach(string => console.log(string));
}

async function simpsonsById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const escolha = simpsons.find(simpson => Number(simpson.id) === id);

  if (!escolha) {
    throw new Error('id não encontrado');
  }

  return escolha;
}

// async function filtrarSimpson() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

//   const simpsons = JSON.parse(fileContent);

//   const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');

//   await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
// }

async function familiaSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const familiaId =[1, 2, 3, 4];
  const familia = simpsons
    .filter((simpson) => familiaId.includes(Number(simpson.id)))

  await fs.writeFile('./familiaSimpsons.json', JSON.stringify()) 
}

async function main() {
  const simpson = await simpsonsById(5);;
  console.log(simpson);
}

main();
