import { getInput } from "../utils/helpers.js";

type Opponent = "A" | "B" | "C";
type Player = "X" | "Y" | "Z";
type Game = [Opponent, Player];

const games = getInput().split("\n");

const gamePoints = {
  "A X": 3, 
  "A Y": 4, 
  "A Z": 8,
  "B X": 1, 
  "B Y": 5, 
  "B Z": 9,
  "C X": 2, 
  "C Y": 6, 
  "C Z": 7,
}

const scores = games.reduce((count, game) => count + gamePoints[game], 0)

console.log(scores);