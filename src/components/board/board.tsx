import { cloneDeep } from 'lodash';
import React, { useState } from 'react';
import shortid from 'shortid';
import styles from './Board.module.scss';

const Board: React.FC = () => {
  const [board, setBoardState] = useState<number[][]>(Array(9).fill(Array(9).fill(0)));

  const updateBoardState = (value: number, row: number, col: number) => {
    if (value < 0 || value > 9) {
      value = 0;
    }

    const newBoard = cloneDeep(board);
    newBoard[row][col] = value;
    setBoardState(newBoard);
  };

  return (
    <table className={styles.board}>
      <tbody>
        {board.map((row, rowIndex) => (
          <tr key={shortid()} className={styles.row}>
            {row.map((col, colIndex) => (
              <td key={shortid()} className={styles.cell}>
                <input
                  type='number'
                  min='0'
                  max='9'
                  value={col}
                  onChange={event => updateBoardState(+event.target.value, rowIndex, colIndex)}
                  className={styles.input}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
