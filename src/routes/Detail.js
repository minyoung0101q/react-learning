import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
    RatingYear,
    Summary,
    Genres,
    GenresLi,
    Title,
    MovieData,
    Poster,
    Loader,
    LoaderText
} from "../styles/sharedStyles";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);

    const getDetail = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        console.log(json.data.movie);
        setDetails(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getDetail();
    }, []);

    return (
        <DetailContainer>
            {loading ?
                <Loader>
                    <LoaderText>Loading...</LoaderText>
                </Loader>
                :
                <MovieComponent>
                    <Poster
                        src={details.medium_cover_image}
                        alt={details.title}
                        title={details.title}
                    />
                    <MovieData>
                        <Title>{details.title}</Title>
                        <Genres>
                            {details.genres.map(g => (
                                <GenresLi key={g}>{g}</GenresLi>
                            ))}
                        </Genres>
                        <Summary>{details.description_full}</Summary>
                        <RatingYear>{details.rating} / {details.year} / like_count: {details.like_count}</RatingYear>
                    </MovieData>
                </MovieComponent>
            }
        </DetailContainer>
    )
}

const DetailContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MovieComponent = styled.div`
   display: flex;
   background-color: ${({ theme }) => theme.colors.white};
   border-radius: 5px;
   width: 50%;
   align-items: flex-start;
   box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
        0 8px 16px -8px rgba(0, 0, 0, 0.3),
        0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

export default Detail;