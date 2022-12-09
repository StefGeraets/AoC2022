import { getInput } from "../utils/helpers.js";

const games = getInput().split("\n");

const scoreValues = {
  "A X": 4,
  "A Y": 8,
  "A Z": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 7,
  "C Y": 2,
  "C Z": 6
}

const scores = games.reduce((count, game) => count + scoreValues[game], 0)

console.log(scores);