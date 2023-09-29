import React, { useEffect, useState } from 'react';
import './Shop.scss';
import JsonData from '../Data/data.json';
import Product from '../Product/Product';
import Card from '../Card/Card';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(JsonData);
  }, []);

  const addProductToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    alert("Added")
  };
  //console.log('typeof addProductToCart:', typeof addProductToCart);
  return (
    <div className="">
      <div className="product-area border-right">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            addProductToCart={addProductToCart}
          />
        ))}
      </div>
      <div >
        <Card cart ={cart}/>
      </div>
    </div>
  );
};

export default Shop;
