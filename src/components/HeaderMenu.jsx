import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function HeaderMenu({ categories, handleCategory }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  useEffect(() => {
    handleCategory(activeCategory);
  }, [activeCategory, handleCategory]);

  const handleClick = (category) => {
    setActiveCategory(category);
    handleCategory?.(category);
  };

  return (
    <div className="w-[380px] mx-auto p-4 sticky top-0 bg-white z-50">
      <h1 className="w-full text-xl font-bold mb-4 text-center">MENU</h1>

      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {categories.map((category, i) => (
          <button
            key={i}
            onClick={() => handleClick(category)}
            className={`flex-shrink-0 px-2 pb-1 border-b-2 text-sm whitespace-nowrap transition duration-200
              ${
                activeCategory === category
                  ? 'border-b-gray-500 text-gray-800 font-medium'
                  : 'border-b-transparent text-gray-500'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

HeaderMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCategory: PropTypes.func,
};
