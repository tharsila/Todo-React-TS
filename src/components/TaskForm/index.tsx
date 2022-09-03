import React, {useState, useEffect, ChangeEvent, FormEvent} from 'react'
import * as C from './styles'
import { ITask } from '../../interfaces/Task'

interface Props {
  btnText:string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  taskUpdate?: ITask | null
  handleTaskUpdate?(id:number, title:string, duration:string):void
}

const TaskForm = ({btnText, taskList, setTaskList, taskUpdate, handleTaskUpdate }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [duration, setDuration] = useState<string>('');

  useEffect(() => {
    if (taskUpdate) {
      setId(taskUpdate.id)
      setTitle(taskUpdate.title)
      setDuration(taskUpdate.duration)
    }
  }, [taskUpdate])

  const handleTask = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(handleTaskUpdate) {
      handleTaskUpdate(id, title, duration)
    } else {
      const id = Math.floor(Math.random() * 1000)
      const newTask:ITask = {id, title, duration}
  
      setTaskList!([...taskList, newTask])
      setTitle('')
      setDuration('')
      console.log(taskList)
    }
  }

  return (
   <C.Form onSubmit={handleTask}>
    <C.FormGroup>
      <label>
        <span>O que você vai fazer?</span>
        <input 
          type="text" 
          placeholder='Título da tarefa'
          value={title}
          onChange={((e) => setTitle(e.target.value))}
        />
      </label>
    </C.FormGroup>
    <C.FormGroup>
      <label>
        <span>Duração:</span>
        <input 
          type="number" 
          placeholder='Tempo estimado (em horas)'
          value={duration}
          onChange={((e) => setDuration(e.target.value))}
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