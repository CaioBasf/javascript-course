/*
let age = 19
if(age >= 18){
  console.log("You are old enough to enter this site")
} else {
  console.log("You must be a 18+ to enter this site")
}
*/

/* 
let time = 9
if(time < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!")
}
*/

/* 
let isStudent = false
if(isStudent) { // O true sempre vai prevalecer a primeira declaração
  console.log("You are a student")
} else {
  console.log("You are NOT a student!")
} 
*/

/* 
let age = 18
let hasLicense = true

if(age >= 18){
  console.log("You are old enough to drive")

  if(hasLicense){
    console.log("You have your license!")
  } else {
    console.log("You do not have your license yet")
  }
} else {
  console.log("You must be a 16+ to have a license")
}
*/

let age = 0

if(age >= 100) {
  console.log("You are TOO OLD to enter this site")
} else if(age ==0) {
  console.log("You can't enter. You were just born.")
} else if(age >= 18){
  console.log("You are old enough to enter this site")
} else if(age < 0) {
  console.log("Your age can't be below 0")
} else {
  console.log("You must be a 18+ to enter this site")
}