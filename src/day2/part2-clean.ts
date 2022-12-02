import { getInput } from "../utils/helpers.js";

type Opponent = "A" | "B" | "C";
type Player = "X" | "Y" | "Z";
type Game = [Opponent, Player];

const games = getInput().split("\n").map((item) => item.split(" "));

const gameValue = {
  "X": 0,
  "Y": 3,
  "Z": 6
}

const handValue = {
  "X": 1,
  "Y": 2,
  "Z": 3
}

const handToPlay = {
  "AX": "Z",
  "BX": "X",
  "CX": "Y",
  "AY": "X",
  "BY": "Y",
  "CY": "Z",
  "AZ": "Y",
  "BZ": "Z",
  "CZ": "X",
}

const gameOutcome = ([opponent, outcome]: Game): number => handValue[handToPlay[opponent + outcome]] + gameValue[outcome];

const scores = games.reduce((count, game: [Opponent, Player]) => count + gameOutcome(game), 0)

console.log(scores);