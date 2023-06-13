import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)

    const { ItemId } = useParams()
    useEffect(() => {
        getProductById(ItemId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [ItemId])
    return(
        <div className="ItemDetailContainer" >
            <h1>Detalle de producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer