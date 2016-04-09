var dessert = "ICE CREAM"; // question one
var team = "SEAHAWKS"; // question two
var child = "SON"; // question three

var userName = prompt ("Hey, what's your name?"); //greeting
alert ("Hey " + userName + " nice to meet you. Time to guess my favorite things");

var dessertAnswer = prompt ("Is my favorite dessert ice cream or cookies") //question one
dessertAnswer = dessertAnswer.toUpperCase();
console.log("user input for dessertAnswer " + dessertAnswer);
if (dessert === dessertAnswer){
  alert ("Yep! I love ice cream")
} else { alert ("Actually, it's ice cream")}

var teamAnswer = prompt ("Do I like the Seahawks or Mariners more?")//question two
teamAnswer = teamAnswer.toUpperCase();
console.log("user input for teamAnswer " + teamAnswer);
if (team === teamAnswer){
  alert ("That's right. Go hawks!")
} else {
  alert ("No. I'm more of a football fan.")
}

var childAnswer = prompt ("Do I have a son or a daughter?")//question three
childAnswer = childAnswer.toUpperCase();
console.log("user input for childAnswer " + childAnswer);
if (child === childAnswer){
  alert ("That's right. His name is Silas")
} else {
  alert ("Actually, I have a son.")
}

//Guess age of son
//var guessNum = prompt ("Okay, time to guess the number I'm thinking of from 1 - 10.")

guessAge = 3;
var guessAge = parseInt(prompt ("How old do you think my son is?"))
if (guessAge === 3){
  alert("That's right! You guessed it.")
} else if (guessAge > 3) {
  alert("Too high. He's 3")
  counter++;
} else {alert("Close, he's 3")
  counter++;
}
