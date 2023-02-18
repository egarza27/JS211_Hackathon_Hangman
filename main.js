let wordList = ["cat", "dog", "hippo", "horse", "turtle", "shark"];

let word = wordChosen(wordList);

console.log(word);

let wordArr = word.split("");

let hiddenWord = wordArr.map((x) => "-");
console.log(hiddenWord);

const getInput = (input) => (userInput = input);

const resultField = document.getElementById("result");

function wordChosen(wordList) {
  let index = Math.floor(Math.random() * wordList.length);
  let word = wordList[index];
  return word;
}

const filterLetter = (userInput, word) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === userInput) {
      hiddenWord = word[i];
    }
  }
  return hiddenWord.push("");
};

console.log(filterLetter("o", hiddenWord));

// function randomWord() {
//   let randomIndex = Math.floor(Math.random() * wordList.length);
//   // let randomWord = arr[randomIndex];
//   return randomWord;
// }

// function hideWord() {
//   for (let i = 0; i < wrd.length; i++) {
//     wordShown.push("-");
//   }
//   return wordShown;
// }

// const hideWord = (wrd) => {
//   for (let i = 0; i < wrd.length; i++) {
//     wordShown.push("-");
//   }
//   return wordShown;
// };
