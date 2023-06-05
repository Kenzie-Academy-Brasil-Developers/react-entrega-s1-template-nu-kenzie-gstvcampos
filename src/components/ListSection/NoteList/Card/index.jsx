import { StyledBody, StyledTitle3 } from "../../../../styles/typography"
import { StyledCard } from "./styles"

export const NoteCard = ({note, removeNoteFromList}) => {
    return (
        <StyledCard>
            <div>
                <StyledTitle3>{note.description}</StyledTitle3>
                <StyledBody>{note.type}</StyledBody> 
            </div>
            <div>
                <StyledBody>{note.value}</StyledBody>
                <button onClick={() => removeNoteFromList(note.id)}>Excluir</button>
            </div>
        </StyledCard>
    )
}