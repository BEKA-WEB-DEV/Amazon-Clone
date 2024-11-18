import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'

function Product() {
    const [product, setProduct]=useState([]); // Initialize as an empty array
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProduct(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <section className={classes.products_container}>
        {
            product.map((singleProduct)=>{
                return <ProductCard product={singleProduct} key={singleProduct.id} />
                
            })
        }

    </section>
  )
}

export default Product