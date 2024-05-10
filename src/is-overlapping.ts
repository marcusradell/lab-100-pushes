import { Pair } from "./pair";

export const isOverlapping = (pairA: Pair, pairB: Pair) => {
  if (pairB[0] === 2) {
    return false;
  }

  return true;
};
