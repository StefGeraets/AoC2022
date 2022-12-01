import { readInput } from "../utils/helpers.js";

const INPUT = readInput().split("\n\n");

const group = INPUT.map(caloryGroup => {
  return caloryGroup.split("\n").reduce((prev, item) => 
    prev + parseInt(item)
  , 0)
})

console.log(Math.max(...group));