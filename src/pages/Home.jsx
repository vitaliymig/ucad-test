import { useEffect, useState } from "react";
import Card from "../components/Card";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?limit=8&page=0")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="container-short">
        <h1 className="title">Home page</h1>
        <Slider slidesToShow={3}>
          {products.map((product) => (
            <Card product={product} key={product.id} slide />
          ))}
        </Slider>
      </div>
    </>
  );
}
