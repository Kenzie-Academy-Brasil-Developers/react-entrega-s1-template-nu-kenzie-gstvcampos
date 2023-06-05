import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    max-width: 1000px;
    gap: 60px;

    margin: 0 auto;
    margin-bottom: 40px;

    section > h3 {
        margin-bottom: 32px;
    }

    @media screen and (max-width: 999px){
        padding: 1rem;
        justify-content: center;
    }
`