import { cloneDeep } from 'lodash';

export default class Array2D<T> {
  private arr: T[] = []

  public constructor(
    public readonly rows: number,
    public readonly cols: number,
  ) {
    this.arr = Array(rows * cols);
  }

  public fill(value: T) {
    this.arr = this.arr.fill(value);
  }

  public getArray(): T[] {
    return cloneDeep(this.arr);
  }

  public setArray(arr: T[]) {
    this.arr = cloneDeep(arr);
  }

  public setElement(row: number, col: number, value: T): boolean {
    if (this.isValidPosition(row, col)) {
      this.arr[this.rows * row + col] = value;
      return true;
    }
    return false;
  }

  public getElement(row: number, col: number): T | undefined {
    if (this.isValidPosition(row, col)) {
      return this.arr[this.rows * row + col];
    }
    return undefined;
  }

  public isContainedInRow(row: number, value: T): boolean {
    if (this.isValidRow(row)) {
      const start = this.rows * row;
      for (let i = start; i < start + this.cols; i++) {
        if (this.arr[i] === value) {
          return true;
        }
      }
    }
    return false;
  }

  public isContainedInCol(col: number, value: T): boolean {
    if (this.isValidCol(col)) {
      for (let i = col; i < this.arr.length; i += this.cols) {
        if (this.arr[i] === value) {
          return true;
        }
      }
    }
    return false;
  }

  public contains(value: T): boolean {
    return this.arr.some(val => val === value);
  }

  public print() {
    for (let i = 0; i < this.rows; i++) {
      // eslint-disable-next-line no-console
      console.log(this.arr.slice(this.rows * i, this.rows * i + 9));
    }
  }

  private isValidPosition(row: number, col: number): boolean {
    return this.isValidRow(row) && this.isValidCol(col);
  }

  private isValidRow(row: number): boolean {
    return row < this.rows && row >= 0;
  }

  private isValidCol(col: number): boolean {
    return col < this.cols && col >= 0;
  }
}
