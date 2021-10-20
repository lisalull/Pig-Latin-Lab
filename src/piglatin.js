const translate = (string) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let lowercaseString = string.toLowerCase();
  let stringArray = lowercaseString.split("");
  if (vowels.includes(lowercaseString[0])) {
    return lowercaseString + "way";
  } else if (vowels.includes(lowercaseString[1])) {
    const newWord = [
      ...stringArray.slice(1, stringArray.length),
      stringArray[0],
      "ay",
    ];
    return newWord.join("");
  } else if (vowels.includes(lowercaseString[2])) {
    const newWord = [
      ...stringArray.slice(2, stringArray.length),
      stringArray[0],
      stringArray[1],
      "ay",
    ];
    return newWord.join("");
  } else if (vowels.includes(lowercaseString[3])) {
    const newWord = [
      ...stringArray.slice(3, stringArray.length),
      stringArray[0],
      stringArray[1],
      stringArray[2],
      "ay",
    ];
    return newWord.join("");
  } else {
    const newWord = [
      ...stringArray.slice(4, stringArray.length),
      stringArray[0],
      stringArray[1],
      stringArray[2],
      stringArray[3],
      "ay",
    ];
    return newWord.join("");
  }
};

module.exports = { translate };
