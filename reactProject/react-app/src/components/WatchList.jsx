import WatchListMovie from "./WatchListMovie.jsx";

export default function WatchList({
  watchList,
  isWatchListOpen,
  onHandleRemoveFromWatchlist,
}) {
  return (
    <>
      {isWatchListOpen && (
        <div className="container my-3">
          <div className="card">
            <div className="card-header">
              <h3 className="title h5 mb-0 ">Watch List</h3>
            </div>
            <div className="card-body">
              {watchList.filter((m) => m.isActive).length != 0 ? (
                <div className="movie-list row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                  {watchList.map((movie) => (
                    <WatchListMovie
                      key={movie.id}
                      movieObj={movie}
                      onHandleRemoveFromWatchlist={onHandleRemoveFromWatchlist}
                    />
                  ))}
                </div>
              ) : (
                <div>Film Bulunamadı</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
