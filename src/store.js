// import reducer from './reducer/index';
import ProductsReducer from './reducer/ProductsReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(ProductsReducer , applyMiddleware(thunk));
export default store;