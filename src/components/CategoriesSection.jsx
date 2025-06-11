import "../styles/CategoriesSection.css";

const categories = [
  {
    id: 1,
    name: "Reketi",
    image: "https://www.toptenis.rs/image/cache/catalog/yonex/PERCEPT%20100%20-%20Olive%20Green%20-%201a-510x600.png",
  },
  {
    id: 2,
    name: "Loptice",
    image: "https://dingdongshop.rs/wp-content/uploads/2021/08/33-1-600x600.jpg",
  },
  {
    id: 3,
    name: "Torbe",
    image: "https://www.tenisreketi.com/fajlovi/product/big/Head%20Djokovic%2012R%20Monstercombi%20Racket%20Bag%20-%20Black,%20White.jpg",
  },
   {
    id: 4,
    name: "Patike",
    image: "https://www.n-sport.net/UserFiles/products/big/09/12/muske-patike-za-tenis-asics-court-ff-novak-clay-1041A090-400-1.jpg",
  }
];

const CategoriesSection = () => {
  return (
    <section className="categories">
      <h2>Pregledaj kategorije</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} />
            <div className="overlay">
              <h3>{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;