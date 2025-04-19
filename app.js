import { greeting, doubleArray } from "./utils.js";
import _ from "lodash";

const name = "John";
console.log(greeting(name));

const numbers = [1, 2, 3, 4];
console.log(doubleArray(numbers));

const shuffledNumbers = _.shuffle(numbers);
console.log("Shuffled Numbers:", shuffledNumbers);
