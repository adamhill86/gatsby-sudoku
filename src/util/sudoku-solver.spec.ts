import SudokuSolver from './sudoku-solver';
import Array2D from './array2d';

describe('SudokuSolver', () => {
  const sudoku = new SudokuSolver();

  it('should solve', () => {
    const example = new Array2D<number>(9, 9);
    example.setArray([
      0, 0, 9, 8, 0, 0, 1, 0, 0,
      1, 6, 2, 0, 7, 0, 5, 0, 0,
      0, 3, 0, 1, 2, 9, 7, 0, 0,
      0, 2, 6, 0, 8, 0, 3, 0, 0,
      3, 4, 5, 0, 0, 6, 0, 0, 0,
      0, 0, 1, 7, 4, 3, 0, 0, 6,
      9, 1, 0, 6, 5, 8, 4, 0, 0,
      0, 0, 0, 0, 3, 0, 0, 0, 5,
      2, 0, 4, 9, 0, 0, 0, 8, 0,
    ]);
    sudoku.setPuzzle(example);
    expect(sudoku.solvePuzzle()).toBe(true);
  });
});
