const Movies = ({ setSearch }) => {
  const handleSearch = (e) => {
    // setSearch(word);
    e.preventDefault();
    setSearch(e.target[0].value);
  };

  return (
    <div className="Movies">
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 text-center">
            <h2> Movies </h2>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-md-6 offset-md-3">
            <form onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="Search Movies here...."
                />
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
