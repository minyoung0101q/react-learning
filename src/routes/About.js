import React from "react";
import styled from "styled-components";

function About() {
    return (
        <AboutPage>
            <AboutSpan>This is a page that describes a movie.</AboutSpan>
        </AboutPage>
    )
}

const AboutPage = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AboutSpan = styled.span`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 15px;
    border-radius: 5px;
`;

export default About;