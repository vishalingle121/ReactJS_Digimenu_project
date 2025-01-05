
import './App.css'


import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Menucard from './mastertable/Menucard';
import Menu from './mastertable/Menu';
import Foodgroup from './mastertable/Foodgroup';
import Quantity from './mastertable/Quantity';
import Logindg from './document/Logindg';


function App() {
  
  return (
    <>
     <BrowserRouter>
   <Routes>

   
    <Route path="/" element={<Logindg/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/menucard" element={<Menucard/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/foodg" element={<Foodgroup/>}/>
    <Route path="/qty" element={<Quantity/>}/>
   
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
