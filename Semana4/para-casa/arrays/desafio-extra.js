// 2. Use os métodos encadeados para remover o último elemento do array, em seguida, filtrar os números pares e, por fim, criar um novo array com os números pares multiplicados por 2. Imprima o novo array no console.

const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

const novoArray = numeros
  .slice(0, -1)
  .filter((numero) => numero % 2 === 0) 
  .map((numero) => numero * 2);

console.log(novoArray);