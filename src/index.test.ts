import test from "node:test";
import assert from "node:assert";
import { Pair } from "./pair";

const checkCollision = (pairA: Pair, pairB: Pair) => {
  return true;
};

test("pairs that are equal should collide", () => {
  assert.deepEqual(checkCollision([0, 1], [0, 1]), true);
});
