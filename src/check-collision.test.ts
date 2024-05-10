import test from "node:test";
import assert from "node:assert";
import { checkCollision } from "./check-collision";

test("same-numbered pairs that are equal should collide", () => {
  assert.deepStrictEqual(checkCollision([0, 0], [0, 0]), true);
});
