const products = [
    // {
    //     id: 1,
    //     name: "Sketch",
    //     price: 1000,
    //     category: "DDigital",
    //     img: "https://pbs.twimg.com/media/FozxLJiacAcJvxk.jpg",
    //     stock: 25,
    //     description:"Descripcion del acambiar",
    // },
//     { id: 2,
//        name: "Pinturas",
//        price: 800,
//        category: "Pinturas",
//        img:"https://media.admagazine.com/photos/618a6aca69ed46faf86e3451/master/w_1600,c_limit/68698.jpg",
//        stock: 30,
//        description:"Descripcion de acambiar"},
//     { id: 3,
//      name: "Arte Digital",
//      price: 1800,
//      category: "Colorful",
//      img:"https://i.pinimg.com/236x/e6/30/76/e630761ed19eb85ff4bb13c89243a789.jpg",
//      stock: 20,
//      description:"Descripcion de acambiar"},
 ]

export const getProducts =() => {
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === Number(productId)))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

//ctrl click