var dessert = "ICE CREAM"; // question one
var team = "SEAHAWKS"; // question two
var child = "SON"; // question three
var guessAge = 3; // questioin four
var counter = 0;

var userName = prompt ("Hey, what's your name?"); //greeting
alert ("Hey " + userName + " nice to meet you. Time to guess some things about me. Let's see how many you get right.");

var dessertAnswer = prompt ("Is my favorite dessert ice cream or cookies") //question one
dessertAnswer = dessertAnswer.toUpperCase();
console.log("user input for dessertAnswer " + dessertAnswer);
if (dessert === dessertAnswer){
  alert ("Yep! I love ice cream")
  counter++;
} else { alert ("Actually, it's ice cream")}

var teamAnswer = prompt ("Do I like the Seahawks or Mariners more?")//question two
teamAnswer = teamAnswer.toUpperCase();
console.log("user input for teamAnswer " + teamAnswer);
if (team === teamAnswer){
  alert ("That's right. Go hawks!")
  counter++;
} else {
  alert ("No. I'm more of a football fan.")
}

var childAnswer = prompt ("Do I have a son or a daughter?")//question three
childAnswer = childAnswer.toUpperCase();
console.log("user input for childAnswer " + childAnswer);
if (child === childAnswer || childAnswer === "s" || childAnswer === "S"){
  alert ("That's right. My son's name is Silas")
  counter++;
} else {
  alert ("Actually, I have a son.")
}


var guessAge = parseInt(prompt ("How old do you think my son is?"))
console.log("user input for guessAge " + guessAge);
if (guessAge === 3){
  alert("That's right! You guessed it.")
  counter++;
} else if (guessAge > 3) {
  alert("Too high. He's 3")
} else {alert("Close, he's 3")
  counter++;
}
alert("You got " + counter + " questions right!")

var userNum = parseInt(prompt("Let's do one more. Guess a number between 1 and 10"));
while (userNum !==6) {
if (userNum > 6) {
  userNum = parseInt(prompt ("Too high. Please try again."));
} else if (userNum < 6){
  userNum = parseInt(prompt ("Too low. Please try again."));
}
}
alert ("You guess it!");
