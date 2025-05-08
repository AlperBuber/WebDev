import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/loading";
import MovieList from "../components/MovieList";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = "64b7db714e0ab0379c4f50f7b4ecb2f7";
const language = "tr-TR";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getMovie() {
      setIsLoading(true);

      try {
        const response = await fetch(
          `${apiUrl}/movie/${id}?api_key=${api_key}&language=${language}&append_to_response=credits`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }

        const data = await response.json();
        setMovie(data);
        setError("");
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    getMovie();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage message={error} />;
  }

  const getColor = (p) => {
    if (p < 50) return "red";
    if (p < 75) return "orange";
    return "green";
  };

  const runtime = movie.runtime ? Math.floor(movie.runtime / 60) : "";
  const runtimeMinutes = movie.runtime ? movie.runtime % 60 : 0;
  const formattedDate = movie.release_date?.split("-").reverse().join("/");
  const percentage = Math.round(movie?.vote_average * 10);
  const color = getColor(percentage);
  const circleStyle = {
    fontWeight: "bold",
    fontSize: "1.2rem",
    backgroundColor: color,
  };
  return (
    <div
      className="position-relative"
      id="movie-details-container"
      style={{
        backgroundImage: movie.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay"></div>
      <div className="container  border-0 pt-3 ">
        <div className="card bg-transparent text-white border-0">
          <div className="card-body border-0">
            {movie ? (
              <div className="row">
                <div className="col-md-4 mb-3 mb-mb-0  ">
                  <img
                    id="movie-details-img"
                    src={
                      movie.poster_path
                        ? "https://image.tmdb.org/t/p/original/" +
                          movie.poster_path
                        : "https://www.disa.com.tr/wp-content/themes/disawp/images/gorsel-yok.jpg"
                    }
                    alt=""
                    className="img-fluid rounded-3 border"
                  />
                </div>
                <div className="col-md-8">
                  <h4 className="movie-details-title">
                    {movie.title}{" "}
                    <span className="text-white-50">
                      {" "}
                      ({movie.release_date?.slice(0, 4)})
                    </span>
                  </h4>
                  <div>
                    <ul className="d-flex  gap-4 ">
                      <li>
                        <p className="genres">
                          {movie.genres?.map((genre) => (
                            <span key={genre.id} className="  me-1">
                              {genre.name},{" "}
                            </span>
                          ))}
                        </p>
                      </li>
                      <li>
                        <span>{`${runtime}h ${runtimeMinutes}m `}</span>
                      </li>
                    </ul>
                  </div>
                  <div style={circleStyle} className="text-dark badge mb-4 ">
                    {percentage}%
                  </div>
                  <div className="summary">
                    <h5 className="card-title">Özet</h5>
                    <p>{movie.overview}</p>
                  </div>
                  <div className="crew d-flex gap-4 mt-4 justify-content-between">
                    {movie.credits?.crew
                      ?.filter((member) => member.job === "Director")
                      .slice(0, 1)
                      .map((director) => (
                        <div className="director" key={director.id}>
                          <h5>{director.name}</h5>
                          <p className="card-text">Director</p>
                        </div>
                      ))}
                    {movie.credits?.crew
                      ?.filter((member) => member.job === "Screenplay")
                      .slice(0, 1)
                      .map((writer) => (
                        <div className="writer" key={writer.id}>
                          <h5>{writer.name}</h5>
                          <p className="card-text">Writer</p>
                        </div>
                      ))}
                    {movie.credits?.crew
                      ?.filter((member) => member.job === "Story")
                      .slice(0, 1)
                      .map((story) => (
                        <div className="story" key={story.id}>
                          <h5>{story.name}</h5>
                          <p className="card-text">Story</p>
                        </div>
                      ))}
                  </div>
                </div>
                <div>
                  <h1>Similar Films</h1>
                  <MovieList movieId={id} />
                </div>
              </div>
            ) : (
              <div>No movie selected</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
