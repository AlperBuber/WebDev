import Movie from "./Movie";
import { movieList } from "../data.js";

export default function MovieList() {
  return (
    <>
      <div className="container">
        <h3 className="title text-center my-4 fs-1">Movie List</h3>

        {movieList.filter((m) => m.isActive).length != 0 ? (
          <div className="movie-list row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
            {movieList.map((movie) => (
              <Movie key={movie.id} movieObj={movie} />
            ))}
          </div>
        ) : (
          <div>Film Bulunamadı</div>
        )}
      </div>
    </>
  );
}
