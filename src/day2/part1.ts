import { getInput } from "../utils/helpers.js";

type Opponent = "A" | "B" | "C";
type Player = "X" | "Y" | "Z";
type Rock = "A" | "X";
type Paper = "B" | "Y";
type Scissors = "C" | "Z";

const INPUT = getInput().split("\n");

const games = INPUT.map((item) => item.split(" "));

const playValue = (shape: Player) => {
  switch (shape) {
    case "X":
      return 1
    case "Y":
      return 2
    case "Z":
      return 3
    default:
      return 0;
  }
}

const gameOutcome = (opponent: Opponent, player: Player) => {
  if(
    player === "X" && opponent === "A" ||
    player === "Y" && opponent === "B" ||
    player === "Z" && opponent === "C"
  ) {
    return 3;
  }

  if(player === "X") {
    if(opponent === "B") {
      return 0
    } else { 
      return 6
    }
  }
  if(player === "Y") {
    if(opponent === "C") {
      return 0
    } else { 
      return 6
    }
  }

  if(player === "Z") {
    if(opponent === "A") {
      return 0
    } else { 
      return 6
    }
  }


  return 1;
}

const scores = games.reduce((count, game: [Opponent, Player]) => count + playValue(game[1]) + gameOutcome(game[0], game[1]), 0)



console.log(scores);