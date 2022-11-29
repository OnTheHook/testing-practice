function caesarCipher(sentence, key) {
  const alpha = Array.from("abcdefghijklmnopqrstuvwxyz");
  let lowerSentence = sentence.toLowerCase()
  let outputSentence = "";

  for (let i in lowerSentence) {
    let letter;
    let index = alpha.indexOf(lowerSentence[i]);
    letter = index >= 0 ? alpha[(index + key) % 26] : sentence[i];
    if(alpha.includes(lowerSentence[i]) && !alpha.includes(sentence[i])) {
        letter = letter.toUpperCase()
    }
    outputSentence += letter;
  }

  return outputSentence;
}

export default caesarCipher;
