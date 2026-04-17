import type { Movie } from '../Models/Movie'

function MovieCards({ movie }: { movie: Movie }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={movie.imageUrl} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title} ({movie.year})</h5>
        <p className="card-text">{movie.description}</p>
      </div>
    </div>
  )
}

export default MovieCards