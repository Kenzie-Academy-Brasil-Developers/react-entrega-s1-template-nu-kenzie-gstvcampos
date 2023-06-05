import { StyledTitle2, StyledTitle3 } from "../../styles/typography"
import { NoteList } from "../NoteList"
import { StyledSection } from "./style"

export const ListSection = ({ noteList, setNoteList }) => {
    return (

    <StyledSection>
            {noteList.length > 0 ? (
                <>
                    <StyledTitle3>Resumo financeiro</StyledTitle3>
                    <NoteList noteList={noteList} setNoteList={setNoteList}/>
                </>
            ) : (
                <>
                    <StyledTitle3>Resumo financeiro</StyledTitle3>
                    <StyledTitle2>Você ainda não possui nenhum lançamento</StyledTitle2>
                </>
            )}
    </StyledSection>
    
    )
}