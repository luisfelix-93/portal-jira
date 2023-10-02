import React, {useContext} from 'react'

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage/index.jsx';
import TodoIndex from './pages/TodoList';
import User from './pages/User';

import { AuthProvider, AuthContext } from './context/auth';

const AppRoutes = () => {
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return <div className='loading'>Carregando...</div>
        }

        if(!authenticated) {
            return <Navigate to={'/login'} />
        }

        return children
    }

    return (
        <Router>
            <AuthProvider>
            <Routes>
                <Route exact path='/login' element={<LoginPage/>}/>
                <Route exact path='/user' element={<User/>}/>
                <Route exact 
                path='/' 
                 element={
                    <Private>
                         <HomePage/>
                    </Private>
                }
                />
                <Route exact 
                path='/tasks'
                    element={
                        <Private>
                            <TodoIndex/>
                        </Private>
                    }/>
            </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;