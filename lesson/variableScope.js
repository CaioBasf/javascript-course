// variable scope = where a variable is recognized
//                  and accessible (local vs global)

let x = 3 // Variavel global

function function1(){
  let x = 1 // Variavel local
  console.log(x)
}

// Funções não podem ver atráves de outras funções, ou seja se eu chamar uma variavel que seja de outra função ela não vai saber que variavel é essa

function function2(){
  let x = 2
  console.log(x)
}

// Se tiver uma variavel global e uma local com o mesmo nome e eu chamar essa função, a variavel que terá prioridade de output será a variavel local