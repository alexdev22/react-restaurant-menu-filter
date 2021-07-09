const Recipes = ({ items }) => {
  return (
    <div className="container-recipes">
      {items.map(item => {
        return (
          <article key={item.id}>
            <div className="individual-recipe">
              <img alt={item.name} src={item.image}></img>
              <div className="title">
                <div>{item.name}</div>
                <div>{item.price} $</div>
              </div>
              <div className="description">{item.description}</div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Recipes;
