import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'; 
import Home from './pages/Home';
import Contact from './pages/Contact';
import Register from './pages/Register';
// import Navbar from './components/NavDemo';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Routes>
  );
}

export default App;
