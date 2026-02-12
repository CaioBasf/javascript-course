const myText = document.getElementById("age")
const submit = document.getElementById("submit")
const yourAge = document.getElementById("yourAge")
let age

submit.onclick = function() {

  age = myText.value

  if(age >= 100) {
    yourAge.textContent = "You are TOO OLD to enter this site"
  } else if(age ==0) {
    yourAge.textContent = "You can't enter. You were just born."
  } else if(age >= 18){
    yourAge.textContent = "You are old enough to enter this site" 
  } else if(age < 0) {
    yourAge.textContent = "Your age can't be below 0" 
  } else {
    yourAge.textContent = "You must be a 18+ to enter this site"
  }
}

