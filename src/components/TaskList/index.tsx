import React from 'react'
import { ITask } from '../../interfaces/Task'
import { BsTrash, BsPencil } from 'react-icons/bs';
import * as C from './styles'

interface Props {
  taskList: ITask[]
  handleDelete(id:number):void
  editTask(task:ITask):void
}

const TaskList = ({taskList, handleDelete, editTask}: Props) => {
  return (
    <>
     {taskList.length > 0 ? (
        taskList.map((task) => (
          <C.TaskContainer key={task.id}>
            <C.TaskInfo>
              <h3>{task.title}</h3>
              <p>Duração: {task.duration} hora(s)</p>
            </C.TaskInfo>
            <C.TaskAction>
              <span onClick={() => editTask(task)}>
                <BsPencil/>
              </span>
              <span onClick={() => handleDelete(task.id)}>
                <BsTrash/>
              </span>
            </C.TaskAction>
          </C.TaskContainer>
        ))
     ) : (
      <h4>Não há tarefas cadastradas!</h4>
     )}
    </>
  )
}

export default TaskList