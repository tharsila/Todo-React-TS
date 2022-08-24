import React from 'react'
import * as C from './styles'

interface Props {
  btnText:string
}

const TaskForm = ({btnText}: Props) => {
  return (
   <C.Form>
    <C.FormGroup>
      <label>
        <span>O que você vai fazer?</span>
        <input 
          type="text" 
          placeholder='Título da tarefa'
        />
      </label>
    </C.FormGroup>
    <C.FormGroup>
      <label>
        <span>Duração:</span>
        <input 
          type="text" 
          placeholder='Tempo estimado (em horas)'
        />
      </label>
    </C.FormGroup>
    <C.Btn>
      <input type="submit" value={btnText} />
    </C.Btn>
   </C.Form>
  )
}

export default TaskForm