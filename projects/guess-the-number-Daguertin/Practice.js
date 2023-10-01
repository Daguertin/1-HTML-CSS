const { type } = require("os");
const { resolve } = require("path");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

// let random = Math.floor(Math.random() * 100) + 1;
// console.log(random);
let secretNumber = "";

start();

async function start() {
  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );
  while (secretNumber == "") {
    secretNumber = await ask(
      "Go ahead! Pick any secret number 1-100.\nI won't peek, I promise...\n"
    );
    secretNumber = parseInt(secretNumber);
    if (isNaN(secretNumber)) {
      console.log("This is not a number, I dare you to guess again!");
      secretNumber = "";
    } else if (secretNumber <= 100 && secretNumber > 0) {
      console.log("Good");
    } else if (secretNumber > 100 || secretNumber < 1) {
      console.log("This number is outside of range");
      secretNumber = "";
    }
  } 
  
  process.exit();
  
}



async function start() {
  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );
  while (secretNumber == "") {
    secretNumber = await ask(
      "Go ahead! Pick any secret number 1-100.\nI won't peek, I promise...\n"
    );
    secretNumber = parseInt(secretNumber);
    if (isNaN(secretNumber)) {
      console.log("This is not a number, I dare you to guess again!");
      secretNumber = "";
    } else if (secretNumber <= 100 && secretNumber > 0) {
      console.log("Good");
    } else if (secretNumber > 100 || secretNumber < 1) {
      console.log("This number is outside of range");
      secretNumber = "";
    }
  }

// let rangeB = 0
// let rangeT = 100
//  let range = 0
// let guess = (rangeB.randomNum - rangeT.randomNum)
//  if range is 1 - 100, (then apply features)
// let (C = 0; C < 100; C = C + 1 (or c++ )) {console.log(C)}
// for(let range = 1; range < 100; range++)
// {console.log(range)
// }
// const input2 = await Number(range)
// let num = (`${range}`) 



// pretty sure I use .then for a new promise value (current promise is secretNumber/await)



// Notes to self:
/* 
I will need a number range 1-100
I will also need a randomNum assignment which !will be visible to the guesser
I will want to create a loop with async properties that will carry the conversation and then close after completion
Plan to use else, else if, ask wait
For computer guessing, use another x(guess) = randomNum which once presented with a value (Y, N.. H, L), changes the range. 
Possible formula (original guess = 1-100, guess 20(H), new guess rage is 20-100, guess 70(L), new guess range 20-70)
100 - guess(H,L) = new (B,T range) (if (H) - (guess) =)
Once the game is completed, have (computer) ask if they would like to play another round but switch roles.
This should be triggered by the close function if possible


Tom - is it 20?
Jerry - No, it is higher (Low and high... if they guess higher add amount to base range, if they guess lower, subtract amount from base range and apply randomNum)
Tom - is it 60 (range = range base - range top) (range base = 0) (range top = 100)
Jerry - no it is lower
Tom - is it 45
Jerry - no, (if in range of 10) but you are close!
Tom - is it 40
Jerry - it is lower! 
*/  }