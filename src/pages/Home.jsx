import Header from '../components/Header';
import Card from '../components/Card';

import patternBackground from '../assets/pattern BG.jpg';
import bannerBackground from '../assets/BG-banner.jpg';

function Home() {
  return (
    <>
      <Header />
      <section className="w-[380px] mx-auto overflow-x-hidden">
        <div className="relative">
          <img
            className="w-full h-[200px]"
            src={patternBackground}
            alt="pattern background"
          />
          <Card />
        </div>
        <div>
          <img
            className="w-full"
            src={bannerBackground}
            alt="banner background"
          />
          <div className="p-2 bg-white flex justify-between items-center shadow-md">
            <div className="flex space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <div className="h-2 w-2 rounded-full bg-gray-500"></div>
              <div className="h-2 w-2 rounded-full bg-gray-500"></div>
              <div className="h-2 w-2 rounded-full bg-gray-500"></div>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-green-500 text-[14px]">View All</p>
              <div className="text-bold h-6">{'>'}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
