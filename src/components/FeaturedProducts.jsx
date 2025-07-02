import "../styles/FeaturedProducts.css";

const products = [
  {
    id: 1,
    name: "Wilson Pro Staff",
    price: "19,999 RSD",
    image: "https://www.toptenis.rs/image/cache/catalog/yonex/PERCEPT%20100%20-%20Olive%20Green%20-%201a-510x600.png",
  },
  {
    id: 2,
    name: "Babolat Pure Drive",
    price: "17,499 RSD",
    image: "https://www.toptenis.rs/image/cache/catalog/yonex/PERCEPT%20100%20-%20Olive%20Green%20-%201a-510x600.png",
  },
  {
    id: 3,
    name: "Head Radical MP",
    price: "18,299 RSD",
    image: "https://www.toptenis.rs/image/cache/catalog/yonex/PERCEPT%20100%20-%20Olive%20Green%20-%201a-510x600.png",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map(({ id, name, price, image }) => (
          <article key={id} className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h3 className="product-name">{name}</h3>
            <p className="product-price">{price}</p>
            <button className="product-details-btn">Details</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;