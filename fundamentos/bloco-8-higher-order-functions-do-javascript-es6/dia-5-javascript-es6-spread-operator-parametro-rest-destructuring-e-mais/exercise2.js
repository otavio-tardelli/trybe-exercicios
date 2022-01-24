const sum = (...numbers) => numbers.reduce((acc, cur) => acc += cur, 0);
console.log(sum(10, 11, 12, 13, 14, 15, 16));