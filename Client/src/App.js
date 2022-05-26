
import './App.css';
import { Login } from './components/login.comp';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

import { Register } from './components/reg.comp';

import Nav from './components/nav.comp';

import { Ticket } from './components/ticket.comp';
import { Home } from './components/home.comp';



function App() {

  const user = JSON.parse(localStorage.getItem('profile'))
  
  return (
    <>
   
   <BrowserRouter>
   <Nav/>
  
     <Routes>
       <Route path="/" element={!user ?<Home/> : <Navigate to="/ticket"/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={!user?<Register/>:<Navigate to="/ticket"/>}/>
      <Route path="/ticket" element={<Ticket/>}/>
      </Routes>
    </BrowserRouter>

   </>
  );
}

export default App;
