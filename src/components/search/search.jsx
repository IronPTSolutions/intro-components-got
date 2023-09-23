function Search() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="search" className="form-label">
          Search
        </label>
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="Episode name"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}

export default Search;
