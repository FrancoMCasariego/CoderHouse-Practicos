import { useState, useEffect } from "react"
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom"
import {getDocs, collection, query, where } from "firebase/firestore"
import {db} from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")

        getDocs(collectionRef)
            .then(Response=> {
                const productsAdapted = Response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error=> {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

        return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )}
)}

export default ItemListContainer