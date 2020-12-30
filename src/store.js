// import reducer from './reducer/reducer';
import {ProductsDetailsReducer} from './reducer/ProductDetailsReducer';
import {ProductsReducer} from './reducer/ProductsReducer';
import { createStore, applyMiddleware , combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    ProductsReducer : ProductsReducer,
    ProductsDetailsReducer : ProductsDetailsReducer
})
const composeEnhncer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer , composeEnhncer(applyMiddleware(thunk)));
export default store;