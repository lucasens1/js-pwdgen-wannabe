//Elaboro il processo logico di struttura dell'esercizio

// Chiedo all'utente nome, cognome , colore in successione

//Immagazzino così la risposta dell'utente nella variabile UserName, dalla risposta che quest'ultimo darà al prompt

let userName = prompt("Inserisci il tuo Nome"); //String
console.log(userName, typeof userName);

//Immagazzino così la risposta dell'utente nella variabile UserSurname, dalla risposta che quest'ultimo darà al prompt

let userSurname = prompt("Inserisci il tuo Cognome"); //String
console.log(userSurname, typeof userSurname);

//Immagazzino così la risposta dell'utente nella variabile UserColor, dalla risposta che quest'ultimo darà al prompt

let userColor = prompt("Qual è il tuo colore preferito?"); //String
console.log(userColor, typeof userColor);

//Ora alle risposte che l'utente ha dato al prompt, assegno il numero randomico finale, servendomi di una funzione

const randomNumber = Math.floor(Math.random() * 100); //Number
console.log(randomNumber);

//Stampo la sequenza full in console

const userPsw = userName + userSurname + userColor + randomNumber; //String
console.log(userPsw, typeof userPsw);

//Vedo il risultato corretto lo stampo all'interno della pagina

const userPswGenerated = `
                            Ho generato la tua Psw sgamabilissima ed è <strong> ${userPsw} </strong>
                        `

document.getElementById("result").innerHTML = userPswGenerated;