// array = a variable like structure that can hold
//         more than 1 value

let fruits = ["apple", "banana", "orange", "watermelon", "coconut"]

// fruits[2] = "coconut" //Subescreve o valor 
// fruits.push("coconut") //Adiciona como ultimo valor do array
// fruits.pop() //Remove o ultimo valor do array
// fruits.unshift("mango") //Adiciona o valor no inicio do array
// fruits.shift() //Remove um elemento do começo do array

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

// let numOfFruits = fruits.length //Quantos elementos tem dentro do Array
// let index = fruits.indexOf("apple") //Procura um elemento especifico no Array

/* 
for(let i = 1; i < fruits.length; i++){
  console.log(fruits[i])
}
*/
fruits.sort() // Coloca os itens em ordem alfabetica
fruits.sort().reverse() // Inverte os itens em ordem alfabetica

for(let fruit of fruits){ //Atalho para o for loop ai em cima
  console.log(fruit)
}
