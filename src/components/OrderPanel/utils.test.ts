import { moveInArray } from "./utils";

describe("moveInArray корректно обрабатывает", () => {
  test("перестановки в массиве чисел", () => {
    const start = [1, 2, 3, 4, 5];
    const result = moveInArray({ array: start, from: 0, to: 2 });
    expect(result).toEqual([2, 3, 1, 4, 5]);
  });

  test("перестановки на последнюю позицию", () => {
    const start = [1, 2, 3, 4, 5];
    const result = moveInArray({ array: start, from: 0, to: 4 });
    expect(result).toEqual([2, 3, 4, 5, 1]);
  });
});
