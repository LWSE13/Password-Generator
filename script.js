// Assignment Code
//document is a built in object that allows you to access the webpage's content
var generateBtn = document.querySelector("#generate"); //Assigns the html button element with the id "generate" to the variable generateBtn

// Write password to the #password input
function writePassword() { //the function responsible for password generation
  var password = generatePassword(); //crates a variable password that is the result of the generatePassword function (line 14-16)
  var passwordText = document.querySelector("#password"); //creates a passwordText variable then uses document.queryselector to select the css id #password and assigns it to the variable passwordText

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when the button is clicked, the writePassword function is called

function generatePassword(){
  var passwordFin =""
 var lowercase = "abcdefghijklmnopqrstuvwxyz"; //variable containing a string of lowercase letters
 var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //variable containing a string of uppercase letters
 var numbers = "0123456789"; //variable containing a string of numbers
 var special = "!£$%^&*()_+=-{}[]:;@'~#<>,.|?/"; //variable containing a string of special characters

 //the following code opens a box at the top of the webpage that asks the user if they would like to include a certain set of characters in their password
 var lowercasePref = confirm("Click OK for lowercase characters to be included in your password or click cancel to move on to the next section")
 var uppercasePref = confirm("Click OK for uppercase characters to be included in your password or click cancel to move on to the next section")
 var numberPref = confirm("Click OK for numbers to be included in your password or click cancel to move on to the next section")
 var specialPref = confirm("Finally, would you like to include special characters within your password?")
 if (lowercasePref || uppercasePref || numberPref || specialPref) {

  var passwordChars = ""
  if (lowercasePref) {
    passwordChars += lowercase
  }
  if (uppercasePref) {
    passwordChars += uppercase
  }
  if (numberPref) {
    passwordChars += numbers
  }
  if (specialPref) {
    passwordChars += special
  }


  console.log(passwordChars)
  var passwordLength = prompt("How many characters would you like to include within your password?")
 if (isNaN(passwordLength)) {
  alert("please enter a valid number")
  generatePassword()
 } else if (passwordLength<8){
 alert("Please keep your password between 8-128 characters")
 generatePassword()
  } else if(passwordLength>128) {
  alert("Please keep your password between 8-128 characters")
  generatePassword()
} else {

  for (var i = 0; i < passwordLength; i++) {
  passwordFin += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
}
console.log(passwordFin)
}
return passwordFin

 } else {
  alert("please select at least 1 character type")
  
 }

}
