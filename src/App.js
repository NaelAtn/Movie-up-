import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie/AddMovie';
import { moviesData } from './components/Data/Data';
import FilterMovie from './components/FilterMovie/FilterMovie';
import MovieList from './components/MovieList/MovieList';

function App() {
  const [movies , setMovies] =useState(moviesData)
  const [inputSearch , setInputSearch] = useState("")


  const add = (newMovie) => {
    setMovies([...movies,newMovie])
  }

  
  return (
    <div className="App">
      <FilterMovie inputSearch = {inputSearch} setInputSearch ={setInputSearch}/>
    <MovieList movies={movies} inputSearch ={inputSearch} />
    <AddMovie add={add}/>
    </div>
  );
}

export default App;
