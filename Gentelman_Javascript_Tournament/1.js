
// 1-Dado un array de números, escribir una función que encuentre el número más grande.

const mayor = [1, 2, 3].reduce((acc, actual) =>
  actual > acc ? actual : acc
);
console.log(mayor) //3


// otra manera de solucionarlo es:
console.log(Math.max(...[1,2,3]))

/* se usa el operador de propagación (...) para pasar los elementos del array como argumentos a la función Math.max
al usar el spread operator estamos expandiendo el array en una lista de argumentos. console.log(Math.max(1, 2, 3));
*/


/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/


// 2 -dado un array de numeros, escribir una función que sume los todos indices empezando por el indice 2

const suma = [1, 2, 3, 4].slice(2).reduce((acumulador, valorActual) => acumulador + valorActual)
console.log(suma);

/* slice se usa con indice inicial , indice final(no incluido, se incluye el indice anterior), si no 
se le coloca indice final se sobreentiende que seria todo el array */


/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/


// 3-Dado un array de números, escribir una función que calcule la suma de todos los elementos.

console.log([1,2,3,4].reduce((acc,act)=>acc+act))

/*si quisiera que empezara a sumar por un número que yo quiera se haria así:

console.log([1,2,3,4].reduce((acc,act)=>acc+act,2))
*/


/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/



// 4-Dado un array de números, escribir una función que calcule el promedio de todos los elementos.

//console.log([1,2,3,4].reduce((acc,act)=>(acc+act)/4)) así no se hace porque está diviendo entre 4 en cada iteración.

const num = [1,2,3,4]
const sum = num.reduce((acc, element) => acc + element);
console.log(sum /num.length)



/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/

// 5-Dado un string, escribir una función que invierta el orden de las palabras en el string.

/* const words = 'noel'
const reverse = words.reverse()
console.log(reverse) */

const words = 'noel'
const reverse = words.split('').reverse().join('')
console.log(reverse)


/*En JavaScript, las cadenas "son inmutables", lo que significa que no se pueden modificar directamente. Por lo tanto, para invertir el orden de los caracteres de una cadena, es necesario primero convertirla en un arreglo de caracteres individuales utilizando el método split('')( [ 'n', 'o', 'e', 'l' ] ). Una vez que se tiene el arreglo de caracteres, se puede utilizar el método reverse para invertir el orden de sus elementos y luego el método join('') para unir los caracteres en una nueva cadena invertida. si a join le paso un argumento como la coma los unirá con comas.*/



/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/


// 6-Dado un string, escribir una función que encuentre la palabra más larga en el string.
const resultLonger = "hola mundo"
  .split(" ")
  .reduce((acc, element) => (element.length > acc.length ? element : acc));
  
// 7-Dado un string y un número n, escribir una función que trunque el string a n caracteres y agregue "..." al final.
const n = 5;
const truncatedResult =  "hola gentleman programming".slice(0, n);
const truncatedText = truncatedResult.length < n ? truncatedResult : `${truncatedResult}...`;

// 8-Dado un array de números, escribir una función que elimine todos los números duplicados y devuelva el array resultante sin duplicados.
const setOfArray = new Set();
[1, 1, 1, 1, 2].forEach((n) => setOfArray.add(n));

// 9-Dado un array de números y un número objetivo, escribir una función que encuentre dos números en el array que sumen el número objetivo.
const checkNumbers = (arrayOfNumbers, n) => {
  let secondNumber = null;
  const result = arrayOfNumbers.find((e, index) =>
    arrayOfNumbers.slice(index).find((element2) => {
      const isTrue = element2 + e === n;
      if (isTrue) secondNumber = element2;
      return isTrue;
    })
  );
  return {result, secondNumber};
};
const test = checkNumbers([1, 2, 3], 3);


