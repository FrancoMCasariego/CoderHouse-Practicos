import cart from "./assets/carrito-de-compras.png"
import "./CartWidget.modules.css"
import { cartContext } from "../../context/CartContext"


const CartWidget =({productCount = 0}) => {
    return (
        <div class="carro">
            <img src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget