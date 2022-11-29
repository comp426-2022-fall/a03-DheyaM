#!/usr/bin/env node

// import minimist to process argv
import minimist from "minimist";
// import function created in other folder
import Roll from "../lib/roll.js";

// get CLI argv and process them
const args = minimist(process.argv.slice(2));

// default value of sides is 6: regular dice
const side = args.sides ? args.sides: 6;
// default value of dice is 2
const dice = args.dice ? args.dice: 2;
// default value of rolls is 1
const roll = args.rolls ? args.rolls: 1;

// print output
console.log(JSON.stringify(Roll(side, dice, roll)));
// exit the program at the end
process.exit(0);
