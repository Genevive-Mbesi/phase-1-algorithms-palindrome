

// function for isPalindrum

function isPalindrome(word) {
  if (isPalindrome) {
    return(true);
  } else { 
    return(false);
  }
  
}

if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
