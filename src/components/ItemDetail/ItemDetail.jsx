import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../context/cartContext'
import { useContext } from 'react'

const ItemDetail = ({ id, descripcion, nombre, price, img, stock }) => {
 
  const [cantidad, setCantidad] = useState(0);

  const { addItem } = useContext(cartContext)

  const manejadorCantidad = (nuevaCantidad) => {
    setCantidad(nuevaCantidad);
    console.log("Productos Agregados:" + nuevaCantidad);

      const item = {
        id, nombre, price, descripcion, stock
      }

      addItem(item, cantidad)
  }

  return (
    <div className='contenedorItem'>
      <img src={img} alt={nombre}  className='image'/>
      <h2>{nombre} </h2>
      <h3>Precio: ${price} </h3>
      <h3>ID: {id} </h3>
      <p> {descripcion}</p>
      <ItemCount inicial={0} stock={stock} onAdd={manejadorCantidad} />
      {
        cantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : ""
      }  
      
      
    </div>
  )
}

export default ItemDetail