/* Advent of Code 2015 Challenge
   --- Day 1: Not Quite Lisp ---
   Problem: To what floor do the instructions take Santa?
*/

const fs                = require('fs');
const INSTRUCTION_FILE  = './santa-input.txt';

// findNextFloor
const findNextFloor = (floor, character) => {
    let nextFloor   = floor;
    let position    = 0;

    return (character.charAt(position) === '(') ? ++nextFloor
        :  (character.charAt(position) === ')') ? --nextFloor
        :  nextFloor;
} //end findNextFloor

// computeLastFloor
const computeLastFloor = (fileContent) => {
    let instructions = fileContent.toString();
    let currentFloor = 0;

    console.log(`${instructions.length} characters were read from the instruction file.`);

    for (let i = 0; i < instructions.length; i++) {
        let currentCharacter = instructions.charAt(i);
        currentFloor = findNextFloor(currentFloor, currentCharacter);
    } //end for loop
    return currentFloor;
} //end computeLastFloor

// Read data from INSTRUCTION_FILE
fs.readFile(INSTRUCTION_FILE, (error, fileContent) => {
    console.time('Script execution time: ');
    try {
            let lastFloor;
            lastFloor = computeLastFloor(fileContent);
            console.log (`The instructions take Santa to floor number: ${lastFloor}`);
        }
    catch (error) {
        console.error(`Whoops! We found the following error: ${error}`);
    }
    finally {
        console.timeEnd('Script execution time: ');
    }
});