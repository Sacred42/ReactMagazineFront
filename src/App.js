import React from 'react';
import {products} from './data';
import Header from './components/header/header';
import DropMenu from './components/drop-down-menu/drop-down-menu';
import Slider from './components/slider/slider';
import Advertising from './components/advertising/advertising';
import ProductList from './components/products-list/products-list';
import ProductDetail from './components/product-details/product-details';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div >
      <Header/>
      <div className="container">
        <DropMenu/>
        <Advertising/>
        <Slider/>
        <Route exact path= "/" component={ProductList}/>
        <Route path="/products/:id" component={ProductDetail}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
