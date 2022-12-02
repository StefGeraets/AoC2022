import { getInput } from "../utils/helpers.js";

type Opponent = "A" | "B" | "C";
type Player = "X" | "Y" | "Z";
type Game = [Opponent, Player];

const games = getInput("test").split("\n").map((item) => item.split(" "));

const outcomes = {
  "A": {
    "X": 3,
    "Y": 6,
    "Z": 0
  },
  "B": {
    "X": 0,
    "Y": 3,
    "Z": 6
  },
  "C": {
    "X": 6,
    "Y": 0,
    "Z": 3
  }
}

const handValue = {
  "X": 1,
  "Y": 2,
  "Z": 3
}

const playValue = (shape: Player) => {
  return handValue[shape];
}

const gameOutcome = ([opponent, player]: Game) => outcomes[opponent][player];

const scores = games.reduce((count, game: Game) => count + playValue(game[1]) + gameOutcome(game), 0)

console.log(scores);