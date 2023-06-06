import { useState } from "react"
import { StyledButton } from "../../styles/button"
import { StyledInput, StyledSelect } from "../../styles/input"
import { StyledForm, StyledLaber } from "./style"
import { v4 as uuidv4 } from 'uuid'


export const Form = ({ setNoteList }) => {
    const [formData, setFormData] = useState({
        description: "",
        value: "",
        type: "",
        id: "",
    })

    const addNoteToList = () => {
        const newNote = { ...formData, id: uuidv4()}
        setNoteList((noteList) => [...noteList, newNote])
    }

    const submit = (e) => {
        e.preventDefault()
        addNoteToList()
        setFormData({
            description: "",
            value: "",
            type: "",
            id: "",
        })

    }

    return (
        <StyledForm onSubmit={submit}>
            <StyledLaber htmlFor="description">Descrição</StyledLaber>
            <StyledInput
                id="description"
                type="text"
                placeholder="Digite aqui sua descrição"
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />

            <StyledLaber htmlFor="value">Valor (R$)</StyledLaber>
            <StyledInput
                id="value"
                type="number"
                placeholder="R$ 00.00"
                required
                value={formData.value}
                onChange={(e) => setFormData({ ...formData, value: e.target.value })}
            />

            <StyledLaber htmlFor="type">Tipo de valor</StyledLaber>
            <StyledSelect required name="type" id="type" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                <option value="">Selecione uma opção</option>
                <option value="entrada">Entrada</option>
                <option value="saida">Saida</option>
            </StyledSelect>
            <StyledButton type="submit">Enviar Valor</StyledButton>
        </StyledForm>
    )
}
