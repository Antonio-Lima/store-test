"use client";

import Wrapper from "@/components/Wrapper";
import { productsList } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Details({ params }) {
  const { slug } = params;
  const [product, setProduct] = useState(null);
  const [quota, setQuota] = useState(0);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const selected = productsList.find((item) => item.id == slug);
    console.log(selected);
    setQuota(selected.price / 10);
    setContent(selected.details.content.split("\n\n"));
    setProduct(selected);
  }, [slug]);

  return (
    <Wrapper>
      {product && (
        <div className="w-full bg-gray-50">
          <div className="w-full flex flex-col md:flex-row">
            <Image
              className="w-full h-auto"
              src={product.image}
              alt=""
              priority
              width={500}
              height={500}
            />
            <div className="flex flex-col w-full p-4 items-start md:items-end my-auto">
              <h1 className="uppercase font-bold text-start md:text-end text-xl sm:text-4xl">
                {product.name}
              </h1>
              <h2 className="mt-5 font-mono font-semibold text-md sm:text-xl">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h2>
              <h3 className="mt-2 text-sm sm:text-md">
                Até 10x de{" "}
                <span className="font-semibold">
                  {quota.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>{" "}
                sem juros.
              </h3>
              <div className="mt-5">
                <h2 className="font-semibold text-md sm:text-xl">
                  Tamanhos disponíveis
                </h2>
                <ul className="flex flex-wrap gap-3 mt-3">
                  {product.sizes.map((size, index) => (
                    <li
                      key={index}
                      className="border-2 border-gray-950 w-[38px] h-[38px] flex items-center justify-center"
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full mt-5 uppercase py-2 border-2 border-gray-950 font-bold ease-in-out duration-300 hover:bg-gray-950 hover:text-white">
                Adicionar ao carrinho
              </button>
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-bold text-lg sm:text-4xl text-center mt-4 mb-8">
              {product.details.title}
            </h2>
            {content.map((item, index) => (
              <p key={index} className="mt-2 text-sm sm:text-md">
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </Wrapper>
  );
}
