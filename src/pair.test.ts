import assert from "node:assert";
import test from "node:test";
import { createPair } from "./pair";

test("two numbers should create a pair", () => {
  assert.deepEqual(createPair(0, 1), [0, 1]);
});
