// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let typeArr = [];
generateBtn.addEventListener("click", writePassword);
var generatePassword = function() { 
  
  const numChars = prompt("How many characters (8-126)");
  if (!isNaN(numChars) && numChars >= 8 && numChars < 129) {
    
    const userSpecialChars = confirm("Would you like to use special characters? ($$*%_ etc)");
    if (userSpecialChars === true) {
      typeArr.push("specialChars");
    }
    const useUpperCase = confirm("Would you like to include uppercase letters?");
    if (useUpperCase === true) {
      typeArr.push("upperCase");
    }
    const useNumbers = confirm("Would you like to use numbers?");
    if (useNumbers === true) {
      typeArr.push("numbers");
    }
    
    const random = Math.floor(Math.random() * myArr.length);
    //console.log(random, myArr[random]);
    
    for (i = 1; i <= numChars; i++) {
      const random = Math.floor(Math.random() * myArr.length);
      //console.log(myArr[random]);
      if (typeArr[random] === "numbers") {
        myRandNum = randomNum(9);
        console.log(myRandNum);
      } else if (typeArr[random] === "upperCase") {
       myRandUpperCase = randomLetter().toUpperCase;
        console.log(myRandUpperCase);
      }
    }
  } else {
    generatePassword();
  }
  return;
};

function randomNum(max) {
  return Math.floor(Math.random() * max);
}

function randomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}