import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Link 태그는 html로 변환하면 a 태그다.
function Navigation() {
    return (
        <NavigationContainer>
            <Link to={`/`}>Home</Link>
            <Link to={`/about`}>About</Link>
        </NavigationContainer>
    )
}

const NavigationContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    top: 0;
    
    a {
        text-decoration: none;
        margin: 5px 5px;
        background-color: ${({ theme }) => theme.colors.orange};
        border-radius: 5px;
        padding: 10px;
        color: ${({ theme }) => theme.colors.white};

        &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            color:  ${({ theme }) => theme.colors.orange};
        }
    }
`;

export default Navigation;