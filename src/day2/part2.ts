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

const gameOutcome = (opponent: Opponent, player: Player): number => {
  let hand = 0;
  let game = 0;

  switch (player) {
    // Lose
    case "X":
      game += 0;
      if(opponent === "A") {
        hand += playValue("Z")
      }
  
      if(opponent === "B") {
        hand += playValue("X")
      }
  
      if(opponent === "C") {
        hand += playValue("Y");
      }  
      break;
    
    // Draw
    case "Y":
      game += 3;
      if(opponent === "A") {
        hand += playValue("X")
      }
  
      if(opponent === "B") {
        hand += playValue("Y")
      }
  
      if(opponent === "C") {
        hand += playValue("Z");
      }
      break;
    
    // Win
    case "Z":
      game += 6;
      if(opponent === "A") {
        hand += playValue("Y")
      }

      if(opponent === "B") {
        hand += playValue("Z")
      }

      if(opponent === "C") {
        hand += playValue("X");
      }
      break;
    default:
      break;
  }

  return hand + game;
}

const scores = games.reduce((count, game: [Opponent, Player]) => {

  return count + gameOutcome(game[0], game[1]);
}, 0)



console.log(scores);