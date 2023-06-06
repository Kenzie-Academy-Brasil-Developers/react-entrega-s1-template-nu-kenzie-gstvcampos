import styled from "styled-components";

export const StyledCard = styled.li`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 0.25rem;
    background-color: var(--Color-Grey-1);


    width: 100%;

    ${({ type }) => type === "entrada" && "border-left: 4px solid var(--Color-Secondary);"}
    ${({ type }) => type === "saida" && "border-left: 4px solid var(--Color-Grey-2);"}

    div{ 
        display: flex;
        gap: 10px;
        width: 20%;
        flex-direction: column;
        padding: 18px;
    }
`