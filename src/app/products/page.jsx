import ProductList from "@/components/ProductList";
import Wrapper from "@/components/Wrapper";

export default function Products() {
  return (
    <Wrapper>
      <h1 className="text-5xl w-full mb-6">Produtos</h1>
      <ProductList />
    </Wrapper>
  );
}
