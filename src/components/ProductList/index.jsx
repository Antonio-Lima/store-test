"use client";

import { useEffect, useState } from "react";

import { productsList } from "@/constants";
import ProductItem from "./Item";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsList);
  }, []);

  return (
    <div className="w-full">
      {products.length > 0 ? (
        <ul className="flex flex-wrap justify-evenly gap-2">
          {products.map((item) => (
            <li key={item.id}>
              <ProductItem item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <h1>Infelizmente não temos produtos no momento!</h1>
      )}
    </div>
  );
}
