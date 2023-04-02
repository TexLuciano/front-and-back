import React from 'react';
import { Login } from './pages/Login';
import { Register } from './containers/Register';
import { UserProvider } from './context/UserContext';
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes as ReactRoutes,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';
import { useUser } from './context/UserContext';

function App() {

 

  const user = localStorage.getItem('chicoburguer:userData');

  
  
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <ReactRoutes>
            <Route path="/" element={ user ? <Home /> : <Navigate to={'/login'}/> } />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />}/>
            <Route path="/comprar" element={<Register />}/>
            <Route path="*" element={<NaoEncontrada />} />
          </ReactRoutes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
