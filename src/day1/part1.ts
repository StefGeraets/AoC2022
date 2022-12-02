import { getInput } from "../utils/helpers.js";

const INPUT = getInput().split("\n\n");

const group = INPUT.map(calloryGroup => {
  return calloryGroup.split("\n").reduce((prev, item) => 
    prev + parseInt(item)
  , 0)
})

console.log(Math.max(...group));