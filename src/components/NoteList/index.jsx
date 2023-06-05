import { NoteCard } from "../Card"
import { StyledUl } from "./styles"


export const NoteList = ({noteList, setNoteList}) => {

    const removeNoteFromList = (noteId) => {   
        if(confirm("Você deseja mesmo excluir essa nota?")){     
            setNoteList((noteList) => noteList.filter(note => note.id !== noteId))
        }
    }

    return (
        <StyledUl>
            {noteList.map((note) => <NoteCard key={note.id} note={note} removeNoteFromList={removeNoteFromList}/> )}
        </StyledUl>
    )
}