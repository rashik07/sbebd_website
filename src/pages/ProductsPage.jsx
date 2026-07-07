import Products from '../components/sections/Products';

const ProductsPage = () => {
  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-primary from-10% to-white to-60%">
      <Products bgClass="bg-transparent" isDarkBg={true} />
    </main>
  );
};

export default ProductsPage;
