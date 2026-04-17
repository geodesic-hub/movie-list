import type { Movie } from '../Models/Movie'
import MovieCards from './MovieCards'

function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <div className="d-flex flex-wrap gap-3">
      {movies.map(movie => (
        <MovieCards key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList