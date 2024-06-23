const renderStarRating = (starRating) => {
  const fullStars = Math.floor(starRating);
  const halfStar = starRating % 1 >= 0.5;
  const emptyStars = 10 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {Array.from({ length: fullStars }, () => '★').join('')}
      {halfStar ? '☆' : ''}
      {Array.from({ length: emptyStars }, () => '☆').join('')}
    </>
  );
};

const FilmItem = ({ film }) => (
  <li className="film-item">
    <div className="film-details">
      <div><strong>{film.title}</strong></div>
      <div>{renderStarRating(film.rating)}</div>
    </div>
    <div className="film-category">{film.category}</div>
  </li>
);

export default FilmItem;
