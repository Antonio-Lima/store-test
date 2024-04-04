import Image from "next/image";
import Link from "next/link";

export default function ProductItem({ item }) {
  return (
    <div className="w-full h-auto max-w-[300px] bg-white flex flex-col ease duration-100 hover:border-2 border-gray-950">
      <Image src={item.image} loading="lazy" alt="" width={300} height={300} />
      <div className="p-4 flex flex-col gap-3 relative">
        <span className="absolute top-[-40px] left-0 text-white bg-gray-950 font-mono font-bold p-2">
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <h1 className="uppercase font-bold md:text-xl min-h-[56px]">
          {item.name}
        </h1>
        <button className="uppercase py-2 border-2 border-gray-950 font-bold ease-in-out duration-300 hover:bg-gray-950 hover:text-white">
          Adicionar ao carrinho
        </button>
        <Link
          href="/"
          className="text-center max-w-fit mx-auto px-3 border-b-2 border-white ease-in-out duration-300 hover:border-gray-950"
        >
          + Detalhes
        </Link>
      </div>
    </div>
  );
}
