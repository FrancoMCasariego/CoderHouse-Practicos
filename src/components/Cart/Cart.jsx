import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(cartContext)

    if (totalQuantity() === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <Item key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()}>Limpiar carrito</button>
            <button>
                <Link to='/Checkout'>Checkout</Link>
            </button>
        </div>
    )
}

export default Cart