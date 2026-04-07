import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import './App.css';
import Grid from './components/Grid/Grid';
import SearchForm from './components/Search/SearchForm';

const GRID_SIZE = 5;

const initialGrid = Array(GRID_SIZE * GRID_SIZE)
    .fill(null)
    .map((_, i) => ({ id: i, album: null}));

function App() {
  const [grid, setGrid] = useState(initialGrid);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if(!over) return;

    const album = active.data.current;
    const cellId = over.id;

    setGrid(prev => 
        prev.map(cell => 
            cell.id === cellId ? { ...cell, album } : cell
        )
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="container">
        <SearchForm />
        <Grid grid={grid} gridSize={GRID_SIZE}/>
      </div>
    </DndContext>
  )
}

export default App;
