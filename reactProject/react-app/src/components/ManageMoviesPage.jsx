import React from "react";
import { Link } from "react-router";

const ManageMoviesPage = (category, page) => {
  return (
    <nav aria-label="Sayfa navigasyonu" className="mt-4">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <Link className="page-link" to="#" tabIndex="-1">
            «
          </Link>
        </li>
        <li className="page-item active">
          <Link className="page-link" to={`/movies/${category}/1`}>
            1
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to={`/movies/${category}/2`}>
            2
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to={`/movies/${category}/3`}>
            3
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to={`/movies/${category}/4`}>
            4
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to={`/movies/${category}/5`}>
            5
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="#">
            »
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ManageMoviesPage;
