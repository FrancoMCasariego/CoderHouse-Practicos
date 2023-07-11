import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
 
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
          <Route path='/cart' element={<Cart />} />
          <Route path="/checkout" element= {<h1>checkout</h1>}/>
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
