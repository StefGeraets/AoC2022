import { getInput } from "../utils/helpers.js";

const assignedCleanSlots = getInput().split("\n").map(string => string.split(","));

const containing = assignedCleanSlots.reduce((sum, [id1, id2]) => {
  const range1 = id1.split("-").map(Number)
  const range2 = id2.split("-").map(Number)
  
  if(range1[0] <= range2[0] && range1[1] >= range2[1] || range1[0] >= range2[0] && range1[1] <= range2[1]) {
    return sum += 1
  }
  return sum;
}, 0);

console.log(containing)