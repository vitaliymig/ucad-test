export default function Card({ product, slide, showcase }) {
  return (
    <div
      className={`card ${showcase ? "card__showcase" : ""} ${
        slide ? "card__slide" : ""
      }`}
    >
      <img
        className="card__product-img"
        width="1"
        hight="1"
        loading="lazy"
        decoding="async"
        src={product.image?.url}
        alt={product.name}
      />
      <h2 className="card__product-type">{product.name}</h2>
      <h3 className="card__product-title">{product.temperament}</h3>
    </div>
  );
}
