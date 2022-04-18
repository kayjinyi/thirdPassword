function generatePassword(){
  //TODO: Assigning Variables
var p=""
var len = prompt("The length of passords")
if(len > 128|| len<8 ){
  alert("Length of passord should be at least 8 characters and no more than 128 characters");
  return;}
var lowerOrNot = confirm("Would you like lowercase letters")
var upperOrNot = confirm("Would you like uppercase letters")
var numericOrNot = confirm("Would you like numbers")
var specialOrNot = confirm("Would you like special characters")

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var number = "0123456789"
var special = "!\"§$%&/()=?\u{20ac}"

var characters = ""
if(lowerOrNot){
  characters = characters + lower
}
if(upperOrNot){
  characters = characters + upper
}
if(numericOrNot){
  characters = characters + number
}
if(specialOrNot){
  characters = characters + special
}
return makePW(len, characters)

function makePW(length, characters) {
  var result           = '';
  //var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"§$%&/()=?\u{20ac}';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}
// return p;
}

// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
