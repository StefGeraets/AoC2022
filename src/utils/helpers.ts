import { readFileSync } from "fs";

export const readInput = (fileName: string = "input"): string => {
  return readFileSync(`${fileName}.txt`, 'utf-8').toString()
}