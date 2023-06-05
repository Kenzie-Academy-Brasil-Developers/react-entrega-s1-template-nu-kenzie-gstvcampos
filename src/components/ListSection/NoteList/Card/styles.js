import styled from "styled-components";

export const StyledCard = styled.li`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 0.25rem;
    background-color: var(--Color-Grey-1);

    max-width: 100%;
    width: 560px;
    height: 90px;

    ${({ type }) => type === "entrada" && "border-left: 4px solid var(--Color-Secondary);"}
    ${({ type }) => type === "saida" && "border-left: 4px solid var(--Color-Grey-2);"}

    div{ 
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 18px;
    }
`