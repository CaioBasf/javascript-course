const submit = document.getElementById("submit")
submit.addEventListener("click", function(){

  const iconsImages = document.getElementById("icons")
  const inputNumber = document.getElementById("inputNumber")
  const counterDices = document.getElementById("counterDices")
  const sumDices = document.getElementById("sumDices")
  const values = []
  const icons = []

    const rolls = Number(inputNumber.value)
    if(rolls <= 0){
      counterDices.innerHTML = `Coloque um número valido`
      return
    } else {
      for(let i = 0; i < rolls; i++){
      const value = Math.floor(Math.random() * 6) + 1
      values.push(value)
      icons.push(`<img src="icons/dice${value}.svg" alt="Dice ${value}">`)
    }
    counterDices.innerHTML = `De ${rolls} dados: ${values.join(", ")}`
    iconsImages.innerHTML = icons.join('')
    const sum = Math.sumPrecise(values) // SumPrecise faz a adição de arrays porem ele ainda não está disponivel em todos os navegadores
    if(sum == values) {
      sumDices.innerHTML = "Não é necessario soma"
    } else {
      sumDices.innerHTML = `Soma: <span style="font-weight:500;">${sum}</span>`
    }
    inputNumber.value = ""
    }

})


