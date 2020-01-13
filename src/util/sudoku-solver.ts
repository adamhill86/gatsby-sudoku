import Array2D from './array2d';

export default class SudokuSolver {
  private board = new Array2D<number>(9, 9);

  public solvePuzzle(): boolean {
    return this.solve(0, 0);
  }

  private solve(row: number, col: number): boolean {
    // If we've gone through all the positions in the puzzle, start backtracking
    if (row === 9) {
      this.board.print();
      return true;
    }

    // Check the current position to see if it has been set
    if (this.board.getElement(row, col) !== 0) {
      return col === 8
        ? this.solve(row + 1, (col + 1) % 9)
        : this.solve(row, (col + 1) % 9);
    }

    // Get a list of valid numbers from this position
    const validNumbers = this.validNumbers(row, col);

    // plug in each valid number one at a time and then advance to the next open position
    for (const value of validNumbers) {
      this.board.setElement(row, col, value);
      if (col === 8) {
        if (this.solve(row + 1, (col + 1) % 9)) {
          return true;
        }
      } else if (this.solve(row, (col + 1) % 9)) {
        return true;
      }
    }

    // reset on backtrack
    this.board.setElement(row, col, 0);
    return false;
  }

  public setElement(row: number, col: number, value: number) {
    this.board.setElement(row, col, value);
  }

  public setPuzzle(puzzle: Array2D<number>) {
    this.board = puzzle;
  }

  private validNumbers(row: number, col: number): number[] {
    const valid: number[] = [];
    for (let i = 1; i <= 9; i++) {
      if (!this.isContainedInGrid(row, col, i) && !this.board.isContainedInRow(row, i) && !this.board.isContainedInCol(col, i)) {
        valid.push(i);
      }
    }

    return valid;
  }

  // private hasZeroSpaces() {
  //   return this.board.contains(0)
  // }

  private isContainedInGrid(row: number, col: number, value: number): boolean {
    const startRow = normalizeStartingPosition(row);
    const startCol = normalizeStartingPosition(col);
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (this.board.getElement(i, j) === value) {
          return true;
        }
      }
    }
    return false;
  }
}

/**
* Ensures starting position is always a multiple of 3
* so 3x3 grids can be accurately checked for values
* @param position Number 1-9
*/
export function normalizeStartingPosition(position: number): number {
  return Math.floor(position / 3) * 3;
}
