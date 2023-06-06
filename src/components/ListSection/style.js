import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;

    max-width: 100%;
    width: 600px;
    @media screen and (max-width: 600px){
        justify-content: flex-start;
        width: 350px;
        max-width: 100%;
        margin: 0 auto;
    }
`