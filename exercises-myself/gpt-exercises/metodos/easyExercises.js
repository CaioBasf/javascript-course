// Use forEach para imprimir no console cada número multiplicado por 2
const numeros = [1, 2, 3, 4, 5]

numeros.forEach(dobro)

function dobro(element){
  console.log(element * 2)
}

//Use map para criar um novo array contendo o quadrado de cada número.

const numeros2 = [1, 2, 3, 4]
const quadrados = numeros2.map(quadrado)

display(quadrados)

function display(array){
  console.log(array)
}

function quadrado(element){
  return element ** 2 // Pq eu tenho que colocar obrigatoriamente o return?
}

//  Use filter para retornar apenas idades maiores ou iguais a 18.

const idades = [12, 18, 21, 15, 30]
let maioridade = idades.filter(maior)
// se eu quiser fazer aparecer um novo array com as idades que passaram?
console.log(maioridade)

function maior(idade){
  return idade >= 18
}

// callback simples

executarOperacao(5)

function executarOperacao(callback){
  return console.log(callback ** 3)
}

// map com strings

const nomes = ["ana", "carlos", "maria"];
let nomesMaisculos = console.log(nomes.map(maiuscula))

function maiuscula(index){
  return index.toUpperCase()
}

// filter com números pares

const numeros3 = [3, 8, 11, 20, 7, 6];
let pares = numeros3.filter(parImpar)

function parImpar(numero){
  return numero % 2 === 0
}

/* forEach → executa algo (não retorna array)

map → transforma elementos (precisa return)

filter → seleciona elementos (precisa true/false) 
*/

//final boss

const numeros4 = [5, 12, 8, 130, 44]
let maiores = numeros4.filter(maior)
let resultado = maiores.map(dobro)

function maior(numero){
  return numero > 10
}

function dobro(numero){
  return numero * 2
}

console.log(resultado)
