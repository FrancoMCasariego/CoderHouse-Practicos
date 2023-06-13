import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.module.css"
import {NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to={"/"}>
                <h3>Ecommerce Arte!</h3>
            </Link>
            <div className="Navbar">
                <NavLink to={"/category/Colorful"} classname={({isActive})=>isActive ? "ActiveOption" : "Option"} >Colorful</NavLink>
                <NavLink to={"/category/DDigital"} classname={({isActive})=>isActive ? "ActiveOption" : "Option"}>DDigital</NavLink>
                <NavLink to={"/category/Pinturas"} classname={({isActive})=>isActive ? "ActiveOption" : "Option" }>Pinturas</NavLink>                
                <CartWidget/>
            </div>
            
        </nav>
    )
}


export default NavBar   