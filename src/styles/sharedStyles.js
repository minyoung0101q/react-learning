import styled from 'styled-components';

/* loader */
export const Loader = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`;

export const LoaderText = styled.span`
    font-weight: 10;
`;

export const Poster = styled.img`
    max-width: 150px;
    border-radius: 5px;
    margin: 0px 10px;
    position: relative;
    top: -30px;
`;

export const MovieData = styled.div`
    padding: 15px;
`;

export const Title = styled.h2`
    margin-bottom: 10px;
    font-size: 25px;
    color: #000000;
`;

export const Genres = styled.ul`
    display: flex;
    margin-bottom: 10px;
`;

export const GenresLi = styled.li`
    margin-right: 5px;
`;

export const Summary = styled.summary`
    margin-bottom: 20px;
`;

export const RatingYear = styled.span`
    background-color: orange;
    color: white;
    padding: 5px;
    border-radius: 10px;
`;
