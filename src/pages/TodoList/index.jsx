import React, { useState, useContext} from 'react';
import { AuthContext } from '../../context/auth';
import Calendar from '../TodoList/calendar';
import TodoList from '../TodoList/todoList';
import axios from 'axios';
import './custom.css'

const TodoIndex = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const { logout } = useContext(AuthContext);

    const handleLogout = () =>{
      logout();
  }
  
    const handleDateChange = async (selectedDate) => {
      setSelectedDate(selectedDate)
      try {
        const id = '649713cc111b2b0d8f4958e6'
        const response = await axios.get(`localhost:5001/users/${id}/tasks`);
    
        // Verifique a resposta da API e atualize a lista de tarefas ou realize outras ações necessárias
        console.log(response.data); // Exemplo de tratamento da resposta
      } catch (error) {
        console.error('Erro ao buscar tarefas por data:', error);
        // Trate o erro de acordo com suas necessidades
      }
    };
    return (
      <>
      <div className="nav">
        <a href="/">Retornar para página inicial</a>
        <h1 className='logo'>Portal de Tarefas</h1>
        <button onClick={handleLogout}>Sair</button>
      </div>
      <h1>Lista de Tarefas</h1>
      <div className="container">
        <Calendar handleDateChange={handleDateChange} />
        {selectedDate && <TodoList date={selectedDate} />}
      </div>
      </>
    )
  }
  
  export default TodoIndex;