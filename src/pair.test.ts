import assert from "node:assert";
import test from "node:test";
import { createPair } from "./pair";

test("two numbers should create a pair", () => {
  assert.deepStrictEqual(createPair(0, 1), [0, 1]);
});

test("lowest number should be first", () => {
  assert.deepStrictEqual(createPair(10, 5), [5, 10]);
});
