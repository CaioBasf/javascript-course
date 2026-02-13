const minNum = 1
const maxNum = 100
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

let attempts = 0
let guessInput = document.getElementById("numberInput")
let placeholder = document.getElementById("placeholder")

guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {

    let guess = Number(guessInput.value)

    if (isNaN(guess)) {
      placeholder.textContent = "Por favor coloque um número válido"
      return
    }
    if (guess < minNum || guess > maxNum) {
      placeholder.textContent = "Número fora de alcance"
      return
    }

    attempts++
    const difference = Math.abs(guess - answer)

    if (guess === answer) {
      placeholder.textContent = `Acertou! A resposta era ${answer} Você tentou acertar ${attempts} vezes.`
      return
    }

    if (difference <= 5) {
      placeholder.textContent = "Extremamente proximo!"
    } else if(difference <= 10) {
      placeholder.textContent = "Muito Proximo!"
    } else if(difference <= 15) {
      placeholder.textContent = "Ficando proximo! "
    } else if (guess < answer) {
      placeholder.textContent = "Valor muito baixo, Tente novamente!"
    } else {
      placeholder.textContent = "Valor muito alto, Tente novamente!"
    }

    guessInput.value = ""
  }
})