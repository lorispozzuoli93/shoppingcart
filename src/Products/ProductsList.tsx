import React from "react";
import { useSelector } from "react-redux";
import { addToCart } from "../Cart/cart.slice";
import { useAppDispatch } from "../store.hooks";
import { Product, removeProduct, selectAllProducts } from "./products.slice";

const ProductsList: React.FC = () => {
  const products = useSelector(selectAllProducts);
  const dispatch = useAppDispatch();

  const removeFromStore = (id: string) => {
    dispatch(removeProduct(id));
  };

  const addToCartHandler = (product: Product) => dispatch(addToCart(product));
  return (
    <div>
      <h2>Games list</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} : ${product.price}`}</span>
          <button onClick={() => addToCartHandler(product)}>Add To Cart</button>
          <button onClick={() => removeFromStore(product.id)}>
            Remove from the store
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
