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
  "A": {
    "X": "Z",
    "Y": "X",
    "Z": "Y"
  },
  "B": {
    "X": "X",
    "Y": "Y",
    "Z": "Z"
  },
  "C": {
    "X": "Y",
    "Y": "Z",
    "Z": "X"
  },
}

const gameOutcome = ([opponent, outcome]: Game): number => handValue[handToPlay[opponent][outcome]] + gameValue[outcome];

const scores = games.reduce((count, game: [Opponent, Player]) => count + gameOutcome(game), 0)

console.log(scores);