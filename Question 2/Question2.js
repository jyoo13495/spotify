const decodeString = (str) => {
    let newString = str;
  
    while (newString.includes('[')) {
      let index1 = newString.lastIndexOf('[');
      let index2 = newString.indexOf(']');
      let k = newString[index1 - 1];
  
      let preDecode = newString.slice(0,index1-1);
      let decodedString = newString.slice(index1 + 1, index2).repeat(k);
      let postDecode = newString.slice(index2 + 1);
  
      newString = preDecode + decodedString + postDecode;
    }
  
    return newString;
  }