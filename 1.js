// 1-Dado un array de números, escribir una función que encuentre el número más grande.

const mayor = [1, 2, 3].reduce((acc, actual) =>
  actual > acc ? actual : acc
);
console.log(mayor) //3

// otra manera de solucionarlo es:

console.log(Math.max[1,2,3])

const mayor1= Math.max(...[1,2,3])