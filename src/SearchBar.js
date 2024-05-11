import { useState } from "react";

function SearchBar({ setMovie, setMovieResults, API_KEY }) {
  const [query, setQuery] = useState("");

  async function search() {
    const movieParameters = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmI1NGU1YmQ0MmFkNGRjNGVjODdmZGE3MTY0MTA3ZCIsInN1YiI6IjY2M2U0MDY0ODdjYmM2ZjU0ZmRhYTU1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U9UMHWm2iPrWDJufE9d3kvcWkpkRFpINMbdsimV0YzQ",
      },
    };

    await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        API_KEY +
        "&query=" +
        query,
      movieParameters
    )
      .then((response) => response.json())
      .then((response) => setMovie(response.results))
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <input
        className="SearchBar"
        type="text"
        placeholder="Find Movies"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            search();
          }
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
