import React from 'react'
import * as C from './styles'

interface Props {
  children: React.ReactNode;
}

const Modal = ({children}: Props) => {
  const closeModal = (e:React.MouseEvent):void => {
    const modal = document.getElementById('modal')
    modal!.classList.add('hide')
  }

  return (
    <div id='modal' className='hide'>
      <C.Fade onClick={closeModal}></C.Fade>
      <C.Modal>
        <h2>Editar Tarefa</h2>
        {children}
      </C.Modal>
    </div>
  )
}

export default Modal