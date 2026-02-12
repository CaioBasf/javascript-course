// ternary operator = a shortcut to if{} and else {} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse
/* 
let age = 21;
let message = age >= 18 ? "You're an adult" : "You're a minor"

// | Esses dois são a mesma coisa só que um é muito menor...

if(age >= 18) {
  console.log("You're an adult")
} else {
  console.log("You're a minor")
}
console.log(message)
*/

/* 
let time = 9
let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!"
console.log(greeting)
*/

let purchaseAmount = 125
let discount = purchaseAmount >= 100 ? 10 : 0
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`)