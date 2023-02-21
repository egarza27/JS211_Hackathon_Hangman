let wordList = [
  "cheese",
  "pepporoni",
  "pineapple",
  "sausage",
  "onions",
  "jalapeno",
];

// calling wordChosen function to randomly choose word from word list array
let word = wordChosen(wordList);
console.log(word);

// making an array of letters
let wordArr = word.split("");

// chaning letters of wordArr to dashes using map method
let hiddenWord = wordArr.map((x) => "-");
console.log(hiddenWord);

let result1 = [];

// captures value of input value field in DOM
const inputValue = document.getElementById("userInput");

const goButton = document.querySelector("#goButton");

const result = document.querySelector("#result");

// ? ------------------- function section below ----------------------

function wordChosen(wordList) {
  let index = Math.floor(Math.random() * wordList.length);
  let word = wordList[index];
  return word;
}

// TODO: check if inputValue is in the wordArr

const checkValue = (array) => {
  array.reduce((a, e, i) => {
    if (e === inputValue.value) a.push(i);
    result1 = a;
    return result1;
  }, []);
};

// go button has an onclick event listener and upon the event, checkValue function will run
goButton.addEventListener("click", (e) => {
  checkValue(wordArr);

  if (result1.length === 0 && !checkValue(wordArr)) {
    window.alert(`Incorrect guess!`);
  } else {
    replaceDash(wordArr, result1);
  }
});

// TODO: if value is true, replace dash with inputValue. if false, mark as incorrect guess

const replaceDash = (wordArray, indexArray) => {
  checkForWin();

  indexArray.forEach((index) => {
    hiddenWord[index] = inputValue.value;
    console.log(hiddenWord);
  });
  result.innerHTML = hiddenWord;
};

// TODO: keep track of player's incorrect and correct guesses

// TODO: determine winner or loser

const checkForWin = () => {
  console.log(wordArr);

  console.log(hiddenWord);

  if (wordArr === hiddenWord) {
    window.alert(`You won!`);
  } else return false;
};

// console.log(checkForWin());
