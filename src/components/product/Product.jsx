import React from 'react'
import data from '../../data/data';

const Product = () => {
    console.log(data);
  return (
    <div className='itemList'>
        {
            data.map((product, index)=> (
                <div className='item' key={index}>
                    <img src={product.imageUrl} alt="" />
                    <p>Product: {product.name}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price} $</p>
                    <button>Buy</button>
                </div>
            ))
        }
    </div>
  )
}
    
export default Product