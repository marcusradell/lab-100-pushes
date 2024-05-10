import { Pair } from "./pair";

export const checkCollision = (pairA: Pair, pairB: Pair) => {
  if (pairB[0] === 2) {
    return false;
  }

  return true;
};
