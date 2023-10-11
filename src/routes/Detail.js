import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setDetails(data.data.movie);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);
  console.log(details);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          <img
            src={details.medium_cover_image}
            alt={details.title}
            className={styles.movie__img}
          />
          <div className={styles.movie__details}>
            <h2 className={styles.movie__title}>{details.title}</h2>
            <h3 className={styles.movie__year}>{details.year}</h3>
            <ul className={styles.movie__genres}>
              {details.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <p>{details.like_count} Likes</p>
            <p>Rating: {details.rating}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
