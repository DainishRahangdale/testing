
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import './App.css'

function App() {
  return (
   <Router>
       <Routes>
               <Route path='/' element={<Home/>}></Route>
               <Route path='/login' element={<LoginPage/>}></Route>
               <Route path='/signup' element={<SignUp/>}></Route>
       </Routes>
   </Router>
  )
}

export default App
