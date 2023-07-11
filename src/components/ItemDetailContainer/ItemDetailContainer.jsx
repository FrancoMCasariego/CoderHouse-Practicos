import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {db} from "../../services/firebase/firebaseConfig"
import { getDoc, doc, QuerySnapshot } from "firebase/firestore"


const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)

    const { ItemId } = useParams()
    useEffect(() => {
        const productRef = doc(db, "products", ItemId)

        getDoc(productRef)
        .then(Response => {
            const data = Response.data()
            const productAdapted = { id: Response.id, ...data}

            setProducts(productAdapted)
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