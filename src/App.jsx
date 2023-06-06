import { useState } from 'react'
import { GlobalReset } from './styles/reset';
import { GlobalStyles } from "./styles/global";
import { Header } from './components/Header'
import { Form } from './components/Form'
import { StyledContainer } from './styles/grid';
import { ListSection } from './components/ListSection';
import { TotalMoney } from './components/TotalMoney';


function App() {

  const [noteList, setNoteList] = useState([])

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <StyledContainer>
          <div className='form__conteiner'>
            <Form setNoteList={setNoteList} />
            {noteList.length > 0 ? (
              <TotalMoney className="total" noteList={noteList}/>
            ) : (<></>)}
          </div>
          <ListSection noteList={noteList} setNoteList={setNoteList} />
      </StyledContainer>
    </>
  )
}


export default App
