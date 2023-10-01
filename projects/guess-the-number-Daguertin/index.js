const { type } = require("os");
const { resolve } = require("path");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//! Quick note to Paul. Hey Paul, once I realized where the code needed to be placed I was very happy to do the project!
//! I did forget that our project was due on wednesday (not thursday) I work tonight until late.. but I was planning on getting up early to
//! finish before class started. Because of time, I left some notes under to-Do which shows how I would approach.(above my pseudo code)

let random = Math.floor(Math.random() * 100) + 1;
// console.log(random);
let secretNumber = "";
let secretGuess = "";
let baseR = 1;
let topR = 100;

// while (baseR <= topR) {
//   guess = Math.floor((baseR + topR) / 2);
//   if (array[guess] === targetValue) {
//     return guess;
//   } else if (array[guess] < targetValue) {
//     baseR = guess + 1;
//   } else {
//     max = guess - 1;
//   }
// }
// console.log(secretGuess);
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
      console.log("Good guess! You got it!");
    } else if (secretNumber > 100 || secretNumber < 1) {
      console.log("This number is outside of range");
      secretNumber = "";
    }
  }
  console.log(
    "How did you guess that so quickly!?\nLets play another\nBut this time let me guess your number!"
  );

  while (secretGuess == "") {
    secretGuess = await ask(`Is it ${random}? Yes or No?`);
    secretGuess = parseInt(secretGuess);
    if ((secretGuess = "no" + secretGuess)) {
      console.log("Okay, Press h if its higher\nPress l if its lower!");
      if ((secretGuess = "h" + secretGuess)) {
        console.log(`alright is it
      ${random}??`);
      } else
        (secretGuess = "l" + secretGuess) => {
          console.log("So its lower? Hmm..");
        }; // secretGuess = "";
    } else if (secretGuess <= 100 && secretGuess > 0) {
      console.log();
    } else if (secretGuess > 100 || secretGuess < 1) {
      console.log(
        "Just testing you to see if you cheated and put the number outside of our range! Hmm.."
      );
      secretGuess = "";
    } else {
      `It has to be ${random}, which means I won\n Great playing with you!`;
    }
  }
  process.exit();
}

// ToDo: I would create a base(0) and top(100) range for my random number. This would adjust as needed throughout the code. ex. if the computer were to guess
//ToDo: 24 and I responded h(higher), then i would add 24 to the base and create a new range. I would also drop the loop cycle so that I do not have numbers repeating.
//ToDo: Once I was able to access this, I found it enjoyable enough. I would like to build in console.log(which drop hints about the range). I also considered if
//ToDo: we would be able to use an array.length[5] to warn player about their last guess... and array.length[6] as a win. I am trying to priotize my time and
// ToDo: effort, I enjoy coding and want to learn the subjects from a fundamental point of view. Hopefully that continues to develop more over-time. -Daniel

// async function start() {
// let secretNumber2 = ""
// secretNumber2 = await ask(
//   "Would you like to switch roles? \n Yes? \n You pick a number and I will guess!")
//   console.log("Would you like to switch roles?")
// }
// console.log ("Would you like to switch rolls?\n Want to Guess? \n Okay great")

/* ask question
  ParseInt string into a number
  Check if secretNumber is !Number
  Confirm that number is in range
   */

// if (reply = true) {console.log("Guess is within range")
// } else {Console.log("guess is not in range")}
// let p = newPromise((resolve, reject) => {
// let (secretNumber == `${random}`)
// if (secretNumber == `${random}){
//   resolve('Good guess')
// } else {reject ("Not good!")}
// })
// async function = gamePlay() {
//   console.log()
// }

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
*/
