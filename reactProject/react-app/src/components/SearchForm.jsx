export default function SearchForm({ queryString, onSetQueryString }) {
  return (
    <form className="d-flex mb-2 mb-lg-0 ms-auto">
      <input
        type="search"
        className="form-control me-1"
        placeholder="Search"
        value={queryString}
        onChange={(e) => onSetQueryString(e.target.value)}
      />
      <button className="btn btn-outline-light" type="submit">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}
