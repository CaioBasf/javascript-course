const minNum = 1
const maxNum = 100
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

let attempts = 0
let guessInput = document.getElementById("numberInput")
let placeholder = document.getElementById("placeholder")

function setState(state) {
  placeholder.classList.remove("error", "correct", "extreme-close", "very-close", "getting-closer", "far")
  placeholder.classList.add(state)
}

guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {

    let guess = Number(guessInput.value)

    if (isNaN(guess)) {
      setState("error")
      placeholder.textContent = "Por favor coloque um número válido"
      return
    }
    if (guess < minNum || guess > maxNum) {
      setState("error")
      placeholder.textContent = "Número fora de alcance"
      return
    }

    attempts++
    const difference = Math.abs(guess - answer)

    if (guess === answer) {
      setState("correct")
      placeholder.innerHTML = `Acertou! A resposta era <span class="highlight">${answer}</span> <br> Você tentou acertar <span class="highlight">${attempts}</span> vezes.`
      return
    }

    if (difference <= 5) {
      setState("extreme-close")
      placeholder.textContent = "Extremamente proximo!"
    } else if(difference <= 10) {
      setState("very-close")
      placeholder.textContent = "Muito Proximo!"
    } else if(difference <= 15) {
      setState("getting-closer")
      placeholder.textContent = "Ficando proximo! "
    } else if (guess < answer) {
      setState("far")
      placeholder.textContent = "Valor muito baixo, Tente novamente!"
    } else {
      setState("far")
      placeholder.textContent = "Valor muito alto, Tente novamente!"
    }

    guessInput.value = ""
  }
})