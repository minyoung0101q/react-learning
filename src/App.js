import { useEffect, useState } from "react";

function App() {
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
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  ); //loading이 false라면, 즉 loading이 아니라면 영화들을 return 해줘야 하는데 아직 우리는 영화가 없기 때문에 null로 우선 설정함
}
export default App;
/* 코드 짜는 순서
1. loading state
2. 내 component가 시작할 때만 어떠한 코드를 딱 한 번만 실행시킬 예정
*/
/* then 대신에 async-await를 주로 사용한다.(어싱크 어웨이트) 
async-await를 사용하기 위해서 여기에 getMovies라는 함수를 만들 것
*/
/* map을 활용해서 화면에 그려준다. */
/* map함수에 대해서 정리하자면 아래와 같다. 
[1, 2, 3, 4, 5, 6].map(x => x*2)
[2, 4, 6, 8, 10, 12]
map 함수는 array를 가져와서 새로운 array를 만들어준다.
여기서 x는 array의 각각의 item을 의미한다.
*/
//map을 쓸 때 key를 줘야 한다는 것만 잘 기억하기!
