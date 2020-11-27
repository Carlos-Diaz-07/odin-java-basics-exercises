function reverseString(string) {
  rString = [];
  for (i = string.length - 1; i >= 0; i--) {
  rString.push(string.charAt(i));
  } 
  return rString.join("")
}
module.exports = reverseString
