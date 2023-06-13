import "./ItemCount.css"
import { useState }  from "react" 


const ItemCount = ({ inicial, stock, onAdd }) => {
    const [cantidad, setCount] = useState(inicial)
console.log(inicial)
console.log(stock)
    const decrement = () => {
        if(cantidad > inicial) setCount(cantidad - 1)
        console.log(cantidad)
    }

    const increment = () => {
        if(cantidad < stock) setCount(cantidad + 1)
        console.log(cantidad)
    }

    return (
        <div className="boton1">
            <div className="boton">
                <button onClick={decrement}>-</button>
                <h4>{cantidad}</h4>
            </div>
            <div>
                <button onClick={increment}>+</button>
            </div>
            <div className="boton2">
                <button onClick={() => onAdd(cantidad)} disabled={!stock}>agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCount


//return(
 //   <div className="Counter"></div>
//)


