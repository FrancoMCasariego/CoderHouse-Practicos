import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.module.css"

const NavBar = () => {
    return(
        <nav>
            <h3>Ecommerce Arte!</h3>
            <div>
                <section>
                    <button class="menu">Menu</button>
                    <button class="products">Productos</button>
                    <button class="contact">Informacion de Contacto</button>
                </section>
                
            </div>
            <CartWidget/>
        </nav>
    )
}


export default NavBar