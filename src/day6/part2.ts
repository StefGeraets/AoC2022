import { getInput } from "../utils/helpers.js";

const datastream = getInput().split("");
const AMOUNT_TO_MATCH = 14

const startOfPacker = datastream.map((marker, i) => {
  const uniqueMarkers = new Set(datastream.slice(i, i+AMOUNT_TO_MATCH));

  return uniqueMarkers.size === AMOUNT_TO_MATCH ? true : false;
})

const getFirstMatch = startOfPacker.findIndex(item => item === true) + AMOUNT_TO_MATCH;

console.log(getFirstMatch);
