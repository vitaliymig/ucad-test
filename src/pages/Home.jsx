import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?limit=8&page=0")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1 className="home__title">Home page</h1>
      <Swiper spaceBetween={50} slidesPerView={3} navigation>
        {products.map((product) => (
          <SwiperSlide>
            <Card product={product} key={product.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
