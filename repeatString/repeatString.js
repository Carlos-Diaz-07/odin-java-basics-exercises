function repeatString(oString, num) {
  fString = [];
  if (num <= -1) {
    return "ERROR";
  } else if (num == 0) {
    return "";
  } else {
    for (i = 0; i < num; i++) {
      fString.push(oString);
    }
  } return fString.join("")
}

module.exports = repeatString
