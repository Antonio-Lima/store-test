import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Wrapper from "@/components/Wrapper";

export default function Products() {
  return (
    <Wrapper>
      <Filter />
      <ProductList />
    </Wrapper>
  );
}
