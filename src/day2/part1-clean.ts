import { getInput } from "../utils/helpers.js";

type Opponent = "A" | "B" | "C";
type Player = "X" | "Y" | "Z";
type Game = [Opponent, Player];

const INPUT = getInput("test").split("\n");

const games = INPUT.map((item) => item.split(" "));

const outcomes = {
  "AX": 3, 
  "BY": 3, 
  "CZ": 3,
  "AZ": 0,
  "BX": 0,
  "CY": 0,
  "AY": 6,
  "BZ": 6,
  "CX": 6
}

const handValue = {
  "X": 1,
  "Y": 2,
  "Z": 3
}

const playValue = (shape: Player) => {
  return handValue[shape];
}

const gameOutcome = ([opponent, player]: Game) => {
  const play = opponent + player;
  return outcomes[play];
}

const scores = games.reduce((count, game: Game) => count + playValue(game[1]) + gameOutcome(game), 0)

console.log(scores);