import { useState } from "react";

export default function SearchForm({ onHandleSearchMovies }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  function handleSearchMovie(e) {
    e.preventDefault();
    onHandleSearchMovies(searchTerm);
    setIsSearch(true);
  }
  return (
    <form action="" className="d-flex ms-auto mb-2 mb-lg-0">
      <input
        onChange={(e) => {
          onHandleSearchMovies(e.target.value);
        }}
        type="search"
        className="form-control me-1"
        placeholder="Search"
      />
      <button className="btn btn-outline-light" type="submit">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}
