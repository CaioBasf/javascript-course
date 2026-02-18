// spread operator = ... allows an iterable such as an
//                   array or string to be expanded
//                   into separete elements
//                   (unpacks the elements)


/* 
let numbers = [1, 2, 3, 4, 5]
let maximum = Math.max(...numbers) // Separa todos os elementos dentro do array
let minimum = Math.min(...numbers)

console.log(minimum)
*/

/* 
let username = "Caio Bruno"
let letters = [...username].join("") //Separa o nome do usuario em caracteres e coloca qualquer coisa entre eles com o join

console.log(letters)
 */

let fruits = ["apple", "orange", "banana"]
let vegetables = ["carrots", "celery", "potatoes"]

let foods = [...fruits, ...vegetables, "eggs", "milk"]

console.log(foods)