import cart from "./assets/carrito-de-compras.png"
import "./CartWidget.modules.css"


const CartWidget =() => {
    return (
        <div class="carro">
            <img src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget