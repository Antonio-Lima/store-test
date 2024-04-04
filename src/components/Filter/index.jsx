"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { MdOutlineSearch } from "react-icons/md";

import Input from "../Form/Input";
import RadioGroup from "../Form/RadioGroup";
import { colorOptions, sexOptions, sizeOptions } from "@/constants";
import ColorCheckbox from "../Form/ColorCheckbox";
import DefaultCheckbox from "../Form/DefaultCheckbox";

export default function Filter() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [sex, setSex] = useState("all");
  const [colors, setColors] = useState("");
  const [sizes, setSizes] = useState("");

  async function handleSearch() {
    const params = new URLSearchParams("");
    if (name) params.append("name", name.toLowerCase());
    if (sex && sex !== "all") params.append("sex", sex);
    if (colors) params.append("colors", colors);
    if (sizes) params.append("sizes", sizes);
    router.replace(`/products?${params.toString()}`);
  }

  return (
    <div className="w-full bg-gray-50 p-4 sm:p-8">
      <h1 className="font-mono font-bold text-gray-950 text-2xl">Filtro</h1>
      <div className="mt-4 flex flex-col items-start justify-between gap-2">
        <Input
          placeholder="Digite sua pesquisa..."
          value={name}
          setValue={({ target: { value } }) => setName(value)}
        />
        <div className="w-full flex flex-wrap md:flex-row items-start justify-between">
          <RadioGroup
            title="Sexo"
            options={sexOptions}
            onChange={setSex}
            value={sex}
          />
          <DefaultCheckbox
            title="Tamanhos"
            options={sizeOptions}
            onChange={setSizes}
          />
          <ColorCheckbox
            title="Cor"
            options={colorOptions}
            onChange={setColors}
          />
          <button
            onClick={() => handleSearch()}
            className="p-2 my-auto border-2 border-gray-950 bg-gray-950 text-white duration-300 ease-in-out hover:bg-gray-300 hover:text-gray-950"
          >
            <MdOutlineSearch size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
