var dessert = "ice cream"; // question one
var team = "seahawks"; // question two
var child = "son"; // question three

var userName = prompt ("Hey, what's your name?"); //greeting
alert ("Hey " + userName + " nice to meet you. Time to guess my favorite things");

var dessertAnswer = prompt ("Is my favorite dessert ice cream or cookies") //question one
console.log("user input for dessertAnswer " + dessert);
if (dessert === dessertAnswer){
  alert ("Yep! I love ice cream")
} else { alert ("Actually, it's ice cream")}

var teamAnswer = prompt ("Do I like the Seahawks or Mariners more?")//question two
console.log("user input for teamAnswer " + team);
if (team === teamAnswer){
  alert ("That's right. Go hawks!")
} else {
  alert ("No. I'm more of a football fan.")
}

var childAnswer = prompt ("Do I have a son or a daughter?")//question three
console.log("user input for childAnswer " + child);
if (child === childAnswer){
  alert ("That's right. His name is Silas")
} else {
  alert ("Actually, I have a 3 year old son.")
}
