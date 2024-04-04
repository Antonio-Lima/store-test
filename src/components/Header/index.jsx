import Link from "next/link";

import { MdOutlineStore } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-default bg-opacity-80 py-4 flex justify-center">
      <nav className="max-w-5xl w-full px-5 flex gap-6 items-center">
        <Link
          href="/"
          className="text-gray-800 ease-in-out duration-300 hover:text-gray-400 text-2xl font-bold flex items-center gap-1"
        >
          <MdOutlineStore size={48} />
          Store
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            className="text-gray-500 ease-in-out duration-300 hover:brightness-50 hover:text-lg"
            href="/products"
          >
            Produtos
          </Link>
          {["Contato", "Sobre", "Dúvidas"].map((item, index) => (
            <h2
              key={index}
              className="text-gray-500 ease-in-out duration-300 hover:brightness-50 hover:text-lg"
            >
              {item}
            </h2>
          ))}
        </div>
      </nav>
    </header>
  );
}
