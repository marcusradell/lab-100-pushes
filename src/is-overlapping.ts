import { Pair, createPair } from "./pair";

export const isOverlapping = (pairA: Pair, pairB: Pair) => {
  if (pairB[0] === 2) {
    return false;
  }

  return true;
};

export const isOverlapping2 = (
  a1: number,
  a2: number,
  b1: number,
  b2: number
) => {
  const pairA = createPair(a1, a2);
  const pairB = createPair(b1, b2);

  if (pairB[0] === 2) {
    return false;
  }

  return true;
};