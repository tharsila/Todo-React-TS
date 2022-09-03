import React, { useState } from 'react';
import * as C from './appStyles'
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ITask } from './interfaces/Task';
import Modal from './components/Modal';

function App() {
  const[taskList, setTaskList] = useState<ITask[]>([])
  const [taskUpdate, setTaskUpdate] = useState<ITask | null>(null)

  const deleteTask = (id:number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id
      })
    )
  }

  const editTask = (task: ITask):void => {
    hideOrShowModal(true)
    setTaskUpdate(task)
  }

  const handleTaskUpdate = (id:number, title:string, duration:string):void => {
    const updatedItems: ITask = {id, title, duration}

    const updatedTasks = taskList.map((task) => {
      return task.id === updatedItems.id ? updatedItems : task
    })

    setTaskList(updatedTasks)
    hideOrShowModal(false)
  }

  const hideOrShowModal = (display:boolean) => {
    const modal = document.getElementById('modal')
    if (display) {
      modal!.classList.remove('hide')
    } else {
      modal!.classList.add('hide')
    }
  }


  return (
    <>
      <Modal children={
        <TaskForm 
          btnText='Editar' 
          taskList={taskList} 
          taskUpdate={taskUpdate}
          handleTaskUpdate={handleTaskUpdate}
        />
      }/>
      <Header/>
      <C.CardContainer>
        <div>
          <h2>Insira sua próxima tarefa:</h2>
          <TaskForm btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Lista de tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} editTask={editTask}/>
        </div>
      </C.CardContainer>
      <Footer/>
    </>
  )
}

export default App
