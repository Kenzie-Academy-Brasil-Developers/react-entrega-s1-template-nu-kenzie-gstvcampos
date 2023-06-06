import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    max-width: 1200px;
    gap: 60px;

    margin: 0 auto;
    margin-bottom: 40px;

    .form__conteiner {
        width: 355px;
        max-width: 100%;
    }
    section > h3 {
        margin-bottom: 32px;
    }

    @media screen and (max-width: 999px){
        justify-content: center;
    }
`