import { getInput } from "../utils/helpers.js";

const data = getInput().split("\n");

const signalAt = [20, 60, 100, 140, 180, 220];
let cycleRound = 20;
let currentCycle = 1
let X = 1;
const scorePerRound = []
const scoresAtSignal = {20: [], 60: [], 100: [], 140: [], 180: [], 220: []}

const shouldStartNewCycle = () => {
  if(signalAt.includes(currentCycle)) {
    const round = signalAt[signalAt.indexOf(currentCycle) + 1]
    cycleRound = round
  }
}

data.forEach((line) => {
  if(cycleRound === undefined) return;

  if(line === "noop") {
    shouldStartNewCycle()
    currentCycle++
    return;
  } else {
    const [_, amount] = line.split(" ");
    
    [1, 2].forEach((cycle) => {
      shouldStartNewCycle()
      if(cycleRound === undefined) return;
      if(cycle === 2) {
        X += Number(amount);
        scoresAtSignal[cycleRound].push(X);
      }
      currentCycle++
    })
  }
})

Object.keys(scoresAtSignal).forEach((cycle) => {
  scorePerRound.push(Number(cycle) * scoresAtSignal[cycle].pop())
})

const signalStrength = scorePerRound.reduce((sum, num) => sum + num, 0);


console.log(signalStrength);