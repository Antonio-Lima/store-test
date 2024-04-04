import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
    // className="bg-cover bg-no-repeat"
    // style={{ backgroundImage: "url(./images/banner.jpeg)" }}
    >
      <div className="max-w-5xl w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-evenly md:justify-between h-[calc(100vh-80px)]">
        <Image
          src="./images/basketball.svg"
          alt=""
          width={600}
          height={600}
          className="max-w-[70%] md:max-w-[50%] h-auto object-cover"
        />
        <div className="flex flex-col gap-10 items-center z-10">
          <h1 className="font-bold text-gray-900 text-2xl text-center">
            Encontre aqui a melhor roupa <br /> para seu treino!
          </h1>
          <Link
            href="/products"
            className="font-semibold text-gray-900 border-2 border-solid border-gray-950 max-w-60 py-2 w-full text-center hover:bg-gray-950 hover:text-gray-100 ease-in-out duration-300"
          >
            Clique aqui
          </Link>
        </div>
      </div>
    </main>
  );
}
