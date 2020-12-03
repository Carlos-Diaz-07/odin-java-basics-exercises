

function sumAll(startNum, endNum) {
  let result = 0;
  if (startNum < 0 || endNum < 0 || typeof startNum !== "number" || typeof endNum !== "number") {
    return "ERROR";

  } else if (startNum < endNum) { 
      for (i = startNum; i <= endNum; i++) {
        result += i;
      } 
      return result;

  } else if (startNum > endNum) {
      for (i = endNum; i <= startNum; i++) {
        result += i;
      }  
      return result;

  } else {
    return "ERROR";
  }
} 

module.exports = sumAll
