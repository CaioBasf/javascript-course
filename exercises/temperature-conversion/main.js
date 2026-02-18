const answerText = document.getElementById("answer")
const celsToFahre = document.getElementById("celsToFahre")
const fahreToCels = document.getElementById("fahreToCels")
const answerSubmit = document.getElementById("submit")
const entry = document.getElementById("entry")



answerSubmit.addEventListener("click", function(){
  let entryNumber = Number(entry.value)
  let fahreToCelsCal = 5/9 * (entryNumber - 32)
  let celsToFahreCal = entryNumber * 1.8 + 32

  if(fahreToCels.checked){
    answerText.textContent = fahreToCelsCal.toFixed(1) + "°C"
  } else if(celsToFahre.checked){
    answerText.textContent = celsToFahreCal.toFixed(1) + "°F"
  } else {
    answerText.textContent = "Selecione uma unidade de medida"
  }
  entry.value = ""
})