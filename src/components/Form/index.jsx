import { StyledButton } from "../../styles/button"
import { StyledInput, StyledSelect } from "../../styles/input"
import { StyledForm } from "./style"

export const Form = () => {
    return (
        <StyledForm>
            <StyledInput
                placeholder="Digite aqui sua descrição"
                type="text"
                required
            />

            <StyledInput
                placeholder="Digite aqui sua descrição"
                type="number"
                required
            />
            <StyledSelect name="" id="">
                <option value="">Entrada</option>
                <option value="">Saida</option>
            </StyledSelect>
            <StyledButton>Enviar Valor</StyledButton>
        </StyledForm>
    )
}