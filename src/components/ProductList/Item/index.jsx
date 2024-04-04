import Image from "next/image";

export default function ProductItem({ item }) {
  return (
    <div className="w-full max-w-[280px] bg-white flex flex-col">
      <Image src={item.image} loading="lazy" alt="" width={280} height={280} />
      <h1>{item.name}</h1>
    </div>
  );
}
