import { useState } from 'react';
import HeaderMenu from '../components/HeaderMenu';
import Section from '../components/Section';
import { data, categories } from '../constant/data';

function Menu() {
  const [currentCategory, setCurrentCategory] = useState(data[0].category_name);

  const handleCategory = (selected) => {
    setCurrentCategory(selected);
  };

  const multiCategoryMap = {
    'Seasonal Product': ['Seasonal Product', 'Best Seller'],
    'Best Seller': ['Best Seller', 'Coffe'],
    'Coffe': ['Coffe'],
    'Chocolate': ['Chocolate'],
  };

  const selectedMenus = data.filter((cat) =>
    (multiCategoryMap[currentCategory] || [currentCategory]).includes(cat.category_name)
  );

  return (
    <>
      <HeaderMenu categories={categories} handleCategory={handleCategory} />
      <Section>
        {selectedMenus.length === 0 ? (
          <p className="text-center text-gray-500">No menu available for this category.</p>
        ) : (
          selectedMenus.map((cat) => (
            <div key={cat.category_name}>
              <p className="p-2 bg-gray-300 font-semibold">{cat.category_name}</p>
              {cat.menu.map((p) => (
                <div
                  key={p.name}
                  className="flex justify-between items-start space-x-4 p-2"
                >
                  <img
                    src={p.photo}
                    alt="menu photo"
                    className="h-[70px] w-[70px] bg-gray-100"
                  />
                  <div className="flex-1 space-y-2">
                    <p className="text-xs font-semibold">{p.name}</p>
                    <p className="text-[10px] text-gray-500">{p.description}</p>
                  </div>
                  <p className="text-xs font-semibold">{p.price}</p>
                </div>
              ))}
            </div>
          ))
        )}
      </Section>
    </>
  );
}

export default Menu;
