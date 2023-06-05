import { StyledBody, StyledTitle3 } from "../../styles/typography"
import { StyledSection } from "./styles"


export const TotalMoney = ({ noteList }) => {

    const amount = noteList.reduce((acc, note) => {

        if (note.type === 'entrada') {
            return acc + parseFloat(note.value);
        }
        if (note.type === 'saida') {
            return acc - parseFloat(note.value);
        }
        return acc
    }, 0);

    const formattedAmount = amount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

    return (
        <StyledSection>
            <StyledTitle3>Valor Total</StyledTitle3>
            <StyledBody>O valor se refere ao saldo</StyledBody>
            <StyledTitle3 className="value" color="primary">{formattedAmount}</StyledTitle3>
        </StyledSection>
    )
}