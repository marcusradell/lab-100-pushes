import { createPair } from "./pair";

export const isOverlapping = (
  a1: number,
  a2: number,
  b1: number,
  b2: number
) => {
  const pairA = createPair(a1, a2);
  const pairB = createPair(b1, b2);

  return pairA[1] >= pairB[0];
};
