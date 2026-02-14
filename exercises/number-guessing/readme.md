# Number Guessing Game | Jogo de Advinhar Número

## Objetivo
Uma lição do curso de desenvolvimento JavaScript do [BroCode](https://youtu.be/lfmg-EJ8gm4?si=3Jwk55E92pEUcOxm) que resolvi ir além.


## Proposta
- O usuário deve advinhar um número de 1 a 100
- Retornar possiveis erros
- O quanto estava perto de acertar
- Se o usuário acertou
- Destacar a resposta

## Lógica
- ### Geração de número aleatório com Math.random()
  É o core da aplicação e bem simples de ser definido:  
  ```js
  const minNum = 1
  const maxNum = 100
  const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
  ```
  A nessidade de criar constantes dedicadas para a expressão é __flexibilidade__, se afim de testes o dev precisar mudar de 1 a 10 ele pode fazer isso sem encostar na expressão principal.

  O conceito geral da expressão é que o `Math.floor()` arredonda tudo para menos, já que a trabalha em seu padrão com número do tipo float. Logo em seguida nós multiplicamos a função `Math.random()` pelo nosso intervalo e adicionar pelo valor minimo.
- ### Cálculo de diferença com Math.abs()
  Para definirmos se o número que o usuário digitou é proximo ou não criei uma outra expressão bem simples:
  ```js
  const difference = Math.abs(guess - answer)
  ```
  É importante usar o `Math.abs()` pois ele ira garatir que o número que será calculado será sempre positivo, assim podemos usar ele como metrica.
- ### Feedback por proximidade
  O usuário irá ter um feedback visual e estilizado para saber se o número esta proximo:
  ```js
  function setState(state) {
  placeholder.classList.remove("error", "correct", "extreme-close", "very-close", "getting-closer", "far")
  placeholder.classList.add(state)
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
    }
  ```
  A função criada ela primeiro remove todas as classes que o placeholder pode estar segurando evitando __uma sobreposição em cascata__ e logo apos a gente coloca uma expressão para adicionar a classe desejada como argumento, assim podemos definir qual classe que sera colocada em cada situação retornando um feedback! 
- ### Sistema de tentativas
  O usuário poderá saber quantas vezes ele tentou acertar o número sendo outra expressão muito simples:
  ```js
  attempts++
  ```
  Onde colocamos logo após todos os tratamentos de erro (já que o erro é desconsiderado de tentativa), antes de de todas as verificações de estados, assim quando o usuario coloca um número é considerado uma tentativa e se errar ele retorna pro começo dando o feedback como falei anteriomente e adicionando mais uma tentativa
- ### Validação de entrada
  Onde o usuário pode enviar suas tentativas, resolvi não fazer com o boring window.prompt e não quis colocar um botão como submit então achei melhor fazer um evento de tecla mesmo:
  ```js
  guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {

  }}
  ```
  Então se o usuário apertar a tecla o programa irá fazer todo o tratamento necessario.
