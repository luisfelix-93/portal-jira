import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/auth';
import "./style.css"
import Nav from './Nav';
import Repositories from './Repositories';
import Search from './Search';
import { GetRepositories } from '../../services/api';
// import { getUsers } from '../../services/api';
const userId = '649713cc111b2b0d8f4958e6';

const HomePage = () => {
  const [repositories, setRepositories] = useState('');
  const loadData = async(query = '') => {
    const response = await GetRepositories(userId);
    console.log(response.data)
    setRepositories(response.data);
  };

  useEffect(() => {(async () => await loadData())();
  }, []);

  const { logout } = useContext(AuthContext);
  

  const handleLogout = () =>{
      logout();
  }

  const handleSearch = (query) => {
    console.log('query', query)
  }

  const handleClear = () => {
    console.log('clear');
  }

  const handleDeleteRepo = () =>{
    console.log('deleteRepo')
  }

  const handleNewRepo = (url) => {
    console.log('new repo', url)
  }
  return (
    <div id='main'>
    <Nav onLogout={handleLogout}/>
    <Search 
      onClear={handleClear}
      onSearch={handleSearch}/>
      <Repositories 
        repositories={[repositories]} 
        onDeleteRepo={handleDeleteRepo}
        onNewRepo={handleNewRepo}
        />
      </div>
  )
}

export default HomePage;