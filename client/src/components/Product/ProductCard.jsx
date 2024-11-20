import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css'
import { Link } from 'react-router-dom';


function ProductCard({product, flex, renderDesc, renderAdd}) {
    const {image, title, id, price, rating, description} = product;

  return (
    <div className={`${classes.card__container} ${flex?classes.product__flexed : ''}`} >
        <Link to={`/product/${id}`}>
            <img src={image} className={classes.img_container} alt="" />
        </Link>
        <div>
            <h3>{title}</h3>
            {renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}
            <div className={classes.rating}>
                {/* rating */}
                <Rating value={rating?.rate} precision={0.1} />
                {/* count */}
                <small>{rating?.count}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={price} />
            </div>
            {
                renderAdd && <button className={classes.button}>add to cart</button>
                }
        </div>
    
    </div>
  )
}

export default ProductCard