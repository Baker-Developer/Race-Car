// get user input
function getValue() {

  document.getElementById("alert").classList.add("invisible");
  // get user string for page
  let userString = document.getElementById('stringInput').value;
  // check for palindrome
  let returnObj = checkForPalindrome(userString);
  // display message to user
  displayMessage(returnObj);

}

// check if string is palindrome 
function checkForPalindrome(userString) {

  // user input is set to lower case
  userString = userString.toLowerCase();

  let regex = /[^a-z0-9]/gi;
  userString = userString.replace(regex, "");

  let reverseArray = [];

  let returnObj = {};

  for (let index = userString.length - 1; index >= 0; index--) {
    reverseArray += userString[index];
  }

  if (reverseArray == userString) {
    returnObj.msg = "Nicely Done! You Entered A Palindrome";
  } else {
    returnObj.msg = "The Word Sentance, Or Phrase Is Not A Palindrome";
  }

  returnObj.reversed = reverseArray;

  return returnObj;
}


// display a message to the string
function displayMessage(returnObj) {

  document.getElementById("alert-header").innerHTML = returnObj.msg;
  document.getElementById("message").innerHTML = `Your Phrase Reversed Is ${returnObj.reversed}`;
  document.getElementById("alert").classList.remove("invisible");
}