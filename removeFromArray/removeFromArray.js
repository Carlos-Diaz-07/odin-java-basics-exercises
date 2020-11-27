  function removeFromArray(arr, ...value) {
    for (x = 0; x < value.length; x++) {
      for (i = 0; i < arr.length; i++) {
        if(value[x] === arr[i]) {
          arr.splice(i, 1); 
        } 
      }
    };
    console.log(arr);
    return arr;
  }


module.exports = removeFromArray
