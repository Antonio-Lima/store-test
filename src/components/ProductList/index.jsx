/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";

import { productsList } from "@/constants";
import ProductItem from "./Item";
import { useSearchParams } from "next/navigation";

export default function ProductList() {
  const [products, setProducts] = useState(productsList);
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const sex = searchParams.get("sex");
  const colors = searchParams.get("colors");
  const sizes = searchParams.get("sizes");

  useEffect(() => {
    handleFilterList();
  }, [searchParams]);

  function handleFilterList() {
    let filteredList = productsList;
    if (name)
      filteredList = filteredList.filter((item) =>
        item.name.toLowerCase().includes(name)
      );
    if (sex) filteredList = filteredList.filter((item) => item.sex === sex);
    if (colors)
      filteredList = filteredList.filter((item) => colors.includes(item.color));
    if (sizes) {
      const selected = sizes.split(",");
      filteredList = filteredList.filter((item) =>
        item.sizes.some((size) => selected.includes(size.toLowerCase()))
      );
    }
    setProducts(filteredList);
  }

  return (
    <div className="w-full mt-8">
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
