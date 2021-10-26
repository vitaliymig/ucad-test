import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="container-product">
        <h1 className="title">Product page</h1>
        <div className="products">
          {products.map((product) => (
            <Card product={product} key={product.id} showcase />
          ))}
        </div>
      </div>
    </>
  );
}
