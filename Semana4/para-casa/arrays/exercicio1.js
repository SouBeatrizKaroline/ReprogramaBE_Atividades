// 1. Praticar o uso dos métodos push, shift, unshift, forEach, slice, filter, find e map para manipular um array de números.

const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

numeros.push(100, 200);

numeros.shift();

numeros.unshift(5);

numeros.forEach((numero) => {
  console.log(numero);
});

const novoArraySlice = numeros.slice(2, 6);
console.log(novoArraySlice);

const novoArrayFilter = numeros.filter((numero) => numero > 50);
console.log(novoArrayFilter);

const numeroPar = numeros.find((numero) => numero % 2 === 0);
console.log(numeroPar);

const novoArrayMap = numeros.map((numero) => numero * 2);
console.log(novoArrayMap);
