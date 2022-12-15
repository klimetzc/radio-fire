const sum = (a: number, b: number): number => {
  return a + b;
};

test('Hello world jest test', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 2)).toBe(4);
});

export {};
