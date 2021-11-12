import React, { useState } from "react";
import { useAppDispatch } from "../store.hooks";
import { addProduct, Product } from "./products.slice";

const ProductForm: React.FC = () => {
  const dispatch = useAppDispatch();
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
    dispatch(addProduct(product));
  };

  return (
    <>
      <h2>Add game To The Store</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Game title"
          name="title"
          value={product.title}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Id"
          name="id"
          value={product.id}
          onChange={handleChange}
        />
        <button type="submit">Add product</button>
      </form>
    </>
  );
};

export default ProductForm;
