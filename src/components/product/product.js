import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({elem}) =>{
    return(
        <div>
        <Link to={"/products/" + elem._id} ><img className="img_product" src={elem.image} /></Link>
        <span>{elem.title}</span>
        <div className = "price_product">{elem.price}$</div>
        <a href="#">добавить в корзину</a>
        </div>
    )
}

export default Product;