// var dessert = "ICE CREAM"; // question one
// var team = "SEAHAWKS"; // question two
// var child = "SON"; // question three
//
// var userName = prompt ("Hey, what's your name?"); //greeting
// alert ("Hey " + userName + " nice to meet you. Time to guess my favorite things");
//
// var dessertAnswer = prompt ("Is my favorite dessert ice cream or cookies") //question one
// dessertAnswer = dessertAnswer.toUpperCase();
// console.log("user input for dessertAnswer " + dessertAnswer);
// if (dessert === dessertAnswer){
//   alert ("Yep! I love ice cream")
// } else { alert ("Actually, it's ice cream")}
//
// var teamAnswer = prompt ("Do I like the Seahawks or Mariners more?")//question two
// teamAnswer = teamAnswer.toUpperCase();
// console.log("user input for teamAnswer " + teamAnswer);
// if (team === teamAnswer){
//   alert ("That's right. Go hawks!")
// } else {
//   alert ("No. I'm more of a football fan.")
// }
//
// var childAnswer = prompt ("Do I have a son or a daughter?")//question three
// childAnswer = childAnswer.toUpperCase();
// console.log("user input for childAnswer " + childAnswer);
// if (child === childAnswer){
//   alert ("That's right. His name is Silas")
// } else {
//   alert ("Actually, I have a 3 year old son.")
// }

//Number guessing
var guessNum = prompt ("Okay, time to guess the number I'm thinking of from 1 - 10.")
var message;
guessNum = parseInt(prompt ("Okay, time to guess the number I'm thinking of from 1 - 10."))
if (guessNum === 5){
  alert("That's right! You guessed it.")
} else if (guessNum > 5) {
  alert("Too high. Guess again")
} else {alert("Too low, try again")}
