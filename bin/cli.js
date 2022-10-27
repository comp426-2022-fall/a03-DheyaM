#!/usr/bin/env node
// import function created in other folder
import { roll } from "/lib/roll.js";
// import minimist to process argv
import minimist from "minimist";

// get CLI args
const args = minimist(process.argv.slice(2));

// default value of sides as 6
const sides = args.sides ? args.sides: 6;
// default value of dice as 2
const dice = args.dice ? args.dice: 2;
// default value of rolls as 1
const rolls = args.rolls ? args.rolls: 1;

console.log(JSON.stringify(roll(sides, dice, rolls)));
process.exit(0);