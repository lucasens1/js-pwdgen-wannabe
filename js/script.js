//Elaboro il processo logico di struttura dell'esercizio

// Chiedo all'utente nome, cognome , colore in successione

//Immagazzino così la risposta dell'utente nella variabile UserName, dalla risposta che quest'ultimo darà al prompt

let UserName = prompt("Inserisci il tuo Nome"); //String
console.log(UserName, typeof UserName);

//Immagazzino così la risposta dell'utente nella variabile UserSurname, dalla risposta che quest'ultimo darà al prompt

let UserSurname = prompt("Inserisci il tuo Cognome"); //String
console.log(UserSurname, typeof UserSurname);

//Immagazzino così la risposta dell'utente nella variabile UserColor, dalla risposta che quest'ultimo darà al prompt

let UserColor = prompt("Qual è il tuo colore preferito?"); //String
console.log(UserColor, typeof UserColor);

//Ora alle risposte che l'utente ha dato al prompt, assegno il numero randomico finale, servendomi di una funzione

const RandomNumber = Math.floor(Math.random() * 100); //Number
console.log(RandomNumber);

//Stampo la sequenza full in console

const UserPsw = UserName + UserSurname + UserColor + RandomNumber; //String
console.log(UserPsw, typeof UserPsw);

//Vedo il risultato corretto lo stampo all'interno della pagina

const UserPswGenerated = `
                            Ho generato la tua Psw sgamabilissima ed è <strong> ${UserPsw} </strong>
                        `

document.getElementById("result").innerHTML = UserPswGenerated;