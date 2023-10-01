const { listenerCount } = require("process");
const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
const textElement = document.getElementById('text')
const textButtonsElement = document.getElementById('textButtons')
const writerElement = document.getElementById('writer')

start();
text
class Location {
  constructor(place, description) {
    (this.place = place), (this.description = description);
  }
}
const porch = new Location(
  "porch",
  "You are standing on a porch, and ahead of you is a great green door.\nAlthough this family is wealthy this porch seems to need work.\nOne board in particular, appears as though it could be moved."
);
const mudroom = new Location(
  "mudroom",
  "The dog seems to be hiding, maybe we can bring him to the park if we explore the house.\nLooking around you see a book shelf to your right, a staircase to your left and a door straight ahead."
);
const darkroom = new Location(
  "darkroom",
  "Cannot see a thing!\nI think I need a flashlight just to find a light switch."
);
const bedroom = new Location(
  "bedroom",
  "There is still no sign of the dog! Where could they be?\nThe room looks pretty plain, except for the exceptionally large dog bed.\nIt is bulky, beige and the size of a small matress."
);
const entertainmentroom = new Location(
  "entertainmentroom",
  "I stand in a large entertainment room. Large windows line the right side with couches, in the middle of the room is a piano\nIt has been so long since you played.NThere is also a door just after the piano."
);
const storageroom = new Location(
  "storageroom",
  "Ah yes! You enter the storage room, hanging from a silver hook, there are car keys. The room looks like an amplifier, with large vents reaching all the rooms"
);
const garage = new Location(
  "garage",
  "You finally get to the garage and climb into a sporty Porsche 911, not much room but the dog climbs in expectantly"
);

async function start() { 
  const welcomeMessage = `182 Main St.
  You are standing on Main Street between Church and South Winooski.
  There is a door here. A keypad sits on the handle.
  On the door is a handwritten sign.`;
  let answer = await ask(welcomeMessage);
  console.log("Would You like to read the sign or Go forward into the building?" + welcomeMessage);
}

let locationCurrent = "porch";

const locationStates = {
  porch: [mudroom],
  mudroom: [porch, darkroom, entertainmentroom],
  darkroom: [mudroom, bedroom],
  bedroom: [darkroom],
  entertainmentroom: [mudroom, storageroom],
  storageroom: [garage],
};

function moveAround(newLocation) {
  if (locationStates[locationCurrent].includes(newLocation)) {
    Then;
    locationCurrent = newLocation;
    console.log(`You just entered the ${locationCurrent}`);
  } else {
    console.log(`you cannot enter ${newLocation} from ${locationCurrent}`);
  }
  inventoryList(item, list)
    return this(list) (item).push
  
}

process.exit();

moveAround("mudroom");


// let firstWord = words[0].tolowercase()
// let secondWord = ""
// let command = firstWord + " " + secondWord
// if (words).length > 1
//     secondWord = words[1].tolowercase()

//     function go (secondWord: String) => String:
//       if secondWord = "":
//         return "Go where?"


/* Notes to consider:
MOVING
String command = input.readLine().toLowerCase();
String[] parts = command.split(" "); //split the command at each space, so we have an array of each word
if(parts.length == 2 && parts[0].equals("go")) //check if there are two words and if the first word is "go"
    go(parts[1]); //supply the second word (the direction) to a go() function

....

public void go(String direction) {
    if(direction.equals("w") || direction.equals("west")) 
        goWest();
    else if(direction.equals("e") || direction.equals("east"))
        goEast();
  etc.
} */
