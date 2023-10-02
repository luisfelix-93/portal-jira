import React, {useState} from 'react'

function Search({ onSearch, onClear}) {
    const [query, setQuery] = useState('')
    const handleSearch = () => {
        setQuery('');
        onSearch('');
    }
  return (
    <div className='search'>
    <label htmlFor="query">Procurar: </label>
    <input
     type="search" 
     name='query' 
     id='query'
     value={query}
     onChange={(e) => setQuery(e.target.value)}/>
    <button onClick={handleSearch}>Limpar</button>
    <button onClick={() => onSearch(query)}>Procurar</button>
  </div>
  )
}

export default Search