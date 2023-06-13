import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, price,stock, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={name} />
        <h3> {name} </h3>
        <p>Precio: ${price} </p>
        <p>Stock: {stock}</p>
        <Link className='detalle' to={`/item/${id}`}> Ver Detalles </Link>
    </div>
  )
}

export default Item

