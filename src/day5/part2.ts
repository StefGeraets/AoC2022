import { getInput } from "../utils/helpers.js";

const moves = getInput().split("\n");
const stackTest = {
  1: ['Z', 'N'],
  2: ["M", "C", "D"],
  3: ["P"]
} // See later if we can extract this from real input file

const inputStack = {
  1: ["Z", "J", "N", "W", "P", "S"],
  2: ["G", "S", "T"],
  3: ["V", "Q", "R", "L", "H"],
  4: ["V", "S", "T", "D"],
  5: ["Q", "Z", "T", "D", "B", "M", "J"],
  6: ["M", "W", "T", "J", "D", "C", "Z", "L"],
  7: ["L", "P", "M", "W", "G", "T", "J"],
  8: ["N", "G", "M", "T", "B", "F", "Q", "H"],
  9: ["R", "D", "G", "C", "P", "B", "Q", "W"],
}
const stack = inputStack;

const cleanMoves = moves.map(line => line.match(/\d+/g).map(Number));
cleanMoves.map(([amount, from, to]) => {
  const movedBoxes = stack[from].splice(-amount);
  stack[to].push(...movedBoxes);
})

console.log(stack);

// LVZPSTTCZ