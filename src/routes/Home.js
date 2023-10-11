import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true); //기본값이 true
  const [movies, setMovies] = useState([]); //기본값으로 비어있는 array
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  ); //loading이 false라면, 즉 loading이 아니라면 영화들을 return 해줘야 하는데 아직 우리는 영화가 없기 때문에 null로 우선 설정함
}

export default Home;
