import { StyledTitle2, StyledTitle3 } from "../../styles/typography"
import { NoteList } from "./NoteList"
import { TotalMoney } from "./TotalMoney"

export const ListSection = ({ noteList, setNoteList }) => {
    return (

    <section>
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
    </section>
    
    )
}