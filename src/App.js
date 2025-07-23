import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
          <Route path='/' element={<Navbar/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
     </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
