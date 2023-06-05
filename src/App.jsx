import { useState } from 'react'
import { GlobalStyles } from "./styles/global";
import { Header } from './components/Header'
import { Form } from './components/Form'
import { GlobalReset } from './styles/reset';
import { StyledContainer } from './styles/grid';
import { ListSection } from './components/ListSection';
import { TotalMoney } from './components/ListSection/TotalMoney'


function App() {

  const [noteList, setNoteList] = useState([])

  return (
    <>
      <GlobalReset />
      <GlobalStyles />

      <Header />
      <StyledContainer>
        <StyledContainer>
          <Form setNoteList={setNoteList} />
          <TotalMoney noteList={noteList} />
        </StyledContainer>
        <StyledContainer>
          <ListSection noteList={noteList} setNoteList={setNoteList} />
        </StyledContainer>
      </StyledContainer>
    </>
  )
}

export default App
