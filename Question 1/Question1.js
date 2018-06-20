const sortByString = (s,t) => {
    let memory = {};
    let newString = '';

    for (let char of s) {
      if (memory[char] === undefined) memory[char] = 1;
      else memory[char]++;
    }

    for (let char of t) {
      while (memory[char] > 0) {
        memory[char]--;
        newString += char;
      }
    }
    
    return newString;
}