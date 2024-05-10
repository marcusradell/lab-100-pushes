import test from "node:test";
import assert from "node:assert";
import { isOverlapping, isOverlapping2 } from "./is-overlapping";

test("same-numbered pairs that are equal overlaps", () => {
  assert.deepStrictEqual(isOverlapping([0, 0], [0, 0]), true);
});

test("no overlap", () => {
  assert.deepStrictEqual(isOverlapping2(0, 1, 2, 3), false);
});
