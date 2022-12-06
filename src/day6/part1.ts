import { getInput } from "../utils/helpers.js";

const datastream = getInput().split("");
const AMOUNT_TO_MATCH = 4

const startOfPacker = datastream.map((marker, i) => {
  const current = datastream.slice(i, i+AMOUNT_TO_MATCH);
  const uniqueMarkers = new Map();

  return current.some(item => {
    if(uniqueMarkers.has(item)) {
      return false;
    }
    uniqueMarkers.set(item, {});
    return uniqueMarkers.size === AMOUNT_TO_MATCH ? true : false
  });
})

const getFirstMatch = startOfPacker.findIndex(item => item === true) + AMOUNT_TO_MATCH;

console.log(getFirstMatch);
