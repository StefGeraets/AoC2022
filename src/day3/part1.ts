import { getInput } from "../utils/helpers.js";

const rucksacks = getInput().split("\n");

const scores = {
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4,
  "e": 5,
  "f": 6,
  "g": 7,
  "h": 8,
  "i": 9,
  "j": 10,
  "k": 11,
  "l": 12,
  "m": 13,
  "n": 14,
  "o": 15,
  "p": 16,
  "q": 17,
  "r": 18,
  "s": 19,
  "t": 20,
  "u": 21,
  "v": 22,
  "w": 23,
  "x": 24,
  "y": 25,
  "z": 26,
  "A": 27,
  "B": 28,
  "C": 29,
  "D": 30,
  "E": 31,
  "F": 32,
  "G": 33,
  "H": 34,
  "I": 35,
  "J": 36,
  "K": 37,
  "L": 38,
  "M": 39,
  "N": 40,
  "O": 41,
  "P": 42,
  "Q": 43,
  "R": 44,
  "S": 45,
  "T": 46,
  "U": 47,
  "V": 48,
  "W": 49,
  "X": 50,
  "Y": 51,
  "Z": 52
}

const compartments = rucksacks.map((rucksack) => {
  const middle = Math.floor(rucksack.length / 2);
  return [rucksack.substring(0, middle), rucksack.substring(middle)];
})

const itemTypes = compartments.map((rucksack) => {
  const arr1 = rucksack[0].split('');
  const arr2 = rucksack[1].split('');
  
  return arr1.filter((val) => arr2.some((item) => item === val))[0];  
})

const getScore = itemTypes.reduce((acc, letter) => acc + scores[letter], 0)

console.log(getScore);