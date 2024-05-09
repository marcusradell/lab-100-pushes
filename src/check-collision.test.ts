import test from "node:test";
import assert from "node:assert";
import { checkCollision } from "./check-collision";

test("pairs that are equal should collide", () => {
  assert.deepEqual(checkCollision([0, 1], [0, 1]), true);
});
