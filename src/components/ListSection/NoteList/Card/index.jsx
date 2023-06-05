import { StyledBody, StyledTitle3 } from "../../../../styles/typography"
import { StyledCard } from "./styles"

export const NoteCard = ({note, removeNoteFromList}) => {

    const value = note.value
    const formattedValue = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

    return (
        <StyledCard type={note.type}>
            <div>
                <StyledTitle3>{note.description}</StyledTitle3>
                <StyledBody>{note.type}</StyledBody> 
            </div>
            <div>
                <StyledBody>{formattedValue}</StyledBody>
                <button onClick={() => removeNoteFromList(note.id)}>Excluir</button>
            </div>
        </StyledCard>
    )
}