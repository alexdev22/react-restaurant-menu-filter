const Categories = ({ categories, filterCategory }) => {
  return (
    <div className="container-category">
      {categories.map((category, index) => (
        <button key={index} onClick={() => filterCategory(category)} className="category">
          {category}
        </button>
      ))}
    </div>
  );
};
export default Categories;
