import { useState } from 'react'
import { GlobalStyles } from "./styles/global";
import { Header } from './components/Header'
import { Form } from './components/Form'
import { GlobalReset } from './styles/reset';
import { StyledContainer } from './styles/grid';

function App() {

  return (
    <>
      <GlobalReset/>
      <GlobalStyles/>

      <Header/>
      <StyledContainer>
        <Form/>
      </StyledContainer>

    </>
  )
}

export default App
