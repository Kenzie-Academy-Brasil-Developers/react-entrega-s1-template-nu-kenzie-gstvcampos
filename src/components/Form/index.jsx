import { useState } from "react"
import { StyledButton } from "../../styles/button"
import { StyledInput, StyledSelect } from "../../styles/input"
import { StyledForm, StyledLaber } from "./style"
import { v4 as uuidv4 } from 'uuid'


export const Form = ({ setNoteList }) => {
    const [description, setDescription] = useState()
    const [value, setValue] = useState()
    const [type, setType] = useState()

    const addNoteToList = () => {
        const newNote = { id: uuidv4(), description, value, type }
        setNoteList((noteList) => [...noteList, newNote])
    }

    const submit = (e) => {
        e.preventDefault()
        addNoteToList()
        setDescription("")
        setValue("")
        setType("")
    }

    return (
        <StyledForm onSubmit={submit}>
            <StyledLaber htmlFor="description">Descrição</StyledLaber>
            <StyledInput
                id="description"
                type="text"
                placeholder="Digite aqui sua descrição"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <StyledLaber htmlFor="value">Valor (R$)</StyledLaber>
            <StyledInput
                id="value"
                type="number"
                placeholder="R$ 00.00"
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <StyledLaber htmlFor="type">Tipo de valor</StyledLaber>
            <StyledSelect required name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">Selecione uma opção</option>
                <option value="entrada">Entrada</option>
                <option value="saida">Saida</option>
            </StyledSelect>
            <StyledButton type="submit">Enviar Valor</StyledButton>
        </StyledForm>

    )
}
