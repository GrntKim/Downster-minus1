import { useDroppable } from '@dnd-kit/core';
import styles from './Grid.module.css'

export default function GridCell({ cell }) {
    const { setNodeRef, isOver } = useDroppable({ id: cell.id });

    return (
        <div ref={setNodeRef} className={styles.gridCell}>
            {cell.album ? (
                <img src={cell.album.artworkUrl100} alt={cell.album.collectionName} />
            ) : (
                <span></span>
            )}
        </div>
    );
}