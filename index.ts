#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number from 1 to 10",

},
]);

if(answers.userGuessNumber === randomNumber){
    console.log("Congratulations! Your number is correct.");
}
else{console.log("You guessed wrong number");}



