import type { Movie } from './Models/Movie'
import MovieList from './components/MovieList'
import moviesData from './data/movies.json'

const movies: Movie[] = moviesData

function App() {
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-dark">Movie List</h1>
      <MovieList movies={movies} />
    </div>
  )
}

export default App