import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router";
import ItemDetailContainer from './components/ItemDetailContainer';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Link to='/about'>about</Link>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category:categoryName" element={<ItemListContainer/>} />
        <Route path="/about" element={<div> about</div>} />
        <Route path="/item:id" element={<ItemListContainer/>} />
      </Routes>
    </BrowserRouter>
      </>
  )
}


