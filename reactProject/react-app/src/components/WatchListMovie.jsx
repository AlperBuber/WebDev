import { useState } from "react";

export default function WatchListMovie({
  movieObj,
  onHandleRemoveFromWatchlist,
}) {
  return (
    <>
      {movieObj.isActive && (
        <div className="col">
          <div className="movie card position-relative">
            <img
              src={"/img/" + movieObj.image}
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <div className="card-title d-flex justify-content-between align-items-center">
                <h4 className="">{movieObj.title}</h4>
                <button
                  onClick={() => onHandleRemoveFromWatchlist(movieObj)}
                  type="button"
                  className="btn btn-light border favorite-button"
                >
                  <i className="bi bi-heart-fill  top-0 end-0"></i>
                </button>
              </div>

              <p className="card-text mb-0">{movieObj.description}</p>
              {movieObj.isNew && (
                <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                  New
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
