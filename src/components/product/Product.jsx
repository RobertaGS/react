import React from 'react'
import data from '../../data/data';
import './Product.css';

const Product = ({addToCart}) => {  //siunciu per props ivyki
    console.log(data);
    //1-tikrinu ar tokia preke yra krepselyje
    //2-jei nera, prideti savybe kiekis ir reiksme 1
    //3-jeigu preke yra surasti savybe kiekis ir ja padidinti ++
    
  return (
    <div className='itemList'>
        {
            data.map((product, index)=> (
                <div className='item' key={index}>
                    <img src={product.imageUrl} alt="" />
                    <p>Product: {product.name}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price} $</p>
                    <button onClick={()=>addToCart(product)}>Buy</button>
                </div>
            ))
        }
    </div>
  )
}
    
export default Product