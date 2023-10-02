import React from 'react'

function Nav({onLogout}) {
  return (
    <div className='nav'>
    <a href="/tasks">Lista de Tarefas</a>
    <h1 className='logo'>Portal de tarefas</h1>
    <button onClick={onLogout}>Sair</button>
  </div>
  )
}

export default Nav