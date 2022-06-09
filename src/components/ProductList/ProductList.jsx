import React, {useState} from 'react'
import Product from '../product/Product'



const ProductList = () => {
    //state naudosiu prekiu krepseli
    cons [items, setItems] = useState([]);
    //pridejimo i krepseli funkcija
    const addToCart = (product) {
        console.log(item);
    }
  return (
    <div>ProductList
        <Product addToCart={addToCart}/>
    </div>
  )
}

export default ProductList