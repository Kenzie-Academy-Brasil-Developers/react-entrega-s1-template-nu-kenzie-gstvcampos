import styled from "styled-components";

export const StyledSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .375rem;
    padding: 20px;

    max-width: 100%;

    border: 1px solid rgba(0, 0, 0, 0.2);

    margin-top: 18px;

    .value {
        position: absolute;
        width: 90px;
        top: 20px;
        right: 20px;
    }
`

