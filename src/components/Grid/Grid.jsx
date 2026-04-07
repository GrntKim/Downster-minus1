import styles from './Grid.module.css'
import GridCell from './GridCell';



export default function Grid ({ grid, gridSize }) {
    return (
        <div className={styles.container}
            style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)`}}>
            {grid.map(cell => (
                <GridCell 
                    key={cell.id} 
                    cell={cell} 
                />
            ))}
        </div>
    );
}