
// 1-Dado un array de números, escribir una función que encuentre el número más grande.

const mayor = [1, 2, 3].reduce((acc, actual) =>
  actual > acc ? actual : acc
);
console.log(mayor) //3


// otra manera de solucionarlo es utilizando el operador de propagacion directamente al array:
console.log(Math.max(...[1,2,3]))

//Otra manera:

const array = [1,2,3,4]
console.log (Math.max(...array))

/* se usa el operador de propagación (...) para pasar los elementos del array como argumentos a la función Math.max
al usar el spread operator estamos expandiendo el array en una lista de argumentos. console.log(Math.max(1, 2, 3));
*/

/*
Math.max() es un MÉTODO ESTÁTICO de la clase Math, lo que significa que se puede llamar directamente en la clase Math
sin tener que crear una instancia de la misma. Por lo tanto, se coloca antes del contenido al que se le quiere aplicar la función.
Por otro lado, el método slice() es un MÉTODO DE INSTANCIA de la clase Array, lo que significa que se debe llamar en una instancia
de un array. Por lo tanto, se coloca después del array al que se le quiere aplicar la función.
En resumen, la diferencia en la sintaxis se debe a que Math.max() es un método estático mientras que slice() es un método de instancia.

*/

/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/


// 2 -dado un array de numeros, escribir una función que sume los todos indices empezando por el indice 2

const suma = [1, 2, 3, 4].slice(2).reduce((acumulador, valorActual) => acumulador + valorActual)
console.log(suma);

//otra manera:
const array1 = [1,2,3,4]
console.log(array1.slice(2).reduce((acc,act)=>acc+act))

/*

slice se usa con indice inicial , indice final(no incluido, se incluye el indice anterior), si no 
se le coloca indice final se sobreentiende que seria todo el array 

también se puede usar el método splice, pero la diferencia es que este último modifica el array original



*/


/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/


// 3-Dado un array de números, escribir una función que calcule la suma de todos los elementos.

console.log([1,2,3,4].reduce((acc,act)=>acc+act))

/*si quisiera que empezara a sumar por un número(no indice) que yo quiera se haria así:

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


/*En JavaScript, las cadenas "son inmutables", lo que significa que no se pueden modificar directamente.
Por lo tanto, para invertir el orden de los caracteres de una cadena, es necesario primero convertirla 
en un arreglo de caracteres individuales utilizando el método split('')( [ 'n', 'o', 'e', 'l' ] ). 
Una vez que se tiene el arreglo de caracteres, se puede utilizar el método reverse para invertir el orden
de sus elementos y luego el método join('') para unir los caracteres en una nueva cadena invertida.
si a join le paso un argumento como la coma los unirá con comas.
*/
/*
el método split usa dos argumentos, el primero es el tipo de separador y el segundo es la cantidad  ejemplo:
const str = 'one two three';
console.log(str.split(' ')); // ['one', 'two', 'three']
console.log(str.split(' ', 2)); // ['one', 'two']
*/


/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/

// 6-Dado un string, escribir una función que encuentre la palabra más larga en el string.
const resultLonger = 'hola mundo estoy preparado'
console.log(resultLonger.split(" ").reduce((acc, act) => 
(acc.length > act.length ? acc : act)))

 /*
 la diferencia de usar
 sin espacio split('') = ["h", "o", "l", "a", " ", "m", "u", ...]
 con espacio split(' ') = ["hola", "mundo", "estoy", "preparad...]
 
 ternaria:
 condicion ? cuando es cierto : cuando es falso
 puntaje>6 ? 'pasaste' : 'fallaste'
 
 */
/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/

// 7-Dado un string con muchas palabras ejemplo (const resultLonger = 'hola  mundo  estoy  preparado'), escribir una función que extraiga la segunda palabra.

const words1 = 'hola mundo estoy preparado'
console.log(words1.split(' ')[3]) //preparado

/*
debido a que el método split divide la cadena en un array, se puede acceder a los valores del array colocandolo
entre corchetes.
*/

/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/
  
// 8-Dado un string y un número n, escribir una función que trunque el string a n caracteres y agregue "..." al final.
const n = 5;
const truncatedResult =  "hola gentleman programming".slice(0, n);
const truncatedText = truncatedResult.length < n ? truncatedResult : `${truncatedResult}...`;


/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/

// 9-Dado un array de números, escribir una función que elimine todos los números duplicados y devuelva el array resultante sin duplicados.
const setOfArray = new Set();
[1, 1, 1, 1, 2].forEach((n) => setOfArray.add(n));


/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/


// 10 -Get the value "Volvo" from the cars array.
const cars = ["Saab", "Volvo", "BMW"]



/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/

//11- Change the first item of cars1 to "Ford".
const cars1 = ["Volvo", "Jeep", "Mercedes"]
cars1[0]='ford'
console.log(cars1)


/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/


/* 12- programa una función que dada una String te devuelva un 
Array de textos separados por cierto caracter,
 pe. miFuncion('hola que tal', ' ') 
 devolverá ['hola', 'que', 'tal'].
  */

 const cadenaAArreglo = (cadena = "", separador = undefined) =>
 (!cadena)
   ? console.warn('No ingresaste ninguna cadena de texto')
   : (separador === undefined)
     ? console.warn('No ingresaste el caracter separador')
     : console.info(cadena.split(separador,))

cadenaAArreglo("lorem22", "")

/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/

// 13- Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total. Usa el bucle que quieras para solucionarlo.

let numeros = [1,2,3,4,5]
function sumarPares(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      suma += numeros[i];
    }
  }
  return suma;
}
console.log(sumarPares(numeros))

/*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/

// 14- crear un array vacio e insertar los números del 1 al 10

let insert = []
 for (let i = 1; i < 11 ; i++){
  insert.push(i)
 }
 console.log(insert)

 /*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/

// 15- dado el siguiente array ['Banana', 'Orange', 'Apple'], eliminar en último indice y devolver el array nuevo.

const fruits = ['Banana', 'Orange', 'Apple']
console.log(fruits.pop())
console.log(fruits)

 /*___________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________*/

// 16- dado el siguiente array ['banana', 'orange', 'apple', 'kiwi'] mostrar los indices 1 y 2 en un solo array

const fruits1 = ['banana', 'orange', 'apple', 'kiwi']
console.log(fruits1.splice(1,2))
console.log(fruits1)
