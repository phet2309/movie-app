const StarRatingFilter = ({ selectedStars, onStarChange }) => (
  <div className="dropdown">
    <button className="dropbtn">Rating</button>
    <div className="dropdown-content">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((stars) => (
        <label key={stars}>
          <input
            type="checkbox"
            value={stars}
            checked={selectedStars.includes(stars)}
            onChange={onStarChange}
          />
          {Array.from({ length: stars }, () => '★').join('')}
        </label>
      ))}
    </div>
  </div>
);

export default StarRatingFilter;
