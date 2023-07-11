import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom"
import {getDocs, collection, query, where } from "firebase/firestore"
import {db} from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()



    useEffect(() => {

        const collectionRef = !categoryId 
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', categoryId))
        
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                
                setProducts(productsAdapted)
            })
    }, );

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer