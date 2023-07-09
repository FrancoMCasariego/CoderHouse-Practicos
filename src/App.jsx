import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartProvider } from './context/cartContext';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
       <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Listado de Productos"}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Listado de productos filtrados"}/>}/>
          <Route path='/Item/:ItemId' element={<ItemDetailContainer />}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
       </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

//<NavBar/>
//<ItemListContainer greeting={"Bienvenidos"}/>
//<ItemDetailContainer/>
//<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada ",quantity)}/>
