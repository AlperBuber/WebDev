export default function Movie({ movieObj }) {
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
              <h4 className="card-title">{movieObj.title}</h4>
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
