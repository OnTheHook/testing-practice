import { add, subtract, divide, multiply } from "../apps/calculator";

test("add 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract 10 - 7 to equal 3", () => {
  expect(subtract(10, 7)).toBe(3);
});

test("divide 10 by 5 to equal 2", () => {
  expect(divide(10, 5)).toBeCloseTo(2);
});

test("multiply 7 times 7 to equal 49", () => {
  expect(multiply(7, 7)).toBe(49);
});
