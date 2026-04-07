import styles from './Grid.module.css'
import { useState } from "react";
import GridCell from './GridCell';

const GRID_SIZE = 5

const initialGrid = Array(GRID_SIZE * GRID_SIZE)
    .fill(null)
    .map((_, i) => ({ id: i, album: null}));

export default function Grid () {
    const [grid, setGrid] = useState(initialGrid);
                
    return (
        <div className={styles.container}
            style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`}}>
            {grid.map(cell => (
                <GridCell key={cell.id} cell={cell} />
            ))}
        </div>
    );
}