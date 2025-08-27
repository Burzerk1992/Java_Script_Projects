const results = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const headerImage = document.getElementById("header-image");

function checkPalindrome() {
  let enteredValue = textInput.value.toLowerCase().replace(/[^0-9a-z]/gi, '');
  console.log("regex text: " + enteredValue);
  let reversedValue = enteredValue.split("").reverse().join("");
  console.log("reversed text: " + reversedValue);
  
  if (enteredValue.length === 0) {
    window.alert("Please input a value");
  } else if (enteredValue === reversedValue) {
    results.innerText = `${textInput.value} is a palindrome`;
    headerImage.style.transform = "scaleX(-1)";
    console.log(`${textInput.value} is a palindrome`)
  } else {
    results.innerText = `${textInput.value} is not a palindrome`;
    headerImage.style.transform = "none";
    console.log(`${textInput.value} is not a palindrome`)
  }

}
