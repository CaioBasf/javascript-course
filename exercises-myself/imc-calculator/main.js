let heightInput = document.getElementById("height-input")
let weightInput = document.getElementById("weight-input")
const resultOutput = document.getElementById("result")
const classification = document.getElementById("classification")
const calculate = document.getElementById("calculate-button")

heightInput.addEventListener("input", function() {
  /*
  addEventListener
  uma forma mais dinamica para:
  heightInput.onclick = fuction(){}
  É necessario apenas escrever o que a função faz e o que ela vai fazer quando clickado
  */
  let numbersFixed = this.value.replace(/\D/g, "") 
  /* 
  Primeiro contato com REGEX 
  Explicando o padrão: /\D/g
  / = inicio e fim do Regex
  \D = Qualquer caractere que não seja número
  g = aplicar globalmente
  */

  if (numbersFixed.length > 3) {
    numbersFixed = numbersFixed.slice(0, 3)
  }
  /* 
   Limita que o input do usuario ultrapasse 3
   "Ah mas já tem limitação no HTML"
   para garantir que os dados não saiam de três também tem uma limitação na parte lógica por segurança
   */

  if (numbersFixed.length >= 2) {
    this.value = numbersFixed[0] + "." + numbersFixed.slice(1)
    /*
    Depois que o usuario digita mais de dois números ou dois números ele coloca o ponto entre o primeiro número e o segundo
    */
  } else {
    this.value = numbersFixed
  }
  /*
  Se caso ele só digitar 1 número não aparecera nenhum ponto.
  */

})

weightInput.addEventListener("input", function() {

  let numbersFixed = this.value.replace(/\D/g, "") 

  if(numbersFixed.length > 3) {
    numbersFixed = numbersFixed.slice(0, 3)
  }

  this.value = numbersFixed
})

function setState(state) {
  classification.classList.remove("yellow", "green", "orange-light", "orange", "red")
  classification.classList.add(state)
}


calculate.addEventListener("click", function(){
  weight = Number(weightInput.value)
  height = Number(heightInput.value)
  let imc = weight / (height * height)
  let numbersFixed = imc.toFixed(2)

  resultOutput.textContent = numbersFixed

  if(numbersFixed <= 18.5){
    setState("yellow")
    classification.textContent = "Abaixo do peso"
  } else if(numbersFixed >= 18.6 && numbersFixed <= 24.9) {
    setState("green")
    classification.textContent = "Peso saudável"
  } else if(numbersFixed >= 25.0 && numbersFixed <= 30.0) {
    setState("orange-light")
    classification.textContent = "Sobrepeso"
  } else if(numbersFixed >= 30.1 && numbersFixed <= 39.9) {
    setState("orange")
    classification.textContent = "Obeso"
  } else if(numbersFixed >= 40) {
    setState("red")
    classification.textContent = "Obeso mórbido"
  }

})