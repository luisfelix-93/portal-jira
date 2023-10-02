import React from 'react'
import  './style.css'

function User() {
  return (
    <div id="main">
        <div className='nav'>
            <h1 className='logo'>Portal de tarefas</h1>
            <button>Sair</button>
        </div>
        <div className="form">
            <form action="form">
                <div className="field">
                    <label htmlFor="userName">Nome Completo: </label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label htmlFor="dtBirth">Data de Nascimento: </label>
                    <input type="date" />
                </div>
                <div className="field">
                    <label htmlFor="nmStreet">Endereço: </label>
                    <input type="text" />
                    <label htmlFor="nuStreet">Nº: </label>
                    <input type="text" />
                    <label htmlFor="deComplement">Complemento: </label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label htmlFor="codeZip">CEP: </label>
                    <input type="text" />
                    <label htmlFor="nmCity">Cidade: </label>
                    <input type="text" />
                    <label htmlFor="uf">Estado: </label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label htmlFor="email">Email: </label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha: </label>
                    <input type="password" className="password" />
                </div>
            </form>

    </div>
    </div>
  )
}

export default User