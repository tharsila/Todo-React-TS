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

  const deleteTask = (id:number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display:boolean) => {
    const modal = document.getElementById('modal')
    if (display) {
      modal!.classList.remove('hide')
    } else {
      modal!.classList.add('hide')
    }
  }

  const editTask = ():void => {
    hideOrShowModal(true)
  }

  return (
    <>
      <Modal children={<TaskForm btnText='Editar' taskList={taskList}/>}/>
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
