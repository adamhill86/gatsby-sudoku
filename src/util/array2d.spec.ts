import Array2D from './array2d';

describe('Array2D', () => {
  const arr = new Array2D<number>(9, 9);
  arr.fill(0);

  it('should exist', () => {
    expect(arr.setElement(2, 4, 42)).toBe(true);
    expect(arr.isContainedInRow(2, 42)).toBe(true);
  });

  it('should check cols', () => {
    arr.setElement(2, 4, 42);
    expect(arr.isContainedInCol(4, 42)).toBe(true);
  });
});
