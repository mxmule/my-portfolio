import React, { useState } from 'react';
import './App.scss'

interface Cell {
  row: number;
  col: number;
  colspan: number;
  rowspan: number;
  merged: boolean;
}

const rows = 5;
const cols = 5;

const createInitialGrid = () => {
  const grid: Cell[][] = [];
  for (let r = 0; r < rows; r++) {
    const row: Cell[] = [];
    for (let c = 0; c < cols; c++) {
      row.push({
        row: r,
        col: c,
        colspan: 1,
        rowspan: 1,
        merged: false,
      });
    }
    grid.push(row);
  }
  return grid;
};

const App: React.FC = () => {
  const [grid, setGrid] = useState<Cell[][]>(createInitialGrid());
  const [selectedCells, setSelectedCells] = useState<Cell[]>([]);

  // Handle cell click
  const handleCellClick = (cell: Cell) => {
    if (!cell.merged) {
      setSelectedCells((prev) =>
        prev.find((selected) => selected.row === cell.row && selected.col === cell.col)
          ? prev.filter((selected) => !(selected.row === cell.row && selected.col === cell.col))
          : [...prev, cell]
      );
    }
  };

  // Merge cells functionality
  const mergeCells = () => {
    if (selectedCells.length < 2) return;

    const minRow = Math.min(...selectedCells.map((cell) => cell.row));
    const maxRow = Math.max(...selectedCells.map((cell) => cell.row));
    const minCol = Math.min(...selectedCells.map((cell) => cell.col));
    const maxCol = Math.max(...selectedCells.map((cell) => cell.col));

    setGrid((prevGrid) =>
      prevGrid.map((row, r) =>
        row.map((cell, c) => {
          if (r >= minRow && r <= maxRow && c >= minCol && c <= maxCol) {
            if (r === minRow && c === minCol) {
              return {
                ...cell,
                colspan: maxCol - minCol + 1,
                rowspan: maxRow - minRow + 1,
                merged: true,
              };
            }
            return { ...cell, merged: true };
          }
          return cell;
        })
      )
    );
    setSelectedCells([]);
  };

  // Unmerge cells functionality
  const unmergeCells = () => {
    setGrid((prevGrid) =>
      prevGrid.map((row) =>
        row.map((cell) => ({
          ...cell,
          colspan: 1,
          rowspan: 1,
          merged: false,
        }))
      )
    );
    setSelectedCells([]);
  };

  return (
    <div className="App">
      <div className="controls">
        <button onClick={mergeCells} disabled={selectedCells.length < 2}>
          Merge Cells
        </button>
        <button onClick={unmergeCells}>Unmerge All</button>
      </div>
      <table className="grid">
        <tbody>
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              if (cell.merged && (rowIndex !== cell.row || colIndex !== cell.col)) {
                return null; // Skip rendering if part of a merged cell
              }

              return (
                <td
                  key={`${rowIndex}-${colIndex}`}
                  rowSpan={cell.rowspan}
                  colSpan={cell.colspan}
                  className={selectedCells.includes(cell) ? 'selected' : ''}
                  onClick={() => handleCellClick(cell)}
                >
                  {`R${cell.row} C${cell.col}`}
                </td>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;

