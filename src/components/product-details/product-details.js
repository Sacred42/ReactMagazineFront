import React from 'react';
import {useEffect , useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ProductDetails} from '../../actions/actions';



const ProductDetail = ({match}) =>{
     console.log(match.params.id)
     

    return(
        <div> id = {match.params.id} </div>
    )
}

export default ProductDetail;