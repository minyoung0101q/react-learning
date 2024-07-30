import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    RatingYear,
    Summary,
    Genres,
    GenresLi,
    MovieData,
    Poster
} from "../styles/sharedStyles"; // 공통 스타일을 가져옴

function Movie({ id, title, summary, poster, genres, rating, year }) {
    return (
        <MovieComponent>
            <Poster src={poster} title={title} alt={title} />
            <MovieData>
                <Link to={`/movie/${id}`}>
                    <Title>{title}</Title>
                </Link>
                <Genres>
                    {genres.map(g => (
                        <GenresLi key={g}>{g}</GenresLi>
                    ))}
                </Genres>
                <Summary>{summary.slice(1, 180)}...</Summary>
                <RatingYear>{rating} / {year}</RatingYear>
            </MovieData>
        </MovieComponent>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired),
    rating: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired
}

const MovieComponent = styled.div`
    width: 45%;
    display: flex;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    margin-bottom: 70px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
        0 8px 16px -8px rgba(0, 0, 0, 0.3),
        0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Title = styled.h2`
    margin-bottom: 10px;
    font-size: 25px;
    color: #000000;

    &:hover {
        color: ${({ theme }) => theme.colors.orange};
    }
`;



export default Movie;