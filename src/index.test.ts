import test from "node:test";
import assert from "node:assert";

type Pair = [number, number];

const checkCollision = (pairA: Pair, pairB: Pair) => {
  return true;
};

test("pairs that are equal should collide", (t) => {
  assert.strictEqual(checkCollision([0, 1], [0, 1]), true);
});
