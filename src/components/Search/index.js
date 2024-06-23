import { useMemo, useState } from "react";
import { movieList } from "../../data";
import FilmItem from "./FilmItem";
import StarRatingFilter from "./StarRatingFilter";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleRatingChange = (e) => {
      const value = parseInt(e.target.value);
      setSelectedRatings(
        e.target.checked
          ? [...selectedRatings, value]
          : selectedRatings.filter((rating) => rating !== value)
      );
    };
  
    const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.value);
    };
  
    const filteredMovies = useMemo(() => {
      return movieList.filter((movie) => {
        const matchesTitle = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRating = selectedRatings.length
          ? selectedRatings.includes(Math.floor(movie.rating))
          : true;
        const matchesCategory = selectedCategory
          ? movie.category === selectedCategory
          : true;
        return matchesTitle && matchesRating && matchesCategory;
      });
    }, [searchTerm, selectedRatings, selectedCategory]);
  
    const isFiltered = searchTerm || selectedRatings.length || selectedCategory;
  
    return (
      <div className="Search">
        <h2>Search Movies</h2>
        <div className="search-controls">
          <input
            type="text"
            placeholder="Enter movie name"
            value={searchTerm}
            onChange={handleSearch}
          />
          <StarRatingFilter selectedStars={selectedRatings} onStarChange={handleRatingChange} />
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Genre</option>
            {["Action", "Comedy", "Thriller", "Drama"].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {isFiltered && (
          <ul>
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <FilmItem key={movie.title} film={movie} />
              ))
            ) : (
              <li>No movies found.</li>
            )}
          </ul>
        )}
      </div>
    );
  };
  
  export default Search;