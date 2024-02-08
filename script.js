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
 var passwordFin ="" //creates an empty string that will eventually contain the characters of our finished password
 var lowercase = "abcdefghijklmnopqrstuvwxyz"; //variable containing a string of lowercase letters
 var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //variable containing a string of uppercase letters
 var numbers = "0123456789"; //variable containing a string of numbers
 var special = "!£$%^&*()_+=-{}[]:;@'~#<>,.|?/"; //variable containing a string of special characters

 //the following code opens a box at the top of the webpage that asks the user if they would like to include a certain set of characters in their password
 var lowercaseChars = confirm("Click OK for lowercase characters to be included in your password or click cancel to move on to the next section")
 var uppercaseChars = confirm("Click OK for uppercase characters to be included in your password or click cancel to move on to the next section")
 var numberChars = confirm("Click OK for numbers to be included in your password or click cancel to move on to the next section")
 var specialChars = confirm("Finally, would you like to include special characters within your password?")
 if (lowercaseChars || uppercaseChars || numberChars || specialChars) {

    //The following checks what character types the user has selected and assigns them to the passwordChars variable
    var passwordChars = ""
   if (lowercaseChars) {
      passwordChars += lowercase
    }
    if (uppercaseChars) {
      passwordChars += uppercase
    }
    if (numberChars) {
      passwordChars += numbers
    }
    if (specialChars) {
      passwordChars += special
  }

    //The following code asks the user how many characters they would like their password to be. 
   //If the user enters a number less than 8 or greater than 128, they are prompted to enter a number between 8-128
    //If the user enters a non-number, they are prompted to enter a valid number
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

      // the following for loop declares a variable i that starts at 0, and as long as i is less than the passwordLength chosen by the user, 
      //i will increase by 1. 
      //it then assigns random characters within the 
      //math.floor rounds the number down to the nearest whole number
     //math.random generates a random number between 0 and 1
      for (var i = 0; i < passwordLength; i++) {
      passwordFin += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
      }

    }
    return passwordFin

 } else {
    alert("please select at least 1 character type")
 }

}
