import styles from './Grid.module.css'
export default function GridCell({ cell }) {
    return (
        <div className={styles.gridCell}>
            {cell.album ? (
                <img src={cell.album.imageUrl} alt={cell.album.title} />
            ) : (
                <span>+</span>
            )}
        </div>
    );
}