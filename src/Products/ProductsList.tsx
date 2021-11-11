import React, { useState } from "react";

interface ProductsListProps {}

const initialProducts = [
  { title: "Escape From Tarkov", price: 60, id: "eft" },
  { title: "Hunt: Showdown", price: 70, id: "hunt" },
  { title: "Hell Let Loose", price: 55, id: "hll" },
];

interface Product {
  title: string;
  price: number;
  id: string;
}
const ProductsList: React.FC<ProductsListProps> = ({}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  return (
    <div>
      <h2>Games list</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} : ${product.price}`}</span>
        </div>
      ))}
      <button
        onClick={() =>
          setProducts((prevProducts) => [
            {
              title: "Half Life",
              price: 100,
              id: "h1",
            },
            ...prevProducts,
          ])
        }
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductsList;
