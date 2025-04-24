import PropTypes from 'prop-types';
import { useState } from 'react';

function Slider({ banner = [] }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banner.length);
  };

  if (banner.length === 0) {
    return <p className="text-center text-gray-500">Tidak ada gambar.</p>;
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {banner.map((img, i) => (
            <img
              key={i}
              className="w-full flex-shrink-0"
              src={img}
              alt={`slide image-${i}`}
            />
          ))}
        </div>
      </div>

      <div className="bg-white flex justify-between items-center shadow-md p-2">
        <div className="flex space-x-2">
          {banner.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === current ? 'bg-green-500' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
        <div className="flex items-center space-x-3">
          <button onClick={nextSlide} className="text-green-500 text-[14px]">
            View All{' '}
            <span className=" text-[16px] text-gray-950">{'>'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Slider.propTypes = {
  banner: PropTypes.array,
};

export default Slider;
