import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams(); //url에 있는 값을 알 수 있다.
  console.log(id); //이제 우리가 받은 id로 API에 요청을 보낸다.
  //우리는 컴포넌트가 처음 mount 할 때에만 코드를 실행시키는 방법도 알고 있다.
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;
//await는 async 함수 내부에 있지 않으면 사용할 수 없다.
//영화의 상세 정보 보여주기 작업이 과제
