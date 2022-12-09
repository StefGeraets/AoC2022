import { getInput } from "../utils/helpers.js";

const lines = getInput().split("\n");

const {sizes}: {sizes: {[key: string]: number}, location: string[]} = lines.reduce(
  ({sizes, location}, line) => {
    const doNothing = () => ({sizes, location});
    const closeDirectory = () => ({sizes, location: location.slice(0, -1)})
    const goToHomeDirectory = () => ({sizes, location: [""]});
    const openDirectory = (line) => {
      const dir = line.match(/\$ cd (\w+)/)[1];
      return {sizes, location: [...location, dir]}
    }
    const createFile = (line) => {
      const size = Number(line.match(/(\d+) .*/)[1]);
      const {nextSizes} = location.reduce(
        ({nextSizes, path}, dir) => {
          const nextPath = `${path}${dir}/`;
          return {
            path: nextPath,
            nextSizes: {...nextSizes, [nextPath]: (nextSizes[nextPath] ?? 0) + size}
          }
        }, 
        {nextSizes: sizes, path: ""}
      )
      return {sizes: nextSizes, location}
    }

    const commandMap = [
      {expression: /\$ cd \.\./, function: closeDirectory},
      {expression: /\$ cd \//, function: goToHomeDirectory},
      {expression: /\$ cd \w+/, function: openDirectory},
      {expression: /\d+ .*/, function: createFile}
    ];

    const command = 
      commandMap.find(({expression}) => expression.test(line))?.function ??
      doNothing;

    return command(line);
  }, 
  {sizes: {}, location: [""]}
);

const minDeletionSize = sizes["/"] - 40_000_000
const deletionCandidates = Object.values(sizes).filter((size) => size >= minDeletionSize);
const deletionSize = Math.min(...deletionCandidates);

console.log(deletionSize);