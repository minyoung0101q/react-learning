import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";
import {
    Loader,
    LoaderText
} from "../styles/sharedStyles";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`);
        const json = await response.json();
        console.log(json);
        setLoading(false); // setLoading과 setMovies를 통해 상태를 업데이트하면 컴포넌트가 재렌더링됨
        setMovies(json.data.movies); // movies는 객체로 구성된 배열
    }

    useEffect(() => { // 컴포넌트가 처음 렌더링된 후, useEffect가 실행됨
        getMovies();
    }, [])

    return (
        <SectionContainer>
            {loading ?
                <Loader>
                    <LoaderText>Loading...</LoaderText>
                </Loader>
                :
                <MovieContainer>
                    {movies.map(movie => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                            rating={movie.rating}
                            year={movie.year}
                        />
                    ))}
                </MovieContainer>
            }
        </SectionContainer>
    )
}

const SectionContainer = styled.section`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 80px;
`;

const MovieContainer = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
`;

export default Home;