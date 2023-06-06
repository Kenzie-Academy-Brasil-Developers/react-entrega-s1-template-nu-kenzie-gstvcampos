import styled from "styled-components";

export const StyledButton = styled.button`
    font-family: var(--Font-Primary);
    color: var(--Color-White);  
    font-size: 1rem;
    font-weight: 800;   

    border-radius: .5rem;
    border: .0625rem solid var(--Color-primary);
    background-color: var(--Color-primary);

    padding: .6875rem 1.8125rem;

    :hover {
        background-color: var(--Color-primary-2);
        border: .0625rem solid var(--Color-primary-2);
}
`

export const StyledDeleteButton = styled.button`
    font-family: var(--Font-Primary);
    color: var(--Color-Gray-4);  
    font-size: .625rem;
    font-weight: 400;   

    border-radius: .125rem;
    border: .0625rem solid var(--Color-Grey-2);
    background-color: var(--Color-Grey-2);

    width: 50px;
    height: 20px;

    :hover {
        border: .0625rem solid var(--Color-Gray-4);
        background-color: var(--Color-Gray-4);
        color: var(--Color-Grey-2);  
}
`

