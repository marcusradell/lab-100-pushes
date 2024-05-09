export type Pair = [number, number];

export const createPair = (a: number, b: number): Pair =>
  a <= b ? [a, b] : [b, a];
