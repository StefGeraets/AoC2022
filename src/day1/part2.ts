import { getInput } from "../utils/helpers.js";

const INPUT = getInput().split("\n\n");

const group = INPUT.map(caloryGroup => {
  return caloryGroup.split("\n").reduce((prev, item) => 
    prev + parseInt(item)
  , 0)
})

const sortValues = group.sort((a, b) => b - a)

const highestThree = sortValues[0] + sortValues[1] + sortValues[2]

console.log(highestThree);