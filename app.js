// Good luck!

let gameOn = true;
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let theNumbersWere = []

console.log(secretNumber)

// Desde un primer momento necesitamos mostrar los intentos restantes.
const numberOfAttempts = document.querySelector(".lastResult") ;



// Función que muestra el mensaje en pantalla.
function displayMessage(message){
  document.querySelector('.lowOrHi').textContent = message
}


document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Impedimos que el formulario haga un petición GET
  // 1. Al hacer click en submit guardamos el valor ingresado por el usuario.
  let userNumber = document.querySelector('#guessField').value
  numberOfAttempts.textContent = attempts;

  console.log(userNumber)
  
  // If the guess is too high
  if (userNumber > secretNumber){
    displayMessage('Too High! Try again~')
    attempts--;

  }else if (userNumber < secretNumber){
    displayMessage('To low! Try again~')
    attempts--;
    
  }else{
    displayMessage('Has ganado!')
    attempts--;
  }
  
});
