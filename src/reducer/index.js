import ProductsDetailsReducer from './ProductsDetailsReducer';
import ProductsReducer from './ProductsReducer';

const reducer = (state, action) =>{
    return{
        // ProductsDetailsReducer :ProductsDetailsReducer(state, action),
        ProductsReducer :ProductsReducer(state, action)
    }
}

export default reducer;