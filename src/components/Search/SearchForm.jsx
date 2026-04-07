import { useState } from 'react'
import styles from './Search.module.css'

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
                    <div key={album.collectionId} className={styles.resultItem}>
                        <img src={album.artworkUrl100} alt={album.collectionName} />
                        <span>{album.collectionName}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}