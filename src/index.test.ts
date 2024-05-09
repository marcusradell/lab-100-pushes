import test from "node:test";
import assert from "node:assert";

type Pair = [number, number];

const createPair = (a: number, b: number) => [a, b];

const checkCollision = (pairA: Pair, pairB: Pair) => {
  return true;
};

test("pairs that are equal should collide", () => {
  assert.deepEqual(checkCollision([0, 1], [0, 1]), true);
});

test("two numbers should create a pair", () => {
  assert.deepEqual(createPair(0, 1), [0, 1]);
});
