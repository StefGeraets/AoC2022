import { getInput } from "../utils/helpers.js";

const data = getInput().split("\n");

let sprite = "###.....................................".split("");
let current = "";
let cycle = 0;
let X = 0;

const drawPixel = () => {
  (sprite[(cycle - 1) % 40] === "#") ? current += "#" : current += ".";
}

data.forEach((line) => {
  if (line === "noop") {
    cycle++;
    drawPixel();
  } else {
    const [_, amount] = line.split(" ");

    // cycle 1
    cycle++;
    drawPixel();

    // cycle 2
    cycle++;
    drawPixel();

    // end of cycle 2
    sprite[X + 0] = ".";
    sprite[X + 1] = ".";
    sprite[X + 2] = ".";
    X += Number(amount);
    sprite[X + 0] = "#";
    sprite[X + 1] = "#";
    sprite[X + 2] = "#";
  }
});

let line = "";
for (var i = 0; i < 240; i++) {
  if (i % 40 === 0) {
    console.log(line);
    line = "";
  }
  line += current[i];
}
console.log(line);