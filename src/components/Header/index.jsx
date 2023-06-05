import logo from "../../assets/logo.svg"
import { StyledContainer } from "../../styles/grid"
import { StyledHeader } from "./style"

export const Header = () => {
    return (
        <StyledHeader>
            <StyledContainer>
                <div className="flexbox">
                    <img src={logo} alt="logo da Nu Kenzie" />
                </div>
            </StyledContainer>
        </StyledHeader>
    )
}
