import { useState } from 'react';
import recipes from './data';
import Recipes from './Recipes';
import Categories from './Categories';

const App = () => {
  const uniqueCategories = ['All', ...new Set(recipes.map(recipe => recipe.category))];
  const [categories] = useState(uniqueCategories);
  const [items, setItems] = useState(recipes);

  const filterCategory = category => {
    if (category === 'All') {
      return setItems(recipes);
    }
    const categoryFiltered = recipes.filter(item => item.category === category);
    setItems(categoryFiltered);
  };

  return (
    <main>
      <header>
        <h1>Menu</h1>
        <div className="underline"></div>
        <Categories categories={categories} filterCategory={filterCategory} />
      </header>
      <div className="content">
        <Recipes items={items} />
      </div>
    </main>
  );
};

export default App;
