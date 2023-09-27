import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'; 
import Home from './pages/Home';
import Register from './pages/Register';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path='register' element={<Register />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Routes>
  );
}

export default App;
