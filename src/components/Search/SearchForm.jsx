import { useState } from 'react'
import { useDraggable } from '@dnd-kit/core';
import styles from './Search.module.css'

function DraggableAlbum({ album }) {
    const { attributes, listeners, setNodeRef } = useDraggable({
        id: album.collectionId,
        data: album
    });

    return (
        <div ref={setNodeRef} {...listeners} {...attributes}>
            <img src={album.artworkUrl100} alt={album.collectionName} />
            <span>{album.collectionName}</span>
        </div>
    )
}

export default function SearchForm () {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const res = await fetch(
            `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=album&limit=10`
        );
        const data = await res.json();
        setResults(data.results);
    };

    return (
        <div className={styles.searchForm}>
            <input  
                type="text"
                placeholder='Search album...' 
                value={query}
                onChange={e => setQuery(e.target.value)}
                autoFocus
            />
            <button onClick={handleSearch}>Search</button>
            <div className={styles.results}>
                {results.map(album => (
                    <DraggableAlbum album={album} />
                ))}
            </div>
        </div>
    )
}