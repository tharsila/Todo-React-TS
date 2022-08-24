import React, { useState } from 'react';
import * as C from './appStyles'
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { FaBeer } from 'react-icons/fa';

function App() {
  
  return (
    <>
      <Header/>
      <C.CardContainer>
        <div>
          <h2>Insira sua próxima tarefa:</h2>
          <TaskForm btnText='Criar Tarefa'/>
        </div>
        <div>
          <h2>Lista de tarefas:</h2>
          <TaskList/>
        </div>
      </C.CardContainer>
      <Footer/>
    </>
  )
}

export default App
