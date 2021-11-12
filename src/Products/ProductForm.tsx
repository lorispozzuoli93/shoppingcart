import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store.hooks";
import { addProductAsync, getErrorMessage, Product } from "./products.slice";

const ProductForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useSelector(getErrorMessage);
  const [product, setProduct] = useState<Product>({
    id: "",
    title: "",
    price: 0,
  });
  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setProduct((prev) => {
      (prev as any)[name] = value;
      const newValue = { ...prev };
      return newValue;
    });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addProductAsync(product));
  };

  return (
    <>
      <h2>Add game To The Store</h2>
      {errorMessage && <span>error: {errorMessage}</span>}
      <form onSubmit={handleSubmit}>
        <input
          style={{ border: errorMessage ? "1px solid red" : "1px solid black" }}
          type="text"
          placeholder="Game title"
          name="title"
          value={product.title}
          onChange={handleChange}
        />
        <input
          style={{ border: errorMessage ? "1px solid red" : "1px solid black" }}
          type="number"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <input
          style={{ border: errorMessage ? "1px solid red" : "1px solid black" }}
          type="text"
          placeholder="Id"
          name="id"
          value={product.id}
          onChange={handleChange}
        />
        <button
          style={{ backgroundColor: errorMessage ? "red" : "#f2f5f9" }}
          type="submit"
        >
          Add product
        </button>
      </form>
    </>
  );
};

export default ProductForm;
