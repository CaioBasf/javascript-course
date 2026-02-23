// callback = a function that is passed as an argument
//            to another function

//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Netword requests
//            3. Interacting with databases

//            "hey, when you're done, call this next."


/* 
hello(leave)

function hello(callback){
  console.log("Hello!")
  callback()
}

function wait(){
  console.log("Wait!")
}

function leave(){
  console.log("Leave!")
}

function goodbye(){
  console.log("Goodbye!!")
}

//Fazendo isso a gente garante que a função será executada apenas depois da função passada como argumento
*/

sum(displayConsole, 1, 2)

function sum(callback, x, y){
  let result = x + y
  callback(result )
}

function displayConsole(result){
  console.log(result)
}