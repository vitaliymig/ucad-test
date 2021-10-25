export default function Card({ product }) {
  console.log(product);
  return (
    <div className="card">
      <img
        className="card__product-img"
        width="300"
        hight="300"
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

// bred_for: "Hunting bears"
// breed_group: "Working"
// height: {imperial: '24 - 28', metric: '61 - 71'}
// id: 6
// image: {id: 'BFRYBufpm', width: 1280, height: 853, url: 'https://cdn2.thedogapi.com/images/BFRYBufpm.jpg'}
// life_span: "10 - 14 years"
// name: "Akita"
// reference_image_id: "BFRYBufpm"
// temperament: "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous"
// weight: {imperial: '65 - 115', metric: '29 - 52'}
