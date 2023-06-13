import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {

            const asyncFunc = typeof categoryId =="undefined" ?  getProducts : getProductsByCategory 
    
            asyncFunc(categoryId)
                .then(response => {
                    setProducts(response);
                })
                .catch(error => {
                    console.error(error);
                });
        
    }, );

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer