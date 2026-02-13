// for loop = repeat some code a LIMITED amount of times
// A primeira instancia é onde ira começar a contagem, a segunda é onde terminará a contagem e a terceira é o quanto que será pulado, adicionado ou etc durante a contagem.

/* 
for(let i =  10; i > 0; i-= 2){
  console.log(i)
}
console.log("HAPPY NEW YEAR")
*/

/* 
for(let i = 1; i <= 20; i++){
  if(i == 13){
    continue // ira pular essa setença
  }else{
    console.log(i)
  }
}
*/

for(let i = 1; i <= 20; i++){
  if(i == 13){
    break // ira parar quando chegar nesse número 
  }else{
    console.log(i)
  }
}