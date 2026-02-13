/* 
const fullName = "Caio Bruno Alves Santana Ferreira"

let firstName = fullName.slice(0, 4) // Retorna os caracteres da primeira posição escolhida até a ultima
let lastName = fullName.slice(5, 10)

let firstChar = fullName.slice(0, 1)
let lastChar = fullName.slice(-1)


let firstName = fullName.slice(0, fullName.indexOf(" ")) // Função para buscar o primeiro nome da pessoa
let lastName = fullName.slice(fullName.lastIndexOf(" ") + 1) // Função para buscar o ultimo nome da pessoa

console.log(firstName)
console.log(lastName)
console.log(firstChar)
console.log(lastChar)
*/

const email = "caiosantana757@gmail.com"

let username = email.slice(0, email.indexOf("@"))
let extension = email.slice(email.indexOf("@") + 1)
console.log(username)
console.log(extension)